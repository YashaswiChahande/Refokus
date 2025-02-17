import React, { useState } from 'react'
import Product from './Product'
import { motion } from "framer-motion"
import Arqitel from "../assets/videos/Arqitel.webm";
import Cula from "../assets/videos/Cula.mp4";
import TTR from "../assets/videos/TTR.webm";
import yahoo from "../assets/videos/yahoo.webm";


function Products() {

    var products = [

        {
            title: "arqitel",
            description:
              "With a continuous 3D animation, we showcase Arqitel approach and show how migration data translates into real estate.",
            live: true,
            case: false,
          },
          {
            title: "cula",
            description:
              "We immersed ourselves in a 3D world we created to explain how Cula's platform collects data from carbon removal processes and converts them into carbon credit certificates.",
            live: true,
            case: true,
          },
          {
            title: "TTR",
            description:
              "We've created an interactive site using generative AI to allow users to engage with our thinking about Ai, industry trends and design.",
            live: true,
            case: true,
          },
          {
            title: "Yahoo!",
            description:
              "We enhanced the New York Fashion Week, by creating a fully digital AR fashion experience for Yahoo and Maisie Wilen, featuring holographic 3D models and an integrated web shop.",
            live: true,
            case: true,
          },
    ]
    
    const [pos, setPos] = useState(0);
    
    const mover = (val) => {
      setPos(val*23);
    }

  return (
    <div className='mt-32 relative '>
        {
            products.map((val, index) => <Product 
            key={index} 
            val = {val} 
            mover = {mover} 
            count={index} /> 
                        )
        }
        <div className='absolute top-0 w-full h-full pointer-events-none'>
          <motion.div 
          initial={{ y: pos, x: "-50%" }}
          animate={{ y: pos + `rem` }}
          transition={{ease: [0.76, 0, 0.24, 1], duration: .6 }}
          className='window absolute w-[32rem] h-[23rem] bg-sky-100 left-[44%]  overflow-hidden '>
            <motion.div 
            animate={{y: -pos+ `rem`}} 
            className='w-full h-full bg-sky-100 '
            transition={{ease: [0.76, 0, 0.24, 1], duration: .5 }}
            >
              <video autoPlay muted loop src={Arqitel}></video>
            </motion.div>

            <motion.div 
            animate={{y: -pos+ `rem`}} 
            className='w-full h-full bg-sky-200 '
            transition={{ease: [0.76, 0, 0.24, 1], duration: .5 }}
            >
              <video autoPlay muted loop src={Cula}></video>

            </motion.div>

            <motion.div 
            animate={{y: -pos+ `rem`}}
            className='w-full h-full bg-sky-300 '
            transition={{ease: [0.76, 0, 0.24, 1], duration: .5 }}
            >
              <video autoPlay muted loop src={TTR}></video>

            </motion.div>

            <motion.div 
            animate={{y: -pos+ `rem`}} 
            className='w-full h-full bg-sky-400 '
            transition={{ease: [0.76, 0, 0.24, 1], duration: .5 }}
            >
              <video autoPlay muted loop src={yahoo}></video>

            </motion.div>
          </motion.div>
        </div>
    </div>
  )
}

export default Products
