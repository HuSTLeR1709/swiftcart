import React from 'react'
import populermen from "./Assests/popularmen"
import Items from './Items'
import './popular.css'

const Popular = () => {
  return (
    <>
        <div className='popular w-full h-auto'>
        <div className='flex w-full justify-center flex-col items-center gap-3'>
            <h1 className='populartext text-5xl font-sm mt-14'> Popular in Men </h1>
            <div className='w-1/4 border-2 border-black'></div>
        </div>
        <div className='car-container w-full h-auto flex justify-center items-center flex-wrap gap-20 mt-10'>
        {populermen.map((item,i)=>{ 
          return <Items key={i} id={item.id} name={item.name} old_price={item.old_price} new_price={item.new_price} image={item.image}></Items>

        })}
        


        
        </div>
        


        </div>
    </>
  )
}

export default Popular