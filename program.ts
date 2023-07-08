import "reflect-metadata";
import sequelize from "infra/database/connection";
import "infra/config/mysqlConfig";

import {Route} from "adapter/driver/route";

sequelize.sync();
Route.Setup();
