import React, { useState } from 'react';
import { Phone, Mail, MapPin } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    message: ''
  });

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    alert('Thank you for your inquiry! We will get back to you soon.');
    setFormData({ name: '', email: '', phone: '', company: '', message: '' });
  };

  return (
    <section id="contact" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-[#0c3155] mb-4">Contact Us</h2>
          <p className="text-xl text-[#0671ca] max-w-3xl mx-auto">
            Start Service with QRPE that can provide Best Solution With Best Price
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <h3 className="text-2xl font-bold text-[#0c3155] mb-8">Get In Touch</h3>
            <div className="space-y-8">
              <div className="flex items-start">
                <div className="bg-[#0671ca] p-3 rounded-lg">
                  <Phone className="w-6 h-6 text-white" />
                </div>
                <div className="ml-4">
                  <h4 className="font-semibold text-[#0c3155]">Phone</h4>
                  <p className="text-[#0671ca]">+91 78 93 98 98 98</p>
                  <p className="text-gray-600 mt-1">Start Service with QRPE that can provide Best Solution With Best Price</p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="bg-[#0671ca] p-3 rounded-lg">
                  <Mail className="w-6 h-6 text-white" />
                </div>
                <div className="ml-4">
                  <h4 className="font-semibold text-[#0c3155]">Email</h4>
                  <p className="text-[#0671ca]">General Inquiries: hi@qrpe.in</p>
                  <p className="text-[#0671ca]">Support: support@qrpe.in</p>
                  <p className="text-[#0671ca]">Partnerships: partnerships@qrpe.in</p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="bg-[#0671ca] p-3 rounded-lg">
                  <MapPin className="w-6 h-6 text-white" />
                </div>
                <div className="ml-4">
                  <h4 className="font-semibold text-[#0c3155]">Location</h4>
                  <p className="text-[#0671ca]">Plot No 21 Dwellings Ayyppa Society Madhapur Hyderabad 500072</p>
                  <a 
                    href="https://maps.google.com" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-[#0671ca] underline hover:text-[#0c3155] mt-1 inline-block"
                  >
                    View on Google map
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white p-8 rounded-xl shadow-lg">
            <h3 className="text-2xl font-bold text-[#0c3155] mb-6">Send us a message</h3>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-[#0c3155] mb-2">
                    Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#0671ca] focus:border-transparent"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-[#0c3155] mb-2">
                    Email *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#0671ca] focus:border-transparent"
                  />
                </div>
              </div>
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-[#0c3155] mb-2">
                    Phone
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#0671ca] focus:border-transparent"
                  />
                </div>
                <div>
                  <label htmlFor="company" className="block text-sm font-medium text-[#0c3155] mb-2">
                    Company
                  </label>
                  <input
                    type="text"
                    id="company"
                    name="company"
                    value={formData.company}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#0671ca] focus:border-transparent"
                  />
                </div>
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-[#0c3155] mb-2">
                  Message *
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  required
                  rows={4}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#0671ca] focus:border-transparent"
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full bg-[#0671ca] text-white px-6 py-3 rounded-lg font-semibold hover:bg-[#0c3155] transition-colors"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;