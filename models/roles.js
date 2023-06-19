const { DataTypes } = require("sequelize");
const db = require("./indexsql");

const rolesModel = db.define("roles", {
    name: DataTypes.STRING,
    description: DataTypes.STRING
});

module.exports = rolesModel;