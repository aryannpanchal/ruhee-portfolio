'use client'

import React from 'react';

const Stats = () => {
  return (
    <>
      <p id='stats' className='font-bold font-world text-center md:text-4xl sm:text-2xl pb-8 sm:pt-24 md:mt-4'>
        Stats at a glance
      </p>
      <div className="sm:mb-24 text-gray-100 body-font md:mb-36  md:mx-24 sm:max-w-screen sm:mx-6 rounded-2xl">
        <section className="container px-5 mx-auto bg-h-100px p-6">
          <div className="flex flex-wrap m-4 text-center text-black">
            <div className="p-4 sm:w-1/4 w-1/2">
              <p className="title-font font-bold md:text-4xl sm:text-3xl text-black">12+</p>
              <p className="leading-relaxed md:text-2xl text-black">Companies associated</p>
            </div>
            <div className="p-4 sm:w-1/4 w-1/2">
              <p className="title-font font-bold md:text-4xl sm:text-3xl text-black">100+</p>
              <p className="leading-relaxed md:text-2xl text-black">Conversions</p>
            </div>
            <div className="p-4 sm:w-1/4 w-1/2">
              <p className="title-font font-bold md:text-4xl sm:text-3xl text-black">35%+</p>
              <p className="leading-tight md:text-2xl text-black">Sales boost guarantee</p>
            </div>
            <div className="p-4 sm:w-1/4 w-1/2">
              <p className="title-font font-bold md:text-4xl sm:text-3xl text-black">24x7</p>
              <p className="leading-tight md:text-2xl text-black">Tech support</p>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default Stats;
