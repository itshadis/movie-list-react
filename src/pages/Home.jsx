import React from 'react'
import Hero from '../components/Home/Hero';
import TrendingToday from '../components/Home/TrendingToday';
import Series from '../components/Home/Series';

function Home() {
  return (
    <>
      <Hero />
      <div className='bg-gradient-to-b from-black' >
        <TrendingToday />
        <Series />
      </div>
      <hr />
    </>
  );
}

export default Home;