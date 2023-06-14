import express from 'express'
import cors from 'cors'
import dotenv from 'dotenv'
import router from './routes/indexRoutes.js'
import db from "./database/connection.js"

const app = express()

dotenv.config()

app.use(express.json())
app.use(cors())
app.use(router)

// db.sync(() => console.log(`Banco de dados conectado: ${process.env.DB_NAME}`));

const port = process.env.PORT || 3000
app.listen(port, () => {
  console.log(`Server running on port ${port}`)
})
