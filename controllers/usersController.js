const { validationResult } = require("express-validator");
const bcryptjs = require("bcrypt")
const fs = require("fs");
const path = require("path");

const User = require('../models/User')
const usersFilePath = path.join(__dirname, "../data/users.json");
const users = JSON.parse(fs.readFileSync(usersFilePath, 'utf-8'));

const toThousand = n => n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");

const controller = {
    users: (req, res) =>{
        res.render("users", {users})
    },
    detail: (req, res) => {
        let user = users.find(user=>user.id==req.params.id)
        res.render ("users", { user,toThousand })
    },

    register: (req, res) => {
        return res.render('users/register');
},
processRegister: (req, res) => {
     //return res.send(req.body); 
   /* const resultValidation = validationResult(req);
    //return res.send(resultValidation); 

    if (resultValidation.errors.length > 0) {
        return res.render('/users/register', {
            errors: resultValidation.mapped(),
            oldData: req.body
        });

    } */

    let userInDB = User.findByField('email', req.body.email);

    if (userInDB) {
        return res.render('users/register', {
            erorrs:{ 
                msg: 'Este email ya esta registrado'
            },
            oldData: req.body
        })

    } 
 
    let userToCreate = {
        ...req.body,
        password: bcryptjs.hashSync(req.body.password, 10),
        image: req.file.filename
    }
    
    let userCreated = User.create(userToCreate);

    return res.redirect('/users/login') 

    

    let image
		
    if(req.file != undefined){
        image = req.file.filename
    } else {
        image = 'default-image.png'
    }
    
    let ids = users.map(p=>p.id)
    let newUser = {
        id: Math.max(...ids)+1,
        ...req.body,
        image: image
    };
    // res.send(newProduct)
    users.push(newUser)
    fs.writeFileSync(usersFilePath, JSON.stringify(users, null, ' '));
    res.redirect('users/login');

  
},

login: (req,res) => {
    //console.log(req.session);
    return res.render('users/login');
},
loginProcess: (req, res) => {
    /*let userToLogin = User.findByField('email', req.body.email);
		
		if(userToLogin) {
			let isOkThePassword = bcryptjs.compareSync(req.body.password, userToLogin.password);
			if (isOkThePassword) {
				delete userToLogin.password;
				req.session.userLogged = userToLogin;

				if(req.body.remember_user) {
					res.cookie('userEmail', req.body.email, { maxAge: (1000 * 60) * 60 })
				}

				return res.redirect('profile');
			} 
			return res.render('users/register', {
				errors: {
					email: {
						msg: 'Las credenciales son inválidas'
					}
				}
			});
		}

		return res.render('users/login', {
			errors: {
				email: {
					msg: 'No se encuentra este email en nuestra base de datos'
				}
			}
		});
	},*/
     //return res.send(req.body); 
 let errors = validationResult(req);	
        let userName = req.body.usuario;
        let userLogin = users.find(users => users.users === userName);
        
        if (errors.isEmpty()) {
            if (userLogin != undefined && bcryptjs.compareSync(req.body.password,userLogin.password) === true ) {
            req.session.userLogged = userLogin;           
            if (req.body.rememberPassword == "on"){
                res.clearCookie('recordarUsuario');
                res.cookie('recordarUsuario', userLogin.id, {maxAge: (1000 * 60) * 2 }); 
                console.log("recordando cookie");
            }
            
            res.redirect('/profile')
            }
            else if (userLogin != undefined && bcryptjs.compareSync(req.body.password,userLogin.password) === false ) {
                console.log('Contraseña incorrecta');
            }
            else {
                console.log('usuario no encontrado');
            }
        }
        else {
        res.render('users/login',{
            errors:errors.mapped(),
            old: req.body
        });
        };
    },


profile: (req, res) => {
    return res.render('profile', {
        user: req.session.userLogged
    });
},
}


module.exports = controller