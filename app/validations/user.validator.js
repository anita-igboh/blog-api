import Joi from '@hapi/joi';
import baseValidator from '.';

export const createUser = (req, res, next) => {
  const schema = Joi.object({
    first_name: Joi.string().required(),
    last_name: Joi.string().required(),
    email: Joi.string().required(),
    password: Joi.string().required(),
  });
  baseValidator(schema, req, res, next, 'body');
};

export const validateLogin = (req, res, next) => {
  const schema = Joi.object({
    email: Joi.string().required(),
    password: Joi.string().required(),
  });
  baseValidator(schema, req, res, next, 'body');
};

export const validateForgotPassword = (req, res, next) => {
  const schema = Joi.object({
    email: Joi.string().required(),
  });
  baseValidator(schema, req, res, next, 'body');
};
