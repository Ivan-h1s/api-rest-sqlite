const { DataTypes } = require("sequelize");
const db = require("./indexsql");

const tasksModel = db.define("tasks", {
    name: DataTypes.STRING,
    description: DataTypes.STRING
});

module.exports = tasksModel;