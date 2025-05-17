import React from 'react';
import Navbar from '../Navbar';
import HeroImage from '../../assets/Hero-Image.png'

const Hero = () => {
  return (
    <section className='h-screen '>
      <Navbar />
        <h1 className='text-black font-bold flex justify-center text-4xl pt-15'>Revolutionizing</h1>
        <h1 className='text-black font-bold flex justify-center text-4xl'>Tomorrow</h1>
        <p className='text-black flex justify-center pt-4'>Empowering innovation through cutting-edge technology.</p>

        <div className='flex justify-center gap-3 pt-12'>
            <button className='button-one w-50 h-13'>Join us now</button>
            <button className='button-two w-50 h-13'>Request demo</button>
        </div>

        <div className='flex justify-center'>
            <img src={HeroImage} alt="Hero section image" className='w-4xl h-1/2 rotate-x-45' />
        </div>
    </section>

  )
}

export default Hero


