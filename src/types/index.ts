import { z } from 'zod'
import { CriptoSchema, CryptoQuotePriceSchema, CryptoResponseSchema } from '../schemas/cripto-schema'

export type Currency = z.infer<typeof CriptoSchema>

export type Cryptos = z.infer<typeof CryptoResponseSchema>

export type QuotePriceResult = z.infer<typeof CryptoQuotePriceSchema>