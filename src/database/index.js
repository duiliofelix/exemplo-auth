const mongoose = require('mongoose');
const { MONGO_URL } = require('./config');

mongoose.connect(MONGO_URL);
