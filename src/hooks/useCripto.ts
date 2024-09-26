import { create } from "zustand";
import axios from "axios";

type CriptoStore = {
    fetchCrypto: () => void
}

export const useCripto = create<CriptoStore>()(()=> ({
    fetchCrypto: async () => {
        console.log("Se ejecuta la funcion");
        const url = 'https://min-api.cryptocompare.com/data/top/mktcapfull?limit=10&tsym=USD'
        try{
            const {data : {Data}} = await axios(url)
            console.log(Data);
        }catch(e){
            console.log(e)
        }
    }
}))