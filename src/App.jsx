import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Home from './pages/Home';
import TopRated from './pages/TopRated';  
import Upcoming from './pages/Upcoming';
import NotFound from './pages/NotFound';  
import Detail from './pages/Detail';
import Footer from './components/Footer';
import SearchResult from './pages/SearchResult';

function App() {
  return (
    <div  className='w-full h-full bg-sky-950'>
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/detail/:id' element={<Detail />} />
        <Route path='/top-rated' element={<TopRated />} />
        <Route path='/upcoming' element={<Upcoming />} />
        <Route path='/search/:query' element={<SearchResult />} />
        <Route path='*' element={<NotFound />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App
