import React from 'react'

const About = () => {
  return (
    <div 
    name="about" 
    className='w-full h-screen bg-gradient-to-b from-gray-800 to-black text-white'>
      
        <div className='max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full '>
            <div className='pb-8'>
                <p className='text-4xl font-bold inline border-b-4 border-gray-500'>
                    About
                </p>
            </div>
            <p className='text-xl mt-20'>
            I'm currently pursuing BE in Insitute of Engineering and Technology, DAVV, INDORE.
            </p>
            <br />
            <p className='text-xl'>
                I enjoy creating impactful web applications. Seeking a dynamic environment that values growth, I'm eager to contribute my problem-solving skills and drive positive outcomes. Let's connect if you're looking for a motivated problem solver with a passion for web development and the ability to make a meaningful impact.
            </p>
        </div>

    </div>
  )
}

export default About;