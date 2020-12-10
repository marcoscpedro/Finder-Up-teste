#Finder Up - teste

##Instalações:

Todos as dependencias já estão salvas no package.json,

então basta rodar este comando no seu terminal

```(sh)
$ npm install
```

##Pré requisitos

Os funcionários cadastrados devem ter suas funções com os nomes de: "Estoquista" e "Padeiro"


##Rotas:

As rotas disponíveis são essas:

GET /funcionarios 

Mostra todos os funcionarios cadastrados

POST /funcionarios

Cadastra um novo funcionario

GET /funcionarios/:id

Mostra os funcionarios pelo id

PUT /funcionarios/:id

Atualiza os o registro do funcionario

DELETE /funcionarios/:id

Deleta o registro do funcionario

GET /materiais

Mostra todos os materiais cadastrados

POST /materiais

Cadastra um novo material

GET /materiais/:material

Mostra o registro de um material

GET /materiaisPorPadeiro

Mostrar os registros dos materiais utilizados pelos padeiros

PUT /materiaisReposicao/:material

Atualiza o estoque por repondo o material passado no params

PUT /materiaisBaixa/:material

Atualiza o estoque dando baixa no material 

passado no params e cria o registro do padeiro

DELETE /materiais/:material

Deleta o registro do material passado no params