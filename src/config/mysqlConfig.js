const mysql = require('mysql');
const Basket = require('../models/basketsModel');
const Item = require('../models/itensModel')
const productModel = require('../models/productsModel')
module.exports = () => {
    // Criação da tabela no banco de dados
    Basket.sync();
    Item.sync();
    productModel.sync();
}