import React, {useState, useEffect} from 'react'
import Navbar from '../Navbar'
import { portfolio } from '../../assets'
import { caseStudies } from '../../assets'
import portfolioImage from '../../assets/portfolio-image.webp'
import Footer from '../Footer'
import Modal from '../Modal'

const Portfolio = () => {

  useEffect(() => {
     window.scrollTo(0, 0);
    }, []);

const [isModalOpen, setIsModalOpen] = useState(false);
const [selectedProject, setSelectedProject] = useState(null);

const handleButtonClick = (project) => {
  setSelectedProject(project);
  setIsModalOpen(true);
}

const handleCloseModal = () => {
  setIsModalOpen(false);
}

  return (
    <section className='overflow-x-hidden'>
        <Navbar />

        <h1 className='flex justify-center font-bold text-4xl pt-32 px-8 text-center'>Showcasing Our Expertise</h1>
        <p className='flex justify-center text-gray-500 pt-4 px-8 text-center'>Innovative solutions redefining technology for a smarter future.</p>
        <img
         fetchPriority='high'
         className='pt-4 flex justify-center max-h-150  px-10 m-auto' src={portfolioImage} alt='Image'/>

        <h1 className='flex justify-center font-bold pt-16 text-2xl'>Projects Highlights</h1>


        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 px-8 py-16 max-w-300 m-auto'>
                {portfolio.map((project) => (
                  <div key={project.title} className='text-center border-2 border-gray-300 rounded-lg p-4 shadow-lg'>
                    <div className='grid grid-cols-1 items-center gap-3'>
                      <img src={project.image} alt='Picture' className='flex justify-center w-auto'/>  
                       <h2 className='text-black font-bold text-lg text-left'>{project.title}</h2>
                       <p className='text-gray-500 pt-2 text-left'>{project.description}</p>
                       <button className='button-two bg-white hover:bg-blue-150 text-blue-150 hover:text-white' onClick={() => handleButtonClick(project)}>Read More</button>

                     </div>
                  </div>
                ))}
              </div>

        <h1 className='flex justify-center font-bold pt-16 text-2xl'>Case Studies</h1>

        <div className='grid grid-cols-1 lg:grid-cols-2 gap-8 px-8 py-16 max-w-300 m-auto'>
                {caseStudies.map((study) => (
                  <div key={study.title} className='flex justify-between border-2 border-gray-300 rounded-lg p-4 shadow-lg gap-10'>
                    <div className='grid grid-cols-1 items-center gap-3'>  
                       <h2 className='text-black font-bold text-lg text-left'>{study.title}</h2>
                       <p className='text-gray-500 pt-2 text-left'>{study.description}</p>
                       <p className='text-gray-500 pt-2 text-left'>{study.completed}</p>
                       <button className='button-two bg-white hover:bg-blue-150 hover:text-white text-blue-150 w-31 h-8' onClick={() => handleButtonClick(study)}>Read More</button>
                     </div>
                     <div className='max-w-50'>
                      <img loading='lazy' src={study.image} alt='Picture' className='w-auto'/>
                     </div>
                  </div>
                ))}
              </div>

              {isModalOpen && selectedProject && (
                 <Modal project={selectedProject} onClose={handleCloseModal} />)}

              <Footer />
      
    </section>
  )
}

export default Portfolio
