import instance from '@/lib/axios'
import { CreateCarParams } from '@/types/carsTypes'
import logServices from './logServices'

async function getCars() {
  const { data } = await instance.get('/cars')

  return data
}

async function createCar(body: CreateCarParams) {
  const { data, status } = await instance.post('/cars', body)

  if (status !== 200) {
    throw new Error('Error creating car')
  }

  await logServices.createLog(data)

  return data
}

export default {
  getCars,
  createCar,
}
