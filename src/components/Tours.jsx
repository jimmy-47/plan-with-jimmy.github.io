import React from 'react'
import Card from './Card'

function Tours(props) {
    function removeTourHandler(id){
        console.log(id);
        props.removeTourHandler(id);
    }
  return (
    <div>
       <div className='flex justify-center items-center'>
       <h1 className='text-center font-bold text-xl mt-3 mb-3 border-dotted border-4 border-red-600 rounded-md w-[300px] py-3 px-3'> Plan With Jimmy </h1>
       </div>

       <div>
          {
           props.tours.map((tour)=>{
            return <Card {...tour} key={tour.id} removeTourHandler={removeTourHandler}/>
             })
          }
       </div>
    </div>
  )
}

export default Tours