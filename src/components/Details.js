import React, { useContext } from 'react'
import { toast } from 'react-toastify';
import { ShopContext } from './context/ShopContext';

const Details = (props) => {
    const {product} = props;
    const {addtocart} = useContext(ShopContext);

    const handleAddToCart = (productId) => {
        // Call your add to cart function
        addtocart(productId);
    
        // Show a toast notification
        toast.success('Item Added to Cart', {
          position: 'top-right',
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
        <div className='w-full h-screen flex p-4 gap-1 justify-center items-center'>
        <div className='w-11/12 flex p-4 gap-1 justify-center items-center'>
            <div className='lefttside w-2/5 h-auto flex flex-col gap-4'>
            <div className='w-full h-3/5 overflow-hidden shadow-lg shadow-blue-400 items-center flex justify-center'><img src={product.image} alt='productimg'></img>

        </div>
        <div className='w-full h-1/5 flex gap-1 '>
        <div className='w-1/3 h-full  overflow-hidden'><img src={product.image} alt='productimg'></img></div>
        <div className='w-1/3 h-full  overflow-hidden'><img src={product.image} alt='productimg'></img></div>
        <div className='w-1/3 h-full  overflow-hidden'><img src={product.image} alt='productimg'></img></div>

        </div>
        </div>
        <div className='rightside h-auto w-full p-10 flex flex-col gap-8'>
        <div><h1 className='text-3xl'>{product.name}</h1></div>
        <div>
        <p className='price text-3xl font-medium text-red-500 line-through mb-4'>{product.old_price}</p> <span className='font-medium text-3xl text-blue-600'>{product.new_price}</span>
        </div>
        <div>
            <p className='font-semibold text-lg'>21 Ratings<span className='text-blue-600 ml-6'>4.1/5</span></p> 
        </div>
        <div className='sizes flex gap-3'>
            <div className='border-2 border-black w-10 h-10 cursor-pointer flex justify-center items-center hover:border-blue-600 hover:text-blue-600 font-semibold'>XS</div>
            <div className='border-2  border-black w-10 h-10 cursor-pointer flex justify-center items-center hover:border-blue-600 hover:text-blue-600 font-semibold'>S</div>
            <div className='border-2 border-black w-10 h-10 cursor-pointer flex justify-center items-center hover:border-blue-600 hover:text-blue-600 font-semibold'>M</div>
            <div className='border-2 border-black w-10 h-10 cursor-pointer flex justify-center items-center hover:border-blue-600 hover:text-blue-600 font-semibold'>L</div>
            <div className='border-2 border-black w-10 h-10 cursor-pointer flex justify-center items-center hover:border-blue-600 hover:text-blue-600 font-semibold'>XL</div>
            <div className='text-blue-500 ml-10 mt-3 underline cursor-pointer'>Size Chart</div>
        </div>
        <div>
            <button className=' px-16 py-2 text-xl font-semibold  bg-yellow-400 hover:bg-blue-300' onClick={()=>{handleAddToCart(product.id)}}>-Add to Cart-</button>
        </div>
        <div>
            <p className='text-xl'>Seller<span className='text-blue-400 text-lg ml-10 cursor-pointer'> TradeFashionLtd. </span></p>
        </div>
        <div className='flex justify-between text-xl'>
            <p>Have any questions about this product?</p>
            <button className='border-2 px-12 py-1  bg-yellow-300 hover:bg-blue-300'>Ask your questions</button>
        </div>
        <div>

        </div>
        
        </div>
        </div>
        
        

        </div>
    </>
  )
}

export default Details