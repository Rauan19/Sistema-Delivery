import express from 'express'
import cors from 'cors'
import dotenv from 'dotenv'
import  routes  from './routes/routes'


dotenv.config()

const app = express()

app.use(express.json())

app.use(cors())

app.use(routes)

const Port = process.env.PORT || 4000

app.listen(Port, () => {
    console.log("rodando")
})