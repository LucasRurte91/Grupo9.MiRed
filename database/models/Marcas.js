

module.exports = (sequelize, dataTypes) => {
    let alias = 'Marcas';
    let cols = {
        id: {
            primaryKey: true,
            type: dataTypes.INTEGER,
            allowNull: false,
            autoIncrement: true
        },
        nombre: {
            type: dataTypes.STRING(255),
        },
        producto_id: {
            type: dataTypes.INTEGER
        }
    }
    let config = {
        tableName: 'marcas',
        timestamps: false
    }

    const Marcas = sequelize.define(alias, cols, config)

    Marcas.associate = function (models) {
        Marcas.hasMany(models.Producto, {
            as: 'productos',
            foreignKey: 'producto_id'
        })


    };
    return Marcas;
}