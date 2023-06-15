const mysql = require('mysql');
const Basket = require('../models/basketModel');
const Item = require('../models/itemModel')
const productModel = require('../models/productModel')
module.exports = () => {
    // Criação da tabela no banco de dados
    Basket.sync();
    Item.sync();
    productModel.sync();
}