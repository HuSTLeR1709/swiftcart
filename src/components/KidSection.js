import React, { useContext } from 'react'
import Items from './Items'
import { ShopContext } from './context/ShopContext'
const KidSection = (props) => {
  const {all_product}= useContext(ShopContext);
  return (
    <>
        <div className=' w-full h-auto'>
        <div className='flex w-full justify-center flex-col items-center gap-3'>
            <h1 className='text-5xl font-sm mt-8 text-blue-700'> Welcome to Kids Section </h1>
            <div className='w-1/4 border-2'></div>
        </div>
        <div className='car-container w-full h-auto flex flex-wrap justify-center items-center gap-20 mt-10'>
        {all_product.map((item,i)=>{
          if(props.category===item.category){
            return <Items key={i} id={item.id} name={item.name} image={item.image} old_price={item.old_price} new_price={item.new_price}/>
          }
          else{
          return null;
          }
          
        })}
        </div>

        </div>
    </>
  )
}

export default KidSection