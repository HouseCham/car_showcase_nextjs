'use client'

import Image from "next/image"
import CustomButton from "./CustomButton"

// rafce

const Hero = () => {
  const handleScroll = () => {}

  return (
    <div className="hero">
      <div className="flex-1 pt-36 padding-x">
        <h1 className="hero__title">
          Unlock Your Journey, Book and Drive with Us!
        </h1>

        <p className="hero__subtitle">
          We provide hassle-free car rentals and sales, allowing you to embark on unforgettable journeys with ease.
        </p>

        <CustomButton
          title="See more"
          containerStyle="bg-primary-blue text-white rounded-full mt-10"
          handleClick={handleScroll}
        />
      </div>

      <div className="hero__image-container">
        <div className="hero__image">
          <Image src="/hero.png" alt="hero" fill className="object-contain" />
        </div>
        <div className="hero__image-overlay"/>
      </div>
    </div>
  )
}

export default Hero