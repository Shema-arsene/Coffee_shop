import React from "react"
import Navbar from "./Navbar"
import Logo from "../assets/Icons/latte-art.png"

const Hero = () => {
  return (
    <section className="flex flex-col max-sm:items-center max-sm:justify-center sm:gap-10 pt-14 w-full h-[400px] bg-[url('./assets/Images/hero.jpg')] bg-cover bg-center text-white relative">
      <img
        src={Logo}
        alt=""
        className="absolute top-5 left-5 w-[100px] h-[100px]"
      />
      <Navbar />
      <div className="flex flex-col gap-10">
        <h1 className="text-4xl sm:text-6xl text-center ">Coffee Makes Mood</h1>
        <p className="text-2xl sm:text-4xl text-center ">
          "Indulge in Every sip: Experience the richness of coffee"
        </p>
      </div>
    </section>
  )
}

export default Hero
