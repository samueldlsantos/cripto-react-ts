import { z } from 'zod'

export const CriptoSchema = z.object({
    code: z.string(),
    name: z.string()
})