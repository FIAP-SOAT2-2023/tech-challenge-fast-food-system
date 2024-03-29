// index.js
import sequelize from '../database/connection';
import basketsModel from '../models/basketsModel';
import itensModel from '../models/itemModel';
import productsModel from '../models/productModel';

// Relacionamento entre as models
basketsModel.hasMany(itensModel, {as: 'items', onDelete: 'cascade'});
itensModel.belongsTo(basketsModel);

itensModel.belongsTo(productsModel, {as: 'product'});
productsModel.hasMany(itensModel, {onDelete: 'cascade'});

// Sincronizando o modelo com o banco de dados
sequelize.sync()
         .then(() => {
           console.log('Models synchronized with database');
         });
