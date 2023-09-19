import { useState } from "react"
import data from './Data.jsx'
import Tours from "./components/Tours"


function App() {
  const [tours, setTours]=useState(data);
  // removing Tours when the button is pressed 
  function removeTourHandler( id ){
  const newList=tours.filter((card)=>card.id!==id);
    setTours(newList);   
  }

  // When All tours Are Removed from UI 
  if(tours.length===0){
   return(
    <div className="flex flex-col justify-center items-center gap-3 mt-[20%]">
       <h2 className="text-2xl font-bold"> No Tour Left</h2>
       <button onClick={()=>setTours(data)}  className="bg-gray-900 py-3 px-10 text-white rounded-lg"> Refresh </button>
    </div>
   )
  }
  return (
   <div> 
   <Tours tours={tours} removeTourHandler={removeTourHandler}/>
    </div>
  )
}

export default App
