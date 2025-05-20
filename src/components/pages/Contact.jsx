import React, { useState } from 'react'
import Navbar from '../Navbar'
import contactImage from '../../assets/contact.png'

const Contact = () => {
  const [form, setForm] = useState({ name: '', email: '', company: '', companySize: '', topic: '', message: '' })

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    // You can send the form data to your backend or an email service here
    alert('Message sent!')
    setForm({ name: '', email: '', company: '', companySize: '', topic: '', message: '' })
  } 

  return (
    <section>
      <Navbar />
      <div className='grid grid-cols-1 sm:grid-cols-2 gap-4 px-8 py-16 max-w-300 m-auto'>

         <div className='mt-16 p-8'>
          <h1 className='text-4xl font-bold text-center'>Contact Us!</h1>
          <p className='text-gray-500 text-center pt-4'>Please fill out the form to get in touch.</p>
          <img className='pt-4 flex justify-center max-h-150 m-auto' src={contactImage} alt='Contact Image'/>
        </div>

        <div className="mt-16 p-8">
          
          <form onSubmit={handleSubmit} className="flex flex-col ">
            <label className='font-bold'>Name</label>
            <input
              className="border p-2 rounded"
              type="text"
              name="name"
              placeholder="Your Name"
              value={form.name}
              onChange={handleChange}
              required
            />
            <label className='font-bold pt-4'>Email</label>
            <input
              className="border p-2 rounded"
              type="email"
              name="email"
              placeholder="Your Email"
              value={form.email}
              onChange={handleChange}
              required
            />
            <label className='font-bold pt-4'>Company Name</label>
            <input
              className="border p-2 rounded"
              type="text"
              name="company"
              placeholder="Your Company"
              value={form.company}
              onChange={handleChange}
              required
            />
            <label className='font-bold pt-4'>Company Size</label>
            <select
              className="border p-2 rounded"
              name="companySize"
              value={form.companySize}
              onChange={handleChange}
              required
            >
              <option value="" >Please Select</option>
              <option value="1-10">1-10</option>
              <option value="11-50">11-50</option>
              <option value="51-200">51-200</option>
              <option value="201+">201+</option>

            </select>
            <label className='font-bold pt-4'>Which topic best fits your needs?</label>
            <select
              className="border p-2 rounded"
              name="topic"
              value={form.topic}
              onChange={handleChange}
              required
            >
              <option value="" >Please Select</option>
              <option value="Service">Service</option>
              <option value="Product">Product</option>
              <option value="Finance">Finance</option>
              <option value="Logistics">Logistics</option>
              <option value="Marketing">Marketing</option>

            </select>
            <label className='font-bold pt-4'>How can we help?</label>
            <textarea
              className="border p-2 rounded"
              name="message"
              placeholder="Your Message"
              rows={5}
              value={form.message}
              onChange={handleChange}
              required
            />
            <button type="submit" className="bg-blue-500 text-white rounded p-2 mt-4 font-bold hover:bg-blue-600">
              Send
            </button>
          </form>
        

        </div>
        </div>
    </section>
  )
}

export default Contact
