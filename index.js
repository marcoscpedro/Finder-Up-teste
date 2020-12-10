require('dotenv').config()
const express = require("express")
const app = express()
app.use(express.json())

const { funcionarios } = require('./rotasFuncionarios')
const { materiais } = require('./rotasMateriais')

funcionarios.hasMany(materiais, { foreignKey: 'funcionario_id'})


app.listen(2345, function(){console.log("Servidor rodando na url http://localhost:2345")})