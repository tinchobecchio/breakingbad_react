import { useState, useEffect } from "react";
import Frase from './components/Frase'
import styled from "@emotion/styled";

const Contenedor = styled.div`
  display: flex;
  align-items: center;
  padding-top: 5rem;
  flex-direction: column;
`

const Boton = styled.button`
  background: -webkit-linear-gradient(top left, #007d35 0%, #007d35 40%, #0f574e 100%);
  background-size: 300px;
  font-family: Arial, Helvetica, sans-serif;
  color: #fff;
  margin-top: 3rem;
  padding: 1rem 2.9rem;
  font-size: 2rem;
  border: 2px solid black;
  transition: background-size .8s ease;

    :hover {
      cursor: pointer;
      background-size: 400px;

    }
`

function App() {

  // state de frases
  const [frase, guardarFrase] = useState({})

  const consultarAPI = async () => {
    const api = await fetch(`https://api.breakingbadquotes.xyz/v1/quotes`)
    const frase = await api.json()
    guardarFrase(frase[0])
  }


  // const consultarAPI = () => {
  //   const api = fetch(`https://api.breakingbadquotes.xyz/v1/quotes`)
  //   const frase = api.then( respuesta => respuesta.json())
  //   frase.then (resultado => console.log(resultado))
  // }

  // const consultarAPI = () => {
  //   fetch(`https://api.breakingbadquotes.xyz/v1/quotes`)
  //     .then( respuesta => respuesta.json())
  //     .then (resultado => console.log(resultado))
  // }


    // Cargar una frase
    useEffect(() => {
      consultarAPI()
    }, [])
  return (
    <Contenedor>

      <Frase 
        frase={frase}
      />

      <Boton
        onClick={consultarAPI}
      >Obtener Frase</Boton>
    </Contenedor>
  );
}

export default App;
