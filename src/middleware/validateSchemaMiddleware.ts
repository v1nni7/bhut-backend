import { NextFunction, Request, Response } from 'express'
import { ObjectSchema } from 'joi'

export function validateSchema(schema: ObjectSchema) {
  return async (req: Request, res: Response, next: NextFunction) => {
    const { body } = req

    const { error } = schema.validate(body, { abortEarly: true })

    if (error) {
      return res.status(400).send(error.message)
    }

    next()
  }
}
