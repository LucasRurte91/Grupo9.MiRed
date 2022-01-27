const fs = require("fs");
const path = require("path");
const db = require("../database/models")

/*const productsFilePath = path.join(__dirname, "../data/products.json");
const products = JSON.parse(fs.readFileSync(productsFilePath, 'utf-8'))

const toThousand = n => n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");*/

const controller = {
    products: (req, res) => {
            db.Producto.findAll()
                .then (function(productos){
                    return res.render ("products", { productos })
                })
        /*res.render("products", { products })*/
    },
    detail: (req, res) => {
        db.Producto.findByPk(req.params.id, {
            include: {association: "categorias"}
        })
            .then(function(producto){
                res.render("detailProducto", {producto:producto})
            })
        /*let product = products.find(product=>product.id==req.params.id)
        res.render ("products", { product,toThousand })*/
    },
    create: (req, res) => {
        db.Categorias.findAll()
		.then(function(categorias){
            return res.render("create", { categorias })
        })
	},
    store: (req, res) => {
        console.log(req.body)
        db.Producto.create({
            titulo: req.body.titulo,
            precio: req.body.precio,
            colores: req.body.color,
            talles: req.body.talle,
            marcas: req.body.marca,
            categoria_id: req.body.categoria,
            descripcion: req.body.descripcion,
            //image: req.file.filename
        })
        .then(res.redirect("products"))
        /*let ids = products.map(p=>p.id)
		let productoNuevo = {
			id: Math.max(...ids)+1,
			...req.body,
		};
        products.push(productoNuevo)
        fs.writeFileSync(productsFilePath, JSON.stringify(products, null, " "))*/
    },
    edit: (req, res) => {
        let pedidoProducto = db.Producto.findByPk(req.params.id)
        let pedidoCategorias = db.Categorias.findAll()

        Promise.all([pedidoProducto, pedidoCategorias])
            .then(function([producto, categorias]){
                res.render("edit", { producto, categorias })
            })
        /*let productToEdit = products.find(product=>product.id==req.params.id)
        res.render("edit",{ productToEdit })*/
    },
    update: (req, res)=>{
        console.log(req.body)
        db.Producto.update({
            titulo: req.body.titulo,
            precio: req.body.precio,
            colores: req.body.color,
            talles: req.body.talle,
            marcas: req.body.marca,
            categoria_id: req.body.categoria,
            descripcion: req.body.descripcion,
            //image: req.file.filename
        },{
            where: {
                id: req.params.id
            }
        });
        res.redirect("/products/" + req.params.id);
        /*let id = req.params.id;
		let productToEdit = products.find(product => product.id == id)

		productToEdit = {
            id: productToEdit.id,
			...req.body
		};
		
		let newProducts = products.map(product => {
			if (product.id == productToEdit.id) {
				return product = {...productToEdit};
			}
			return product;
		})

		fs.writeFileSync(productsFilePath, JSON.stringify(newProducts, null, ' '));
		*/
	},
    destroy: (req, res)=>{
        db.Producto.destroy({
            where:{
                id: req.params.id
            }
        })
        res.redirect("products")
        /*let id = req.params.id
		let finalProducts = products.filter(product => product.id != id)
		fs.writeFileSync(productsFilePath, JSON.stringify(finalProducts, null, " "))*/
    }
}


module.exports = controller
