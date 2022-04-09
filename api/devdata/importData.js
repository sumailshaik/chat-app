const fs = require('fs');
const User = require('../models/userModel');
const mongoose = require('mongoose');
const dotenv = require('dotenv');

dotenv.config();

const DB =
  'mongodb+srv://ssh:ssh@cluster0.ddtj7.mongodb.net/chatDatabase?retryWrites=true&w=majority';

mongoose
  .connect(DB, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('DB connection successful!'));

// READ JSON FILE
const users = JSON.parse(fs.readFileSync(`${__dirname}/users.json`, 'utf-8'));

// IMPORT DATA INTO DB
const importDevData = async () => {
  try {
    await User.create(users);
    console.log('User Data successfully loaded!');
  } catch (err) {
    console.log(err);
  }
  process.exit();
};

// DELETE ALL DATA FROM DB
const deleteDevData = async () => {
  try {
    await User.deleteMany();
    console.log('Data successfully deleted!');
  } catch (err) {
    console.log(err);
  }
  process.exit();
};

if (process.argv[2] === '--import') {
  importDevData();
} else if (process.argv[2] === '--delete') {
  deleteDevData();
}
