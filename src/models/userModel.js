
const { DataTypes } = require('sequelize');
const sequelize = require('../database/connection');

// Definindo o modelo para a tabela "Usuário"
const User = sequelize.define('User', {
    name: Sequelize.STRING,
    cpf: Sequelize.STRING,
    email: Sequelize.STRING,

});

module.exports = User;
