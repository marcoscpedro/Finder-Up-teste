const { sequelize, Sequelize } = require("./db")

const materiais = sequelize.define('materiais', {
    material: {
        type: Sequelize.STRING,
        allowNull: false
    },
    quantidade: {
        type: Sequelize.INTEGER,
        allowNull: false
    },
    funcao: {
        type: Sequelize.STRING,
        allowNull: false
    },
    funcionario_id: {
        type: Sequelize.INTEGER,
        allowNull: false
    }

})

materiais.sync()

module.exports = materiais