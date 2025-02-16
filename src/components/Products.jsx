import React from 'react'
import Product from './Product'

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

  return (
    <div>
        {
            products.map((val, index)=> <Product key={index} val = {val} /> )
        }
    </div>
  )
}

export default Products
