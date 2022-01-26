
<<<<<<< HEAD
=======

>>>>>>> 7cc294a43bdc5e5094e2abbbacb7ee2a2f3d6309
module.exports = (sequelize, dataTypes) => {
    let alias = "Usuarios";
    let cols = {
        id: {
            type: dataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
        },
        nombre: {
            type: dataTypes.STRING(255),
            allowNull: false,

        },
        email: {
            allowNull: false,
            type: dataTypes.STRING(100),
        },

        telefono: {
            allowNull: false,
            type: dataTypes.INTEGER
        },

        contraseña: {
            allowNull: false,
            type: dataTypes.STRING(100)
        },
        image: {
            allowNull: false,
            type: dataTypes.STRING(100)
        },
        producto_id: {
            type: dataTypes.INTEGER
        },
    }
    let config = {
        tableName: "usuarios",
        timestamps: false
    }

    const Usuario = sequelize.define(alias, cols, config);

    Usuario.associate = function (models) {
<<<<<<< HEAD
        Usuario.belongsTo(models.Producto, {
            as: 'productos',
            foreingKey: 'producto_id'
        })
=======
        /*Usuario.hasMany(models.Producto, {
            as: 'productos',
            foreingKey: 'producto_id'
        })*/
>>>>>>> 7cc294a43bdc5e5094e2abbbacb7ee2a2f3d6309


    };
    return Usuario;
}
