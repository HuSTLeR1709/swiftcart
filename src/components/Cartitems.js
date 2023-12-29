import React, { useContext } from 'react'
import { ShopContext } from './context/ShopContext'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus, faMinus } from '@fortawesome/free-solid-svg-icons';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './cartitems.css'

const Cartitems = () => {
    const {all_product, cartitems, removefromcart, addtocart} = useContext(ShopContext);
    const handleRemoveFromCart = (productId) => {
      removefromcart(productId);
      toast.warning('Removed from cart',{
        position:"bottom-center",
        className:"toast"
      });
    };
    
  return (
    <> 
    
        {all_product.map((e)=>{
            if(cartitems[e.id]>0)
            
            {
                return  <div className='cart-items w-full h-auto shadow-lg shadow-blue-100 mt-4 flex flex-row'>

                    <div className='cartitemimg w-44 h-auto overflow-hidden object-contain'><img src={e.image} className='object-scale-down w-5/6 h-full' alt='img'>
                 </img> 
                 </div>
                <div className='cartitemdesc flex flex-col gap-1'><p className='cartitemdescname text-lg font-semibold'>{e.name}</p>
                <p className='sizetxt font-semibold'>Size: M</p>
                <div className='flex'><p className='quantitytxt font-semibold'>Qantity: </p><button className='quantitytxt mx-2 text-xl font-semibold' onClick={()=>{handleRemoveFromCart(e.id)}}><FontAwesomeIcon icon={faMinus} /></button><p className='quantitytxt text-orange-600 text-xl'>{cartitems[e.id]}</p><button className='quantitytxt mx-2  font-semibold' onClick={()=>{addtocart(e.id)}}><FontAwesomeIcon icon={faPlus} /></button>
                </div>
                
                <p className='quantitytxt font-medium text-red-500 line-through'>{e.old_price}</p> <span className='quantitytxt font-medium text-blue-600'>{e.new_price}</span>
                <p className='quantitytxt text-orange-500 font-semibold'>Total Price : <span className='text-blue-500'>{e.new_price*cartitems[e.id]}</span>  </p>
                <button className='removebtn rounded-lg font-semibold text-red-600 p-1 hover:text-red-600' onClick={()=>{handleRemoveFromCart(e.id)}}>Remove <i class="far fa-trash-alt"></i></button>
                </div>
                </div>
            }
        })}
                
            
        
    </>
  )
}

export default Cartitems