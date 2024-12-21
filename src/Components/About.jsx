import React from "react"
import AboutImage from "../assets/Images/about.png"

const About = () => {
  return (
    <section className="flex flex-col md:flex-row bg-[#dbbca0]">
      <div className="flex items-center justify-center md:w-[45%] py-10 px-20">
        <img
          src={AboutImage}
          alt="Borcelle coffee"
          className="w-[100%] max-w-[400px] min-w-[250px] h-auto max-h-[400px] min-h-[250px] aspect-square object-fill rounded-xl drop-shadow-md"
        />
      </div>
      <div className="md:w-[55%] p-10 max-md:p-20 max-sm:p-10 flex flex-col gap-4 text-[#301f15]">
        <h1 className="text-5xl font-bold capitalize max-sm:text-3xl">
          Discover coffee borcelle
        </h1>
        <h3 className="capitalize text-3xl max-sm:text-2xl font-thin ">
          Elevating your coffee experience
        </h3>
        <p className="max-w-[600px] max-sm:text-md">
          At coffee Borcelle, we're on a mission to redefine your coffee
          moments. Our carefully curated selection of premium beans, sourced
          from the world's most renowned coffee coffee regions.
        </p>
        <p className="max-w-[600px] max-sm:text-md">
          With expert craftsmanship and a committed to quality, <br /> Join us
          in savoring the art of coffee, one cup at a time.
        </p>
        <button className="capitalize max-sm:mx-auto max-sm:my-5 rounded-lg bg-[#301f15] border-2 border-[#301f15] w-fit py-2 px-5 text-white font-semibold hover:bg-transparent hover:text-[#301f15] duration-300">
          Read More
        </button>
      </div>
    </section>
  )
}

export default About
