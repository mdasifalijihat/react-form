import React, { useState } from 'react';

const ControlledField = () => {

    const [password, setPassword] = useState('');

    const [error, setError] = useState('')

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(" submit ")

        // submit then show error 
        // if(password.length < 6){
        //     setError('Password must be 6 characters')
        // }else{
        //     setError(' ')
        // }


    }

    const handleOnchanePassowerd =(e) => {
        e.preventDefault();
        console.log(e.target.value);
        setPassword(e.target.value);
        if(password.length < 6){
            setError("Password must be 6 characters ")
        }else{
            setError('')
        }



    }


    return (
        <div>
            <form onSubmit={handleSubmit} >
                <input type="email" name='email' placeholder='Email' required />
                <br />
                <input type="password" name='password' onChange={handleOnchanePassowerd} placeholder='Password' defaultValue={password} required />
                <br />
                <input type="submit" value="Submit" />
            </form>
            <p style={{color: 'red'}}>
                <small>{error}</small>
            </p>
        </div>
    );
};

export default ControlledField;