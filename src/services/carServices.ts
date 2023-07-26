import { logServices } from '@/services'
import { CreateCarParams } from '@/types'
import { instance, queueName, connectRabbitMQ } from '@/lib'

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

  const channel = await connectRabbitMQ()

  channel?.sendToQueue(queueName, Buffer.from(JSON.stringify(data)))

  return data
}

export { getCars, createCar }
