import { logCollection } from '@/config'
import { CreateLogParams } from '@/types'

function create(data: CreateLogParams) {
  return logCollection?.insertOne(data)
}

function findAll() {
  return logCollection?.find().toArray()
}

export { create, findAll }
