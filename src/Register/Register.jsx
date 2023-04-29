import React from 'react';
import { createUserWithEmailAndPassword, getAuth } from "firebase/auth";
import app from '../Firebase/Firebase.config';

const Register = () => {

    const auth=getAuth(app)

    const handleSubmit = (event) => {
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
        })
        .catch(error=>{
            console.log(error);
        })
    }
    return (
        <div>
            <h2 className='mt-3 mb-3 text-center'>Please Register</h2>
            <form onSubmit={handleSubmit}>
                <input className='mb-3 w-100 rounded-lg ps-2' type="email" name="email" id="email" placeholder='Your Email' />
                <br /> 
                <input className='mb-3 w-100 roundet-lg ps-2' type="password" name="password" id="password" placeholder='Your Password' />
                <br /> 
                <input className='btn btn-primary' type="submit" value="Register" />
            </form>
        </div>
    );
};

export default Register;