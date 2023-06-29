// index.js
import sequelize from 'infra/database/connection';
import basketsModel from 'infra/models/basketsModel';
import itensModel from 'infra/models/itemModel';
import productsModel from 'infra/models/productModel';

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
