/* eslint-disable import/no-cycle */
import { successResponse } from '../utils/helpers/response.helpers';
import * as service from '../services/index';

export const createBlog = async (req, res, next) => {
  try {
    const {
      title, content, description, image_url: imageUrl,
    } = req.body;
    const { decoded } = req;
    const data = await service.createBlog(title, content, description, imageUrl, decoded);
    return successResponse(res, 'Blog created successfully', 201, data);
  } catch (error) {
    console.log(error, 'Controller::createBlog');
    return next(error);
  }
};

export const getSingleBlog = async (req, res, next) => {
  try {
    const { blog } = req;
    return successResponse(res, 'Single Blog retrieved successfully', 200, blog);
  } catch (error) {
    console.log(error, 'Controller::getSingleBlog');
    return next(error);
  }
};

export const getAllBlogs = async (req, res, next) => {
  try {
    const blogs = await service.getAllBlogs();
    return successResponse(res, 'Blogs retrieved successfully', 200, blogs);
  } catch (error) {
    console.log(error, 'Controller::getAllBlog');
    return next(error);
  }
};

export const createUser = async (req, res, next) => {
  try {
    const {
      body,
    } = req;

    const data = await service.createUser(body);
    return successResponse(res, 'User created successfully', 201, data);
  } catch (error) {
    console.log(error, 'Controller::createUser');
    return next(error);
  }
};

export const login = async (req, res, next) => {
  try {
    const data = await service.login(req.decoded);
    return successResponse(res, 'User logged in successfully', 200, data);
  } catch (error) {
    console.log(error, 'Controller::login');
    return next(error);
  }
};
