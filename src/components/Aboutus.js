import React from 'react'
import "./about.css"

const Aboutus = () => {
  return (
    <>
        <div className='aboutsec w-full h-auto flex justify-center items-center flex-col flex-wrap'>
        <div className='aboutwrapper text-2xl w-3/4 h-auto mt-20 flex flex-col gap-8  '>
        <div className='flex justify-center items-center'>
            <p className='abouthead text-4xl font-semibold'>About Us</p>
        </div>
            <p>Welcome to SwiftCart, where shopping meets swiftness! At SwiftCart, we believe in more than just transactions; we believe in transforming the way you experience online shopping. Our journey began with a simple idea – to provide a platform that marries speed and style, offering you an unparalleled shopping experience right at your fingertips.
            </p>
        <p className='aboutpara text-2xl '><span className='parahead font-semibold flex mb-4 text-orange-600'>Our Mission:</span>
         SwiftCart is on a mission to redefine the e-commerce landscape by bringing you the latest trends, high-quality products, and unbeatable deals in record time. We understand that in today's fast-paced world, your time is precious. That's why we've curated a selection of products that align with your lifestyle, allowing you to shop swiftly without compromising on style or substance.</p>
        <p className=' aboutpara text-2xl'><span className='parahead font-semibold flex mb-4 text-orange-600'>Join the SwiftCart Revolution:</span>

Whether you're a trendsetter, a tech enthusiast, or someone looking to elevate their everyday essentials, SwiftCart is your go-to destination. Join us in the SwiftCart revolution, where swiftness and style converge to redefine your online shopping experience.

<span className='lastthanks text-2xl font-semibold flex my-8 text-orange-600'>Thank you for choosing SwiftCart. Your journey to swift, stylish, and satisfying shopping starts here!</span></p>
        </div>
            </div>
    </>
  )
}

export default Aboutus