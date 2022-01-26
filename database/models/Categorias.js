
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
<<<<<<< HEAD
    }
    let config ={
        tableName: 'categorias',
        timestamps: false,
        //underscored: true
    }
    const Categorias = sequelize.define(alias, cols, config);

    Categorias.associate = function (models) {
        Categorias.hasMany(models.Producto/*,{
            as: 'productos',
            foreingKey: 'categoria_id'
        }*/)
    }
    return Categorias;

}
=======
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
>>>>>>> 7cc294a43bdc5e5094e2abbbacb7ee2a2f3d6309
