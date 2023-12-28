import React from 'react'
import { useContext } from 'react';
import { ShopContext } from './context/ShopContext';
import { useParams } from 'react-router-dom';
import Breadcrum from './Breadcrum';
import Details from './Details';
import Features from './Features';
import RelatedProducts from './RelatedProducts';

const Itemdetails = () => {
    const {all_product}= useContext(ShopContext);
    const {productId} = useParams();
    const product = all_product.find((e)=> e.id === Number(productId));

  return (
    <>
    <div className='w-full h-auto'>
        <Breadcrum product={product}/>
        <Details product={product}/>
        <Features/>
        <RelatedProducts/>
    </div>

           
    </>
  )
}

export default Itemdetails