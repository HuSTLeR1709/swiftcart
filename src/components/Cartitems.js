import React, { useContext } from 'react'
import { ShopContext } from './context/ShopContext'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus, faMinus } from '@fortawesome/free-solid-svg-icons';
const Cartitems = () => {
    const {all_product, cartitems, removefromcart, addtocart} = useContext(ShopContext);
  return (
    <> 
    
        {all_product.map((e)=>{
            if(cartitems[e.id]>0)
            {
                return  <div className='cart-items w-full h-auto shadow-lg shadow-blue-100 mt-4 flex flex-row'>

                    <div className='itemimg w-44 h-auto overflow-hidden object-contain'><img src={e.image} className='object-scale-down w-5/6 h-full' alt='img'>
                 </img> 
                 </div>
                <div className='itemdesc flex flex-col gap-1'><p className='text-lg font-semibold'>{e.name}</p>
                <p className='font-semibold'>Size: M</p>
                <div className='flex'><p className='font-semibold'>Qantity: </p><button className='mx-2 text-xl font-semibold' onClick={()=>{removefromcart(e.id)}}><FontAwesomeIcon icon={faMinus} /></button><p className='text-orange-600 text-xl'>{cartitems[e.id]}</p><button className='mx-2  font-semibold' onClick={()=>{addtocart(e.id)}}><FontAwesomeIcon icon={faPlus} /></button>
                </div>
                
                <p className='price font-medium text-red-500 line-through'>{e.old_price}</p> <span className='font-medium text-blue-600'>{e.new_price}</span>
                <p className='text-orange-500 font-semibold'>Total Price : <span className='text-blue-500'>{e.new_price*cartitems[e.id]}</span>  </p>
                <button className='removebtn rounded-lg font-semibold text-red-600 p-1 hover:text-red-600' onClick={()=>{removefromcart(e.id)}}>Remove <i class="far fa-trash-alt"></i></button>
                </div>
                </div>
            }
        })}
                
            
        
    </>
  )
}

export default Cartitems