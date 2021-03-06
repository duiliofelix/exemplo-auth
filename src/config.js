const dotenv = require('dotenv');

dotenv.config();

const {
  NODE_ENV = 'development',
  MONGO_URL,
  PORT = 3000,
  SALT = 'VERYsecureSALT',
} = process.env;

module.exports = {
  NODE_ENV,
  MONGO_URL,
  PORT,
  SALT,
};
