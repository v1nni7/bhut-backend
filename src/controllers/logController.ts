import { Request, Response } from 'express'
import logServices from '@/services/logServices'

async function getLogs(_: Request, res: Response) {
  try {
    const logs = await logServices.getAllLogs()

    res.status(200).json(logs)
  } catch (error) {
    console.log(error)
  }
}

export default {
  getLogs,
}
