const Sequelize = require('sequelize');

const createdBName = (databaseName) => {
  return new Sequelize({
    database: databaseName,
    username: 'root',
    password: '',
    host: 'localhost',
    dialect: 'mysql', // e.g., 'mysql', 'postgres', 'sqlite', 'mssql'
  });
};

module.exports = { createdBName };