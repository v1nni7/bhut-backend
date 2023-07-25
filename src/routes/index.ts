import { Router } from 'express'

import carsRouter from './carRouter'

const router = Router()

router.use('/', carsRouter)

export default router
