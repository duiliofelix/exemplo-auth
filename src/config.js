const dotenv = require('dotenv');

dotenv.config();

const {
  MONGO_URL,
  PORT = 3000,
} = process.env;

module.exports = {
  MONGO_URL,
  PORT,
};
