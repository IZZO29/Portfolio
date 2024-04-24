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
            I am Computer Science Engineer(2024) Graduate from IET DAVV, INDORE.
            </p>
            <br />
            {window.innerWidth >= 768 ? <p className='text-xl'>
            With a passion for logical and critical thinking. I have a deep love for mathematics and consider myself a tech enthusiast. During my college years, I maintained an impressive 8.0 CGPA, demonstrating my commitment to academic excellence. Moreover, I possess strong communication skills and excel in working within a team. I have a profound understanding of people and their psychology, which allows me to foster effective collaboration and achieve common goals. Additionally, I had the privilege of being Coordinator of NSS(National Service Scheme), where I showcased my exceptional organizational and management skills. In this role, I successfully organized inter branch sports competition in college. Overall, I bring a well-rounded skill set, combining technical expertise, mathematical proficiency, and a deep interest in finance and trading. I am eager to contribute my knowledge and abilities to any project or team I am a part of.
            </p> : <p className='text-xl'>With a passion for logical and critical thinking. I have a deep love for mathematics and consider myself a tech enthusiast. During my college years, I maintained an impressive 8.0 CGPA, demonstrating my commitment to academic excellence. I am eager to contribute my knowledge and abilities to any project or team I am a part of.</p>}
        </div>

    </div>
  )
}

export default About;