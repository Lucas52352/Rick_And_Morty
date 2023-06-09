import React from 'react';
import Card from './Card';

export default function Cards( {characters, onClose} ) {
   return (
      <div className='cards'> 
          {
            characters.map(({ id, name, status, species, gender, origin, image }) => {
               return (
                  <Card 
                     key={id}
                     id={id}
                     name={name}
                     image={image}
                     species={species}
                     gender={gender}
                     origin={origin.name}
                     status={status}
                     onClose={onClose}
                  />
               )
            })
         }
          
      </div>
   )
}
