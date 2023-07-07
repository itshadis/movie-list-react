import React from 'react'

const imgURL = import.meta.env.VITE_IMGURL;

function Artist({caster}) {

  return (
    <>
    <div className='w-full'>
        <div className='w-[90%] mx-auto text-white pb-20'>
          <h2 className='text-xl font-bold mb-4'>Caster</h2>
            <div className='grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4'>
              {caster.map(caster => (
                <div key={caster.id} className='flex gap-3'>
                  <img className='w-20 rounded text-xs' src={imgURL+caster.profile_path} alt="caster" />
                  <div>
                    <p className='text-sm font-bold'>{caster.name}</p>
                    <p className='text-slate-300 text-xs'>{caster.character.substring(0, 20)}</p>
                  </div>
                </div>
              ))} 
            </div>
        </div>
      </div>
    </>
  )
}

export default Artist;