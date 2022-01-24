
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
        timestamps: false
    }
    const Producto = sequelize.define(alias, cols, config);

    Producto.associate = function (models) {
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

    };
    return Producto;

}
