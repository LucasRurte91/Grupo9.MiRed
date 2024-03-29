
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
        }
    }
    let config = {
        tableName: "usuarios",
        timestamps: false
    }

    const Usuario = sequelize.define(alias, cols, config);

    Usuario.associate = function (models) {
        Usuario.hasMany(models.Producto, {
            as: 'productos',
            foreingKey: 'usuario_id'
        })


    };
    return Usuario;
}
