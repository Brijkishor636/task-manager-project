"use client"
import Image from 'next/image';
import React from 'react';
import loginSvg from "../../assets/loginSvg.svg"

export default function Banner() {
  return (
    <section className="bg-blue-300 py-12 px-6 md:px-16">
      <div className="max-w-7xl mx-auto flex flex-col-reverse md:flex-row items-center justify-between gap-10">
        
        {/* Text Content */}
        <div className="flex-1 text-center md:text-left">
          <h1 className="text-4xl font-bold text-blue-800 mb-4">
            Welcome to Task Manager
          </h1>
          <p className="text-lg text-blue-700 mb-6">
            Your all-in-one solution to manage daily tasks, boost productivity, and achieve your goals stress-free.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
            {/* <button className="bg-blue-600 text-white px-6 py-2 rounded-full hover:bg-blue-700 transition">
              Get Started
            </button> */}
            <button className="bg-white border border-blue-600 text-blue-600 px-6 py-2 rounded-full hover:bg-blue-100 transition">
              Learn More
            </button>
          </div>
        </div>

        {/* Image */}
        <div className="flex-1">
          <Image
            src= {loginSvg}
            alt="Task Banner Illustration"
            className="w-[80%] max-w-md mx-auto"
          />
        </div>
      </div>
    </section>
  );
}
