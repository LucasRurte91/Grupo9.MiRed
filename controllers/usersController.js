const fs = require("fs");
const path = require("path");

const User = require('../models/User')
const usersFilePath = path.join(__dirname, "../data/users.json");
const users = JSON.parse(fs.readFileSync(usersFilePath, 'utf-8'))

const toThousand = n => n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");

const controller = {
    users: (req, res) =>{
        res.render("users", {users})
    },
    detail: (req, res) => {
        let user = users.find(user=>user.id==req.params.id)
        res.render ("users", { user })
    },

    register: (req, res) => {
        return res.render('register');
},
processRegister: (req, res) => {
    const resultValidation = validationResult(req);

    if (resultValidation.errors.length > 0) {
        return res.render('register', {
            errors: resultValidation.mapped(),
            oldData: req.body
        });


}
    let userInDB = User. findByField('email', req.body.email);

    if (userInDB) {
        return res.render('register', {
            erorrs:{ 
                msg: 'Este email ya esta registrado'
            },
            oldData: req.body
        })

    }

 
    let userToCreate = {
        ...req.body,
        password: bcryptjs.hashSync(req.body.password, 10),
        avatar: req.file.filename
    }
    User.create(req.body)
    return res.redirect('login')

},
login: (req,res) => {
    return res.render('login');
},
loginProcess: (req, res) => {
    let userToLogin = User.findByField('email', req.body.email);
    if(userToLogin) {
       let isOKThePassword = bcryptjs.compareSync(req.body.password, users.password)
       if (isOKThePassword){
           return res.send('Ok puedes ingresar')

       }
       return res.render('login', {
           errors: {
               email: {
                   msg: 'las credenciales son invalidas'
               }

           }
       })

    }
 return res.render('login', {
     errors: {
         msg: 'Este email no existe'
     }
 })
},

profile: (req, res) => {
    return res.render('profile');
},

}


module.exports = controller