import React from 'react'

const Personaje = ({personaje}) => {

    const {id, name, species, status, image} = personaje

    return ( 

        <div className="container">
            <div className="card">
                <span className="id">{id}</span>
                <span>{name}</span>
                <span>{species}</span>
                <span>{status}</span>
                <img 
                    src={image}
                    alt="rick and morty api"
                    title={name}
                />
            </div>
            <span className="backgroundName" >{name}</span>
        </div>

     );
}
 
export default Personaje;