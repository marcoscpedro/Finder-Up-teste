const { sequelize, Sequelize } = require("./db")

const funcionarios = sequelize.define('funcionarios', {
    nome: {
        type: Sequelize.STRING,
        allowNull: false
    },
    funcao: {
        type: Sequelize.STRING,
        allowNull: false
    },
})

funcionarios.sync()

module.exports = funcionarios