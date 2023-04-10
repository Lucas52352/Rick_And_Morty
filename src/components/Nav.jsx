import React from "react";
import SearchBar from "./SearchBar";
import img1 from '/home/lucas/Lucas/ricardo-y-mortadela/rick_and_morty/src/components/imagen/imagen1.png'
import { Link } from "react-router-dom";

const Nav = ( {onSearch} ) => {
    
    return (
        <header className="header">
            
            <img className="img1" src={img1} alt='b'/>
            <SearchBar onSearch={onSearch}/>

            <button className="buttonNav">
                <Link  to='/about'>ABOUT</Link>
            </button>

            <button className="buttonNav">
                <Link to='/home'>HOME</Link>
            </button>

            <button className='searchButton'>
                <Link to='/' >LOG OUT</Link>
            </button>
            

        </header>
    )
}

export default Nav