import React from 'react'

function NotFound() {
  return (
    <div className='w-full h-screen flex flex-col gap-2 items-center justify-center absolute z-10'>
      <h1 className='text-5xl font-extrabold'>404</h1>
      <h1 className='text-4xl font-semibold'>Ups.. Page Not Found</h1>
    </div>
  )
}

export default NotFound