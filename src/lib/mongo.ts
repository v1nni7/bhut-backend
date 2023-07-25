import { MongoClient, Collection, Db } from 'mongodb'

let logCollection: Collection | null = null
const mongoURL: string = process.env.DATABASE_URL || 'mongodb://localhost:27017'

async function connectToMongo() {
  try {
    const client: MongoClient = await MongoClient.connect(mongoURL)

    const db: Db = client.db('logs')

    logCollection = db.collection('logs')

    console.log('Connected to MongoDB...')
  } catch (err) {
    console.log('Error occurred while connecting to MongoDB...\n', err)
  }
}

connectToMongo()

export { logCollection }
