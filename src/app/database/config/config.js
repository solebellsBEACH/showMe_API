require('dotenv').config();

if(process.env.NODE_ENV=='development' || process.env.NODE_ENV=='test') {
  module.exports = {
    username:process.env.DB_USER,
    password:process.env.DB_PASSWORD,
    database:process.env.DB_NAME,
    host:process.env.DB_HOST,
    dialect:process.env.DB_DIALECT
  }
};