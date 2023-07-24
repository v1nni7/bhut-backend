import Joi from 'joi'
import { CreateCarsParams } from '@/types/carsTypes'

export const carsSchema = Joi.object<CreateCarsParams>({
  title: Joi.string().required(),
  brand: Joi.string().required(),
  price: Joi.string().required(),
  age: Joi.number().required(),
})
