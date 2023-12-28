import React from 'react'

const Breadcrum = (props) => {
    const {product} = props;
  return (
    <>
        <div className='breadcrum h-auto ml-4 mt-2 font-semibold'>
        Home <i class="fas fa-chevron-right"></i> Shop <i class="fas fa-chevron-right"></i> {product.category} <i class="fas fa-chevron-right"></i> {product.name}


        </div>
    </>
  )
}

export default Breadcrum