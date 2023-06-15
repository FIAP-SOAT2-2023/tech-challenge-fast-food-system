import db from "./database/connection.js"
import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import router from './routes/indexRoutes.js';
import swaggerUi from 'swagger-ui-express';
import swaggerConfig from './docs/swagger.js';

const app = express();

dotenv.config();

app.use(express.json());
app.use(cors());
app.use(router);

// Rota para a documentação do Swagger
app.use('/api-docs', swaggerUi.serve);
app.get('/api-docs', swaggerUi.setup(swaggerConfig));

db.sync(() => console.log(`Banco de dados conectado: ${process.env.DB_NAME}`));

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});


