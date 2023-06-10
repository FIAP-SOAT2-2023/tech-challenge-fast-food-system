
const Sequelize = require('sequelize');

// Configuração do Sequelize
const sequelize = new Sequelize('fastfood-db', 'adminfastfood','@SOAT47fastfood', {
    host:  'fastfooddbserver.mysql.database.azure.com',
    dialect: 'mysql',
});

// Definindo o modelo para a tabela "Usuário"
const User = sequelize.define('User', {
  name: Sequelize.STRING,
  cpf: Sequelize.STRING,
  email: Sequelize.STRING,
  
});

module.exports=User;