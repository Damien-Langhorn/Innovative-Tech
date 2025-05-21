import React, { useState } from 'react'
import Navbar from '../Navbar'
import contactImage from '../../assets/contact.png'
import Footer from '../Footer'

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
      <div className='grid grid-cols-1 sm:grid-cols-2 gap-4 px-8 pb-16 max-w-300 m-auto'>

         <div className='mt-8 p-8'>
          <h1 className='text-4xl font-bold text-center'>Contact Us!</h1>
          <p className='text-gray-500 text-center pt-4'>Please fill out the form to get in touch.</p>
          <img className='pt-4 flex justify-center max-h-150 m-auto' src={contactImage} alt='Contact Image'/>
        </div>

        <div className="mt-8 p-8">
          
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

        <h1 className='flex justify-center text-2xl'>Our Location</h1>

        <a
          href="https://www.google.com/maps/place/Google+NYC+-+9th+Avenue/@40.741469,-74.003387,15z/data=!4m6!3m5!1s0x89c259bf5c1654f3:0xc80f9cfce5383d5d!8m2!3d40.7414688!4d-74.0033873!16s%2Fg%2F1tdn0f7x?hl=en&entry=ttu&g_ep=EgoyMDI1MDUxNS4wIKXMDSoJLDEwMjExNDUzSAFQAw%3D%3D"
          target="_blank"
          rel="noopener noreferrer"
          className="block text-blue-500 underline text-center mt-2"
        >
        View on Google Maps
        </a>

        <div className="mt-8 flex justify-center px-10">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d6045.8688153891435!2d-74.0033873!3d40.7414688!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c259bf5c1654f3%3A0xc80f9cfce5383d5d!2sGoogle%20NYC%20-%209th%20Avenue!5e0!3m2!1sen!2sus!4v1747781734405!5m2!1sen!2sus" 
            width="600"
            height="400"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Our Location"
            className="rounded-lg shadow-lg"
          ></iframe>
        </div>


        <Footer />
    </section>
  )
}

export default Contact
