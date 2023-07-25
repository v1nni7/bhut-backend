import { logCollection } from '@/lib/mongo'
import { CreateLogParams } from '@/types/logTypes'

function createLog(data: CreateLogParams) {
  logCollection?.insertOne(data)
}

function findAll() {
  return logCollection?.find().toArray()
}

export default { createLog, findAll }
