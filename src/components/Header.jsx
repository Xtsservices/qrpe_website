import React, { useState, useEffect } from "react";
import { Menu, X, ChevronRight, Phone, Mail, MapPin, Star, Shield } from "lucide-react";
import logo from "../assets/logo.png";

const Header = ({ activeSection, setActiveSection, scrollToSection }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [hoveredItem, setHoveredItem] = useState(null);

  const navigation = [
    { name: "Home", id: "home" },
    { name: "About Us", id: "about" },
    { name: "Services", id: "services" },
    { name: "Pricing", id: "pricing" },
    { name: "Contact Us", id: "contact" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (sectionId) => {
    scrollToSection(sectionId);
    setIsMenuOpen(false);
  };

  return (
    <>
      {/* Updated top bar with matching background */}
      <div className="fixed top-0 left-0 right-0 text-white text-sm py-2 z-50 hidden lg:block">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-[#0c3155] via-[#0a2847] to-[#0c3155] animate-classic-fade" />
          <div className="absolute inset-0 opacity-5">
            <div className="absolute inset-0 bg-[size:60px_60px] bg-[linear-gradient(to_right,#ffffff08_1px,transparent_1px),linear-gradient(to_bottom,#ffffff08_1px,transparent_1px)]"></div>
          </div>
          <div className="absolute top-0 right-0 w-1/3 h-1/2 bg-gradient-to-bl from-[#0671ca] to-[#045ba9] opacity-10 blur-3xl"></div>
          <div className="absolute bottom-0 left-0 w-1/2 h-1/3 bg-gradient-to-tr from-[#0671ca] to-[#045ba9] opacity-5 blur-3xl"></div>
        </div>
        
        <div className="relative max-w-7xl mx-auto px-4 flex justify-between items-center">
          <div className="flex space-x-6">
            <div className="flex items-center space-x-2 hover:text-blue-300 transition-colors">
              <Phone className="w-4 h-4" />
              <span>+91 7893989898</span>
            </div>
            <div className="flex items-center space-x-2 hover:text-blue-300 transition-colors">
              <Mail className="w-4 h-4" />
              <span>hi@qrpe.in</span>
            </div>
            <div className="flex items-center space-x-2 hover:text-blue-300 transition-colors">
              <MapPin className="w-4 h-4" />
              <span>Hyderabad, India</span>
            </div>
          </div>
          <div className="flex space-x-4">
            <div className="flex items-center space-x-1 bg-gradient-to-r from-yellow-300 to-amber-400 text-black px-3 py-1 rounded-full text-xs font-bold">
              <Star className="w-3 h-3" />
              <span>Trusted by 10K+ clients</span>
            </div>
            <div className="flex items-center space-x-1 bg-gradient-to-r from-green-400 to-emerald-500 text-black px-3 py-1 rounded-full text-xs font-bold">
              <Shield className="w-3 h-3" />
              <span>100% Secure</span>
            </div>
          </div>
        </div>
      </div>

      <header
        className={`fixed top-0 lg:top-8 left-0 right-0 z-40 transition-all duration-300 ${
          isScrolled
            ? "bg-white/95 backdrop-blur-md shadow-xl"
            : "bg-white/90 backdrop-blur-sm"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16 lg:h-20">
            <div
              className="flex items-center cursor-pointer group"
              onClick={() => handleNavClick("home")}
            >
              <div className="relative">
                <img
                  src={logo}
                  alt="QRPE Logo"
                  className="w-20 h-20"
                />
              </div>
            </div>

            <nav className="hidden lg:flex space-x-1">
              {navigation.map((item) => (
                <div key={item.id} className="relative">
                  <button
                    onClick={() => handleNavClick(item.id)}
                    onMouseEnter={() => setHoveredItem(item.id)}
                    onMouseLeave={() => setHoveredItem(null)}
                    className={`flex items-center px-4 py-2 rounded-full font-medium transition-all ${
                      activeSection === item.id
                        ? "bg-gradient-to-r from-blue-600 to-blue-800 text-white shadow-lg"
                        : "text-slate-700 hover:text-blue-700 hover:bg-blue-50"
                    }`}
                  >
                    <span>{item.name}</span>
                    {hoveredItem === item.id && activeSection !== item.id && (
                      <ChevronRight className="w-4 h-4 ml-1" />
                    )}
                  </button>
                  {hoveredItem === item.id && activeSection !== item.id && (
                    <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-4/5 h-1 bg-gradient-to-r from-blue-400 to-blue-600 rounded-full"></div>
                  )}
                </div>
              ))}
            </nav>

            <div className="flex items-center lg:hidden">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="inline-flex items-center justify-center p-2 rounded-md text-slate-700 hover:text-blue-700 hover:bg-blue-50 focus:outline-none"
              >
                {isMenuOpen ? (
                  <X className="h-6 w-6" />
                ) : (
                  <Menu className="h-6 w-6" />
                )}
              </button>
            </div>

            <button
              onClick={() => handleNavClick("contact")}
              className="hidden lg:block bg-gradient-to-r from-green-500 to-emerald-600 text-white px-6 py-2 rounded-full font-semibold shadow-lg hover:shadow-xl hover:scale-105 transition-all"
            >
              Get Started
            </button>
          </div>
        </div>

        <div className={`lg:hidden ${isMenuOpen ? "block" : "hidden"}`}>
          <div className="px-2 pt-2 pb-4 space-y-1 bg-white shadow-xl">
            {navigation.map((item) => (
              <button
                key={item.id}
                onClick={() => handleNavClick(item.id)}
                className={`w-full flex items-center justify-between px-3 py-3 rounded-lg text-base font-medium ${
                  activeSection === item.id
                    ? "bg-gradient-to-r from-blue-600 to-blue-800 text-white"
                    : "text-slate-700 hover:bg-blue-50 hover:text-blue-700"
                }`}
              >
                <div className="flex items-center">
                  {item.name}
                </div>
                <ChevronRight className="w-5 h-5" />
              </button>
            ))}
            <button
              onClick={() => handleNavClick("contact")}
              className="w-full bg-gradient-to-r from-green-500 to-emerald-600 text-white px-4 py-3 rounded-lg font-semibold shadow-lg mt-2 hover:scale-[1.02] transition-transform"
            >
              Get Started Today
            </button>
          </div>
        </div>
      </header>

      <div className="h-16 lg:h-28"></div>

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
    </>
  );
};

export default Header;