import React, {useContext} from 'react'
import Items from './Items'
import { ShopContext } from './context/ShopContext'
import './womensection.css'

const WomenSection = (props) => {
  const {all_product}= useContext(ShopContext);
  return (
    <>
        <div className='womensmain w-full h-auto flex flex-col justify-center items-center'>
        <div className='flex w-full justify-center flex-col items-center gap-5'>
            <h1 className='womenshead text-5xl font-sm mt-8 text-blue-700'> Welcome to Women's Section </h1>
            <div className='w-1/4 border-2'></div>
        </div>
        <div className='card-container w-full h-auto flex flex-wrap justify-center items-center mt-10 gap-4'>
        {all_product.map((item,i)=>{
          if(props.category===item.category)
          return <Items key={i} id={item.id} name={item.name} image={item.image} old_price={item.old_price} new_price={item.new_price}/>
        })}
        </div>
        </div>
    </>
  )
}

export default WomenSection