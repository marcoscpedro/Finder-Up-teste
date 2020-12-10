const express = require("express")
const app = express()
app.use(express.json())

const materiais = require('./materiais')

app.post("/materiais", (req, res) => {
    const { material, quantidade, funcao, funcionario_id } = req.body
    materiais.create({
        material, quantidade, funcao, funcionario_id
    }).then(material => res.send(material))
})

app.get("/materiais/:material", (req, res) => {
    const { material } = req.params
    materiais.findOne({
        where: {
            material
        }
    }).then(material => res.send(material))
})

app.get("/materiaisPorPadeiro", (req, res) => {
    materiais.findAll({
        where: {
            funcao:"Padeiro"
        }
    }).then(material => res.send(material))
})

app.put("/materiaisReposicao/:material", (req, res) => {
    const { quantidade, funcionario_id} = req.body
    const { material } = req.params
    materiais.findOne({
        where:{
            material,
            funcao:"Estoquista"
        }
    }).then((materia) => {
        const soma = materia.dataValues.quantidade + quantidade
        materiais.update({
            quantidade: soma,
            funcionario_id
        },{
            where:{
                material,
                funcao:"Estoquista"
            }
        })
    })
    res.send("Estoque atualizado")
})

 app.put("/materiaisBaixa/:material", (req, res) => {
     const { material } = req.params
     const { quantidade, funcao, funcionario_id } = req.body
     materiais.findOne({
         where: {
             material,
             funcao:"Estoquista"
         }
     }).then((materia) => {
         console.log(materia)
         if(quantidade > materia.dataValues.quantidade){
         res.send(`Baixa quantidade de ${material}, peça ao Estoquista acrescentar mais unidades`)
     } else {
         materiais.create({
             material, quantidade, funcao, funcionario_id
         })
         }
         const subtracao = parseInt(materia.dataValues.quantidade) - parseInt(quantidade) 
         materiais.update({
            quantidade : subtracao
         }, {
            where:{
                funcao:"Estoquista"
            }
         })
     })
     res.send("Estoque atualizado")
 })

app.delete("/materiais/:material", (req, res) => {
    const { material } = req.params
    materiais.destroy({
        where: {
            material,
            funcao:"Estoquista"
        }
    }).then(res.send("material excluido"))
})

module.exports = { materiais }