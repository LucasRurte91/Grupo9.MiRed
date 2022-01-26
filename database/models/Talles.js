const { sequelize } = require(".")

module.exports = (sequelize, dataTypes) => {
    let alias = 'Talle';
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
        tableName: 'talles',
        timestamps: false
    }

    const Talles = sequelize.define(alias, cols, config)

    Talles.associate = function (models) {
        Talles.belongsTo(models.Producto, {
            as: 'producto',
            foreignKey: 'producto_id'
        })
        

    };
    return Talles;
}
