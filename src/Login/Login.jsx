import { getAuth, sendPasswordResetEmail, signInWithEmailAndPassword } from 'firebase/auth';
import React, { useRef, useState } from 'react';
import app from '../Firebase/Firebase.config';
import { Link } from 'react-router-dom';

const Login = () => {
    const [error, setError] = useState('');
    const [success, setSuccess] = useState('');
    const auth = getAuth(app);
    const emailReset = useRef();

    const handleSubmit = event => {
        event.preventDefault();
        const email = event.target.email.value;
        const password = event.target.password.value;

        signInWithEmailAndPassword(auth, email, password)
            .then(result => {
                const loggedUser = result.user;
                console.log(loggedUser);
                setError('')
                setSuccess('Success full login')
            })
            .catch(error => {
                console.log(error);
                setError(error.message)
            })
    }

    const handleResetBtn = ()=> {
        const email = emailReset.current.value;
        sendPasswordResetEmail(auth,email)
        .then(()=>{
            alert('Please check your email')
        })
        .catch(error=>{
            console.log(error);
        })
    }
    return (
        <div>
            <h2>Please login</h2>
            <form onSubmit={handleSubmit}>
                <div className="mb-3">
                    <label /*for="exampleInputEmail1"*/ className="form-label">Email address</label>
                    <input type="email" ref={emailReset} name='email' className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />

                </div>
                <div className="mb-3">
                    <label /*for="exampleInputPassword1"*/ className="form-label">Password</label>
                    <input type="password" name='password' className="form-control" id="exampleInputPassword1" />
                </div>
                <div className="mb-3 form-check">
                    <input type="checkbox" className="form-check-input" id="exampleCheck1" />
                    <label className="form-check-label" /*for="exampleCheck1"*/ >Check me out</label>
                </div>
                <button type="submit" className="btn btn-primary">Submit</button>
                <p><small>Reset password <button onClick={handleResetBtn} className='btn btn-link'>Reset</button></small></p>
                <p>New to this website ? <Link to='/register'>Register</Link> </p>
                <p className='text-danger'>{error}</p>
                <p className='text-success'>{success}</p>
            </form>
        </div>
    );
};

export default Login;