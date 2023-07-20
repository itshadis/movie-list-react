import React from 'react'
import { Link } from 'react-router-dom';

function Unauthorized() {
  return (
    <div className='w-full h-screen bg-white flex flex-col justify-center items-center gap-2'>
      <h1 className='text-3xl font-semibold'>Unauthorized</h1>
      <h2 className='text-xl'>You have to login to access</h2>
      <Link className='py-2 px-4 bg-black text-white rounded' to='/login'>Go to login page</Link>
    </div>
  )
}

export default Unauthorized;