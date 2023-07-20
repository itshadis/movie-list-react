import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import TopRated from './pages/TopRated';  
import Upcoming from './pages/Upcoming';
import NotFound from './pages/NotFound';  
import Detail from './pages/Detail';
import SearchResult from './pages/SearchResult';
import Login from './pages/Login';
import Stream from './pages/Stream';
import ProtectedRoute from './routes/ProtectedRoute';
import Unauthorized from './pages/Unauthorized';

function App() {
  return (
    <div  className='w-full h-full bg-sky-950'>
      <Routes>
        <Route path='/'>
          <Route index element={<Home />} />
          <Route path='/top-rated' element={<TopRated />} />
          <Route path='/upcoming' element={<Upcoming />} />
          <Route path='/search/:query' element={<SearchResult />} />
          <Route path='/detail/:id' element={<Detail />} />
        </Route>

        <Route element={<ProtectedRoute />}>
          <Route path='/stream/:query' element={<Stream />} />
        </Route>

        <Route>
          <Route path='/login' element={<Login />} />
        </Route>
        <Route path='*' element={<NotFound />} />
        <Route path='/unauthorized' element={<Unauthorized />} />
      </Routes>
    </div>
  );
}

export default App
