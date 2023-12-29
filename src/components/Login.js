import React from 'react'
import { Link } from 'react-router-dom';
import './login.css'

const Login = () => {
  return (
    <>
        <div className='loginwrapper w-full h-screen flex justify-center items-center'>
        <div className='formcontainer w-2/5 h-4/5 shadow-2xl shadow-blue-300 rounded-2xl justify-center items-center flex flex-col'>
        <div className='flex justify-center text-3xl font-medium'>
            <p>Log In</p>
        </div>
        <div className=' w-4/5 h-3/5 mt-5 flex flex-col gap-3 items-center'>
        <div className='username w-full flex flex-col items-center mt-14 gap-6'>
            <p className='text-xl'> Username :</p>
        <input type='text' className='border-2 w-4/5 shadow-lg'></input>
        <p className='text-xl'> Password :</p>
        <input type='text' className='border-2 w-4/5 shadow-lg'></input>
        <button className=' w-4/5 mt-4  bg-red-300 hover:bg-blue-300 p-1 text-xl rounded-xl shadow-lg shadow-blue-300'><Link to='/'> -Log In-</Link> </button>
        </div>

        </div>
        <div className='w-full h-1/6 flex justify-evenly items-center'>
        <p className='text-lg text-blue-500 hover:text-orange-400 cursor-pointer '><Link to='/signup'>New User? Sign up</Link></p>
        <p className='text-lg text-blue-500 hover:text-orange-400 cursor-pointer'>Forgot Password?</p>

        </div>
        </div>
        
        

        </div>
    </>
  )
}

export default Login