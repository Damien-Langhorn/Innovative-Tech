import React, {useEffect} from 'react';
import Navbar from '../Navbar';
import HeroImage from '../../assets/Hero-Image.webp'
import { teamMembers } from '../../assets';
import Footer from '../Footer';
import { Link } from 'react-router-dom';

const Hero = () => {


  useEffect(() => {
    window.scrollTo(0, 0);
    }, []);

  return (
    <section className='overflow-x-hidden'>
      <Navbar />
        <h1 className='text-black font-bold flex justify-center text-4xl pt-32'>Revolutionizing</h1>
        <h1 className='text-black font-bold flex justify-center text-4xl'>Tomorrow</h1>
        <p className='text-gray-500 flex justify-center pt-4 px-8 text-center'>Empowering innovation through cutting-edge technology.</p>

        <div className='flex justify-center gap-3 pt-12 px-8'>
            <Link
            to='/Contact'
            className='button-one w-50 h-13 shadow-md hover:shadow-2xl hover:scale-110 transition-all duration-100 ease-linear'>Join us now</Link>
        </div>

        <img
        
        fetchPriority='high' 
        src={HeroImage} 
        alt="Hero section image" 
        className='flex justify-center max-h-200 m-auto w-[400px] sm:w-[1000px] p-10'/>
        
        <h1 className='flex justify-center font-bold text-4xl'>Our Vision</h1>
        <p className='flex justify-center text-center max-w-300 m-auto px-10 pt-4'>We prioritize understanding and fulfilling the needs of our customers, ensuring exceptional experiences and tailored solutions. 
          Empowering our customers to succeed in their businesses is at the heart of our approach.
          Through deep market insight and innovative problem-solving, we provide our customers with the tools and support they need to thrive.
           We are committed to their success, going above and beyond to exceed their expectations.
        </p>






         <h1 className='text-black font-bold flex justify-center text-4xl pt-16'>Our Team</h1>
              
        
              <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 px-8 py-16 max-w-300 m-auto'>
                {teamMembers.map((member) => (
                  <div key={member.name} className='text-center'>
                    <img loading='lazy' src={member.image} alt='Picture' className='flex justify-center  pt-4 w-[400px] sm:[1000px] h-auto'/>
                    <h2 className='text-black font-bold text-xl text-left pt-2'>{member.name}</h2>
                    <p className='text-gray-500 text-left pt-2'>{member.title}</p>
                    <p className='text-gray-500 pt-2 text-left'>{member.description}</p>
                  </div>
                ))}
              </div>

              <Footer />

    </section>

  )
}

export default Hero


