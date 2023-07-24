import { Router } from 'express'

import { createCarSchema } from '@/schemas/carsSchema'
import carsController from '@/controllers/carsController'
import validateSchema from '@/middleware/validateSchemaMiddleware'

const carsRouter = Router()

carsRouter
  .get('/listCars', carsController.getCars)
  .post('/createCar', validateSchema(createCarSchema), carsController.createCar)

export default carsRouter
