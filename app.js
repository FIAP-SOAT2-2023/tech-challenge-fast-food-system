
// PENDENTE:  ERRO AO USAR VARIAVENS DO .env
// require('dotenv').config();
//require('dotenv').config({path: __dirname + './environment/.env'});

const express = require('express')
const app = express()
const port = 3000


const bodyparser = require('body-parser');
app.use(bodyparser.urlencoded({extended:false}));
app.use(bodyparser.json());
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");

    next(); //
  });


require("./src/routes")(app)
const connection = require("./src/config/mysqlConfig")()

app.get('/', (req, res) => {
  res.send(`Hello World! Seu cpf é: ${req.query.cpf}`)
})

const User = require('./src/models/migration/user');
app.post('/users', (req, res) => {
  const { name, email } = req.body;

  User.create({ name, email }).then(user => {
    const response = {id:user.id , name:user.name, email:user.email}
    res.json(response).send();
  }).catch((error)=>{
      console.error(error); 
      req.statusCode(500).send()
    });
});

app.listen(port, () => {
  console.log(`Example app listening on port http://fastfooddbserver.mysql.database.azure.com:${port}`)
})
