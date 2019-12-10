require("dotenv").config();
const config = { 
 development: {
   username: "root",
   password: process.env.DB_PASS,
   database: "myBank",
   host: "127.0.0.1",
   dialect: "mysql"
 },
 test: {
   username: "root",
   password: null,
   database: "database_test",
   host: "127.0.0.1",
   dialect: "mysql"
 },
 production: {
   use_env_variable: "JAWSDB_URL",
   dialect: "mysql"
 }
};
module.exports = config;