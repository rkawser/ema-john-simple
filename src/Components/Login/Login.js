import React, { useEffect, useState } from 'react';
import './Login.css';
import { useAuthState, useSignInWithEmailAndPassword, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import { signOut } from 'firebase/auth';
import { Link, Navigate, useLocation, useNavigate } from 'react-router-dom';

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [signInWithEmailAndPassword, loading,error] = useSignInWithEmailAndPassword(auth);


    const [signInWithGoogle] = useSignInWithGoogle(auth);
    const [user] = useAuthState(auth);
    const location = useLocation();
    const from = location?.state?.from?.pathname || '/';
    const navigate = useNavigate();

    //sign with Google
    const handleSign = () => {
        signInWithGoogle()
            .then(() => {
            })
    }

    //sign with email and password

    const handleEmail = e => {
        setEmail(e.target.value)
    }

    const handlePassword = e => {
        setPassword(e.target.value)
    }

    if (user) {
        navigate(from, {replace:true})
    }

  
 


    const handleOnSubmit = e => {

        signInWithEmailAndPassword(email, password)
            .then(() => {

            })
        e.preventDefault();
    }
    return (
        <div>
            <h2>Login page </h2>
            <div className='login-container'>
                <div>
                    <form onSubmit={handleOnSubmit}>
                        <input onBlur={handleEmail} type="email" name="" id="" placeholder='email' /> <br />
                        <input onBlur={handlePassword} type="password" name="" id="" placeholder='password' /> <br />
                       { 
                       loading && <p>loading..</p>
                       
                       }
                        <p style={{'color':'red'}}>{error?.message}</p>
                        <input style={{ 'background': 'aqua', 'color': 'black' }} type="submit" value="Login" /> <br />
                        <Link to='/register'> New User</Link>
                    </form>

                </div>

                <div>
                    <h2>login with Google</h2>
                    {
                        user?.uid ?
                            <button onClick={() => signOut(auth)} className='signOut-btn'>Sign Out</button>
                            :
                            <button onClick={handleSign} className='login-btn'>Sign With Google</button>
                    }
                </div>

            </div>
        </div>
    );
};

export default Login;