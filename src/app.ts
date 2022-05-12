import 'dotenv/config' 
import express from 'express'
import Routes from './routes'
const app = express()

app.use(Routes)

export default app