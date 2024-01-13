"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.runMigrations = void 0;
const child_process_1 = require("child_process");
function runMigrations() {
    var _a, _b;
    const migrateProcess = (0, child_process_1.exec)('db-migrate up', (error, stdout, stderr) => {
        if (error) {
            console.error('Erro ao executar migrações:', error);
            return;
        }
        console.log('Migrações executadas com sucesso:', stdout);
    });
    (_a = migrateProcess.stdout) === null || _a === void 0 ? void 0 : _a.on('data', (data) => {
        console.log(data.toString());
    });
    (_b = migrateProcess.stderr) === null || _b === void 0 ? void 0 : _b.on('data', (data) => {
        console.error(data.toString());
    });
}
exports.runMigrations = runMigrations;
//# sourceMappingURL=run-migrations.js.map