import React, { useContext, useState } from 'react';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Logo from '../../assets/images/olx-logo-vector.png';
import './Login.css';
import { FireBaseContext } from '../../store/Context';
import { useNavigate, Link } from 'react-router-dom';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { auth } = useContext(FireBaseContext);
  const navigate = useNavigate();

  const validateEmail = (email) => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(String(email).toLowerCase());
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const trimmedEmail = email.trim();
    const trimmedPassword = password.trim();

    if (!trimmedEmail) {
      toast.error('Email is required');
      return;
    }
    if (!validateEmail(trimmedEmail)) {
      toast.error('Invalid email format');
      return;
    }
    if (!trimmedPassword) {
      toast.error('Password is required');
      return;
    }

    try {
      await auth.signInWithEmailAndPassword(trimmedEmail, trimmedPassword);
      toast.success('Login successful!');
      navigate('/');
    } catch (error) {
      toast.error(error.message);
    }
  };

  return (
    <div className='loginParentDiv'>
      <ToastContainer />
      <img width='200px' height='200px' src={Logo} alt='OLX Logo' />
      <form onSubmit={handleSubmit}>
        <label htmlFor='email'>Email</label>
        <br />
        <input
          className='input'
          type='email'
          id='email'
          name='email'
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <br />
        <label htmlFor='password'>Password</label>
        <br />
        <input
          className='input'
          type='password'
          id='password'
          name='password'
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <br />
        <br />
        <button type='submit'>Login</button>
      </form>
      <Link to='/signup'>Signup</Link>
    </div>
  );
};

export default Login;
