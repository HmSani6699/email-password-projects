import React from 'react';
import { Link } from 'react-router-dom';

const Login__1 = () => {
    return (
        <div>
            <h2 className='mt-3 mb-3 text-center text-primary'>Please login !!</h2>
            <form >
                <input className='mb-3 w-100 rounded-4 p-2 ps-2' type="email" name="email" id="email" placeholder='Your Email' required />
                <br />
                <input className='mb-3 w-100 rounded-4 p-2 ps-2' type='password' name="password" id="password" placeholder='Your Password' required />
                <br />
                <input className='btn btn-primary' type="submit" value="Login" />
                <p>Please register now ? <Link to='/register__1'>Register_-_1</Link></p>
            </form>
        </div>
    );
};

export default Login__1;