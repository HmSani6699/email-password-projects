import React, { useState } from 'react';
import { createUserWithEmailAndPassword, getAuth } from "firebase/auth";
import app from '../Firebase/Firebase.config';

const Register = () => {
    const [error,setError]=useState('');
    const [success,setSuccess]=useState('')

    const auth=getAuth(app)

    const handleSubmit = (event) => {

        setSuccess('')
        // prevent page refresh
        event.preventDefault();

        //collect form data
        const email=event.target.email.value;
        const password=event.target.password.value;
        console.log(email,password);

        // creat user in fb
        createUserWithEmailAndPassword(auth,email,password)
        .then(result=>{
            const loggedUser=result.user;
            console.log(loggedUser);
            setError('')
            setSuccess('Successfull login')
        })
        .catch(error=>{
            console.log(error);
            setError(error.message)
        })
    }
    return (
        <div>
            <h2 className='mt-3 mb-3 text-center'>Please Register</h2>
            <form onSubmit={handleSubmit}>
                <input className='mb-3 w-100 rounded-lg ps-2' type="email" name="email" id="email" placeholder='Your Email' required />
                <br /> 
                <input className='mb-3 w-100 roundet-lg ps-2' type="password" name="password" id="password" placeholder='Your Password' required />
                <br /> 
                <input className='btn btn-primary' type="submit" value="Register" />
            </form>
            <p className='text-danger'>{error}</p>
            <p className='text-success'>{success}</p>
        </div>
    );
};

export default Register;