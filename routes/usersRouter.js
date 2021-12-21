const express = require("express")
const router = express.Router();
const usersController = require("../controllers/usersController");
const {body} = require('express-validator');



router.get("/", usersController.users)
router.get("/:id", usersController.detail)
//Controller
const userController = require('../controllers/usersController');

//Middlewares
const uploadFile = require('../middlewares/multerMiddleware');
//const validations = require('../middlewares/validateRegisterMiddleware');
const guestMiddleware = require('../middlewares/guestMiddleware');
const authMiddleware = require('../middlewares/authMiddleware');

//Validacion Login
 /*const loginValidations = [
	body('usuario').notEmpty().withMessage('Debes completar el campo'),
	body('password').notEmpty().withMessage('Debes completar el campo') 
]; */
const registerValidations = [
    body('full_name').notEmpty().withMessage('Tienes que escribir un nombre'),
    body('email')
    .notEmpty().withMessage('Tienes que escribir un email').bail()
    .isEmail().withMessage('Debes escribir un formato de correo electronico valido'),
body('password').notEmpty().withMessage('Tienes que escribir una constraseña'),
body('phone_number').notEmpty().withMessage('Debes escribir un numero de telefono valido'),
body ('image').custom((value, { req }) => {
    let file = req.file;
    let acceptedExtensions = ['.jpg', '.png', '.gif'];

    if (!file) {
        throw new Error('Tienes que subir una imagen');
    } else {
        let fileExtension = path.extname(file.originalname);
        let (!acceptedExtensions.includes(fileExtension)); {
            throw new Error(`Las extensiones de archivo permitidas son ${acceptedExtensions.join(', ')}`);
        }
    }
    return true;
})
]

//Formulario registro
router.get('/register', guestMiddleware, userController.register);



//Procesar el registro
router.post('/register', registerValidations, uploadFile.single('image'), userController.processRegister);


//Fomrulario de login
router.get('/login', usersController.login);

//Procesar el login
router.post('/login', usersController.loginProcess)

//Perfil de Usuario
router.get('/profile', authMiddleware, usersController.profile);

// Perfil de Usuario
//router.get('/profile/', authMiddleware, usersController.profile);

module.exports = router