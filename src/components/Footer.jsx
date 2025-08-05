import React from 'react';
import logo from "../assets/logo.png";

const Footer = ({ scrollToSection }) => {
  return (
    <footer className="relative bg-gray-900 text-white py-12 overflow-hidden">
      {/* Background styling similar to Home component */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#0c3155] via-[#0a2847] to-[#0c3155] animate-classic-fade" />
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0 bg-[size:60px_60px] bg-[linear-gradient(to_right,#ffffff08_1px,transparent_1px),linear-gradient(to_bottom,#ffffff08_1px,transparent_1px)]"></div>
        </div>
        <div className="absolute top-0 right-0 w-1/3 h-1/2 bg-gradient-to-bl from-[#0671ca] to-[#045ba9] opacity-10 blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-1/2 h-1/3 bg-gradient-to-tr from-[#0671ca] to-[#045ba9] opacity-5 blur-3xl"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center mb-4">
              {/* <img src={logo} alt="QRPE Logo" className="h-10 w-auto mr-3" /> */}
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-3 py-2 rounded-lg font-bold text-xl">
                QRPE
              </span>
            </div>
            <p className="text-gray-400 mb-4">
              Your trusted Technology Service Partner for POS, payment gateways, and ERP solutions.
            </p>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Services</h4>
            <ul className="space-y-2 text-gray-400">
              <li>POS Integration</li>
              <li>Payment Gateway</li>
              <li>UPI Solutions</li>
              <li>ERP Integration</li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Company</h4>
            <ul className="space-y-2 text-gray-400">
              <li><button 
                  onClick={() => scrollToSection('about')}
                  className="hover:text-blue-400 transition-colors duration-300"
                >
                  About Us
                </button></li>
              <li><button 
                  onClick={() => scrollToSection('clients')}
                  className="hover:text-blue-400 transition-colors duration-300"
                >
                  Our Clients
                </button></li>
              <li><button 
                  onClick={() => scrollToSection('achievements')}
                  className="hover:text-blue-400 transition-colors duration-300"
                >
                  Achievements
                </button></li>
              <li><button 
                  onClick={() => scrollToSection('contact')}
                  className="hover:text-blue-400 transition-colors duration-300"
                >
                  Contact
                </button></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Contact Info</h4>
            <div className="space-y-2 text-gray-400">
              <p className="flex items-center">
                <svg className="w-4 h-4 mr-2 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                +91 9876543210
              </p>
              <p className="flex items-center">
                <svg className="w-4 h-4 mr-2 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                support@QRPE.com
              </p>
              <p className="flex items-center">
                <svg className="w-4 h-4 mr-2 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
Plot No 21 Dwellings Ayyppa Society Madhapur Hyderabad 500072              </p>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} QRPE. All rights reserved.</p>
        </div>
      </div>

      <style jsx global>{`
        @keyframes classic-fade {
          0%, 100% {
            opacity: 0.95;
          }
          50% {
            opacity: 1;
          }
        }

        .animate-classic-fade {
          animation: classic-fade 15s ease-in-out infinite;
        }
      `}</style>
    </footer>
  );
};

export default Footer;