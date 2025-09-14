import React from 'react'

export default function Footer() {
   const currentYear = new Date().getFullYear();
  return (
    <div className='bg-black px-5 lg:px-28 py-3 lg:py-6 flex items-center justify-between mt-16'>
      <img className='h-5 lg:h-9' src="/assets/signature.png" alt="Logo" />

      <div className='text-white lg:font-semibold lg:text-sm font-normal text-[10px] text-right lg:space-y-3'>
        <p>&copy; {currentYear}. All rights reserved.</p>
        <p>Made by: Rushil Sharma</p>
      </div>
    </div>
  )
}
