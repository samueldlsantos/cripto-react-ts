import { z } from 'zod'
import { CriptoSchema } from '../schemas/cripto-schema'

export type Currency = z.infer<typeof CriptoSchema>