import React from 'react'
import new_collections from './Assests/new_collections'
import Items from './Items'

const Newcollection = () => {
  return (
    <>
        <div className='newcollection w-full h-auto'>
        <div className='flex w-full justify-center flex-col items-center gap-3 mb-8'>
            <h1 className='newtext text-5xl font-sm mt-14'> New Collections </h1>
            <div className='w-1/4 border-2 border-black'></div>
        </div>
        <div className='car-container w-full h-auto flex justify-center items-center flex-wrap gap-20'>
        {new_collections.map((item,i)=>{
          return <Items key={i} id={item.id} name={item.name} image={item.image} old_price={item.old_price} new_price={item.new_price}/>
        })}

        </div>

        </div>
    </>
  )
}

export default Newcollection