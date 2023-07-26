import 'dotenv/config'

import express, { json } from 'express'
import cors from 'cors'

import router from '@/routes'
import { connectMongo } from '@/config'

const app = express()

app.use(cors())
app.use(json())
app.use(router)

connectMongo()

export default app
