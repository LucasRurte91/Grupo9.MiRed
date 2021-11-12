const fs = require("fs");
const path = require("path");

const productsFilePath = path.join(__dirname, "../data/products.json");
const products = JSON.parse(fs.readFileSync(productsFilePath, 'utf-8'))

const toThousand = n => n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");

const controller = {
    products: (req, res) => {
        res.render("products", { products })
    },
    detail: (req, res) => {
        let product = products.find(product=>product.id==req.params.id)
        res.render ("products", { product })
    },
    create: (req, res) => {
		res.render("create")
	},
    store: (req, res) => {
        let productoNuevo = {
            id: products(products.length - 1).id + 1, 
            ...req.body
        }
        products.push(productoNuevo)
        fs.writeFileSync(productsFilePath, JSON.stringify(products, null, " "))
        res.redirect("products")
    },
    edit: (req, res) => {
        let productToEdit = products.find(product=>product.id==req.params.id)
        res.render("edit",{ productToEdit })
    },
    update: (req, res)=>{
        let id = req.params.id
		let productToEdit = products.find(product => product.id == id)
        productToEdit = {
			id: productToEdit.id,
			...req.body,
			image: image,
		}
		
		let newProducts = products.map(product => {
			if (product.id == productToEdit.id) {
				return product = {...productToEdit}
			}
			return product
		})
		fs.writeFileSync(productsFilePath, JSON.stringify(newProducts, null, ' '))
		res.redirect("products")
	},
    destroy: (req, res)=>{
        let id = req.params.id
		let finalProducts = products.filter(product => product.id != id)
		fs.writeFileSync(productsFilePath, JSON.stringify(finalProducts, null, " "))
		res.redirect("products")
    }
}

module.exports = controller