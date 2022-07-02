/* eslint-disable import/no-cycle */
import query from '../query';
import DB from '../db/index';
import { Error } from '../utils/helpers/response.helpers';
import * as helper from '../utils/helpers/index';

export const validateUser = async (req, res, next) => {
  try {
    const { email } = req.body;
    const [user] = await DB.any(query.getUserByEmail, [email]);
    if (user) {
      req.decoded = user;
      return next();
    }
    throw Error('Invalid credentials', 400);
  } catch (err) {
    console.log(err, 'Middleware::validateUser');
    return next(err);
  }
};

export const validatePassword = async (req, res, next) => {
  try {
    const { decoded } = req;
    const { password } = req.body;
    if (helper.comparePassword(password, decoded.password)) {
      delete decoded.password;
      delete decoded.salt;
      return next();
    }
    throw Error('Invalid password', 400);
  } catch (err) {
    console.log(err, 'Middleware::validatePassword');
    return next(err);
  }
};

export const checkIfBlogExists = async (req, res, next) => {
  try {
    const { id } = req.params;
    const [blog] = await DB.any(query.getSingleBlog, [id]);

    if (blog) {
      req.blog = blog;
      return next();
    }
    throw Error('Blog does not exist', 400);
  } catch (err) {
    console.log(err, 'checkIfBlogExists');
    return next(err);
  }
};

export const verifyToken = async (req, res, next) => {
  try {
    const bearerToken = req.header('Authorization');
    if (!bearerToken) {
      throw Error(
        'Token is required',
        401,
      );
    }
    const decoded = helper.verifyAuthToken(bearerToken);
    if (decoded.message) {
      throw Error(decoded.message, 401);
    }
    req.decoded = decoded;
    req.decoded.token = bearerToken;
    const [user] = await DB.any(query.getUserByEmail, [decoded.email]);

    if (!user) {
      throw Error('Invalid token', 401);
    }
    req.decoded = user;
    return next();
  } catch (err) {
    console.log(err, 'Middleware::verifyToken');
    return next(err);
  }
};
