import React, {useState} from 'react'
import Navbar from '../Navbar'
import { serviceListings } from '../../assets'
import { testimonials } from '../../assets'
import { FaStar, FaArrowLeft, FaArrowRight } from 'react-icons/fa'
import  serviceImage  from '../../assets/service-image.png'
import Footer from '../Footer'


const CARDS_TO_SHOW = 3;

const Services = () => {

  const [start, setStart] = useState(0);
  const totalCards = testimonials.length;

  const prevCards = () => setStart((prev) => (prev - CARDS_TO_SHOW + totalCards) % totalCards);
  const nextCards = () => setStart((prev) => (prev + CARDS_TO_SHOW) % totalCards);
  const visibleCards = testimonials.slice(start, start + CARDS_TO_SHOW);

  return (
    <section id='services' className='h-screen'>

      <Navbar />

      <h1 className='flex justify-center font-bold text-4xl pt-16'>Tech Solutions Overview</h1>
      <p className='flex justify-center text-center text-gray-500 pt-4 px-8 max-w-300 m-auto'>Introducing our diverse range of cutting-edge tech solutions, designed to empower your business and drive
        innovation. From web development to automation, discover how we can transform your digital landscape.
      </p>
      <img className='pt-4 flex justify-center px-10 max-h-150 m-auto'src={serviceImage} alt='Image'/>

      <h1 className='flex justify-center font-bold pt-32 text-2xl'>Service Listings</h1>
      <h2 className='text-left font-bold text-xl pt-8 px-8 max-w-300 m-auto'>Solutions for Every Industry</h2>
      <p className='text-gray-500 text-left pt-2 px-8 max-w-300 m-auto'>We provide innovative tech solutions tailored to various industries. Our expertise spans diverse domains, ensuring we meet your unique business requirements with excellence.</p>
        
      <div className='grid grid-cols-1 px-8 m-auto max-w-300'>
        {serviceListings.map((listing) => (
          <div key={listing.title} className='text-left pt-8'>
            <h2 className='font-bold text-xl'>{listing.title}</h2>
            <p className='text-gray-500 text-left pt-2'>{listing.description}</p>
            <h2 className='text-xl pt-2'>Key Benefits:</h2>
            <p className='text-gray-500 pt-2 text-left'>{listing.benefits}</p>
          </div>
        ))}
      </div>

      <h1 className='flex justify-center font-bold text-2xl pt-32'>Hear from our awesome users!</h1>

      <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 px-8 py-16 m-auto max-w-300'>
        {visibleCards.map((member, idx) => (
          <div key={member.name + idx} className='text-center border-2 border-gray-300 rounded-lg p-4 shadow-lg'>
            <div className='flex justify-space-between items-center gap-3'>
              <img src={member.image} alt='Picture' className='flex justify-start w-20 pt-4'/>
                <div className='flex flex-col justify-center items-center'>
                <h2 className='text-black font-bold text-xl text-left pt-2'>{member.name}</h2>
                <p className='text-gray-500 text-left pt-2 flex items-center'>
                  {Array.from({ length: Number(member.rating) }).map((_, idx) => (
                  <FaStar key={idx} className='text-yellow-400' />
                  ))}
             </p>
               </div>
             </div>
            <p className='text-gray-500 pt-2 text-left'>{member.description}</p>
          </div>
        ))}
      </div>

        <div className='flex justify-center items-center'>
          <button onClick={prevCards} className='bg-gray-300 text-black rounded-full p-2 m-4'>
            <FaArrowLeft />
          </button>
          <button onClick={nextCards} className='bg-gray-300 text-black rounded-full p-2 m-4'>
            <FaArrowRight />
          </button>
        </div>

        <div className='grid grid-cols-1 bg-gray-100 p-16 max-w-250 m-auto mt-32'>
          <div>
            <h1 className='flex justify-center text-blue-400 font-bold text-3xl'>Transform Your Business</h1>
            <p className='flex justify-center text-center p-2'>Unlock your potential with our cutting edge solutions. Take the first step toward innovation today!</p>
            <div className='flex justify-center pt-4'>
              <button className='button-one h-13 w-32'>Get started</button>
            </div>
          </div>
        </div>  

      
        <Footer />

    </section>
  )
}

export default Services