import React from 'react';
import { ArrowRight, Code, Smartphone, Globe } from 'lucide-react';

export default function Hero() {
  return (
    <div className="relative bg-gradient-to-br from-indigo-900 via-indigo-800 to-indigo-900 pt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <div className="text-center">
          <h1 className="text-4xl tracking-tight font-extrabold text-white sm:text-5xl md:text-6xl">
            <span className="block">Transform Your Ideas Into</span>
            <span className="block text-indigo-400">
              Powerful Digital Solutions
            </span>
          </h1>
          <p className="mt-3 max-w-md mx-auto text-base text-gray-300 sm:text-lg md:mt-5 md:text-xl md:max-w-3xl">
            We craft exceptional web applications, mobile apps, and custom
            software solutions that drive business growth and innovation.
          </p>
          <div className="mt-10 flex justify-center gap-x-6">
            <a
              href="#contact"
              className="rounded-md bg-indigo-500 px-6 py-3 text-lg font-semibold text-white shadow-sm hover:bg-indigo-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-400 flex items-center"
            >
              Start Your Project <ArrowRight className="ml-2 h-5 w-5" />
            </a>
          </div>
        </div>

        <div className="mt-20 grid grid-cols-1 gap-8 sm:grid-cols-3">
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8 text-center">
            <div className="flex justify-center">
              <Globe className="h-12 w-12 text-indigo-400" />
            </div>
            <h3 className="mt-4 text-xl font-semibold text-white">
              Web Development
            </h3>
            <p className="mt-2 text-gray-300">
              Custom websites and web applications built with modern
              technologies
            </p>
          </div>

          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8 text-center">
            <div className="flex justify-center">
              <Smartphone className="h-12 w-12 text-indigo-400" />
            </div>
            <h3 className="mt-4 text-xl font-semibold text-white">
              Mobile Apps
            </h3>
            <p className="mt-2 text-gray-300">
              Native and cross-platform mobile applications for iOS and Android
            </p>
          </div>

          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8 text-center">
            <div className="flex justify-center">
              <Code className="h-12 w-12 text-indigo-400" />
            </div>
            <h3 className="mt-4 text-xl font-semibold text-white">
              Custom Software
            </h3>
            <p className="mt-2 text-gray-300">
              Tailored software solutions to meet your specific business needs
            </p>
          </div>
        </div>
      </div>

      <div className="absolute bottom-0 w-full overflow-hidden">
        <svg
          viewBox="0 0 1440 120"
          className="relative w-full h-[60px] text-gray-50"
        >
          <path
            fill="currentColor"
            d="M0,32L60,42.7C120,53,240,75,360,74.7C480,75,600,53,720,48C840,43,960,53,1080,58.7C1200,64,1320,64,1380,64L1440,64L1440,120L1380,120C1320,120,1200,120,1080,120C960,120,840,120,720,120C600,120,480,120,360,120C240,120,120,120,60,120L0,120Z"
          ></path>
        </svg>
      </div>
    </div>
  );
}
