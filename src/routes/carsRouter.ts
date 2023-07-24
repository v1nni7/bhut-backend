import { Router } from 'express'
import carsController from '@/controllers/carsController'

const carsRouter = Router()

carsRouter.get('/', carsController.getCars)

export default carsRouter
