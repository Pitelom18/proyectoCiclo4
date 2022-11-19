const express = require("express");
const router = express.Router();
const noviosController = require("../controllers/novios.controllers"); // llama  a empleados controller

router.post("/", noviosController.create); // Metodo de envio de datos
router.get("/", noviosController.find); // Metodo para obtener datos
router.get("/:id", noviosController.findOne); // Metodo para buscar un id
router.put("/:id", noviosController.update); // Metodo para actualizar dato por id
router.delete("/:id", noviosController.remove); // Metodo para remover por id

module.exports = router;