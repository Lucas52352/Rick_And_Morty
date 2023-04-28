import React, { useState } from "react";
import validation from "./validation";

const Form = ( {login} ) => {

    const [userData, setUserData] = useState({
        email: '',
        password: ''
    })

    const [errors, setErrors] = useState({})

    const handleInputChange = (event) => {
        setUserData({
            ...userData,
            [event.target.name]: event.target.value
        })

        setErrors(validation({
            ...userData,
            [event.target.name]: event.target.value
        }))
    }

    const handleSubmit = (event) => {
        event.preventDefault()
        login(userData) 
    }

    return (
        <form className="form" onSubmit={handleSubmit}>

            <img 
                className="formImg" 
                src='https://www.icegif.com/wp-content/uploads/2021/11/icegif-663.gif' 
                alt="Login GIF"
            />

            <label htmlFor="email">Email:

                <input 
                    type='text' 
                    name='email'
                    placeholder='Type your email' 
                    onChange={handleInputChange} 
                    value={userData.email}
                />  

            </label>
            {errors.email && <p style={{color: 'red'}}>{errors.email}</p>}

            <label htmlFor="password">Password:

                <input 
                    type='password' 
                    name='password' 
                    placeholder='Type your password' 
                    onChange={handleInputChange} 
                    value={userData.password}
                />

            </label>
            {errors.password && <p style={{color: 'red'}}>{errors.password}</p>}

            <button
                type="submit"
                className="searchButton" 
            >Submit

            </button>

        </form>

    )
}

export default Form