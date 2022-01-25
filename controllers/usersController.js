const { validationResult } = require("express-validator");
const bcryptjs = require("bcrypt")
const fs = require("fs");
const path = require("path");
const db = require("../database/models");


const usersFilePath = path.join(__dirname, "../data/users.json");
const users = JSON.parse(fs.readFileSync(usersFilePath, 'utf-8'));

const toThousand = n => n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");

const controller = {
    users: (req, res) => {
        res.render("users", { users })
    },

    detail: (req, res) => {
        db.Usuarios.findAll({
            nombre: req.body.full_name,
            email: req.body.email,
            telefono: req.body.phone_number,
            password: req.body.password,
            image: req.body.image
        }, {
            where: {
                id: req.params.id
            }
        });
        res.render("users/detalle");
    },

    register: (req, res) => {
        return res.render('users/register');
    },
    create: function (req, res) {

        const resultValidation = validationResult(req);
        
        /* if (resultValidation.errors.length > 0) {
             return res.render('users/register', {
                 errors: resultValidation.mapped(),
                 oldData: req.body
             });
         } */

        // let userInDB = User.findByField('email', req.body.email);
        db.Usuarios.findOne({
            where: {
                email: req.body.email
            }
        })
            .then((userInDB) => {
                if (userInDB) {
                    return res.render('users/register', {
                        errors: {
                            email: {
                                msg: 'Este email ya está registrado'
                            }
                        },
                        oldData: req.body
                    });
                }


                db.Usuarios.create({
                    nombre: req.body.full_name,
                    email: req.body.email,
                    telefono: req.body.phone_number,
                    password: bcryptjs.hashSync(req.body.password, 10),
                    image: req.file.filename,
                })

            })
            .then(() => {
                res.redirect("/users/login");
            })
            .catch(errors => res.send(errors))
    },

    login: (req, res) => {
        //console.log(req.session);
        return res.render('users/login');
    },

    loginProcess: (req, res) => {

        

        db.Usuarios.findOne({
            where: {
                email: req.body.email
            }

        })
        .then((userToLogin) => {
                if (userToLogin) {
                   // const claveHasheada = bcryptjs.hashSync(userToLogin.contraseña, 10);
                   // res.send(req.body.password + ".." + userToLogin.password );
                   
                   
                   //aplicar al userToLogin.password el bcrypt y al resultado pasarlo como segundo parametro (hasheado)
                   let isOkThePassword = bcryptjs.compareSync(req.body.password, userToLogin.password);
                    if (isOkThePassword) {
                        // delete userToLogin.password;
                        req.session.userLogged = userToLogin;
                        
                        return res.redirect('/users/profile');

                    }
                    

                    
                    
                   return res.render('users/login', {
                        errors: {
                            email: {
                                msg: 'Credenciales invalidas.'
                            }
                        }
                    })
                }
                return res.render('/users/login', {
                    errors: {
                        email: {
                            msg: 'No se encuentra el mail en la base de datos'
                        }
                    }
                });

            })
            .catch(err => res.send(err))
    },



    profile: (req, res) => {
        //return res.send("hola" + req.session.user)
        return res.render('users/profile', {
            users: req.session.userLogged,
            
        });
    },

    edit: (req,res) => {
        db.Usuarios.findByPk(req.params.id)
            .then(function(userToEdit) {
                res.render("users/editarPerfil", { userToEdit: userToEdit })
            })
                
    },

    update: (req,res) => {
        db.Usuarios.update({
            nombre: req.body.full_name,
            email: req.body.email,
            telefono: req.body.phone_number,
            image: req.body.image
        }, {
            where: {
                id: req.params.id
            }
        });
        res.redirect("/users/login");
    }


}


module.exports = controller