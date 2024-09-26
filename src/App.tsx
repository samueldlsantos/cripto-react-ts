import { useEffect } from "react";
import CriptoSearchForm from "./components/CriptoSearchForm"
import { useCripto } from "./hooks/useCripto"

function App() {

  const { fetchCrypto } = useCripto();

  //Se ejecuta la funcion apenas cargue la aplicacion
  useEffect(()=> {
    fetchCrypto()
  },[])
  return (
    <>
      <div className="container">

        <h1 className="title">Cotizador de <span>Criptomonedas</span></h1>

        <div className="content">
          <CriptoSearchForm />
        </div>
      </div>
    </>

  )
}

export default App
