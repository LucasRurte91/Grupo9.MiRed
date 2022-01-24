const express = require("express")
const router = express.Router();
const usersController = require("../controllers/usersController");
const {body} = require('express-validator');
//Controller
const userController = require('../controllers/usersController');

//Middlewares
const uploadFile = require('../middlewares/multerMiddleware');
//const validations = require('../middlewares/validateRegisterMiddleware');
const guestMiddleware = require('../middlewares/guestMiddleware');
const authMiddleware = require('../middlewares/authMiddleware');
const registerValidations = require('../middlewares/validateRegisterMiddleware');

//router.get("/", usersController.users)
//router.get("/:id", usersController.detail)

//Validacion Login
 /*const loginValidations = [
	body('usuario').notEmpty().withMessage('Debes completar el campo'),
	body('password').notEmpty().withMessage('Debes completar el campo') 
]; */


//Formulario registro
router.get('/register', guestMiddleware, userController.register);

//Procesar el registro
router.post('/register', registerValidations, uploadFile.single('image'), userController.processRegister);



//Fomrulario de login
router.get('/login', usersController.login);

//Procesar el login
router.post('/login', usersController.loginProcess)

//Perfil de Usuario
//router.get('/profile', authMiddleware, usersController.profile);
router.get('/profile', usersController.profile);

// Perfil de Usuario
//router.get('/profile/', authMiddleware, usersController.profile);

module.exports = router