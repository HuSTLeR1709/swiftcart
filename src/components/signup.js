import React from 'react'
import { Link } from 'react-router-dom';

const Signup = () => {
  return (
    <>
        <div className='w-full h-screen flex justify-center items-center'>
        <div className='formcontainer w-2/5 h-5/6 shadow-2xl shadow-blue-300 rounded-2xl items-center flex flex-col'>
        <div className='flex justify-center text-3xl font-medium mt-5'>
            <p>Sign Up</p>
        </div>
        <div className=' w-4/5 h-3/5 flex flex-col gap-3 items-center'>
        <div className='w-full flex flex-col items-center mt-14 gap-4'>
            <p className='text-xl'> Email:</p>
        <input type='text' className='border-2 w-4/5 shadow-lg'></input>
        <p className='text-xl'> Phone : </p>
        <input type='text' className='border-2 w-4/5 shadow-lg'></input>
        <p className='text-xl'> Enter Password : </p>
        <input type='text' className='border-2 w-4/5 shadow-lg'></input>
        <p className='text-xl'>Re-Enter Password : </p>
        <input type='text' className='border-2 w-4/5 shadow-lg'></input>
        <button className=' w-4/5 mt-4  bg-red-300 hover:bg-blue-300 p-1 text-xl rounded-xl shadow-lg shadow-blue-300'> <Link to='/'>-Sign Up-</Link> </button>
        <div><Link to='/login'><p className='text-xl text-blue-600 underline cursor-pointer'>Already a user? Log in</p></Link></div>
        </div>

        </div>
        </div>

        </div>
    </>
  )
}

export default  Signup