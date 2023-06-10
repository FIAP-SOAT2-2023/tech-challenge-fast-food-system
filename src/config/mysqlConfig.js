const mysql = require('mysql');
const Sequelize = require('sequelize');

const User = require('../models/migration/user');


module.exports = () => {

    const {DB_HOST, DB_USER, DB_PASS, DB_SCHEMA} = process.env


    // Configuração do Sequelize
    const sequelize = new Sequelize('fastfood-db', 'adminfastfood','@SOAT47fastfood', {
        host:  'fastfooddbserver.mysql.database.azure.com',
        dialect: 'mysql',
    });


    // Criação da tabela no banco de dados
    User.sync();

}