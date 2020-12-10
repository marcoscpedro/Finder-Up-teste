const express = require("express")
const app = express()
app.use(express.json())

const funcionarios = require("./funcionarios")

app.get("/funcionarios", (req, res) => {
    funcionarios.findAll().then(users => res.send(users))
})

app.post("/funcionarios", (req, res) => {
    const { nome, funcao } = req.body
    funcionarios.create({
        nome, funcao
    }).then(user => res.send(user));
})

app.get("/funcionarios/:id", (req, res) => {
    const { id } = req.params
    funcionarios.findAll({
        where: {
            id
        }
    }).then(user => res.send(user))
})

app.put("/funcionarios/:id", (req, res) => {
    const { nome, funcao } = req.body
    const { id } = req.params
    funcionarios.update({
        nome, funcao
    }, {
        where: {
            id
        }
    }).then(res.send("Funcionário editado"))
})

app.delete("/funcionarios/:id", (req, res) => {
    const { id } = req.params
        funcionarios.destroy({
            where: {
                id
            }
        }).then(res.send("Funcionário deletado"))
})

module.exports = { funcionarios }