import React, { useState} from 'react';
import { NavLink } from 'react-router-dom';
import logo from '../assets/logo.png';
import { FaBars, FaTimes } from 'react-icons/fa';

const Navbar = () => {

const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className='nav-container flex gap-8 sticky top-0 z-50 bg-white'>
      <div className='flex items-center'>
        <img src={logo} alt='Logo' className='w-12 h-7'/>
        <h2 className='font-bold text-2xl'>Innovative Tech</h2>
      </div>

      {/* Hamburger Menu Icon */}
      <div className="sm:hidden flex ml-auto pr-4">
        <button onClick={() => setMenuOpen(!menuOpen)}>
          {menuOpen ? (
            <FaTimes className="text-3xl text-blue-500" />
          ) : (
            <FaBars className="text-3xl text-blue-500" />
          )}
        </button>
      </div>


      {/* Desktop Nav */}
      <div className='hidden sm:flex'>
        <ul className='flex flex-row gap-8 m-auto'>
          <li>
            <NavLink 
              to='/'
              className={({ isActive }) => 
                isActive ? "text-blue-500 font-bold underline underline-offset-8 decoration-3" : "text-gray-500"
                }
                end>Home</NavLink>
          </li>
          <li>
            <NavLink 
              to='/Services'
              className={({ isActive }) =>
                isActive ? "text-blue-500 font-bold underline underline-offset-8 decoration-3" : "text-gray-500"
                }
                end>Services</NavLink>
          </li>
          <li>
            <NavLink 
              to='/Portfolio'
              className={({ isActive }) =>
                isActive ? "text-blue-500 font-bold underline underline-offset-8 decoration-3" : "text-gray-500"
                }
                end>Portfolio</NavLink>
          </li>
          <li>
            <NavLink 
              to='/Contact'
              className={({ isActive }) =>
                isActive ? "text-blue-500 font-bold underline underline-offset-8 decoration-3" : "text-gray-500"
                }
                end>Contact</NavLink>
          </li>
        </ul>
      </div>  


      {/* Mobile Nav */}
      {menuOpen && (
        <ul className='absolute top-12 w-full bg-white flex flex-col items-center px-4 pb-4 gap-4 shadow-lg lg:hidden z-50'>
          <li>
            <NavLink to='/' onClick={() => setMenuOpen(false)} className={({ isActive }) => isActive ? "text-blue-500 font-bold underline underline-offset-8 decoration-3" : "text-gray-500"} end>Home</NavLink>
          </li>
          <li>
            <NavLink to='/Services' onClick={() => setMenuOpen(false)} className={({ isActive }) => isActive ? "text-blue-500 font-bold underline underline-offset-8 decoration-3" : "text-gray-500"} end>Services</NavLink>
          </li>
          <li>
            <NavLink to='/Portfolio' onClick={() => setMenuOpen(false)} className={({ isActive }) => isActive ? "text-blue-500 font-bold underline underline-offset-8 decoration-3" : "text-gray-500"} end>Portfolio</NavLink>
          </li>
          <li>
            <NavLink to='/Contact' onClick={() => setMenuOpen(false)} className={({ isActive }) => isActive ? "text-blue-500 font-bold underline underline-offset-8 decoration-3" : "text-gray-500"} end>Contact</NavLink>
          </li>
        </ul>
      )}
      
    </div>
  )
}

export default Navbar
