'use strict';

const path = require('path');
const process = require('process');
const basename = path.basename(__filename);
const Sequelize = require('sequelize');
const UserModel = require('./user');
const PostsModel = require('./posts');

// Load environment variables from .env file if using dotenv
const env = process.env.NODE_ENV || 'development';
const config = require(__dirname + '/../config/config.json')[env];
const db = {};

// Initialize Sequelize with database connection parameters
let sequelize;
if (config.use_env_variable) {
  sequelize = new Sequelize(process.env[config.use_env_variable], config);
} else {
  sequelize = new Sequelize(config.database, config.username, config.password, config);
}

sequelize
  .authenticate()
  .then(() => {
    console.log('Database connection has been established successfully.');
  })
  .catch((err) => {
    console.error('Unable to connect to the database:', err);
  });

const User = UserModel(sequelize, Sequelize);
const Post = UserModel(sequelize, Sequelize);

// Export the Sequelize instance and models
module.exports = {
  sequelize,
  User,
  Post
};

