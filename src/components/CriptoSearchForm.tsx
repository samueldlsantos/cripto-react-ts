import { currencies } from "../data"

const CriptoSearchForm = () => {
  return (
    <form>
        <div className="field">
            <label htmlFor="currency">Moneda:</label>
            <select className="select" name="currency" id="currency">
                <option value="">-- Seleccione --</option>
                {currencies.length && 
                    currencies.map((currency)=> (
                        <option key={currency.code} value={currency.code}>{currency.name}</option>
                    ))
                }
            </select>
        </div>
        <div className="field">
            <label htmlFor="criptocurrency">Criptomoneda:</label>
            <select className="select" name="criptocurrency" id="criptocurrency">
                <option value="">-- Seleccione --</option>
                <option value="">MX</option>
            </select>
        </div>

        <input className="submit" type="submit" value="Cotizar" />     
    </form>
  )
}

export default CriptoSearchForm
