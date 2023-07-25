import { Log } from '@prisma/client'

export type CreateLogParams = Omit<Log, 'id' | 'date_time'>
