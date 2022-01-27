const express = require("express")
const router = express.Router();
const productsController = require("../controllers/productsController")

router.get("/", productsController.products);

router.get("/create", productsController.create)
router.post("/", productsController.store)

router.get("/:id", productsController.detail)

router.get('/:id/edit', productsController.edit)
router.put('/edit/:id', productsController.update)

router.post("/borrar/:id", productsController.destroy)

module.exports = router