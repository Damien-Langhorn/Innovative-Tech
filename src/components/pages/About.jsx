import React from 'react'
import Navbar from '../Navbar';
import { teamMembers } from '../../assets';

const About = () => {

  return (
    <section id='about' className='h-screen'>

      <Navbar />

      <h1 className='text-black font-bold flex justify-center text-4xl py-4'>Our Team</h1>
      

      <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 px-8 py-16 m-auto'>
        {teamMembers.map((member) => (
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

export default About
