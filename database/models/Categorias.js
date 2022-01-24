
module.exports = (sequelize, dataTypes) => {
    let alias = 'Categorias';
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
    let config ={
        tableName: 'categorias',
        timestamps: false
    }
    const Categorias = sequelize.define(alias, cols, config);

    Categorias.associate = function (models){
        Categorias.belongsTo(models.Producto,{
            as: 'productos',
            foreignKey: 'producto_id'
        })
    }
    return Categorias;
    
};



