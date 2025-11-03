"use client";
import React from 'react'
import {
  Globe,
  Code,
  Atom,
  Rocket,
  Palette,
  Zap,
  Smartphone,
  Phone,
  MessageCircle
} from 'lucide-react'

export default function About() {
  const phoneNumber = '+201140821819';

  const handleContactClick = () => {
    // Open WhatsApp with pre-filled message
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=Hello%20Yousef!%20I%20visited%20your%20portfolio%20and%20would%20like%20to%20discuss%20a%20project.`;
    window.open(whatsappUrl, '_blank');
  };

  const handleCallClick = () => {
    // Initiate phone call
    window.open(`tel:${phoneNumber}`, '_self');
  };

  return (
    <>
      <div className='bg-[#161513] font-fam overflow-hidden w-full min-h-screen bg-cover bg-center bg-no-repeat'>
        {/* Enhanced Header */}
        <div className="title-about text-center pt-20 pb-8">
          <h1 className='text-4xl sm:text-5xl md:text-6xl font-bold'>
            <span className="bg-gradient-to-r from-[#00F5A0] via-[#00D9F5] to-[#0083F5] bg-clip-text text-transparent">
              About Me
            </span>
          </h1>
          <p className="text-gray-400 mt-4 text-lg max-w-2xl mx-auto px-4">
            Crafting digital experiences that drive results and exceed expectations
          </p>
        </div>

        {/* Main Content */}
        <div className='flex flex-col lg:flex-row items-center justify-center px-4 sm:px-8 lg:px-16 py-8'>
          {/* Profile Image with Enhanced Styling */}
          <div className='img-about relative mb-8 lg:mb-0 lg:mr-12'>
            <div className="relative group">
              <div className="absolute -inset-4 bg-gradient-to-r from-[#00F5A0] via-[#00D9F5] to-[#0083F5] rounded-2xl opacity-20 blur-lg group-hover:opacity-30 transition-opacity duration-300"></div>
              <img
                src={"profile2.jpg"}
                alt="Yousef Hatem - Frontend Developer"
                className="relative z-10 w-80 h-80 sm:w-96 sm:h-96 object-cover rounded-2xl border-4 border-gray-800 shadow-2xl group-hover:scale-105 transition-transform duration-300"
              />
            </div>
          </div>

          {/* Enhanced Description */}
          <div className='mt-5 w-full lg:w-6/12 lg:mt-0 desc-about lg:ms-10'>
            <div className="bg-[#1f1d1b] rounded-2xl p-6 sm:p-8 border border-[#2a2926] shadow-lg">
              <h2 className="text-2xl sm:text-3xl font-bold text-white mb-6">
                Turning <span className="text-[#00F5A0]">Vision</span> into <span className="text-[#00D9F5]">Reality</span>
              </h2>

              <p className="text-gray-300 text-lg leading-relaxed">
                I'm a passionate <span className="text-[#00F5A0] font-semibold">Frontend Developer</span> with expertise in modern web technologies. I specialize in creating <span className="text-[#00D9F5] font-semibold">high-performance, scalable applications</span> that deliver exceptional user experiences and drive business growth.
              </p>

              <p className="text-gray-300 text-lg leading-relaxed mt-4">
                With a strong foundation in both <span className="text-yellow-400 font-semibold">frontend development</span> and <span className="text-purple-400 font-semibold">programming principles</span>, I bring technical excellence and creative problem-solving to every project. I'm committed to writing clean, maintainable code that stands the test of time.
              </p>

              {/* Enhanced Skills Section */}
              <div className="mt-8">
                <h3 className="text-xl font-semibold text-white mb-6 text-center">Core Expertise</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {[
                    {
                      skill: 'Modern Frameworks',
                      description: 'React, Next.js, TypeScript',
                      icon: <Rocket className="text-[#0083F5] w-6 h-6" />
                    },
                    {
                      skill: 'UI/UX Design',
                      description: 'Tailwind, Material UI, Framer',
                      icon: <Palette className="text-[#00F5A0] w-6 h-6" />
                    },
                    {
                      skill: 'Performance',
                      description: 'Optimized & Fast Loading',
                      icon: <Zap className="text-yellow-400 w-6 h-6" />
                    },
                    {
                      skill: 'Responsive Design',
                      description: 'Mobile-First Approach',
                      icon: <Smartphone className="text-[#00D9F5] w-6 h-6" />
                    },
                  ].map(({ skill, description, icon }) => (
                    <div key={skill} className="bg-[#2a2926] p-4 rounded-xl border border-gray-700 hover:border-[#00F5A0] transition-all duration-300 group hover:transform hover:-translate-y-1">
                      <div className="flex items-start space-x-3">
                        <div className="mt-1 group-hover:scale-110 transition-transform">{icon}</div>
                        <div>
                          <h3 className="text-white font-semibold text-lg">{skill}</h3>
                          <p className="text-gray-400 text-sm mt-1">{description}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Enhanced Contact Section */}
              <div className="mt-8 text-center">
                <p className="text-gray-300 mb-4">
                  Ready to bring your next project to life?
                </p>
                <div className="flex flex-col sm:flex-row gap-3 justify-center">
                  <button
                    onClick={handleContactClick}
                    className="px-6 py-3 bg-gradient-to-r from-[#00F5A0] to-[#00D9F5] text-gray-900 font-semibold rounded-lg hover:from-[#00D9F5] hover:to-[#0083F5] transform hover:scale-105 transition-all duration-300 shadow-lg flex items-center justify-center gap-2"
                  >
                    <MessageCircle className="w-5 h-5" />
                    WhatsApp Me
                  </button>

                  <button
                    onClick={handleCallClick}
                    className="px-6 py-3 border-2 border-[#00F5A0] text-[#00F5A0] font-semibold rounded-lg hover:bg-[#00F5A0] hover:text-gray-900 transform hover:scale-105 transition-all duration-300 flex items-center justify-center gap-2"
                  >
                    <Phone className="w-5 h-5" />
                    Call Now
                  </button>
                </div>

                {/* Phone Number Display */}
                <div className="mt-4 p-3 bg-gray-800/50 rounded-lg border border-gray-700">
                  <p className="text-gray-300 text-sm">Direct Contact</p>
                  <p className="text-white font-mono font-semibold text-lg">{phoneNumber}</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Enhanced Stats Section */}
        <div className="py-12 px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                { number: "1+", label: "Years Experience", description: "Dedicated to mastering web technologies" },
                { number: "17+", label: "Projects Completed", description: "From concept to deployment" },
                { number: "15+", label: "Happy Clients", description: "Satisfied with delivered solutions" },
              ].map((stat, index) => (
                <div key={index} className="bg-[#1f1d1b] rounded-2xl p-6 border border-[#2a2926] hover:border-[#00F5A0] transition-all duration-300 group text-center">
                  <h1 className="font-bold text-3xl md:text-4xl text-transparent bg-clip-text bg-gradient-to-r from-[#00F5A0] via-[#00D9F5] to-[#0083F5] group-hover:scale-110 transition-transform">
                    {stat.number}
                  </h1>
                  <h2 className="text-white font-semibold text-lg mt-2">{stat.label}</h2>
                  <p className="text-gray-400 text-sm mt-2">{stat.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  )
}