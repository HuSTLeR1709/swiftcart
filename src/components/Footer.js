import React from 'react'
import './footer.css'
import { Link } from 'react-router-dom'
const Footer = () => {
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
                <p className='hover:text-orange-600'>FAQ</p>
                <p className='hover:text-orange-600'>Terms of use</p>
                <p className='hover:text-orange-600'>Payments</p>
                <p className='hover:text-orange-600'>Shipping</p>
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