import { Sequelize } from "sequelize";
import 'dotenv/config'

const dbName : string = process.env.DB_NAME as string;
const dbUser : string = process.env.DB_USER  as string;
const dbHost: string  = process.env.DB_HOST  as string;
const dbPort: number  = Number(process.env.DB_PORT)  as number;
const dbPassword: string  = process.env.DB_PASS as string;

console.debug(`dbHost: ${dbHost} dbPort: ${dbPort} dbName: ${dbName} dbUser: ${dbUser}`)

const sequelize = new Sequelize(dbName, dbUser, dbPassword, {
  dialect: "mysql",
  host: dbHost,
  port: dbPort
});

export default sequelize;
