"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
require("reflect-metadata");
const connection_1 = __importDefault(require("tech-challenge-fast-food-system/src/infra/persistence/database/connection"));
require("tech-challenge-fast-food-system/src/infra/persistence/config/mysqlConfig");
const route_1 = require("tech-challenge-fast-food-system/src/framework/route");
connection_1.default.sync();
route_1.Route.Setup();
