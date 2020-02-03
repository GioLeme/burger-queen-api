require('dotenv').config();

module.exports = {
  "development": {
    "username": "postgres",
    "password": null,
    "database": "burger_queen",
    "host": "db",
    "dialect": "postgres"
  },
  "test": {
    "username": "postgres",
    "password": null,
    "database": "burger_queen",
    "host": "db",
    "dialect": "postgres"
  },
  "production": {
    "username": process.env.DB.USER,
    "password": process.env.DB.PASS,
    "database": process.env.DB.DATABASE,
    "host": process.env.DB.HOST,
    "dialect": "postgres",
    "operatorsAliases":false,
    "dialectOptions":{
      "ssl":true
    }
  }
}