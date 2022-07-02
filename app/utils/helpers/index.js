/* eslint-disable import/no-cycle */
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import config from '../../config';

export const hashPassword = (password) => {
  const salt = bcrypt.genSaltSync(10);
  const hashed = bcrypt.hashSync(password, salt);
  return { salt, hashed };
};

export const comparePassword = (password, hashed) => bcrypt.compareSync(password, hashed);

// eslint-disable-next-line max-len
export const generateToken = (payload, expiresIn = config.JWT_EXPIRY) => jwt.sign(payload, config.JWT_SECRET, { expiresIn });

export const verifyAuthToken = (token) => {
  try {
    return jwt.verify(token, config.JWT_SECRET);
  } catch (error) {
    return error;
  }
};
