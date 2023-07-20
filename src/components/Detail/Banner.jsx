const largeImgURL = import.meta.env.VITE_LARGE_IMAGE_URL;

function Banner({movieDetail}) {
  
  return (
    <div className='w-full lg:h-[500px]'>
      <img src={largeImgURL+movieDetail.backdrop_path}  alt="" />
    </div>
  );
}

export default Banner;