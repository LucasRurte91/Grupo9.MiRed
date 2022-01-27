
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
        categoria_id: {
            type: dataTypes.INTEGER,
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
        },
        image:{
            type: dataTypes.STRING(100)
        }
    }

    let config = {
        tableName: "productos",
        timestamps: false,
        //underscored: true
    }
    const Producto = sequelize.define(alias, cols, config);

    Producto.associate = function (models) {
        Producto.belongsTo(models.Usuarios,{
            as: 'usuarios',
            foreingKey: 'usuario_id'
        })
        Producto.belongsTo(models.Categorias, {
            as: 'categorias',
            foreignKey: "categoria_id",
        })
    };
    return Producto;

}
