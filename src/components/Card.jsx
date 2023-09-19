import React, { useState } from 'react'

function Card({image, id, name ,info,price,removeTourHandler}) {
    const [readMore, setReadMore]=useState(true)
     function readmoreHandler(){
              setReadMore(!readMore)
     }


  return (
    <div className='h-[500px]  flex flex-wrap flex-col justify-center items-center gap-3 rounded-lg'>
    <div className='flex flex-col justify-center items-center '>
    <img src={image} alt='' className='h-[250px] w-[350px]'/>
    </div>
    <div className='w-[350px] font-bold'>
        <h2 className='text-green-600 '> ₹ {price} </h2>
        <h2> {name}</h2>
    </div>
    <div className='w-[350px]'>
        <p> {readMore ? info.slice(0,150):info}  <span className='text-blue-700 cursor-pointer' onClick={readmoreHandler}> {readMore?"...Read More" : "show less"} </span></p>
    </div>
    <div>
        <button type='submit' onClick={()=>removeTourHandler(id)} className='bg-red-500 w-[350px] py-2 rounded-lg text-white font-semibold text-lg mt-1 hover:bg-red-900' > Not Intrested </button>
    </div>

    </div>
  )
}

export default Card