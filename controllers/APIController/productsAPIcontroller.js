const path = require('path');
const DB = require("../../database/models")
const { Op } = require("sequelize");
const { productos } = require('../mainController');

module.exports = {
    list: function(req, res){
            let arrayProducts = [];
            let categorias = {
                vestimenta:0,
                pelotas : 0,
                canchas : 0,
                paletas: 0,
            }
        DB.Producto.findAll({
            raw: true
        })
        .then((e) => {
            e.forEach( producto =>  arrayProducts.push(
                {
                    id: producto.id,
                    titulo: producto.titulo,
                    description: producto.descripcion,
                    talle: producto.talles,
                    marca: producto.marcas,
                    color: producto.colores,
                    precio: producto.precio,
                    relations: ['categorias'],
                }
            ))
               
            for (let i = 0; i < e.length ; i++){
         
    
                if (e[i].categoria_id == 1){
                   categorias.vestimenta+= 1
                } else if (e[i].categoria_id == 2){
                    categorias.paletas += 1
                } else if (e[i].categoria_id == 3){
                    categorias.canchas += 1
                } else if (e[i].categoria_id == 4){
                    categorias.pelotas += 1
                }
        }
                let dataProducts = {
                    count: e.length,
                    countByCategory: categorias,
                    products: arrayProducts,
                }
                return res.json(dataProducts)
    
    
        }
            )
        },
    show: function(req, res){
        DB.Producto
            .findByPk(req.params.id)
            .then(producto=>{
                return res.status(200).json({
                    id: producto.id,
                    titulo: producto.titulo,
                    talle: producto.talles,
                    marca: producto.marcas,
                    color: producto.colores,
                    categoria_id: producto.categoria_id,
                    descripcion: producto.descripcion,
                    precio: producto.precio
                })
            })
    }
}