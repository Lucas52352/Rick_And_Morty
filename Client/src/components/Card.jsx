import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { addFav, removeFav } from '../redux/actions'
import { connect } from 'react-redux'


function Card( {id, name, image, onClose, addFav, removeFav, myFavorites} ) {
   
   const [isFav, setIsFav] = useState(false)

   const alt = `image of ${name}`

   const handleFavorite = (isFav) => {
      if(isFav === true) {
         setIsFav(false)
         removeFav(id)
      }
      else {
         setIsFav(true)
         addFav({ id, image})
      }
   }

   useEffect(() => {
      myFavorites.forEach((fav) => {
         if (fav.id === id) {
            setIsFav(true)
         }
      })
   }, [myFavorites])

   return (
      <div className='card'>

         <button className="buttonClose" onClick={handleFavorite}>{isFav ? '⭐' : '🌕'}</button>

         <button className="buttonClose" onClick={() => onClose(id)}>x</button>

         <Link to={`/detail/${id}`} >
            <img className="image" src={image} alt={alt} />
         </Link>

         
      </div>
   )
}

const mapStateToProps = (state) => {
   return {
      myFavorites: state.myFavorites
   }
}

const mapDispatchToProps = (dispatch) => {
   return {
      addFav: (character) => { dispatch(addFav(character)) },
      removeFav: (id) => { dispatch(removeFav(id)) }
   }
}

export default connect(
   mapStateToProps,
   mapDispatchToProps
)(Card)