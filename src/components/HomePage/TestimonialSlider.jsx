"use client";

import Slider from "react-slick";
import { FaQuoteLeft } from "react-icons/fa";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const testimonials = [
  {
    name: "Aditya Sharma",
    role: "Product Manager",
    text: "This task manager has completely transformed how I organize my day. Highly recommend!",
    avatar: "https://randomuser.me/api/portraits/men/32.jpg",
  },
  {
    name: "Sonal Mehta",
    role: "UI/UX Designer",
    text: "Sleek, easy-to-use, and super efficient. The best productivity tool I've used so far.",
    avatar: "https://randomuser.me/api/portraits/women/65.jpg",
  },
  {
    name: "Ravi Kumar",
    role: "Software Developer",
    text: "The blue theme is refreshing and the features are powerful yet simple to use.",
    avatar: "https://randomuser.me/api/portraits/men/44.jpg",
  },
];

export default function TestimonialSlider() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 600,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    arrows: false,
  };

  return (
    <section className="bg-gray-800 py-16 px-4">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl font-bold text-blue-700 mb-10">
          What Our Users Say
        </h2>
        <Slider {...settings}>
          {testimonials.map((testimonial, index) => (
            <div key={index} className="px-6">
              <div className="bg-white p-8 rounded-xl shadow-md relative">
                <FaQuoteLeft className="text-blue-500 text-3xl absolute -top-6 left-6" />
                <p className="text-gray-700 italic mb-6">{testimonial.text}</p>
                <div className="flex items-center justify-center gap-4 mt-6">
                  <img
                    src={testimonial.avatar}
                    alt={testimonial.name}
                    className="w-14 h-14 rounded-full object-cover border-2 border-blue-400"
                  />
                  <div>
                    <h4 className="text-lg font-semibold text-blue-700">
                      {testimonial.name}
                    </h4>
                    <p className="text-sm text-blue-500">{testimonial.role}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
}
