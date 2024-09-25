
const CriptoSearchForm = () => {
  return (
    <form>
        <div className="input-group">
            <label htmlFor="currency">Moneda:</label>
            <select className="select" name="currency">
                <option value="">-- Seleccione --</option>
                <option value="">MX</option>
            </select>
        </div>
        <div className="input-group">
            <label htmlFor="cripto">Criptomoneda:</label>
            <select className="select" name="currency">
                <option value="">-- Seleccione --</option>
                <option value="">MX</option>
            </select>
        </div>

        <input className="submit" type="submit" value="Cotizar" />     
    </form>
  )
}

export default CriptoSearchForm
