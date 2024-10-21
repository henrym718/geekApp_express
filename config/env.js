import dotenv from "dotenv";

dotenv.config();

export const env = {
  MONGO: process.env.MONGO,
  MONGO_DEV: process.env.MONGO_DEV,
  AWS_ACCESS_KEY_ID: process.env.AWS_ACCESS_KEY_ID,
  AWS_SECRET_ACCESS_KEY: process.env.AWS_SECRET_ACCESS_KEY,
  KEY_TOKEN_SECRET: process.env.KEY_TOKEN_SECRET,
  EXPIRE_ACCESS_TOKEN: "1h",
  EXPIRE_REFRESH_TOKEN: "5d",
  GIGS_SHOW_BY_PAGE: 20,
  OPTIONS_COOKIE: {
    httpOnly: true,
    secure: true,
    sameSite: "none",
    maxAge: parseInt(432000000, 10),
  },
};
