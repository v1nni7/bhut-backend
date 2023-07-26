import { Router } from 'express'

import { carController } from '@/controllers'
import { validateSchema } from '@/middleware'
import { createCarSchema } from '@/schemas'

const carsRouter = Router()

carsRouter
  .get('/listCars', carController.getCars)
  .post('/createCar', validateSchema(createCarSchema), carController.createCar)

export default carsRouter
