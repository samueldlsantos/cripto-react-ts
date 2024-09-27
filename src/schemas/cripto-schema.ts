import { z } from 'zod'

export const CriptoSchema = z.object({
    code: z.string(),
    name: z.string()
})

export const CryptoResponseSchema = z.array(
z.object({
    CoinInfo: z.object({
        FullName: z.string(),
        Name: z.string(),
        Internal: z.string()
    })
}))

export const CryptoQuotePriceSchema = z.object({
    IMAGEURL: z.string(),
    PRICE: z.string(),
    HIGHDAY: z.string(),
    LOWDAY: z.string(),
    CHANGEPCTDAY: z.string(),
    LASTUPDATE: z.string(),
})