import React, { useRef } from 'react';

const UncontrolledFields = () => {

 const emailRef = useRef('');
 const passRef = useRef('');
 
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(emailRef.current.value);
    const email = emailRef.current.value;
    const password = passRef.current.value; 

    console.log(email, password)

  }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input ref={emailRef} type="email" name="email" id="" placeholder='Email' />
                <br />
                <input ref={passRef}  type="password" name="password" id="" placeholder='Password' />
                <br />
                <input type="submit" value="Submit" />
            </form>
        </div>
    );
};

export default UncontrolledFields;