import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import app from '../Firebase/Firebase.config';

const Login__1 = () => {
const [error,setError] =useState('');
const [success,setSuccess] =useState('')
    const auth =getAuth(app);

    const handleFormSubmit=event=>{
        const form =event.target;
        event.preventDefault();
        const email=form.email.value;
        const password =form.password.value;
        console.log(email,password);

        signInWithEmailAndPassword(auth,email,password)
        .then(result=>{
            const loggedUser=result.user;
            console.log(loggedUser);
            setSuccess('Success full logitn');
            setError('')
        })
        .catch(error=>{
            console.log(error);
            setError(error.message)
        })
    }

    return (
        <div>
            <h2 className='mt-3 mb-3 text-center text-primary'>Please login !!</h2>
            <form onSubmit={handleFormSubmit}>
                <input className='mb-3 w-100 rounded-4 p-2 ps-2' type="email" name="email" id="email" placeholder='Your Email' required />
                <br />
                <input className='mb-3 w-100 rounded-4 p-2 ps-2' type='password' name="password" id="password" placeholder='Your Password' required />
                <br />
                <input className='btn btn-primary' type="submit" value="Login" />
                <p>Please register now ? <Link to='/register__1'>Register_-_1</Link></p>
            </form>
            <p className='text-danger'>{error}</p>
            <p className='text-success'>{success}</p>
        </div>
    );
};

export default Login__1;