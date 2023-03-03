import { Sequelize } from 'sequelize';

const config = require('../config/config.js')
import { User } from './User';

const database = new Sequelize(config);
const models = [
  User
];

models.forEach((model) => {
  model.initialize(database);
});

models.forEach((model) => {
  model.association();
});

export default database;
