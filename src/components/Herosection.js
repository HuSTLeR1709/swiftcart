import React from 'react'
import './Herosection.css'
const Herosection = () => {
  return (
    <>
        <div className='herosection h-screen w-full flex'>
        <div className='leftpart w-1/2 h-full flex items-center flex-col justify-center'>
        <div className='w-1/2 flex gap-4 flex-col'>
            <p className='sitename text-7xl'>SwiftCart:</p>
            <p className='desc text-5xl'>
           Where Speed Meets Style in Every Click.
            </p>
            <button className='button w-1/2 bg-yellow-400 mt-9 hover:bg-red-300 text-2xl font-medium p-2'>
            -New Arrivals-
        
            </button>
        </div>
        
        </div>
        <div className='rightpart w-1/2 h-full flex justify-center'>
        <img src='./images/heroimage.png' alt='heroimage' className='object-contain'></img>


        </div>

        </div>
    </>
  )
}

export default Herosection