import carsServices from '@/services/carsServices'
import { Request, Response } from 'express'

async function getCars(_: Request, res: Response) {
  try {
    const cars = await carsServices.getCars()

    res.status(200).json(cars)
  } catch (error) {
    console.log(error)
  }
}

async function createCar(req: Request, res: Response) {
  try {
    const { body } = req

    await carsServices.createCar(body)

    res.sendStatus(201)
  } catch (error) {
    console.log(error)
  }
}

export default {
  getCars,
  createCar,
}
