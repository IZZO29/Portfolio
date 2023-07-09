import React from 'react';
import folapo from '../assets/portfolio/folapo.png';
import starbucks from '../assets/portfolio/starbucks.png';

const Portfolio = () => {
  const portfolios = [
    {
      id: 1,
      src: folapo,
      website: 'https://folapo.netlify.app/',
      github: 'https://github.com/IZZO29/Folapo',
    },
    {
      id: 2,
      src: starbucks,
      website: 'https://starbucks-lemon.vercel.app/',
      github: 'https://github.com/IZZO29/StarbucksClone',
    },
  ];

  const handleVisitWebsite = (website) => {
    window.open(website, '_blank');
  };

  const handleVisitCode = (github) => {
    window.open(github, '_blank');
  };

  return (
    <div name="portfolio" className="bg-gradient-to-b from-black to-gray-800 w-full text-white md:h-screen">
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4  border-gray-500">Portfolio</p>
          <p className="py-6"></p>
        </div>

        <div className="grid sm:grid-cols-1 md:grid-cols-2 gap-20 px-12 sm:px-0">
          {portfolios.map(({ id, src, website, github }) => (
            <div key={id} className="shadow-md shadow-gray-600 rounded-lg sm:grid-cols-1 md:justify-center">
              <img src={src} alt="" className="rounded-md duration-200 hover:scale-105" />
              <div className="flex items-center justify-center">
                <button
                  className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105"
                  onClick={() => handleVisitWebsite(website)}
                >
                  Visit website
                </button>
                <button
                  className="px-6 py-3 w-1/2 m-4 duration-200 hover:scale-105"
                  onClick={() => handleVisitCode(github)}
                >
                  Visit Code
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
