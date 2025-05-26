import React, { useRef} from 'react'
import { FaFacebook, FaLinkedin } from 'react-icons/fa'
import logo from '../assets/logo.webp'


const Footer = () => {

  const emailRef = useRef(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!emailRef.current.value) {
      emailRef.current.focus();
      return;
    }
    // Handle subscribe logic here
    alert('Subscribed!');
    emailRef.current.value = '';
  };


  return (
    <div className='bg-black h-auto w-auto pb-8 mt-16'>
       
            <h1 className='flex justify-center font-bold text-white text-xl pt-16'>Subscribe to our newsletter! </h1>
            <div className='flex justify-center items-center mt-2'>
            <form onSubmit={handleSubmit}>
              <input
                ref={emailRef}
                type="email"
                 placeholder="Email"
                 className='w-auto  border-1  text-white border-gray-300 rounded-l-3xl p-2 bg-black focus:outline-none'
                 required
              />
              <button
               type='submit'
               className='bg-blue-500 border-1  border-gray-300 text-white p-2 rounded-r-4xl hover:bg-blue-600'>
              Subscribe
              </button>
            </form>
            </div>

            <div className='flex justify-center items-center mt-8'>
                <img src={logo} alt='logo' className='w-12 h-7 mt-16'/>
                <h1 className='text-white pt-16 text-2xl font-bold'>Innovative Tech</h1>
            </div>
            <hr className="my-2 border-t-2 border-white w-3/4 min-w-200 mx-auto" />

           
                
                <div >
                <p className='flex justify-center text-white pt-2 text-sm'>© 2023 Innovative Tech. All rights reserved.</p>
                <p className='flex justify-center text-white pt-2 text-sm'>Privacy Policy | Terms of Service</p>
                </div>
                <div className='flex justify-center mt-4 gap-4'>
                     <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
                        <FaFacebook className="text-white text-2xl hover:text-blue-500" />
                    </a>
                    <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
                        <FaLinkedin className="text-white text-2xl hover:text-blue-400" />
                    </a>
                </div>
            

            
    </div>
  )
}

export default Footer