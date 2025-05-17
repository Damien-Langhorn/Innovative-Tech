import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <div className='nav-container sticky'>
        <h2 className='font-bold text-2xl flex items-center p-4'>Innovative Tech</h2>
      <ul className='flex flex-row gap-8 m-auto'>
        <li>
          <Link to='/'>Home</Link>
        </li>
        <li>
          <Link to='/About'>About</Link>
        </li>
        <li>
          <Link to='/Services'>Services</Link>
        </li>
        <li>
          <Link to='/Portfolio'>Portfolio</Link>
        </li>
        <li>
          <Link to='/Contact'>Contact</Link>
        </li>
      </ul>
      <button className='button-one w-38 h-10 mt-2 mr-4'>Help</button>
    </div>
  )
}

export default Navbar
