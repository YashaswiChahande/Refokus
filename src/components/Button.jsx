import React from 'react'
import { IoIosReturnRight } from "react-icons/io";


function Button({ title = "Get Started" }) {
  return (
    <div className='min-w-40  px-3 py-2 bg-zinc-100 text-black rounded-full flex items-center justify-between border-b-[2px] border-zinc-700 ' >
      <span className='text-sm font-medium'>{title}</span>
      <IoIosReturnRight/>
    </div>
  )
}

export default Button
