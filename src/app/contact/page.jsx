import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope, faPhoneVolume, faLocationDot, faPaperPlane } from '@fortawesome/free-solid-svg-icons'

export default function Contact() {
  return (
    <div className='bg-[#161513] font-fam overflow-hidden w-full min-h-screen bg-cover bg-center bg-no-repeat'>
      {/* Enhanced Header */}
      <div className="text-center pt-20 pb-8">
        <h1 className='text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-4'>
          Get In <span className="bg-gradient-to-r from-[#00F5A0] via-[#00D9F5] to-[#0083F5] bg-clip-text text-transparent">Touch</span>
        </h1>
        <p className="text-gray-400 text-lg max-w-2xl mx-auto px-4">
          Ready to bring your next project to life? Let's discuss how we can work together.
        </p>
      </div>

      <div className='flex flex-col lg:flex-row justify-center items-start gap-12 px-4 sm:px-8 lg:px-16 py-8'>
        {/* Contact Information - Enhanced */}
        <div className='w-full lg:w-5/12'>
          <div className="bg-[#1f1d1b] rounded-2xl p-8 border border-[#2a2926] shadow-lg">
            <h1 className='text-2xl sm:text-3xl font-bold bg-gradient-to-r from-[#00F5A0] via-[#00D9F5] to-[#0083F5] bg-clip-text text-transparent mb-4'>
              Let's Create Something Amazing
            </h1>
            <p className='text-gray-300 text-lg leading-relaxed mb-8'>
              I'm currently available for new projects and collaborations. Whether you have a specific project in mind or just want to explore possibilities, I'd love to hear from you.
            </p>

            {/* Enhanced Contact Items */}
            <div className='space-y-6'>
              <div className='flex items-start gap-4 p-4 rounded-xl bg-[#2a2926] hover:bg-[#333230] transition-all duration-300 group'>
                <div className="p-3 rounded-lg bg-gradient-to-r from-[#00F5A0] to-[#00D9F5] group-hover:scale-110 transition-transform">
                  <FontAwesomeIcon icon={faEnvelope} className="text-white w-4 h-4" />
                </div>
                <div>
                  <h3 className="text-white font-semibold mb-1">Email</h3>
                  <p className='text-gray-300'>yousef.hatem.developer@gmail.com</p>
                  <p className="text-gray-400 text-sm mt-1">Typically replies within 24 hours</p>
                </div>
              </div>

              <div className='flex items-start gap-4 p-4 rounded-xl bg-[#2a2926] hover:bg-[#333230] transition-all duration-300 group'>
                <div className="p-3 rounded-lg bg-gradient-to-r from-[#00D9F5] to-[#0083F5] group-hover:scale-110 transition-transform">
                  <FontAwesomeIcon icon={faPhoneVolume} className="text-white w-4 h-4" />
                </div>
                <div>
                  <h3 className="text-white font-semibold mb-1">Phone</h3>
                  <p className='text-gray-300'>+20 114 082 1819</p>
                  <p className="text-gray-400 text-sm mt-1">Available for calls and WhatsApp</p>
                </div>
              </div>

              <div className='flex items-start gap-4 p-4 rounded-xl bg-[#2a2926] hover:bg-[#333230] transition-all duration-300 group'>
                <div className="p-3 rounded-lg bg-gradient-to-r from-[#0083F5] to-[#00F5A0] group-hover:scale-110 transition-transform">
                  <FontAwesomeIcon icon={faLocationDot} className="text-white w-4 h-4" />
                </div>
                <div>
                  <h3 className="text-white font-semibold mb-1">Location</h3>
                  <p className='text-gray-300'>El Sheikh Zayed, <span className='bg-gradient-to-r from-[#00F5A0] via-[#00D9F5] to-[#0083F5] bg-clip-text text-transparent font-semibold'>Egypt</span></p>
                  <p className="text-gray-400 text-sm mt-1">Remote work available worldwide</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Contact Form - Enhanced */}
        <div className='w-full lg:w-7/12'>
          <div className="bg-[#1f1d1b] rounded-2xl p-8 border border-[#2a2926] shadow-lg">
            <h2 className="text-2xl font-bold text-white mb-2">Send Me a Message</h2>
            <p className="text-gray-400 mb-8">Fill out the form below and I'll get back to you as soon as possible.</p>

            <form className="space-y-6" action={"https://formspree.io/f/mdkeygoa"} method='POST'>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block mb-3 text-sm font-medium text-white">
                    Your Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    className="w-full px-4 py-3 rounded-lg bg-[#2a2926] border border-gray-700 text-white placeholder-gray-400 focus:border-[#00F5A0] focus:ring-2 focus:ring-[#00F5A0]/20 transition-all duration-300"
                    placeholder="Enter your full name"
                    required
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block mb-3 text-sm font-medium text-white">
                    Your Email *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    className="w-full px-4 py-3 rounded-lg bg-[#2a2926] border border-gray-700 text-white placeholder-gray-400 focus:border-[#00D9F5] focus:ring-2 focus:ring-[#00D9F5]/20 transition-all duration-300"
                    placeholder="Enter your email address"
                    required
                  />
                </div>
              </div>

              <div>
                <label htmlFor="message" className="block mb-3 text-sm font-medium text-white">
                  Your Message *
                </label>
                <textarea
                  name="message"
                  rows={6}
                  id="message"
                  className="resize-none w-full px-4 py-3 rounded-lg bg-[#2a2926] border border-gray-700 text-white placeholder-gray-400 focus:border-[#0083F5] focus:ring-2 focus:ring-[#0083F5]/20 transition-all duration-300"
                  placeholder="Tell me about your project, timeline, and any specific requirements..."
                  required
                />
              </div>

              <button
                type="submit"
                className="w-full sm:w-auto px-8 py-4 bg-gradient-to-r from-[#00F5A0] to-[#00D9F5] text-gray-900 font-bold rounded-lg hover:from-[#00D9F5] hover:to-[#0083F5] transform hover:scale-105 transition-all duration-300 shadow-lg flex items-center justify-center gap-3 group"
              >
                <FontAwesomeIcon icon={faPaperPlane} className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>

      {/* Additional Info Section */}
      <div className="px-4 sm:px-8 lg:px-16 py-12">
        <div className="max-w-4xl mx-auto text-center">
          <h3 className="text-xl font-semibold text-white mb-4">What to Expect After You Reach Out</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-gray-400">
            <div className="p-4">
              <div className="text-2xl mb-2">💬</div>
              <h4 className="text-white font-semibold mb-2">Quick Response</h4>
              <p className="text-sm">I'll get back to you within 24 hours to discuss your project</p>
            </div>
            <div className="p-4">
              <div className="text-2xl mb-2">📋</div>
              <h4 className="text-white font-semibold mb-2">Project Analysis</h4>
              <p className="text-sm">We'll review your requirements and create a detailed plan</p>
            </div>
            <div className="p-4">
              <div className="text-2xl mb-2">⚡</div>
              <h4 className="text-white font-semibold mb-2">Fast Delivery</h4>
              <p className="text-sm">Get your project started quickly with clear timelines</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}