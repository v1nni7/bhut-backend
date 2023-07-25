import { logCollection } from '@/lib/mongo'
import { CreateLogParams } from '@/types/logTypes'

function createLog(data: CreateLogParams) {
  logCollection?.insertOne(data)
}

export default { createLog }
