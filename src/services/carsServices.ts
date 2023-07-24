import instance from '@/lib/axios'
import { CreateCarsParams } from '@/types/carsTypes'

async function getCars() {
  const { data } = await instance.get('/cars')

  return data
}

async function createCar(body: CreateCarsParams) {
  const { data, status } = await instance.post('/cars', body)

  if (status !== 200) {
    throw new Error('Error creating car')
  }

  return data
}

export default {
  getCars,
  createCar,
}
