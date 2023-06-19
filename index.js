const express = require("express");
const db = require("./models/indexsql");

const rolesRoute = require("./routes/rolesRoute");
const tasksRoute = require("./routes/tasksRoute");
const usersRoute = require("./routes/usersRoute");

const app = express();
app.use(express.json());

const PORT = process.env.PORT || 3000;

app.use("/roles", rolesRoute);
app.use("/tasks", tasksRoute);
app.use("/users", usersRoute);

db.sync().then(() => {
    console.log("Conectado a SQLITE");
}).catch((error) => {
    console.log("Error al conectar con SQLITE");
});

app.get('/', (req, res) => {
    res.send("<h2>Server funcionando</h2>");
});

app.listen(PORT, () => {
    console.log(`API conectada en puerto ${PORT}`);
});