import React from 'react'
import logo from '../assets/logo.svg'
import Button from './Button'

function Navbar() {
  return (
    <div className='max-w-screen-xl mx-auto py-6 flex items-center justify-between'>
      <div className='nleft flex items-center'>
        <img src={logo} alt="" />
        <div className='links flex gap-10 ml-20'>
            {["Home", "Work", "Culture", "", "News"].map((elem, index) => (
                elem.length === 0 ? 
                <span key={index} className='w-[2px] h-7 bg-zinc-800' >
                </span> :
                <a 
                key={index}
                className= " font-regular text-sm flex items-center gap-1" href="#">
                    { index === 1 ? (<span  
                    style={{boxShadow:"0 0 0.45em  #00FF19"}}
                    className='inline-block w-1 h-1 rounded-full bg-green-500' ></span>) : null }
                    {elem}
                </a>
            ))}
        </div>
      </div>
      <Button />
    </div>
  )
}

export default Navbar
