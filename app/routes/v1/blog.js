/* eslint-disable import/no-cycle */
import { Router } from 'express';
import * as controller from '../../controllers/index';
import * as middleware from '../../middlewares';
import createBlog from '../../validations/blog.validator';

const router = Router();

router.post('/', middleware.verifyToken, createBlog, controller.createBlog);

router.get('/:id', middleware.verifyToken,
  middleware.checkIfBlogExists, controller.getSingleBlog);

router.get('/', middleware.verifyToken,
  controller.getAllBlogs);

export default router;
