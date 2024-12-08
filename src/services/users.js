import { User } from "../db/models/User.js";
import bcrypt from 'bcrypt';

export const findUserByEmail = (email) => User.findOne({ email });

export const createUser = async (userData) => {
    const encryptedPassword = await bcrypt.hash(userData.password, 10);
    return User.create({
        ...userData, password: encryptedPassword,
    });
};
