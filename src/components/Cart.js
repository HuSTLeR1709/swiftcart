import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import Cartitems from './Cartitems'
import { toast } from 'react-toastify';
import './Cart.css'
import { ShopContext } from './context/ShopContext'

const Cart = () => {
  const {gettotalcost, totalcartitems} = useContext(ShopContext);
  const handleorderbutton = () =>{
    toast.success("Order Placed Successfully",{
      autoClose : 2000,
      position: "bottom-center",
    })

  }
  return (
    
    <>
    <div className='wrapper w-full h-screen'>
      <div className='cart-wrapper w-full h-full flex justify-center gap-3'>
        <div className='cart-container w-3/5 h-full mt-8'>
        <div className='carthead text-2xl ml-5 font-semibold'> Cart Items</div>
        <div className='itemholder overflow-y-scroll h-5/6 w-full'>
        <Cartitems/>
       
        
    
        </div>
       
        

        </div>

        <div className='itemtotal w-1/4 h-auto mt-28 flex flex-col  items-center shadow-blue-300 gap-4 shadow-lg'>
            <div className='itemtotalwrapper h-1/6 w-5/6  flex flex-col items-center justify-center mt-4 gap-4 '>
                <p className='text-xl font-medium text-center'> Price Details </p>
                <div className='w-5/6 border-2 border-dashed'></div>

                </div>
                <div className=' w-5/6 h-auto flex justify-between'>
                <p className='text-xl font-medium'>Total Items</p>
                <p className='text-xl font-medium text-blue-500'>{totalcartitems()}</p>

                </div>
                <div className=' w-5/6 h-auto flex justify-between'>
                <p className='text-xl font-medium'>Items Price</p>
                <p className='text-xl font-medium text-green-500'>{gettotalcost()}</p>

                </div>
                <div className=' w-5/6 h-auto flex justify-between'>
                <p className='text-xl font-medium'>Delivery Charges</p>
                <p className='text-xl font-medium text-orange-400 line-through'>50</p>

                </div>
                <div className='w-5/6 border-2 border-dashed'></div>

                <div className=' w-5/6 h-auto flex justify-between'>
                <p className='text-xl font-medium'>Total Amount</p>
                <p className='text-xl font-medium text-green-500'>{gettotalcost()}</p>

                </div>

                <button className='orderbtn w-5/6 border-2 p-1 text-xl font-medium rounded-3xl mt-10 bg-red-300 shadow-lg shadow-blue-500 hover:bg-blue-300' onClick={()=>{handleorderbutton()}}> Place Order </button>

            </div>
            <div>
        </div>

        </div>
        
    </div>
        
    </>
  )
}

export default Cart