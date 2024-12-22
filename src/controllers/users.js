import createHttpError from 'http-errors';
import {
  findUserByEmail,
  createUser,
  updateUserWithToken,
} from '../services/users.js';
import bcrypt from 'bcrypt';

export const registerUserController = async (req, res) => {
  const user = await findUserByEmail(req.body.email);
  if (user) {
    throw createHttpError(409, 'Email in use');
  }
  const newUser = await createUser(req.body);

  res.status(201).json({
    user: {
      name: newUser.name,
      email: newUser.email,
    },
    token: newUser.token,
  });
};

export const loginUserController = async (req, res) => {
  const user = await findUserByEmail(req.body.email);
  if (!user) {
    throw createHttpError(401, 'Email or password is wrong');
  }
  const isEqual = await bcrypt.compare(req.body.password, user.password);

  if (!isEqual) {
    throw createHttpError(401, 'Email or password is wrong');
  }

  const updateUser = await updateUserWithToken(user._id);

  res.status(201).json({
    user: {
      name: updateUser.name,
      email: updateUser.email,
    },
    token: updateUser.token,
  });
};
