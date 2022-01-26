
const Usuario = require("./Usuario");

module.exports = (sequelize, dataTypes) => {
    let alias = "Producto";
    let cols = {
        id: {
            type: dataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        titulo: {
            type: dataTypes.STRING(255),
            allowNull: false
        },
<<<<<<< HEAD
        talles: {
            type: dataTypes.STRING(255)
        },
        marcas: {
            type: dataTypes.STRING(255)
        },
        colores: {
            type: dataTypes.STRING(255),
            allowNull: false
        },
        /*categoria_id: {
            type: dataTypes.INTEGER,
        },*/
=======
        talle_id: {
            type: dataTypes.INTEGER
        },
        marca_id: {
            type: dataTypes.INTEGER
        },
        color_id: {
            type: dataTypes.INTEGER
        },
        categoria_id: {
            type: dataTypes.INTEGER
        },
>>>>>>> 7cc294a43bdc5e5094e2abbbacb7ee2a2f3d6309
        descripcion: {
            type: dataTypes.TEXT,
            allowNull: false
        },
        usuario_id: {
            type: dataTypes.INTEGER
        },
        precio: {
            type: dataTypes.INTEGER,
            allowNull: false
        }
    }

    let config = {
        tableName: "productos",
<<<<<<< HEAD
        timestamps: false,
        //underscored: true
=======
        timestamps: false
>>>>>>> 7cc294a43bdc5e5094e2abbbacb7ee2a2f3d6309
    }
    const Producto = sequelize.define(alias, cols, config);

    Producto.associate = function (models) {
<<<<<<< HEAD
        Producto.belongsTo(models.Usuarios,{
            as: 'usuarios',
            foreingKey: 'usuario_id'
        })
        Producto.belongsTo(models.Categorias/*, {
            foreingKey: 'categoria_id',
            as: 'categorias'
        }*/)
=======
        /*Producto.belongsTo(models.Usuario,{
            as: 'usuarios',
            foreingKey: 'usuario_id'
        })*/
        Producto.hasMany(models.talles, {
            foreingKey: 'talle_id',
            as: 'talles'
        })
        Producto.hasMany(models.marcas, {
            foreingKey: 'marca_id',
            as: 'marcas'
        })
        Producto.hasMany(models.colores, {
            foreingKey: 'color_id',
            as: 'colores'
        })
        Producto.hasMany(models.categoria, {
            foreingKey: 'categoria_id',
            as: 'categoria'
        })
>>>>>>> 7cc294a43bdc5e5094e2abbbacb7ee2a2f3d6309

    };
    return Producto;

}
