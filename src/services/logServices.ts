import { Car } from '@/types'
import { logRepository } from '@/repository'

async function createLog(data: Car) {
  const date_time = await GenerateFriendlyDateTime()

  const logData = {
    date_time,
    type: 'create',
    car_id: data._id,
  }

  return logRepository.create(logData)
}

async function getAll() {
  return await logRepository.findAll()
}

async function GenerateFriendlyDateTime() {
  const datetime = new Date().toISOString()

  const friendlyDatetime = datetime.replace('T', ' ').replace('Z', '')

  return friendlyDatetime
}

export { createLog, getAll }
