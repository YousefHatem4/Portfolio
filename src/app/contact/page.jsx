import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope, faPhoneVolume, faLocationDot } from '@fortawesome/free-solid-svg-icons'

export default function contact() {
  return <>
    <div className='bg-[#161513] font-fam  overflow-hidden w-full min-h-screen bg-cover bg-center bg-no-repeat'>
      <div className="title-about text-center pt-20">
        <h1 className='text-[50px]'>Get In Touch</h1>
      </div>
      <div className='md:flex justify-center items-center mt-20 gap-x-12'>
        <div className='info-contact   md:w-4/12 pb-35'>
          <h1 className='mb-3 bg-gradient-to-r from-[#00F5A0] via-[#00D9F5] to-[#0083F5] bg-clip-text text-transparent'>Let's talk</h1>
          <p className='text-gray-300'>I'm currently avaliable to take on new projects, so feel free to send me a message about anything that you want me to work on. You can contact anytime.</p>
          <div className='mt-4 flex  items-center' >
            <FontAwesomeIcon icon={faEnvelope} className="text-white w-[20px] me-5" />
            <p className='text-gray-300'>yousef.hatem.developer@gmail.com</p>
          </div>

          <div className='mt-4 flex  items-center' >
            <FontAwesomeIcon icon={faPhoneVolume} className="text-white w-[20px] me-5" />
            <p className='text-gray-300'>+02 114 082 1819</p>
          </div>

          <div className='mt-4 flex  items-center' >
            <FontAwesomeIcon icon={faLocationDot} className="text-white w-[20px] me-5" />
            <p className='text-gray-300'>Elshiekh_Zayed, <span className='bg-gradient-to-r from-[#00F5A0] via-[#00D9F5] to-[#0083F5] bg-clip-text text-transparent'>Egypt</span> </p>
          </div>
        </div>
        <div className='form-contact w-full md:w-4/12 mb-12 md:mb-0'>
          <form className="max-w-sm mx-auto" action={"https://formspree.io/f/mdkeygoa"} method='POST'>
            <div className="mb-5">
              <label htmlFor="text" className="block mb-2 text-sm font-medium text-white">Your Name</label>
              <input type="text" id="text" className=" text-sm rounded-lg  block w-full bg-gray-700 border-gray-600 placeholder-gray-400 text-white  " placeholder="Enter Your Name" required />
            </div>
            <div className="mb-5">
              <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your Email</label>
              <input type="email" id="email" className=" text-sm rounded-lg  block w-full p-2.5 bg-gray-700 border-gray-600 placeholder-gray-400 text-white " placeholder="Enter Your Email" required />
            </div>
          
            <div className="mb-5">
              <label htmlFor="text" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Write Your Message Here</label>
              <textarea name='message'  rows={8}  id="text" className="resize-none text-sm rounded-lg  block w-full p-2.5 bg-gray-700 border-gray-600 placeholder-gray-400 text-white " placeholder="Enter Your Message" required />
            </div>
            <button type="submit" className=" font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center ">Submit Now</button>
          </form>


        </div>
      </div>
    </div>
  </>
}
