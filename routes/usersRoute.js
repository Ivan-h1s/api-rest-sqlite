const express = require("express");
const usersModel = require("../models/users");
const router = express.Router();

router.get("/", async(req, res) => {
    try {
        const roles = await usersModel.findAll();
        res.json(roles);
    } catch (error) {
        res.json(error);
    }
});

router.get("/:id", async(req, res) => {
    try {
        const rol = await usersModel.findByPk(req.params.id);
        res.json(rol);
    } catch (error) {
        res.json(error);
    }
});

router.post("/create", async(req, res) => {
    try {
        const rol = await usersModel.create(req.body);
        res.json(rol);
    } catch (error) {
        res.json(error);
    }
});

router.put("/:id", async(req, res) => {
    try {
        const rol = await usersModel.update(req.body, {
            where: {
                id: req.params.id
            }
        });
        res.json(rol);
    } catch (error) {
        res.json(error);
    }
});

router.delete("/:id", async(req, res) => {
    try {
        const rol = await usersModel.destroy({
            where: {
                id: req.params.id
            }
        });
        res.json(rol);
    } catch (error) {
        res.json(error);
    }
});

module.exports = router;