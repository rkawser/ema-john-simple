import React, { useState } from 'react';
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { Link, useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';

const Register = () => {

    const [name , setName]=useState('');
    const [email, setEmail]= useState('');
    const [password, setPassword]= useState('');
    const [confirm, setConfirm]=useState('');
    const [createUserWithEmailAndPassword,user] = useCreateUserWithEmailAndPassword(auth)

     const navigate = useNavigate();

    const handleName =(e)=>{
     setName(e.target.value)
    }

    const handleEmail =(e)=>{
        setEmail(e.target.value);
    }
    const handlePassword =(e)=>{
        setPassword(e.target.value);
    }

    const handleconfirmPassword =e=>{
        setConfirm(e.target.value);
    }

    const handleSubmit =(e)=>{
        if(password !== confirm){
            alert('did not match your password ')
            return;
        }
        createUserWithEmailAndPassword(email,password)
        .then(()=>{ })
        e.preventDefault()
    }

    if (user) {
        navigate('/shops')
    }

    return (
        <div>
            <h2>Register page</h2>

            <form onSubmit={handleSubmit}>
                <input onBlur={handleName} type="name" name="" id="" placeholder='your name' /> <br />
                <input onBlur={handleEmail} type="email" name="" id="" placeholder='email' /> <br />
                <input onBlur={handlePassword} type="password" name="" id="" placeholder='password' /> <br />
                <input onBlur={handleconfirmPassword} type="password" name="" id="" placeholder='confirm password' /> <br />
                <input style={{ 'background': 'aqua', 'color': 'black' }} type="submit" value="Register" /> <br />
                <Link to='/login'> Alrady Register</Link>
            </form>

        </div>
    );
};

export default Register;