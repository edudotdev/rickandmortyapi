import React from 'react'

const Personaje = ({personaje}) => {

    const {name, species, status, image} = personaje

    return ( 

        <div className="container">
            <div className="card">
                <span>{name}</span>
                <span>{species}</span>
                <span>{status}</span>
                <img 
                    src={image}
                />
            </div>
        </div>

     );
}
 
export default Personaje;