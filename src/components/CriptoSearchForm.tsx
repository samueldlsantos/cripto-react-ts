
const CriptoSearchForm = () => {
  return (
    <form>
        <div className="input-group">
            <label htmlFor="currency">Moneda:</label>
            <select name="currency">
                <option value="">-- seleccione --</option>
                <option value="">MX</option>
            </select>
        </div>    
    </form>
  )
}

export default CriptoSearchForm
