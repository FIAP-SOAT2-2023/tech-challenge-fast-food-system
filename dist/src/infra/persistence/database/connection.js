"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
require("dotenv/config");
const run_migrations_1 = require("../config/run-migrations");
const dbName = process.env.DB_NAME;
const dbUser = process.env.DB_USER;
const dbHost = process.env.DB_HOST;
const dbPort = Number(process.env.DB_PORT);
const dbPassword = process.env.DB_PASS;
console.debug(`dbHost: ${dbHost} dbPort: ${dbPort} dbName: ${dbName} dbUser: ${dbUser}`);
const sequelize = new sequelize_1.Sequelize(dbName, dbUser, dbPassword, {
    dialect: "mysql",
    host: dbHost,
    port: dbPort
});
sequelize.authenticate()
    .then(() => {
    console.log('Conexão estabelecida com sucesso.');
})
    .catch((error) => {
    console.error('Erro ao conectar:', error);
});
(async () => {
    await sequelize.sync();
    console.log('Sincronizacao com sucesso do sequelize e banco de dados');
    try {
        console.log('Inicializando as migrations');
        (0, run_migrations_1.runMigrations)();
    }
    catch (error) {
        console.log('Error nas migrations');
    }
})();
exports.default = sequelize;
//# sourceMappingURL=connection.js.map