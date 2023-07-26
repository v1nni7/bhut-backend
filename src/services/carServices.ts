import { instance } from '@/lib'
import { httpResponse } from '@/utils'
import { logServices } from '@/services'
import { CreateCarParams } from '@/types'
import { queueName, connectRabbitMQ } from '@/config'

async function getAll() {
  const { data, status } = await instance.get('/cars')

  await validateResponseStatusOrFail(status)

  return data
}

async function createCar(body: CreateCarParams) {
  const { data, status } = await instance.post('/cars', body)

  await validateResponseStatusOrFail(status)

  await logServices.createLog(data)

  await sendToQueue(data)

  return data
}

async function validateResponseStatusOrFail(status: number) {
  if (status !== 200) {
    throw httpResponse('badRequest', 'Invalid request')
  }
}

async function sendToQueue(data: CreateCarParams) {
  const channel = await connectRabbitMQ()

  channel?.sendToQueue(queueName, Buffer.from(JSON.stringify(data)))
}

export { getAll, createCar }
