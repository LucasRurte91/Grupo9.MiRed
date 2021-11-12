const controller={
    home: function(req, res){
        return res.render("home")
    },
    login: function(req,res){
        return res.render("login")
    },
    register: function(req,res){
        return res.render("register")
    },
    productCart: function(req, res){
        return res.render("productCart")
    },
    detalleDelProducto: function(req, res){
        return res.render("detalleDelProducto")
    }
}

module.exports = controller