import { CreatedCarData } from '@/types/carsTypes'
import logRepository from '@/repository/logRepository'

async function createLog(data: CreatedCarData) {
  const date_time = new Date().toISOString()

  const logData = {
    type: 'create',
    car_id: data._id,
    date_time,
  }

  logRepository.createLog(logData)
}

async function getAllLogs() {
  return logRepository.findAll()
}

export default {
  createLog,
  getAllLogs,
}
