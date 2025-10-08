// Hero.jsx
import React from 'react';
import { PlayCircleIcon, DevicePhoneMobileIcon } from '@heroicons/react/24/solid';
import HeroImg from '../assets/hero.png'; // Replace with your actual image path

const Hero = () => {
  return (
    <div>
      {/* Hero Section */}
      <section className="text-center pt-8  px-4">
        <div className="container mx-auto">
          <h1 className="text-5xl font-extrabold text-gray-900 mb-4 tracking-tight">
            We Build <br />
            <span className="text-indigo-600">Productive</span> Apps
          </h1>

          <p className="text-base text-gray-600 max-w-2xl mx-auto mb-10">
            AT APP MART, we craft innovative apps designed to make everyday life simpler, smarter, and more exciting.
            Our goal is to turn your ideas into digital experiences that truly make an impact.
          </p>

          <div className="flex justify-center space-x-4 mb-16">
            <a
              href="https://play.google.com/store"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-2 px-5 py-2.5 border border-gray-300 text-gray-700 rounded-lg font-medium hover:bg-gray-100 transition-colors shadow-sm"
            >
              <PlayCircleIcon className="w-5 h-5 text-gray-500" />
              <span>Google Play</span>
            </a>
            <a
              href="https://www.apple.com/app-store/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-2 px-5 py-2.5 border border-gray-300 text-gray-700 rounded-lg font-medium hover:bg-gray-100 transition-colors shadow-sm"
            >
              <DevicePhoneMobileIcon className="w-5 h-5 text-gray-500" />
              <span>App Store</span>
            </a>
          </div>

          <div className="flex justify-center">
            <img
              src={HeroImg}
              alt="App Hero"
              className="max-w-xs md:max-w-xl lg:max-w-4xl"
            />
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="bg-gradient-to-r from-purple-600 to-indigo-600 py-16 px-4 text-center text-white">
        <h2 className="text-3xl font-extrabold mb-12">
          Trusted By Millions, Built For You
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          {/* Total Downloads */}
          <div className="md:border-r border-indigo-300 last:border-none">
            <p className="text-sm text-indigo-100 uppercase mb-2">Total Downloads</p>
            <p className="text-6xl font-extrabold">29.6M</p>
            <p className="text-xs opacity-80 mt-2">21% More Than Last Month</p>
          </div>

          {/* Total Reviews */}
          <div className="md:border-r border-indigo-300 last:border-none">
            <p className="text-sm text-indigo-100 uppercase mb-2">Total Reviews</p>
            <p className="text-6xl font-extrabold">906K</p>
            <p className="text-xs opacity-80 mt-2">46% More Than Last Month</p>
          </div>

          {/* Active Apps */}
          <div className="md:border-r border-indigo-300 last:border-none">
            <p className="text-sm text-indigo-100 uppercase mb-2">Active Apps</p>
            <p className="text-6xl font-extrabold">132+</p>
            <p className="text-xs opacity-80 mt-2">31 More Will Launch</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Hero;
