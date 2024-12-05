import React from 'react'
import "./Hero.scss"
import star from "@/assets/Star 3.png"
import left from "@/assets/left image.png"
import right from "@/assets/right image.png"
import hero from "@/assets/hero image.png"
import Image from 'next/image'

const Hero = () => {
  return (
    <div className='hero'>
        <div className="hero-cover">
            <div className="intro-text">
                <h3>The New</h3>
                <h1>Skin Care</h1>
                <Image src={star} alt="star" className='intro-star' />
                <h3>Essentails</h3>
            </div>
            <div className="image-cover-desktop">
                <Image src={left} alt="star" className='intro-left-img' />
            </div>
            <div className="intro-images">
                <div className="image-cover-desktop">
                    <Image src={hero} alt="star" className='intro-hero-img' />
                </div>
            </div>
            <div className="image-cover-desktop">
                <Image src={right} alt="star" className='intro-right-img' />
            </div>
            <div className="image-cover-mobile">
                <Image src={left} alt="star" className='intro-left-img-mobile' />
                <Image src={hero} alt="star" className='intro-hero-img-mobile' />
                <Image src={right} alt="star" className='intro-right-img-mobile' />
            </div>
        </div>
    </div>
  )
}

export default Hero