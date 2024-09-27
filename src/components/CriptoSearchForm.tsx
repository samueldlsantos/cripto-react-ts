import { currencies } from "../data"
import { useCripto } from "../hooks/useCripto"
import { useForm, SubmitHandler } from "react-hook-form";
import Error from "./Error";

const CriptoSearchForm = () => {

  type Inputs = {
    currency: string,
    criptocurrency: string
  }

  const {register, handleSubmit,formState: { errors }} = useForm<Inputs>()

  const {cryptos, fetchQuotePrice, loading} = useCripto();


  const handleSubmitForm:SubmitHandler<Inputs> = (data) => {
    fetchQuotePrice(data.currency, data.criptocurrency)
  }

  return (
    <form onSubmit={handleSubmit(handleSubmitForm)}>
        <div className="field">
            <label htmlFor="currency">Moneda:</label>
            <select className="select" id="currency" {...register('currency', { required: "La moneda es requerida" })} >
                <option value="">-- Seleccione --</option>
                {currencies.length && 
                    currencies.map((currency)=> (
                        <option key={currency.code} value={currency.code}>{currency.name}</option>
                    ))
                }
            </select>
            {errors.currency && (<Error>{errors.currency.message}</Error>)}
        </div>
        <div className="field">
            <label htmlFor="criptocurrency">Criptomoneda:</label>
            <select className="select" id="criptocurrency" {...register('criptocurrency', { required: "La criptomoneda es requerida" })}>
                <option value="">-- Seleccione --</option>
                {cryptos.length &&
                  cryptos.map((crypto)=> (
                    <option value={crypto.CoinInfo.Name}>{crypto.CoinInfo.FullName}</option>
                  ))
                }
            </select>
            {errors.criptocurrency && (<Error>{errors.criptocurrency.message}</Error>)}
        </div>

        <input className="submit" type="submit" value="Cotizar" />   

        {loading &&
        (
          <div className="loader"></div>  
        )}
    </form>
  )
}

export default CriptoSearchForm
