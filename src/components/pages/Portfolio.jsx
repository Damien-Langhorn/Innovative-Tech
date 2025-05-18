import React from 'react'
import Navbar from '../Navbar'
import { portfolio } from '../../assets'
import { caseStudies } from '../../assets'
import portfolioImage from '../../assets/portfolio-image.png'

const Portfolio = () => {
  return (
    <section>
        <Navbar />

        <h1 className='flex justify-center font-bold text-4xl pt-16'>Showcasing Our Expertise</h1>
        <p className='flex justify-center pt-4'>Innovative solutions redefining technology for a smarter future.</p>
        <img className='pt-4 flex justify-center max-h-150 px-10 m-auto' src={portfolioImage} alt='Image'/>

        <h1 className='flex justify-center font-bold pt-16 text-2xl'>Successful Projects Highlights</h1>


        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 px-8 py-16 m-auto'>
                {portfolio.map((project) => (
                  <div key={project.title} className='text-center border-2 border-gray-300 rounded-lg p-4 shadow-lg'>
                    <div className='grid grid-cols-1 items-center gap-3'>
                      <img src={project.image} alt='Picture' className='flex justify-center w-auto'/>  
                       <h2 className='text-black font-bold text-lg text-left'>{project.title}</h2>
                       <p className='text-gray-500 pt-2 text-left'>{project.description}</p>
                       <button className='button-two'>Read More</button>
                     </div>
                  </div>
                ))}
              </div>

        <h1 className='flex justify-center font-bold pt-16 text-2xl'>Case Studies</h1>

        <div className='grid grid-cols-1 lg:grid-cols-2 gap-8 px-8 py-16 m-auto'>
                {caseStudies.map((project) => (
                  <div key={project.title} className='flex justify-between border-2 border-gray-300 rounded-lg p-4 shadow-lg gap-10'>
                    <div className='grid grid-cols-1 items-center gap-3'>  
                       <h2 className='text-black font-bold text-lg text-left'>{project.title}</h2>
                       <p className='text-gray-500 pt-2 text-left'>{project.description}</p>
                       <p className='text-gray-500 pt-2 text-left'>{project.completed}</p>
                       <button className='button-two w-31 h-8'>Read More</button>
                     </div>
                     <div className='max-w-50'>
                      <img src={project.image} alt='Picture' className='w-auto'/>
                     </div>
                  </div>
                ))}
              </div>
      
    </section>
  )
}

export default Portfolio
