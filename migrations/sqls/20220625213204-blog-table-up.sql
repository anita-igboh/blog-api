/* Replace with your SQL commands */
CREATE TABLE IF NOT EXISTS blogs (
id serial unique,
user_id INTEGER references users(id),
title VARCHAR,
description VARCHAR,
image_url VARCHAR,
content VARCHAR,
created_at TIMESTAMPTZ DEFAULT NOW(),
updated_at TIMESTAMPTZ DEFAULT NOW() 
);