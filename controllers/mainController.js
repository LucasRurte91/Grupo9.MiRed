const controller={
    home: function(req, res){
        return res.render("home")
    },
    login: function(req,res){
        return res.render("users/login")
    },
    register: function(req,res){
        return res.render("users/register")
    },
    productCart: function(req, res){
        return res.render("productCart")
    },
    detalleDelProducto: function(req, res){
        return res.render("detalleDelProducto")
    },
    profile: function(req, res){
        return res.render("profile")
    }
    
}

module.exports = controller