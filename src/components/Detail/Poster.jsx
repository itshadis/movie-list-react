import { useNavigate } from "react-router-dom"
import { useSelector } from "react-redux";

const imgURL = import.meta.env.VITE_IMGURL;

function Poster({movieDetail}) {
  const { user } = useSelector(state => state.userReducer);
  const navigate = useNavigate()
  const handleOnClick = () => {
    user.isLogin ? navigate(`/stream/${movieDetail.title}`) : navigate('/unauthorized')
  }

  return (
    <div className='w-40 sm:w-64 drop-shadow-2xl -translate-y-20 brightness-90'>
      <img className='rounded-xl' src={imgURL+movieDetail.poster_path} alt="" />
      <div className='flex justify-between'>
        <button onClick={handleOnClick} className='px-4 py-2 mt-2 bg-orange-500 rounded text-white text-sm font-semibold hover:bg-orange-600'>Stream Movie</button>
        <button className='px-4 py-2 mt-2 bg-sky-500 rounded text-white text-sm font-semibold hover:bg-sky-600'>Add Watchlist</button>
      </div>
    </div>
  );
}

export default Poster;