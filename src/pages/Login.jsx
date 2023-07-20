import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { users } from '../redux/actions/users';
import { useNavigate } from 'react-router-dom';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault()
    dispatch(users({email: email, password: password, isLogin: true}))
    navigate('/');
  }

  return (
    <div className='w-full h-screen flex justify-center items-center gap-4'>
      <form onSubmit={handleSubmit} className='flex flex-col gap-4 p-4 border rounded-md'>
        <h1 className='text-center text-2xl text-white font-bold pb-2'>Login</h1>
        <div className='flex flex-col gap-1'>
          <label className='text-white' htmlFor="name">Username</label>
          <input onChange={e=> setEmail(e.target.value)} value={email} className='w-60 h-10 rounded' type="email" required />
        </div>
        <div className='flex flex-col gap-1'>
          <label className='text-white' htmlFor="name">Password</label>
          <input onChange={e=> setPassword(e.target.value)} value={password} className='w-60 h-10 rounded' type="password" required />
        </div>
        <button type='submit' className='w-full h-10 bg-sky-500 text-white font-semibold rounded hover:bg-sky-600 focus:bg-sky-700'>Login</button>
      </form>
    </div>
  )
}

export default Login;