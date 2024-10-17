import { create } from "zustand";
import axios from "axios";
import { CryptoResponseSchema, CryptoQuotePriceSchema } from "../schemas/cripto-schema";
import { Cryptos, QuotePriceResult } from "../types";

type CriptoStore = {
    cryptos: Cryptos,
    fetchCrypto: () => void,
    result: QuotePriceResult,
    fetchQuotePrice: (currency:string, criptoCurrency:string) => void,
    loading: boolean
}

export const useCripto = create<CriptoStore>()((set, get)=> ({
    cryptos: [],
    fetchCrypto: async () => {
        console.log("Se ejecuta la funcion");
        const url = 'https://min-api.cryptocompare.com/data/top/mktcapfull?limit=20&tsym=USD'
        try{
            const {data : {Data}} = await axios(url)
            const result = CryptoResponseSchema.safeParse(Data);
            if(result.success){
                set((state) => ({...state, cryptos: result.data }))
                console.log(get().cryptos)
            }
            console.log(result);
        }catch(e){
            console.log(e)
        }
    },
    result:{
        IMAGEURL: '',
        PRICE: '',
        HIGHDAY: '',
        LOWDAY: '',
        CHANGEPCTDAY: '',
        LASTUPDATE: '',
    },
    fetchQuotePrice: async (currency, criptoCurrency) => {
        console.log(currency)
        console.log(criptoCurrency)
        const url = `https://min-api.cryptocompare.com/data/pricemultifull?fsyms=${criptoCurrency}&tsyms=${currency}`
        try {
            set((state)=> ({...state, 
                            loading:true, 
                            result: { IMAGEURL: '',
                                    PRICE: '',
                                    HIGHDAY: '',
                                    LOWDAY: '',
                                    CHANGEPCTDAY: '',
                                    LASTUPDATE: '',} 
                                }))
            const {data : {DISPLAY} }= await axios(url)
            const result = CryptoQuotePriceSchema.safeParse(DISPLAY[criptoCurrency][currency])
            if(result.success){
                set((state)=>({...state, result: result.data}))
                console.log(get().result)
            }
        } catch (error) {
            console.log(error)
        } finally{
            set((state)=> ({...state, loading:false}))
        }
    },
    loading:false
}))