import carsServices from '@/services/carsServices'
import { Request, Response } from 'express'

async function getCars(req: Request, res: Response) {
  try {
    const cars = await carsServices.getCars()

    res.status(200).json(cars)
  } catch (error) {
    console.log(error)
  }
}

export default {
  getCars,
}
