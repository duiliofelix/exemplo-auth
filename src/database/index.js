const mongoose = require('mongoose');
const { MONGO_URL } = require('../config');
const logger = require('../services/logger');

let database;

const connect = async () => {
  try {
    database = await mongoose.connect(MONGO_URL, {
      useUnifiedTopology: true,
      useNewUrlParser: true,
    });
    logger.info('Database connected');
  } catch (e) {
    logger.error(e);
  }
};

connect();

module.exports = database;
