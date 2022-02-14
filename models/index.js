const dbconfig = require("../db/dbconfig");

const Sequelize = require("sequelize");
const DataTypes = require("sequelize");

const seq = new Sequelize(dbconfig.DB, dbconfig.USER, dbconfig.PASSWORD, {
  host: dbconfig.HOST,
  dialect: dbconfig.dialect,
  operatorAliases: false,

  pool: {
    max: dbconfig.pool.max,
    min: dbconfig.pool.min,
    accquire: dbconfig.pool.accquire,
    idle: dbconfig.pool.idle,
  },
});

seq
  .authenticate()
  .then(() => {
    console.log("authenticated successfully");
  })
  .catch((err) => {
    console.log(err);
  });

const db = {};
db.Sequelize = Sequelize;
db.sequelize = seq;

db.product = require("./product")(seq, DataTypes);

db.sequelize.sync({ force: false }).then(() => {
  console.log("re-sync done!");
});

module.exports = db;
