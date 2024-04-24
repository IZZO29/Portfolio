import React from 'react';
import folapo from '../assets/portfolio/folapo.png';
import starbucks from '../assets/portfolio/starbucks.png';
import webflix from '../assets/portfolio/webflix.png'
import foodparadise from '../assets/portfolio/foodparadise.png'
import restraurant from '../assets/portfolio/restraurant.png';
import goride from '../assets/portfolio/goride.png';


const Portfolio = () => {
  const portfolios = [
    {
      id: 1,
      src: webflix,
      website: 'https://webflix-gpt.vercel.app/',
      github: 'https://github.com/IZZO29/webflix-gpt',
    },
    {
      id: 2,
      src: foodparadise,
      website: 'https://food-paradise-one.vercel.app/',
      github: 'https://github.com/IZZO29/food-paradise',
    },
    {
      id: 3,
      src: folapo,
      website: 'https://folapo.netlify.app/',
      github: 'https://github.com/IZZO29/Folapo',
    },
    {
      id: 4,
      src: restraurant,
      website: 'https://monsieur-restaurant.vercel.app/',
      github: 'https://github.com/IZZO29/Monsieur-Restaurant',
    },
    {
      id: 5,
      src: starbucks,
      website: 'https://starbucks-lemon.vercel.app/',
      github: 'https://github.com/IZZO29/StarbucksClone',
    },
    {
      id: 6,
      src: goride,
      website: 'https://go-ride-eta.vercel.app/',
      github: 'https://github.com/IZZO29/Go-ride',
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
          <p className="py-2"></p>
        </div>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0">
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
