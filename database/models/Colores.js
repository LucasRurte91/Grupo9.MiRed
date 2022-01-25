
module.exports = (sequelize, dataTypes) => {
    let alias = 'Colores';
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
        tableName: 'colores',
        timestamps: false
    }

    const Colores = sequelize.define(alias, cols, config)

    Colores.associate = function (models) {
        Colores.hasMany(models.Producto, {
            as: 'productos',
            foreignKey: 'producto_id'
        })


    };
    return Colores;
}
