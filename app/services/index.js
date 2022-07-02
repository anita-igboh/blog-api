/* eslint-disable import/no-cycle */
import DB from '../db/index';
import query from '../query';
import * as helper from '../utils/helpers/index';

// create blog
export const createBlog = async (title, content, description, imageUrl, decoded) => {
  const [blog] = await DB.any(query.createblog,
    [title, content, description, imageUrl, decoded.id]);
  return blog;
};

// get all
export const getAllBlogs = async () => {
  const blogs = await DB.any(query.getAllBlogs,
    []);
  return blogs;
};

// getSingleBlog
export const getSingleBlog = async (id) => {
  const [blog] = await DB.any(query.getSingleBlog,
    [id]);
  return blog;
};

// create user/sign up
export const createUser = async (data) => {
  const { salt, hashed } = await helper.hashPassword(data.password);

  const payload = [
    data.first_name,
    data.last_name,
    data.email,
    hashed,
    salt,
  ];
  return DB.any(query.createUser, payload);
};

// login user
export const login = async (user) => {
  const { id, email } = user;
  const token = await helper.generateToken({
    id,
    email,
  });
  return {
    ...user,
    token,
  };
};

// forgot password

// reset password
// social media sign in
// blacklist token
// slug
// categories
// admin
// show users related blogs, recommended, most popular
// pay to view some blogs
// upload image, author name
// welcome mail
// paystack payment
// chat btwn users
// redis for caching/queing
// optimizable search using keywords
