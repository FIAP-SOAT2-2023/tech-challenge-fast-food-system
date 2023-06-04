require('dotenv').config();

const express = require('express')
const app = express()
const port = 3000


require("./src/routes")(app)

const connection = require("./src/config/mysqlConfig")()

app.get('/', (req, res) => {
  res.send(`Hello World! Seu cpf é: ${req.query.cpf}`)
})

app.listen(port, () => {
  console.log(`Example app listening on port http://localhost:${port}`)
})
