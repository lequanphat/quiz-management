import * as dotenv from 'dotenv';
dotenv.config();
export const DB_CONFIG = {
  HOST: process.env.DB_HOST,
  PORT: process.env.DB_PORT,
  USERNAME: process.env.DB_USERNAME,
  PASSWORD: process.env.DB_PASSWORD,
  NAME: process.env.DB_NAME,
};

export const CLIENT_URL = process.env.CLIENT_URL;

export const GOOGLE_CLIENT_ID = process.env.GOOGLE_CLIENT_ID;

export const REFRESH_SECRET = process.env.REFRESH_SECRET;
export const ACCESS_SECRET = process.env.ACCESS_SECRET;
