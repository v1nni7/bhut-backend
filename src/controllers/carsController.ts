import { Request, Response } from 'express'
import carsServices from '@/services/carsServices'

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

    const createdCar = await carsServices.createCar(body)

    res.status(201).send(createdCar)
  } catch (error) {
    console.log(error)
  }
}

export default {
  getCars,
  createCar,
}
