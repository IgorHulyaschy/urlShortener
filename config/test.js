require('dotenv').config();

module.exports = {
  server: {
    baseUrl: 'http://localhost:3000',
    port: 3000,
  },
  database: {
    host: 'localhost',
    user: 'postgres',
    password: 'emazeb32',
    port: 5432,
    dbName: 'url',
  },
};
