import React, { useContext, useState } from 'react'
import "./Navbar.css"
import { Link } from 'react-router-dom';
import { ShopContext } from './context/ShopContext';

const Navbar = () => {
  const {totalcartitems} = useContext(ShopContext);
  const [menu, setMenu] = useState('home')
  return (
    <>
        <div className='nav w-full h-auto flex flex-row justify-between items-center p-2 px-4'>
        <div className='icon font-semibold text-lg'><Link to='/'>-SwiftCart-</Link></div>
        <div className='filters flex flex-row gap-10'> 
            <p className='hover:text-orange-600 cursor-pointer font-medium' onClick={()=>setMenu("home")}><Link to='/'>Home</Link>  </p>
            <p className='hover:text-orange-600 cursor-pointer font-medium' onClick={()=>setMenu("mens")}><Link to='/mens'>Men</Link>  </p>
            <p className='hover:text-orange-600 cursor-pointer font-medium' onClick={()=>setMenu("womens")}><Link to='/womens'>Women</Link>  </p>
            <p className='hover:text-orange-600 cursor-pointer font-medium' onClick={()=>setMenu("kids")}><Link to='/kids'>Kids</Link>  </p>
        </div>
        <div className='searchbox flex gap-3'>
          <input type='text' className='border-0 focus:outline-none w-11/12 rounded-sm bg-transparent' placeholder='Search items...'></input>
          <button><i class="fas fa-search hover:text-orange-500"></i></button>
        </div>
        <div className='buttonholder flex gap-8'>
        <button className='login border-2 p-1 border-white rounded-3xl px-4 shadow-md border-double shadow-blue-400 hover:text-orange-500'><Link to='/login'>Log in</Link></button>
            <button className='font-medium hover:text-orange-500'><Link to='/cart'><i class="fas fa-shopping-cart"></i></Link><span className='absolute text-red-600 -translate-y-3'>{totalcartitems()}</span> </button>
            <button className='menubutton mt-1'><i class="fas fa-bars"></i></button>
        </div>

        </div>
    </>
  )
}

export default Navbar