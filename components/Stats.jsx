'use client'

import React from 'react';

const Stats = () => {
  return (
    <>
     
      <div className=" text-gray-100 body-font md:mb-12 sm:mb-0 sm:max-w-screen sm:mx-6 rounded-2xl">
        
        <section className="container px-5 mx-auto bg-h-100px p-6">
        <p id='stats' className='font-bold font-world text-center md:text-4xl sm:text-2xl sm:pt-24 md:mt-4 text-black'>
        Stats at a glance
      </p>
          <div className="flex flex-wrap m-4 text-center justify-center text-black">
            <div className="p-4 sm:w-1/4 w-1/2">
              <p className=" font-bold md:text-4xl sm:text-3xl text-black">4+</p>
              <p className="leading-relaxed md:text-2xl text-black">Certifications</p>
            </div>
            <div className="p-4 sm:w-1/4 w-1/2">
              <p className=" font-bold md:text-4xl sm:text-3xl text-black">6+</p>
              <p className="leading-relaxed md:text-2xl text-black">Projects</p>
            </div>
            <div className="p-4 sm:w-1/4 w-1/2">
              <p className=" font-bold md:text-4xl sm:text-3xl text-black">10+</p>
              <p className="leading-tight md:text-2xl text-black">Case studies</p>
            </div>
            <div className="p-4 sm:w-1/4 w-1/2">
              <p className=" font-bold md:text-4xl sm:text-3xl text-black">2</p>
              <p className="leading-tight md:text-2xl text-black">Internships </p>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default Stats;
