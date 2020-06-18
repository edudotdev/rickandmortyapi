import React, {Fragment, useEffect, useState} from 'react';
import Header from './components/Header'
import Personaje from './components/Personaje'


function App() {

  const [id, setId] = useState(1)
  const [personaje, setPersonaje] = useState({});
  
  console.log('odio useEfect');
  
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
        />
        <input 
          type="button"
          value="consultar" 
          onClick={() => setId(id+1)}
        />
        {console.log(personaje)}
    </Fragment>
  );
}

export default App;
