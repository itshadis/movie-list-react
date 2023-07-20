import React from 'react'
import Hero from '../components/Home/Hero';
import TrendingToday from '../components/Home/TrendingToday';
import Series from '../components/Home/Series';
import PageLayout from '../layout/PageLayout';

function Home() {
  
  return (
    <PageLayout>
      <Hero />
      <div className='bg-gradient-to-b from-black' >
        <TrendingToday />
        <Series />
      </div>
      <hr />
    </PageLayout>
  );
}

export default Home;