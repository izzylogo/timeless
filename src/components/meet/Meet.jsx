import React from 'react'
import "./Meet.scss"
import img1 from "../../assets/img1 (1).jpg"
import img2 from "@/assets/img1 (2).jpg"
import img3 from "@/assets/img1 (3).jpg"
import img4 from "@/assets/img1 (4).jpg"
import img5 from "@/assets/img1 (5).jpg"
import img6 from "@/assets/img1 (6).jpg"
import img7 from "@/assets/img1 (7).jpg"
import img8 from "@/assets/img1 (8).jpg"
import img9 from "@/assets/img1 (9).jpg"
import img10 from "@/assets/img1 (10).jpg"
import img11 from "@/assets/img1 (11).jpg"
import img12 from "@/assets/img1 (12).jpg"
import img13 from "@/assets/img1 (13).jpg"
import img14 from "@/assets/img1 (14).jpg"
import img15 from "@/assets/img1 (15).jpg"
import img17 from "@/assets/img1 (17).jpg"
import Image from 'next/image'
// import "../../assets/img1 (1).jpg"



const products = [
    {
      name: "Timeless Beauty #13 000 - Matte Perfection (For Oily Skin)",
      price: 13000,
      description: "A lightweight, oil-controlling cream to balance shine and leave skin smooth and refreshed.",
      image: img1,
    },
    {
      name: "Timeless Beauty #13 000 - Hydra Luxe (For Dry Skin)",
      price: 13000,
      description: "A deeply hydrating cream that restores moisture and revitalizes dry, flaky skin.",
      image: img2,
    },
    {
      name: "Timeless Beauty #13 500 - Dual Harmony (For both dry and oily Skin)",
      price: 13500,
      description: "A multitasking cream that balances dry and oily zones of the skin for even care.",
      image: img3,
    },
    {
      name: "Timeless Beauty #14 000 - Sensitive Glow (For Sensitive Skin)",
      price: 14000,
      description: "A gentle, calming cream designed to soothe irritation and enhance natural radiance.",
      image: img4,
    },
    {
      name: "Timeless Beauty Facial Serum",
      price: 9000,
      image: img5,
    },
    {
      name: "Timeless Beauty Bar Soap",
      price: 10000,
      image: img6,
    },
    {
      name: "Timeless Beauty Moisturizing Face Cream",
      price: 6000,
      image: img7,
    },
    {
      name: "Timeless Beauty Vitamin C Face Cream",
      price: 6500,
      image: img8,
    },
    {
      name: "Timeless Beauty Day Cream",
      price: 7000,
      image: img9,
    },
    {
      name: "Timeless Beauty Night Cream",
      price: 6500,
      image: img10,
    },
    {
      name: "Timeless Beauty Hydrating Face Wash",
      price: 5500,
      image: img11,
    },
    {
      name: "Timeless Beauty Hydrating Face Wash",
      price: 5500,
      image: img12,
    },
    {
      name: "Timeless Beauty Hydrating Face Wash",
      price: 5500,
      image: img13,
    },
    {
      name: "Timeless Beauty Hydrating Face Wash",
      price: 5500,
      image: img14,
    },
    {
      name: "Timeless Beauty Hydrating Face Wash",
      price: 5500,
      image: img15,
    },
    {
      name: "Timeless Beauty Hydrating Face Wash",
      price: 5500,
      image: img17,
    },
  ];
  


const Meet = () => {
  return (
    <div className='meet-cover'>
        <div className="meet-contain">
            <div className="meet-heading">
                <h1>Meet. The <br />Timeless</h1>
                <p>WE’RE HERE TO MAKE DAILY ROUTINES BETTER FOR YOUR VODY AND BETTER FOR OUR PLANET - BECAUSE SMALL CHANGE CNA MAKE A BIG IMPANCT.</p>
            </div>
            <div className="productGrid">
                <div className="product-list">
                {products.map((product, index) => (
                    <div className="product-card" key={index}>
                    <Image src={product.image} alt={product.name} className="product-image" />
                    <div style={{padding: "20px"}}>
                        <h3 className='product-name'>{product.name}</h3>
                        <p className='product-price'>Price: {product.price.toLocaleString()} NGN</p>
                        {product.description && <p>{product.description}</p>}
                    </div>
                    </div>
                ))}
                </div>
            </div>
        </div>
    </div>
  )
}

export default Meet