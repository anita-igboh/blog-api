import 'dotenv/config';

export default {
  DATABASE_URL: process.env.DATABASE_TEST_URL,
  HOST: process.env.APP_HOST,
  API_VERSION: process.env.API_VERSION,
  JWT_EXPIRY: process.env.JWT_EXPIRY,
  JWT_SECRET: process.env.JWT_SECRET,
};
