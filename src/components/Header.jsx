import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate, NavLink } from 'react-router-dom';
import { users } from '../redux/actions/users';

function Header() {
  const { user } = useSelector(state => state.userReducer);
  const [isShow, setIsShow] = useState(false);
  const [query, setQuery] = useState('');
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const genericHamburgerLine = `h-1 w-6 my-1 rounded-full bg-white transition ease transform duration-300 md:hidden`;

  const handleOnChange = (e) => {
    e.preventDefault();

    setQuery(e.target.value)
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate(`/search/${query}`, {state: `${query}`});

    setQuery('')
    setIsShow(false);
  }

  const handleOnClick = (e) => {
    e.preventDefault();

    setIsShow(!isShow)
  }

  const handleLogout = (e) => {
    e.preventDefault();
    dispatch(users({email: null, password: null, isLogin: false}))
    navigate('/')
  }
  
  return (
    <div className='w-full bg-black bg-opacity-80 mx-auto py-2 z-10 fixed'>
      <div className='w-[90%] mx-auto text-white flex items-center justify-between'>
        <div>
          <Link to='/'>
            <h1 className='text-3xl lg:text-4xl font-bold'>itsMuvis</h1>
          </Link>
        </div>
        <button
            className="flex flex-col h-10 sm:h-12 w-10 sm:w-12 justify-center items-center group md:hidden"
            onClick={() => {setIsShow(!isShow)}}
          >
            <div
              className={`${genericHamburgerLine} ${
                isShow
                  ? "rotate-45 translate-y-3 opacity-50 group-hover:opacity-100"
                  : "opacity-50 group-hover:opacity-100"
              }`}
            />
            <div
              className={`${genericHamburgerLine} ${
                isShow ? "opacity-0" : "opacity-50 group-hover:opacity-100"
              }`}
            />
            <div
              className={`${genericHamburgerLine} ${
                isShow
                  ? "-rotate-45 -translate-y-3 opacity-50 group-hover:opacity-100"
                  : "opacity-50 group-hover:opacity-100"
              }`}
            />
        </button>

        {/*Hidden, block when md*/}
        <div className='hidden md:block'>
          <ul className='flex gap-4'>
            <NavLink className='hover:-translate-y-[1px]' to='/'>Home</NavLink>
            <NavLink className='hover:-translate-y-[1px]' to='/top-rated'>Top Rated</NavLink>
            <NavLink className='hover:-translate-y-[1px]' to='/upcoming'>Upcoming</NavLink>
          </ul>
        </div>
        <div className='hidden md:flex gap-2'>
          <form onSubmit={handleSubmit}>
            <input className='md:w-60 lg:w-80 rounded-xl text-black focus:ring-black focus:border-black'  onChange={handleOnChange} type="text" placeholder='Search Movie Here...' />
          </form>
          {user.isLogin ? (
            <button onClick={handleLogout} className='bg-orange-500 px-5 text-xl text-white font-medium rounded-lg hover:bg-orange-600'>Logout</button>
          ) : (
            <button className='bg-orange-500 px-5 text-xl text-white font-medium rounded-lg hover:bg-orange-600'><Link to='/login'>Login</Link></button>
          )
          }
        </div>
        {/*Hidden, block when md*/}
      </div>

      {/*block, hidden when md*/}
      <div className={`md:hidden w-full mt-2 overflow-hidden bg-white absolute z-10 transition-all duration-100 ${
        isShow ? `h-auto py-4` : `h-0 py-0`
      }`}>
        <div className='w-[80%] mx-auto flex flex-col gap-2'>
          <form onSubmit={handleSubmit}>
            <input className='w-full rounded-xl text-black focus:ring-black focus:border-black'  onChange={handleOnChange} value={query} type="text" placeholder='Search Movie Here...' />
          </form>
          <ul className='w-full flex flex-col gap-4'>
            <li className='border py-2 rounded indent-2 bg-slate-300'>
              <button className='w-full text-start' onClick={handleOnClick}>
                <NavLink to='/'>Home</NavLink>
              </button>
            </li>
            <li className='border py-2 rounded indent-2 bg-slate-300'>
              <button className='w-full text-start' onClick={handleOnClick}>
                <NavLink to='top-rated'>Top Rated</NavLink>
              </button>
            </li>
            <li className='border py-2 rounded indent-2 bg-slate-300'>
              <button className='w-full text-start' onClick={handleOnClick}>
                <NavLink to='upcoming'>Upcoming</NavLink>
              </button>
            </li>        
          </ul>
        </div>
      </div>
      {/*block, hidden when md*/}
    </div>
  )
}

export default Header