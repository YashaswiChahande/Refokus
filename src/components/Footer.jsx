import React from 'react'

function Footer() {
  return (
    <div className='w-full'>
      <div className='max-w-screen-xl mx-auto py-10 flex gap-32 '>
        <div className='basis-1/2'>
            <h1 className='text-[11.5rem] font-semibold leading-none tracking-tight'>
                refokus.
            </h1>
        </div>
        <div className='basis-1/2 flex gap-4'>
            <div className='basis-1/3'>
                <h4 className='mb-10 text-zinc-500 capitalize'>socials</h4>
                {[ "instagram", "twitter (x?)", "LinkedIn" ].map((item, index) => <a className='block mt-3 capitalize text-zinc-600' href="">{item}</a>
             )}
            </div>
            <div className='basis-1/3'>
                <h4 className='mb-10 text-zinc-500 capitalize'>socials</h4>
                {[ "instagram", "twitter (x?)", "LinkedIn" ].map((item, index) => <a className='block mt-3 capitalize text-zinc-600' href="">{item}</a>
             )}
            </div>
            <div className='basis-1/2 flex flex-col items-end text-right'>

                <p>Refokus is pioneering digital agency driven by design and empowered by technology.</p>
                <img className=' w-32 mt-10 '
                    src="https://assets-global.website-files.com/628ea50806d12b349bebc1ea/6482428d42dc637abdafb81a_Blue%20Label%201.png"
                    alt=""
                />
            </div>
        </div>
      </div>
    </div>
  )
}

export default Footer
