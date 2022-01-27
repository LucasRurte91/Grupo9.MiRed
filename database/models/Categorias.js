
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
        }
    }
    let config ={
        tableName: 'categorias',
        timestamps: false,
        //underscored: true
    }
    const Categorias = sequelize.define(alias, cols, config);

    Categorias.associate = function (models) {
        Categorias.hasMany(models.Producto,{
            as: 'productos',
            foreingKey: "categoria_id",
        })
    }
    return Categorias;

}
