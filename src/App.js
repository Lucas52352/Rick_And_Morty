import { React, useState, useEffect } from 'react';
import { Routes, Route, useLocation, useNavigate} from 'react-router-dom'
import axios from 'axios';
import './App.css';
import Nav from './components/Nav';
import Cards from './components/Cards.jsx';
import About from './components/About';
import Detail from './components/Detail';
import Form from './components/Form';

function App() {

   
   const [characters, setCharacters] = useState([])
   const [access, setAccess] = useState(false)
   const location = useLocation()
   const navigate = useNavigate()

   const USERNAME = 'example@123.com'
   const PASSWORD = '123asd'

   const URL_BASE = 'https://be-a-rym.up.railway.app/api/character'
   const API_KEY = '04b1fbd63fb6.5f27b86200d900cd5422'

   const onSearch = (id) => {
         axios(`${URL_BASE}/${id}?key=${API_KEY}`)
         .then(response => response.data)
         .then(( data ) => {
            if (data.name) {
               setCharacters((oldChars) => [...oldChars, data]);
            } else {
               window.alert('¡No hay personajes con este ID!');
            }
         });
      }

   const onClose = (id) => {
      const filteredChar = characters.filter(character => character.id !== id)
         setCharacters(filteredChar)
      }   

   const login = (userData) => {
      if(userData.username === USERNAME && userData.password === PASSWORD) {
         setAccess(true)
         navigate('/home')
      }
   }

   useEffect(() => {
      !access && navigate('/');
   }, [access]);

   return (
      <div className='App'>
         {location.pathname !== '/' && <Nav onSearch={onSearch} />}
        
         <Routes>
            <Route path='/home' element={<Cards characters={characters} onClose={onClose}/>}/>
            <Route path='/about' element={<About/>}/> 
            <Route path='/detail/:id' element={<Detail/>}/>
            <Route path='/' element={<Form login={login} />} />
         </Routes>

      </div>
   );
}

export default App;
