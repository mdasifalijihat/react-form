import React from 'react';
import useInputField from '../../hooks/useInputField';

const HookForm = () => {
    const [name, nameOnChange] = useInputField(''); 
    const [email, emailOnChange] = useInputField(''); 

    const handleSubmit = e => {
        e.preventDefault();
        console.log('submit', name)
        console.log('submit', email)
    }
    return (
        <div>
            <form onSubmit={handleSubmit}> 
                <input defaultValue={name} type="text" onChange={nameOnChange} />
                <br />
                <input defaultValue={email} type="email" name="" onChange={emailOnChange} />
                <input type="submit" value="Submit" />
            </form>
        </div>
    );
};

export default HookForm;