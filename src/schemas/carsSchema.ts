import Joi from 'joi'
import { CreateCarParams } from '@/types/carsTypes'

export const createCarSchema = Joi.object<CreateCarParams>({
  title: Joi.string().required(),
  brand: Joi.string().required(),
  price: Joi.string().required(),
  age: Joi.number().required(),
})
