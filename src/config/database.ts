import { Collection, MongoClient } from 'mongodb'

const mongoURL = process.env.DATABASE_URL || 'mongodb://localhost:27017'
let logCollection: Collection | null = null

async function connectMongo() {
  try {
    const client: MongoClient = await MongoClient.connect(mongoURL)
    const database = client.db('logs')
    logCollection = database.collection('logs')
    console.log('Connected to MongoDB!')
  } catch (error) {
    console.error('Error occurred while connecting to MongoDB:', error)
  }
}

export { logCollection, connectMongo }
