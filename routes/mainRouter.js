const express = require("express")
const router = express.Router()
const mainController = require("../controllers/mainController")
const multer = require ("multer")
const path = require("path")

const storage = multer.diskStorage({
    destination:function(req,file,cb){
        cb(null,"../public/images/avatars")
    },
    filename:function(req,file,cb){
        let filename = `avatar-${Date.now()}-img-${path.extname(file.originalname)}`;
        cb(null,filename);
    }
})
const upload = multer({storage});

router.get("/", mainController.home);
router.get("/login", mainController.login);
router.get("/register", mainController.register);
router.get("/productCart", mainController.productCart);
router.get("/detalleDelProducto", mainController.detalleDelProducto)
router.get("/profile", mainController.profile)

module.exports = router;