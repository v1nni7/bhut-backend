import { Router } from 'express'

import logRouter from './logRouter'
import carsRouter from './carRouter'

const router = Router()

router.use('/', logRouter)
router.use('/', carsRouter)

export default router
