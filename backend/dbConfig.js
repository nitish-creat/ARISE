require('dotenv').config(); // This loads variables from .env

const config = {
  user: process.env.DB_USER,
  password: process.env.DB_PASS,
  server: process.env.DB_SERVER,
  database: process.env.DB_NAME,
  options: {
    trustServerCertificate: true, // Required for local dev
    encrypt: false
  }
};

module.exports = config;
