const controller={
    home: function(req, res){
        return res.render("home")
    },
   
    productCart: function(req, res){
        return res.render("productCart")
    },
    detalleDelProducto: function(req, res){
        return res.render("detalleDelProducto")
    },
    indumentaria: function (req, res) {
        return res.render("indumentaria")
    },
    paletas: function (req, res) {
        return res.render("paletas")

    },
    sectorGastronomico: function (req, res) {
        return res.render("sectorGastronomico")
    },
    ofertas: function (req, res) {
        return res.render("ofertas")

    },
    otros: function (req, res) {
        return res.render("otros")
    },
    turnos: function (req, res) {
        return res.render("turnos")
    },
    productos: function (req, res) {
        return res.render("productos")
    }
}

module.exports = controller