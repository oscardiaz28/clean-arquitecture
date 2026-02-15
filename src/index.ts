import express from 'express'
import dotenv from 'dotenv'
import cors from 'cors'
import morgan from 'morgan'
import { env } from './config/env'

dotenv.config()
const app = express()
app.use(morgan('dev'))
app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.listen(env.PORT, () => {
    console.log(`Server is running on port ${env.PORT}`)
})