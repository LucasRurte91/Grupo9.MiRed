/*const path = require('path');
const { body } = require('express-validator');


module.exports = [
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

] */