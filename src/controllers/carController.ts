import { Request, Response } from 'express'
import { carServices } from '@/services'

async function getCars(_: Request, res: Response) {
  try {
    const cars = await carServices.getCars()

    res.status(200).json(cars)
  } catch (error) {
    console.log(error)
  }
}

async function createCar(req: Request, res: Response) {
  try {
    const { body } = req

    const createdCar = await carServices.createCar(body)

    res.status(201).send(createdCar)
  } catch (error) {
    console.log(error)
  }
}

export { getCars, createCar }
