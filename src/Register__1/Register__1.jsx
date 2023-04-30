import React, { useState } from 'react';
import { createUserWithEmailAndPassword, getAuth, sendEmailVerification, updateProfile } from "firebase/auth";
import app from '../Firebase/Firebase.config';
import { Link } from 'react-router-dom';

const Register__1 = () => {
    const [error, setError] = useState('');
    const [success, setSuccess] = useState('');
    const [passwordType, setPasswordType] = useState(false);
    const auth = getAuth(app);


    const handleFormSubmit = (event) => {
        setSuccess('')
        event.preventDefault();
        const getForm = event.target;
        const name = getForm.name.value;
        const email = getForm.email.value;
        const password = getForm.password.value;
        console.log(name, email, password);

        if (!/(?=.*?[0-9])/.test(password)) {
            alert('Please added at list one degit number');
            return
        }

        createUserWithEmailAndPassword(auth, email, password)
            .then(result => {
                const loggedUser = result.user;
                console.log(loggedUser);
                setError('');
                setSuccess('Successfull Register');
                handleVerificationEmail(result.user);
                handleUpdateProfile(result.user, name)
            })
            .catch(error => {
                console.log(error);
                setError(error.message)
            })

    }

    // verify your email
    const handleVerificationEmail = (user) => {
        sendEmailVerification(user)
            .then(result => {
                console.log(result);
            })
    }

    // update profilr
    const handleUpdateProfile = (user, name) => {
        updateProfile(user, {
            displayName: name,
        })
    }

    // handle show password
    const handleShowPassword = () => {
        setPasswordType(!passwordType);
        return
    }


    return (
        <div>
            {/* {passwordType ? setPsType('text') : setPsType('password')} */}
        
            <h2 className='mt-3 mb-3 text-center text-primary'>Please register !!</h2>
            <form onSubmit={handleFormSubmit}>
                <input className='mb-3 w-100 rounded-4 p-2 ps-2' type="text" name="name" id="text" placeholder='Your Name' required />
                <br />
                <input className='mb-3 w-100 rounded-4 p-2 ps-2' type="email" name="email" id="email" placeholder='Your Email' required />
                <br />
                <input className='mb-3 w-100 rounded-4 p-2 ps-2' type={passwordType?'text':'password'} name="password" id="password" placeholder='Your Password' required />
                <br />
                <button onClick={handleShowPassword} className='btn btn-success mt-3 mb-3'>Show Password</button>
                <br />
                <input className='btn btn-primary' type="submit" value="Register" />
                <p>Please login ?<Link to='/login__1'>Login_-_1</Link></p>
            </form>
            <p className='text-danger'>{error}</p>
            <p className='text-success'>{success}</p>
        </div>
    );
};

export default Register__1;