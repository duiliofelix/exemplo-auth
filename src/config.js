const dotenv = require('dotenv');

dotenv.config();


const MONGO_URL = process.env.MONGO_URL;

module.exports = {
  MONGO_URL,
  PORT,
};
