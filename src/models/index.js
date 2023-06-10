// index.js
const sequelize = require('./database/connection');
const Basket = require('./basketModel');
const Item = require('./basketModel');
const Product = require('./productModel');

// Relacionamento entre as models
Basket.hasMany(Item, { as: 'items', onDelete: 'cascade' });
Item.belongsTo(Basket);

Item.belongsTo(Product, { as: 'product' });
Product.hasMany(Item, { onDelete: 'cascade' });

// Sincronizando o modelo com o banco de dados
sequelize.sync()
  .then(() => {
    console.log('Models synchronized with database');
  })
