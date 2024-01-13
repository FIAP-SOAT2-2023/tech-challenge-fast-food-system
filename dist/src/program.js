"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
require("reflect-metadata");
const connection_1 = __importDefault(require("./infra/persistence/database/connection"));
require("./infra/persistence/config/mysqlConfig");
const route_1 = require("./framework/route");
connection_1.default.sync();
route_1.Route.Setup();
//# sourceMappingURL=program.js.map