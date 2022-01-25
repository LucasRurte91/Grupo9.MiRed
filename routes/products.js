const express = require("express")
const router = express.Router();
const productsController = require("../controllers/productsController")
const multer = require('multer');

// Multer
const storage = multer.diskStorage({ 
    destination: function (req, file, cb) { 
       cb(null, './public/images/products'); 
    }, 
    filename: function (req, file, cb) { 
       cb(null, `${file.fieldname}-${Date.now()}${path.extname(file.originalname)}`);  
    } 
  })

var upload = multer({ storage: storage })

router.get("/", productsController.products);

router.get("/create", productsController.create)
router.post("/", productsController.store)

router.get("/:id", productsController.detail)

router.get('/:id/edit', productsController.edit)
router.put('/:id', productsController.update)

router.delete("/:id", productsController.destroy)

module.exports = router