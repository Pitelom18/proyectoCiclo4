const express = require("express")
const router = express.Router()
const empleadosController = require("../controllers/empleados.controller")


router.post("/", empleadosController.create)
router.get("/", empleadosController.find); // Metodo para obtener datos
router.get("/:id", empleadosController.findOne); // Metodo para buscar un id
router.put("/:id", empleadosController.update); // Metodo para actualizar dato por id
router.delete("/:id", empleadosController.remove); // Metodo para remover por id


module.exports = router  