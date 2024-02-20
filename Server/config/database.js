const mongoose = require('mongoose');
require('dotenv').config();

const dbConnect = async () => {
  try {
    await mongoose.connect(process.env.DATABASE_URL, {
    });
    console.log('DB Connection is successful');
  } catch (error) {
    console.error('Connection Not Established', error.message);
    process.exit(1);
  }
};

module.exports = dbConnect;
