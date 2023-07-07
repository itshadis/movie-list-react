import React from 'react'
import { Link } from 'react-router-dom';
import fb from '../asset/facebook.svg';
import ig from '../asset/instagram.svg';
import tw from '../asset/twitter.svg';

function Footer() {
  return (
    <div className='w-full bg-black py-5'>
      <div className='w-[90%] mx-auto text-white py-5'>
        <div className='flex flex-col md:flex-row gap-4 justify-between'>
          <div className='w-full md:w-1/2'>
            <h1 className='text-3xl font-bold'>
              Stream a hundreds movies or series aroung the world. Enjoy the the features watch High Quility videos
            </h1>
          </div>
          <div className=' flex flex-col gap-2 justify-between '>
            <div className='flex gap-4 text-slate-300'>
              <Link to='/' className='hover:scale-105 hover:text-white'>Home</Link>
              <span>/</span>
              <Link to='/top-rated' className='hover:scale-105 hover:text-white'>Top Rated</Link>
              <span>/</span>
              <Link to='/upcoming' className='hover:scale-105 hover:text-white'>Upcoming</Link>
            </div>
            <div className='flex gap-4 md:justify-end items-center'>
              <span><img className='w-8' src={ig} alt="" /></span>
              <span><img className='w-11' src={fb} alt="" /></span>
              <span><img className='w-8' src={tw} alt="" /></span>
            </div>
          </div>
        </div>
        <div className='flex justify-between pt-10 text-slate-300'>
          <ul className='flex gap-4'>
            <li>Privacy policy</li>
            <li>Term of services</li>
            <li>Languages</li>
          </ul>
          <span>&copy;2023</span>
        </div>
      </div>
    </div>
  );
}

export default Footer;