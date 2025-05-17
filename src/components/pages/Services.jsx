import React from 'react'
import Navbar from '../Navbar'
import { serviceListings } from '../../assets'
import { testimonials } from '../../assets'

const Services = () => {
  return (
    <section id='services' className='h-screen'>

      <Navbar />

      <h1 className='flex justify-center font-bold text-3xl pt-8'>Tech Solutions Overview</h1>
      <p className='flex justify-center text-center text-gray-500 pt-4 px-8'>Introducing our diverse range of cutting-edge tech solutions, designed to empower your business and drive
        innovationn. From web development to automation, discover how we can transform your digital landscape.
      </p>
      <img className='pt-4 flex justify-center'src='null' alt='Image'/>

      <h1 className='flex justify-center font-bold pt-16 text-3xl'>Service Listings</h1>
      <h2 className='text-left font-bold text-2xl pt-4 px-8'>Solutions for Every Industry</h2>
      <p className='text-gray-500 text-left pt-2 px-8'>We provide innovative tech solutions tailored to various industries. Our expertise spans diverse domains, ensuring we meet your unique business requirements with excellence.</p>
        
      <div className='grid grid-cols-1 px-8'>
        {serviceListings.map((listing) => (
          <div key={listing.title} className='text-left pt-8'>
            <h2 className='font-bold text-2xl'>{listing.title}</h2>
            <p className='text-gray-500 text-left pt-2'>{listing.description}</p>
            <h2 className='text-xl pt-2'>Key Benefits:</h2>
            <p className='text-gray-500 pt-2 text-left'>{listing.benefits}</p>
          </div>
        ))}
      </div>

      <h1 className='flex justify-center font-bold text-3xl pt-8'>Hear from our awesome users!</h1>

      <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 px-8 py-16 m-auto'>
        {testimonials.map((member) => (
          <div key={member.name} className='text-center'>
            <img src='' alt='Picture' className='flex justify-center pt-4'/>
            <h2 className='text-black font-bold text-xl text-left pt-2'>{member.name}</h2>
            <p className='text-gray-500 text-left pt-2'>{member.title}</p>
            <p className='text-gray-500 pt-2 text-left'>{member.description}</p>
          </div>
        ))}
      </div>


    </section>
  )
}

export default Services