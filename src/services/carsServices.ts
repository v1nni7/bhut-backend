import instance from '@/lib/axios'
import { CreateCarsParams } from '@/types/carsTypes'

async function getCars() {
  const { data } = await instance.get('/cars')

  return data
}

async function createCar(data: CreateCarsParams) {
  const { status } = await instance.post('/cars', data)

  if (status !== 201) {
    throw new Error('Error to create car')
  }
}

export default {
  getCars,
  createCar,
}
