import { useMemo } from "react";
import { useCripto } from "../hooks/useCripto"

const CriptoQuoteDetail = () => {
    const { result } = useCripto();

    const hasResult = useMemo(()=> Object.values(result).includes('') ? false : true,[result])

  return (
    <>
    {hasResult && (
        <>
        <h2 className="titlequote">Cotizacion de moneda:</h2>
    <div className="detail">
        <div>
            <img className="image" src={`https://www.cryptocompare.com/${result.IMAGEURL}`} alt="" />
        </div>
        <div className="results">
            <p>
            Precio: <span>{result.PRICE}</span>
            </p>
            <p>
            Precio mas alto: <span>{result.HIGHDAY}</span>
            </p>
            <p>
            Precio mas bajo: <span>{result.LOWDAY}</span>
            </p>
            <p>
            Ultima actualizacion: <span>{result.LASTUPDATE}</span>
            </p>

        </div>
    </div>
        </>
    )}
    
    
    </>
  )
}

export default CriptoQuoteDetail
