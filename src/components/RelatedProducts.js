import React, { useContext } from 'react'
import data_product from './Assests/data'
import Items from './Items'
import { ShopContext } from './context/ShopContext'

const RelatedProducts = () => {
  const {all_product} = useContext(ShopContext);
  const lastindex = 5;
  const subarray = all_product.slice(0,lastindex);
  return (
    <>
        <div className='w-full h-auto'>
        <h1 className='text-4xl font-bold tracking-wide text-center mb-8'>Related Products</h1>

        <div className='h-auto w-full flex flex-wrap gap-2 justify-center items-center'>
        {subarray.map((item,i)=>{
            return <Items key={i} id={item.id} name={item.name} image={item.image} old_price={item.old_price} new_price={item.new_price}/>
        })}

        </div>

        </div>
    </>
  )
}

export default RelatedProducts