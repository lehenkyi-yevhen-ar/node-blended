import createHttpError from 'http-errors';
import { User } from '../db/models/User.js';
// import { Session } from '../db/models/Session.js';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import { env } from '../utils/env.js';
// import { createSession } from '../utils/createSession.js';

export const findUserByEmail = (email) => User.findOne({ email });

export const updateUserWithToken = (userId) => {
  const token = jwt.sign(
    {
      userId,
    },
    env('JWT_SECRET'),
  );

  return User.findByIdAndUpdate(
    userId,
    {
      token,
    },
    { new: true },
  );
};

export const createUser = async (userData) => {
  const encryptedPassword = await bcrypt.hash(userData.password, 10);
  const newUser = await User.create({
    ...userData,
    password: encryptedPassword,
  });
  return updateUserWithToken(newUser._id);
};

// export const createActiveSession = async (userId) => {
//   await Session.deleteOne({ userId });
//   return Session.create({ userId, ...createSession() });
// };
