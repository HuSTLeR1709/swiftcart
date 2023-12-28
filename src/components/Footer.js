import React from 'react'
import { toast } from 'react-toastify';
import './footer.css'
import { Link } from 'react-router-dom'
const Footer = () => {
  const handlepages = () => {
    // Call your add to cart function
    

    // Show a toast notification
    toast.error('Will be Added Soon', {
      position: 'top-center',
      autoClose: 3000, // Time in milliseconds
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      progressBar:{
        style:{
        background:"blue",
      }
    }
    });
  };
  return (
    <>
        <div className='footer w-full h-auto'>
        <div>
            <p className='footername text-4xl text-center'> -SwiftCart- </p>
        </div>
        <div className='links flex flex-row justify-between items-center mt-10 mx-5 py-5'>
            <div className='tags flex text-xl gap-8 '>
                <p className='hover:text-orange-600'><Link to='/'>Home</Link></p>
                <p className='hover:text-orange-600'><Link to='/about' onClick={window.scrollTo(0,0)}>About us</Link></p>
                <p className='hover:text-orange-600'><Link to='/ourteam'>Our Team</Link></p>
                <p className='hover:text-orange-600' onClick={()=>{handlepages()}}>FAQ</p>
                <p className='hover:text-orange-600' onClick={()=>{handlepages()}}>Terms of use</p>
                <p className='hover:text-orange-600' onClick={()=>{handlepages()}}>Payments</p>
                <p className='hover:text-orange-600' onClick={()=>{handlepages()}}>Shipping</p>
            </div>
            <div className='icon text-3xl flex gap-8'>
            <i class="fab fa-instagram"></i>
            <i class="fab fa-whatsapp"></i>
            <i class="fab fa-facebook-f"></i>
            <i class="fab fa-twitter"></i>
            <i class="fab fa-youtube"></i>
            <i class="fas fa-envelope"></i>
            </div>
        </div>
        <div className='copyright'>
         <p className='text-center py-2 text-xl'>Copyright All rights Reserved 2024</p> 
        </div>

        </div>
    </>
  )
}

export default Footer