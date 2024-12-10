import Image from 'next/image';
import React, { useState } from 'react';

const DesignType = ({selectedDesignType}) => {
  const Design = [
    {
      name: 'Modern',
      image: '/modern.png',
    },
    {
      name: 'Industrial',
      image: '/industrial.png',
    },
    {
      name: 'Bohemian',
      image: '/bohemian.png',
    },
    {
      name: 'Traditional',
      image: '/traditional.png',
    },
    {
      name: 'Rustic',
      image: '/rustic.png',
    },
    {
      name: 'Minimalist',
      image: '/minimalist.png',
    },
  ];

  const [selectedOption, setSelectedOption] = useState();

  return (
    <div className='mt-5'>
      <label className="text-white">Select Interior Design Type</label>
      <div className="mt-5 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
        {Design.map((design, index) => (
          <div key={index} onClick={() => {setSelectedOption(design.name);
            selectedDesignType(design.name)
          }} className="flex flex-col items-center">
            <img
              src={design.image}
              alt={design.name}
              className={`w-40 h-40 object-cover rounded-md hover:cursor-pointer hover:scale-105 transition-all ${design.name == selectedOption && 'border-2 rounded-md'}`}
            />
            <h2 className="mt-2 text-white">{design.name}</h2>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DesignType;
