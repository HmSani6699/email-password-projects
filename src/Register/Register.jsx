import React, { useState } from 'react';
import { createUserWithEmailAndPassword, getAuth, sendEmailVerification } from "firebase/auth";
import app from '../Firebase/Firebase.config';
import { Link } from 'react-router-dom';

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

        //validation
        if(!/(?=.*?[A-Z])/.test(password)){
            setError('Please add at least one Uppercase');
            return
        }

        // creat user in fb
        createUserWithEmailAndPassword(auth,email,password)
        .then(result=>{
            const loggedUser=result.user;
            console.log(loggedUser);
            setError('');
            event.target.reset()
            setSuccess('Successfull login');
            sentVerifacationEmail(result.user)
        })
        .catch(error=>{
            console.log(error);
            setError(error.message)
        })
    }

    const sentVerifacationEmail =(user)=>{
        console.log(user);
        sendEmailVerification(user)
        .then(result=>{
            console.log(result)
            alert('please verify your email')
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
            <p>Please login <Link to='/login'>Login</Link></p>
            <p className='text-danger'>{error}</p>
            <p className='text-success'>{success}</p>
        </div>
    );
};

export default Register;