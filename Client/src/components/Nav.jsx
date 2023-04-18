import React from "react";
import SearchBar from "./SearchBar";
import img1 from './imagen/imagen1.png'
import { Link } from "react-router-dom";

const Nav = ( {onSearch, setAccess} ) => {

    const handleLogOut = () => {
        setAccess(false)
    }
    
    return (
        <header className="header">
            
            <img className="img1" src={img1} alt='b'/>
            
            <SearchBar onSearch={onSearch}/>

            <button className="buttonNav">
                <Link to='/home'>HOME</Link>
            </button>

            <button className="buttonNav">
                <Link  to='/about'>ABOUT</Link>
            </button>

            <button className='buttonNav'>
                <Link to='/favorites' >FAVORITES</Link>
            </button>

            <button className='buttonNav' onClick={handleLogOut}>
                LOG OUT
            </button>
            

        </header>
    )
}

export default Nav