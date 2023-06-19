const { DataTypes} = require("sequelize");
const db = require("./indexsql");

const usersModel = db.define("users", {
    name: DataTypes.STRING,
    lastName: DataTypes.STRING,
    age: DataTypes.INTEGER,
    address: DataTypes.STRING
});

module.exports = usersModel;