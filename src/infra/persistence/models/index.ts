// index.js
import sequelize from "infra/persistence/database/connection";
import basketsModel from "infra/persistence/models/basketsModel";
import itensModel from "infra/persistence/models/itemModel";

// Relacionamento entre as models
basketsModel.hasMany(itensModel, { as: "items", onDelete: "cascade" });
itensModel.belongsTo(basketsModel);

// Sincronizando o modelo com o banco de dados
sequelize.sync().then(() => {
  console.log("Models synchronized with database");
});
