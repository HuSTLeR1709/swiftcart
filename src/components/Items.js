import React from 'react'
import { Link } from 'react-router-dom'
import './itmes.css';

const Items = (props) => {

  return (
    <>
   
      <div className='card h-3/4 w-1/4 cursor-pointer hover:scale-105 transition-all duration-600 ease-in-out'>
       <Link to={`/product/${props.id}`}><div className='image w-full h-[380px] overflow-hidden object-contain' onClick={window.scrollTo(0,0)}> 
        <img src={props.image} alt='firstpic' loading='lazy'></img>

        </div></Link>
        <p className='name text-xl font-medium'>{props.name}</p>

        <p className='itemprice font-medium text-red-500 line-through'>{props.old_price}</p> <span className='font-medium text-blue-600'>{props.new_price}</span>

        </div>
    
        
    </>
  )
}

export default Items