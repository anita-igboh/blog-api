export default {
  createblog: `
INSERT INTO blogs(
  title,
  content,
  description,
  image_url,
  user_id
)VALUES($1, $2, $3, $4, $5)
RETURNING *
`,

  createUser: `
INSERT INTO users(
    first_name,
    last_name,
    email,
    password,
    salt
  )VALUES($1, $2, $3, $4, $5) RETURNING *
`,

  getUserByEmail: `
SELECT * FROM users
WHERE email = $1
`,

  getSingleBlog: `
  SELECT * FROM blogs
  WHERE id = $1
`,

  getAllBlogs: `
SELECT * FROM blogs
`,

};
