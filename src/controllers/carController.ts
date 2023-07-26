import { Request, Response } from 'express'
import { carServices } from '@/services'

async function getCars(_: Request, res: Response) {
  try {
    const cars = await carServices.getAll()

    res.status(200).json(cars)
  } catch (error: any) {
    if (!error.message || !error.statusCode) {
      return res.status(500).json({ message: 'Internal server error' })
    }

    res.status(error.statusCode).json({ message: error.message })
  }
}

async function createCar(req: Request, res: Response) {
  try {
    const { body } = req

    const createdCar = await carServices.createCar(body)

    res.status(201).send(createdCar)
  } catch (error: any) {
    if (!error.message || !error.statusCode) {
      return res.status(500).json({ message: 'Internal server error' })
    }

    res.status(error.statusCode).json({ message: error.message })
  }
}

export { getCars, createCar }
