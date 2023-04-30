import React from 'react';
import { getAuth } from "firebase/auth";
import app from '../Firebase/Firebase.config';

const Register__1 = () => {
    const auth = getAuth(app);

    const handleFormSubmit = (event) => {
        event.preventDefault();
        const getForm=event.target;
        const name =getForm.name.value;
        const email =getForm.email.value;
        const password =getForm.password.value;
        console.log(name,email,password);

        if(!/(?=.*?[0-9])/.test(password)){
            alert('Please added at list one degit number');
            return
        }

        
    }
    return (
        <div>
            <h2 className='mt-3 mb-3 text-center text-primary'>Please register !!</h2>
            <form onSubmit={handleFormSubmit}>
                <input className='mb-3 w-100 rounded-4 p-2 ps-2' type="text" name="name" id="text" placeholder='Your Name' required />
                <br />
                <input className='mb-3 w-100 rounded-4 p-2 ps-2' type="email" name="email" id="email" placeholder='Your Email' required />
                <br />
                <input className='mb-3 w-100 rounded-4 p-2 ps-2' type='password' name="password" id="password" placeholder='Your Password' required />
                <br />
                <input className='btn btn-primary' type="submit" value="Register" />
            </form>
        </div>
    );
};

export default Register__1;