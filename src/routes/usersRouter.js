const express = require("express")
const router = express.Router();
const usersController = require("../controllers/usersController")

router.get("/", usersController.users)
router.get("/:id", usersController.detail)

module.exports = router