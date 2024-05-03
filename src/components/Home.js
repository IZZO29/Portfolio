import React from 'react'
import HeroImage from "../assets/heroImage.png"
import {MdOutlineKeyboardArrowRight} from 'react-icons/md'
import pxfuel from "../assets/pxfuel.png"
import {Link} from 'react-scroll'
import {TypeAnimation} from 'react-type-animation'

const Home = () => {
  return (
    <div name="home" className='h-screen w-full  bg-gradient-to-b from-black via-black to-gray-800'>
        <div
        className='max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4 md:flex-row'>
            <div className='z-10 flex flex-col justify-center h-full'>
                <h2 className='multiText text-4xl sm:text-7xl font-bold text-white'>
                    <div><TypeAnimation sequence={[
                        "Hi, I'm Priyanshu!",
                        2000,
                        "A Web Developer",
                        2000,
                        "A Coder",
                        2000,
                    ]}
                    speed={50}
                    repeat={Infinity}
                    /></div>
                </h2>
                <p className='text-gray-500 py-4'>
                A B.E student, who is passionate about Web technologies. Looking for roles where I can challenge my skills and grow both personally and professionally.
                </p>
                <div>
                    <Link to="portfolio" smooth duration={500} className='group text-white w-fit px-6 my-2 flex items-center rounded-md bg-gradient-to-r from-cyan-500 to to-blue-500 cursor-pointer'>
                      Portfolio 
                      <span className='group-hover:rotate-90 duration-300'>
                      <MdOutlineKeyboardArrowRight size={25} className='ml-1' />
                      </span>
                    </Link>
                </div>
            </div>

            <div className="z-10">
          <img src={HeroImage} alt="my profile" className="rounded-2xl mx-auto w-2/3 md:w-full hover:scale-105 duration-300" />
        </div>

        <div className="absolute inset-0 z-0">
          <img src={pxfuel} alt="background" className="h-full w-full object-cover opacity-30" />
        </div>

        </div>
    </div>
  )
}

export default Home
