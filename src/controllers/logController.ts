import { Request, Response } from 'express'
import { logServices } from '@/services'

async function getLogs(_: Request, res: Response) {
  try {
    const logs = await logServices.getAll()

    res.status(200).json(logs)
  } catch (error: any) {
    res.status(500).json({ message: error.message })
  }
}

export { getLogs }
