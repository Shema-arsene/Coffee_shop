import React from "react"
import { Testimonials } from "../Data/data"
import Coffee from "../assets/Icons/coffee.png"
import Slider from "react-slick"

const Reviews = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToScroll: 1,
    autoplay: true,
    autoPlaySpeed: 2000,
    cssEase: "linear",
    pauseOnHover: true,
    pauseOnFocus: true,
    // slidesToShow: 1,
    responsive: [
      {
        breakpoint: 10000,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  }

  return (
    <section className="py-14 bg-[#655546]">
      <div>
        {/* Header section */}
        <div>
          <div className="flex gap-5 items-center justify-center">
            <h1 className="text-white text-5xl font-bold">Reviews</h1>
            <img src={Coffee} alt="Coffee cup" className="w-[50px] h-[50px]" />
          </div>
          <p className="text-white text-3xl text-center my-5">
            What people say about us!
          </p>
        </div>

        {/* Testimonial cards */}
        <Slider {...settings}>
          {Testimonials.map((card) => (
            <div key={card.id} className="p-10">
              <div className=" shadow-lg shadow-black rounded-2xl py-5 px-3 bg-[#dbbca0] text-xl flex flex-col gap-3">
                <p>{card.testimony}</p>
                <h1 className="text-center text-blue-400">@{card.name}</h1>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </section>
  )
}

export default Reviews
