'use client';

import React from 'react';

const images = [
 '/1.png','/2.png','/3.png','/4.png','/5.png','/6.png','/7.png','/8.png'
];

const ImageGrid = () => {
  return (
    <><p id='stats' className='font-bold font-world text-center md:text-4xl sm:text-2xl md:pb-6 text-black'>
        Profile at a glance
      </p> <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-4">
        
      {images.map((url, index) => (
        <div
          key={index}
          className="group cursor-pointer relative overflow-hidden"
        >
          <img
            src={url}
            alt={`Image ${index + 1}`}
            className="rounded-lg"
          />
          {/* <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
            <button className="bg-white text-gray-800 px-4 py-2 rounded-lg hover:bg-gray-200 transition-colors">
              View
            </button>
          </div> */}
        </div>
      ))}
    </div></>
   
  );
};

export default ImageGrid;
