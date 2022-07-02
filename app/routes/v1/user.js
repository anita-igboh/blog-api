/* eslint-disable import/no-cycle */
import { Router } from 'express';
import * as controller from '../../controllers/index';
import * as validator from '../../validations/user.validator';
import { validateUser, validatePassword } from '../../middlewares/index';

const router = Router();

router.post('/', validator.createUser, controller.createUser);

router.post(
  '/login',
  validator.validateLogin,
  validateUser,
  validatePassword,
  controller.login,
);

export default router;
