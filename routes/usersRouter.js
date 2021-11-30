const express = require("express")
const router = express.Router();
const usersController = require("../controllers/usersController")

router.get("/", usersController.users)
router.get("/:id", usersController.detail)

//Controller
const userController = require('../controllers/usersController');

//Middlewares
const uploadFile = require('../middlewares/multerMiddleware');
const validations = require('../middlewares/validateRegisterMiddleware');

//Formulario registro
router.get('./register', userController.register);

//Procesar el registro
router.post('/views/register', uploadFile.single('avatar'), validations, userController.processRegister);


//Fomrulario de login
router.get('/login', usersController.login);

//Procesar el login
//router.post('/login', usersController.loginProcess)

//Perfil de Usuario
router.get('/profile', usersController.profile);


module.exports = router