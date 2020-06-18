import React, {Fragment, useEffect, useState} from 'react';
import Header from './components/Header'
import Personaje from './components/Personaje'
import Buttons from './components/Buttons'

function App() {

  const [id, setId] = useState(1)
  const [personaje, setPersonaje] = useState({});

  useEffect(() => {
      fetch(`https://rickandmortyapi.com/api/character/${id}`)
      .then((respuesta) => respuesta.json())
      .then((datos) => setPersonaje(datos))
  }, [id])

  return (
    <Fragment>
        <Header />
        <Personaje 
          personaje={personaje}
          id={id}
        />
        <Buttons 
          setId={setId}
          id={id}
        />
    </Fragment>
  );
}

export default App;
