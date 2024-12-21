import React from "react"
import { FaPhoneAlt } from "react-icons/fa"
import { FaRegEnvelope } from "react-icons/fa6"
import Logo from "../assets/Icons/latte-art.png"

const Footer = () => {
  const year = new Date().getFullYear()
  return (
    <footer>
      <div className="flex flex-col md:flex-row bg-[#301f15] text-[#dbbca0] p-10">
        <div className="flex-1 py-7">
          <h1 className="font-bold text-2xl">Contact Us</h1>
          <p className="font-thin my-5">Send us a message</p>
          <form className="flex flex-col gap-5">
            <input
              type="text"
              name="name"
              id="name"
              placeholder="Names..."
              className="border-2 border-[#dbbca0] focus:border-black w-full sm:w-[80%] max-w-[400px] py-2 px-3 text-black outline-none rounded-md"
            />
            <input
              type="email"
              placeholder="Email..."
              className="border-2 border-[#dbbca0] focus:border-black w-full sm:w-[80%] max-w-[400px] py-2 px-3 text-black outline-none rounded-md"
            />
            <textarea
              name="message"
              id="message"
              cols={30}
              rows={5}
              placeholder="Your message..."
              className="border-2 border-[#dbbca0] focus:border-black w-full sm:w-[80%] max-w-[400px] py-2 px-3 text-black outline-none rounded-md"
            ></textarea>
          </form>
        </div>
        <div className="flex-1 py-7">
          <h1 className="font-bold text-2xl">Site Map</h1>
          <p className="font-thin my-5">All our pages</p>
          <ul className="list-circle pl-5 flex flex-col gap-2">
            <li>
              <a href="/" className="hover:text-white duration-300">
                Home
              </a>
            </li>
            <li>
              <a href="/" className="hover:text-white duration-300">
                About Us
              </a>
            </li>
            <li>
              <a href="/" className="hover:text-white duration-300">
                Feature
              </a>
            </li>
            <li>
              <a href="/" className="hover:text-white duration-300">
                Pricing
              </a>
            </li>
            <li>
              <a href="/" className="hover:text-white duration-300">
                Contact Us
              </a>
            </li>
          </ul>
        </div>
        <div className="flex-1 py-7">
          <img
            src={Logo}
            alt="Logo icon"
            className="w-[150px] h-[150px] aspect-square block"
          />
          <p className="flex gap-2 items-center justify-start py-2 px-2">
            <FaPhoneAlt /> (80) 400 2000
          </p>
          <p className="flex gap-2 items-center justify-start py-2 px-2">
            <FaRegEnvelope /> coffeeborcelle@gmail.com
          </p>
        </div>
      </div>
      <div className="py-4 max-sm:px-10 bg-[#dbbca0]">
        <p className="text-[#301f15] text-center">
          &copy;Copyright {year}. All rights reserved{" "}
          <span className="font-semibold whitespace-nowrap">
            coffee borcelle
          </span>
        </p>
      </div>
    </footer>
  )
}

export default Footer
