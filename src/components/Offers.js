import React from 'react'
import './offer.css'
const Offers = () => {
  return (
    <>
        <div className='w-full h-auto flex justify-center items-center'>

        <div className='offer w-4/5 h-4/5 flex justify-evenly items-center py-16 mt-10'>
        <div className='left w-1/3 h-4/5 flex justify-center items-center flex-col gap-10 '>
        <p className='topline text-5xl'>Top Brands You can't resist.</p>
        <button className='browsebutton text-xl font-medium p-2 px-6 bg-yellow-400 hover:bg-red-300 '>-Browse-</button>

        </div>

        <div className='right w-1/3 h-4/5 flex justify-center items-center'>
        <p className='unboxtext text-5xl font-light'>"Unbox Happiness: Limited-Time Offers That Bring Joy to Your Cart!"</p>

        </div>

        </div>

        </div>
    </>
  )
}

export default Offers