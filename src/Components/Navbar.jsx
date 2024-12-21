import React from "react"

const Navbar = () => {
  return (
    <nav className="max-sm:hidden">
      <ul className="flex bg-[#301f15] w-fit mx-auto rounded-lg">
        <li className="font-semibold bg-[#dbbca0] text-[#301f15] rounded-lg py-2 px-7 hover:bg-[#dbbca0] hover:text-[#301f15] duration-300 cursor-pointer">
          Home
        </li>
        <li className="font-semibold bg-[#301f15] text-[#dbbca0] rounded-lg py-2 px-7 hover:bg-[#dbbca0] hover:text-[#301f15] duration-300 cursor-pointer">
          About Us
        </li>
        <li className="font-semibold bg-[#301f15] text-[#dbbca0] rounded-lg py-2 px-7 hover:bg-[#dbbca0] hover:text-[#301f15] duration-300 cursor-pointer">
          Features
        </li>
        <li className="font-semibold bg-[#301f15] text-[#dbbca0] rounded-lg py-2 px-7 hover:bg-[#dbbca0] hover:text-[#301f15] duration-300 cursor-pointer">
          Purchase
        </li>
        <li className="font-semibold bg-[#301f15] text-[#dbbca0] rounded-lg py-2 px-7 hover:bg-[#dbbca0] hover:text-[#301f15] duration-300 cursor-pointer">
          Contact Us
        </li>
      </ul>
    </nav>
  )
}

export default Navbar
