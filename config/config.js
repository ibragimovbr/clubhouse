// import dotenv from "dotenv";
const dotenv = require("dotenv");

dotenv.config({
   path: "server/.env",
});

module.exports = {
   development: {
      username: process.env.DB_USER,
      password: process.env.DB_PASSWORD,
      database: process.env.DB_NAME,
      host: process.env.DB_HOST,
      dialect: "postgres",
   },
};
