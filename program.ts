import "reflect-metadata";
import sequelize from "infra/persistence/database/connection";
import "infra/persistence/config/mysqlConfig";
import {Route} from "framework/route";

sequelize.sync();
Route.Setup();
