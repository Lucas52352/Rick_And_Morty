import React from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";

const URL_BASE = 'http://localhost:3001/rickandmorty/character'

const Detail = () => {


    const { id  } = useParams()
    const [character, setCharacter] = useState({})

    useEffect(() => {
        axios(`${URL_BASE}/${id}`)
        .then(response => response.data)
        .then(( data ) => {
           if (data.name) {
              setCharacter(data);
           } else {
              window.alert('No hay personajes con ese ID');
           }
        });
        return setCharacter({});
     }, [id]);

    return (
        <div className="cardDetail">
            <h2 className="name">{character?.name}</h2>
            <img className="image" src={character?.image} alt={character?.name} />
            <h2>{character?.status}</h2>
            <h2>{character?.species}</h2>
            <h2>{character?.gender}</h2>
            <h2>{character?.origin?.name}</h2>         
        </div>
    )    
}

export default Detail