const validation = (userData) => {

    let errors = {}

    const regexEmail = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i

    if(!regexEmail.test(userData.email)) errors.email =  'Invalid email'

    if(!userData.email) errors.email = 'This field can´t be empty' 

    if(userData.email.length > 35) errors.email = 'Email can´t be over 35 characters'

    if(!userData.password.match(/\d/)) errors.password = 'Should have a least one number'
    
    if(userData.password.length < 6 || userData.password.length > 10) errors.password = 'Must contain between 6 and 10 characters'

    return errors;

}

export default validation;