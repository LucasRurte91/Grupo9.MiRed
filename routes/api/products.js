const express = require('express');
const router = express.Router();
const productsAPIController = require('../../controllers/APIController/productsAPIcontroller');

router.get("/", productsAPIController.list)
router.get("/:id", productsAPIController.show)

module.exports = router