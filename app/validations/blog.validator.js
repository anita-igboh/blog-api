import Joi from '@hapi/joi';
import baseValidator from '.';

const createBlog = (req, res, next) => {
  const schema = Joi.object({
    title: Joi.string().required(),
    content: Joi.string().required(),
    description: Joi.string().required(),
    image_url: Joi.string().required(),
  });
  baseValidator(schema, req, res, next, 'body');
};

export default createBlog;
