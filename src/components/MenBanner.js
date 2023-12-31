import React from 'react'
import './mensbanner.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar, faTags, faExchangeAlt } from '@fortawesome/free-solid-svg-icons'

const MenBanner = () => {
  return (
    <>
        <div className="menbannerwrapper relative isolate overflow-hidden bg-blue-100 sm:py-24 lg:py-6 my-10">
    <div className="bannercontainer flex justify-evenly">
    <div className='bannertxt  flex gap-3 flex-col font-semibold text-2xl text-orange-700'>
    <FontAwesomeIcon icon={faStar} />
      <p>Trending Styles From Top Brands</p>
    </div>
    <div   className='bannertxt flex gap-3 flex-col font-semibold text-2xl text-orange-700'>
    <FontAwesomeIcon icon={faTags} />
      <p>Best Prices on Top products</p>
    </div>
    <div  className='bannertxt flex gap-3 flex-col font-semibold text-2xl text-orange-700'>
    <FontAwesomeIcon icon={faExchangeAlt} />
     <p>Easy returns on Every Order</p> 
    </div>
      
    </div>
      
      <div className="absolute left-1/2 top-0 -z-10 -translate-x-1/2 blur-3xl xl:-top-6" aria-hidden="true">
        <div
          className="aspect-[1155/678] w-[72.1875rem] bg-gradient-to-tr from-[#ef5959] to-[#9089fc] opacity-60"
          style={{
            clipPath:
              'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
          }}
        />
      </div>
    </div>
    </>
  )
}

export default MenBanner