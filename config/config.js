require("dotenv").config();

module.exports = {
  development: {
    username: "root",
    password: process.env.SEQUELIZE_PASSWORD,
    database: "randfood",
    host: "127.0.0.1",
    dialect: "mysql",
    operatorsAliases: "false",
  },
  // production: {
  //   username: 'root',
  //   password: process.env.SEQUELIZE_PASSWORD,
  //   database: 'randfood',
  //   host: '127.0.0.1',
  //   dialect: 'mysql',
  //   operatorsAliases: 'false',
  //   logging: false,
  // },
  production: {
    use_env_variable: "DATABASE_URL",
  },
};
