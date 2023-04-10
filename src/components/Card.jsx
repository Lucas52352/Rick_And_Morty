import React from "react";
import { Link } from "react-router-dom";

export default function Card( {id, name, status, species, gender, origin, image, onClose} ) {
   const alt = `image of ${name}`

   return (
      <div className='card'>
         <button className="button" onClick={() => onClose(id)}>x</button>

         <Link to={`/detail/${id}`} >
            <h1 className="name" key={id}> {name} </h1>
         </Link>

         <img className="image" src={image} alt={alt} />
         <h2>Status: {status} </h2>
         <h2>Species: {species} </h2>
         <h2>Gender: {gender} </h2>
         <h2>Origin: {origin} </h2>
      </div>
   )
}