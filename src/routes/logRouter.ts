import { Router } from 'express'
import { logController } from '@/controllers'

const logRouter = Router()

logRouter.get('/logs', logController.getLogs)

export default logRouter
