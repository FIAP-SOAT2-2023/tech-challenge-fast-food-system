import express, { Request, Response } from 'express';
import sequelize from './src/infra/database/connection';
import './src/infra/config/mysqlConfig';
import swaggerConfig from './src/infra/docs/swagger';
import swaggerUiExpress from "swagger-ui-express";

const app = express();

//app.get('/users/:id', userController.getUserById.bind(userController));

sequelize.sync();

// Rota para a documentação do Swagger

app.get('/docs', swaggerUiExpress.setup(swaggerConfig));

app.listen(3000, () => console.log('Server is listening on port 3000'));
