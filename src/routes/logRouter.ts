import logController from '@/controllers/logController'
import { Router } from 'express'

const logRouter = Router()

logRouter.get('/logs', logController.getLogs)

export default logRouter
