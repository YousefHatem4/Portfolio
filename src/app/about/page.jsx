import React from 'react'
import {
  Globe,
  Code,
  Atom,
  Rocket,
} from 'lucide-react'

export default function about() {
  return (
    <>
      <div className='bg-[#161513] font-fam overflow-hidden w-full min-h-screen bg-cover bg-center bg-no-repeat'>
        <div>
          <div className="title-about text-center pt-20">
            <h1 className='text-[50px]'>About Me</h1>
          </div>

          <div className='flex flex-col md:flex-row items-center justify-center md:mt-15'>
            <div className='img-about'>
              <img src={"profile2.png"} alt="" />
            </div>

            <div className='mt-5 w-[80%] md:w-6/12 md:mt-0 desc-about ms-10'>
              <p>
                I am a motivated and aspiring software developer with a strong foundation in front-end development and programming. Proficient in HTML, CSS, SCSS, JavaScript, jQuery, Bootstrap, Tailwind CSS, Material UI, React, Next.js, and C++ (fundamentals, data structures, and OOP).
              </p>
              <p className='mt-4'>
                Passionate about continuous learning and eager to tackle challenges to deliver innovative solutions. Dedicated to personal growth and striving for excellence in every task.
              </p>

              {/* 🔥 New Skill Cards Section */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-10 ">
                {[
                  { skill: 'HTML & CSS', icon: <Globe className="text-[#00F5A0] w-8 h-8" /> },
                  { skill: 'React JS', icon: <Atom className="text-[#00D9F5] w-8 h-8" /> },
                  { skill: 'JavaScript', icon: <Code className="text-yellow-400 w-8 h-8" /> },
                  { skill: 'Next.js', icon: <Rocket className="text-[#0083F5] w-8 h-8" /> },
                ].map(({ skill, level, icon }) => (
                  <div key={skill} className="bg-[#1f1d1b] about-skills p-4 rounded-2xl border border-[#2a2926] shadow-md hover:shadow-lg transition-all duration-300">
                    <div className="flex items-center space-x-4">
                      <div>{icon}</div>
                      <div>
                        <h3 className="text-lg text-white font-semibold">{skill}</h3>
                        <p className="text-sm text-gray-400">{level}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-center items-center mb-7 md:mt-7 md:mb-0 w-full">
          <div className="border-b md:border-b-0 md:border-r border-white pb-4 md:pb-0 md:pr-20 md:me-20 w-full md:w-auto text-center mb-4 md:mb-0">
            <div className='card-about flex flex-col items-center justify-center'>
              <h1 className="font-bold text-[32px] md:text-[40px] text-transparent bg-clip-text bg-gradient-to-r from-[#00F5A0] via-[#00D9F5] to-[#0083F5]">1+</h1>
              <h2 className="text-gray-300">YEARS OF EXPERIENCE</h2>
            </div>
          </div>

          <div className="border-b md:border-b-0 md:border-r border-white pb-4 md:pb-0 md:pr-20 md:me-20 w-full md:w-auto text-center mb-4 md:mb-0">
            <div className='card-about flex flex-col items-center justify-center'>
              <h1 className="font-bold text-[32px] md:text-[40px] text-transparent bg-clip-text bg-gradient-to-r from-[#00F5A0] via-[#00D9F5] to-[#0083F5]">17+</h1>
              <h2 className="text-gray-300">PROJECTS COMPLETED</h2>
            </div>
          </div>

          <div className="card-about flex flex-col items-center justify-center w-full md:w-auto text-center">
            <h1 className="font-bold text-[32px] md:text-[40px] text-transparent bg-clip-text bg-gradient-to-r from-[#00F5A0] via-[#00D9F5] to-[#0083F5]">15+</h1>
            <h2 className="text-gray-300">HAPPY CLIENTS</h2>
          </div>
        </div>
      </div>
    </>
  )
}
