import React from "react";
import img from './imagen/imagen.png'
import { useState } from "react";


export default function SearchBar( {onSearch} ) {

   let [id, setId] = useState('')

   const handleChange = (event) => {
      setId(event.target.value)
   }

   return (
      <div className="search">

         <img className="searchImg" src={img} alt='a'/>

         <input 
            value={id}
            type='search'
            className="input" 
            placeholder="Ingrese ID"
            onChange={handleChange}
         />

         <button className="searchButton" onClick={() => {onSearch(id); setId('')}}>Añadir</button>
      </div>
   );
}
