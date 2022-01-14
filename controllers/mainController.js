const controller={
    home: function(req, res){
        return res.render("home")
    },
   
    productCart: function(req, res){
        return res.render("productCart")
    },
    detalleDelProducto: function(req, res){
        return res.render("detalleDelProducto")
    }
    
}

module.exports = controller