import React, { useEffect, useState, useRef } from 'react';
import { Zap, Smartphone, CreditCard, BarChart, UserPlus, Store, MessageSquare, Database } from 'lucide-react';

const Services = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [scrollY, setScrollY] = useState(0);
  const sectionRef = useRef(null);
  const [isInView, setIsInView] = useState(false);

  const services = [
    { 
      icon: <Smartphone className="w-8 h-8" />, 
      title: "QR Solutions", 
      desc: "Simplify transactions with our advanced QR code technology.", 
      color: "from-amber-600 to-amber-700"
    },
    { 
      icon: <CreditCard className="w-8 h-8" />, 
      title: "Payment Solutions", 
      desc: "Seamless and secure payment gateways for all business types.", 
      color: "from-slate-600 to-slate-700"
    },
    { 
      icon: <BarChart className="w-8 h-8" />, 
      title: "Marketing Services", 
      desc: "Boost your brand with targeted digital marketing strategies.", 
      color: "from-amber-500 to-amber-600"
    },
    { 
      icon: <UserPlus className="w-8 h-8" />, 
      title: "On Boarding Services", 
      desc: "Effortless onboarding to get your business up and running quickly.", 
      color: "from-slate-700 to-slate-800"
    },
    { 
      icon: <Store className="w-8 h-8" />, 
      title: "Instore Solutions", 
      desc: "Enhance in-store experiences with integrated POS systems.", 
      color: "from-amber-600 to-slate-600"
    },
    { 
      icon: <MessageSquare className="w-8 h-8" />, 
      title: "SMS Solutions", 
      desc: "Engage customers with efficient SMS communication tools.", 
      color: "from-slate-600 to-slate-700"
    },
    { 
      icon: <MessageSquare className="w-8 h-8" />, 
      title: "WhatsApp Business Services", 
      desc: "Leverage WhatsApp for business communication and support.", 
      color: "from-amber-500 to-amber-600"
    },
    { 
      icon: <Database className="w-8 h-8" />, 
      title: "ERP Solutions", 
      desc: "Streamline operations with customized ERP integrations.", 
      color: "from-slate-700 to-slate-800"
    }
  ];

  const faqs = [
    {
      question: "What is QRpe?",
      answer: "QRpe is a digital platform that simplifies transactions and enhances connectivity through the use of QR codes. It allows users to easily scan QR codes to access information, make payments, and interact with various services."
    },
    {
      question: "Can I use QRpe for my business?",
      answer: "Absolutely! QRpe offers tailored solutions for businesses of all sizes, including QR solutions, payment gateways, POS systems, and more to enhance your operations and customer experience."
    }
  ];

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({ 
        x: (e.clientX / window.innerWidth) * 100,
        y: (e.clientY / window.innerHeight) * 100
      });
    };

    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsInView(entry.isIntersecting);
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('scroll', handleScroll);
    
    const timer = setTimeout(() => setIsLoaded(true), 100);
    
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('scroll', handleScroll);
      observer.disconnect();
      clearTimeout(timer);
    };
  }, []);

  return (
    <section 
      ref={sectionRef}
      id="services" 
      className="relative py-24 bg-gradient-to-br from-slate-50 via-white to-slate-100 overflow-hidden"
    >
      <div className="absolute inset-0">
        <div 
          className="absolute inset-0 opacity-[0.04] transition-all duration-1000 ease-out"
          style={{
            background: `radial-gradient(circle at ${mousePosition.x}% ${mousePosition.y}%, #475569 0%, #64748b 25%, transparent 60%)`
          }}
        />
        <div className="absolute inset-0 opacity-[0.02]">
          <div 
            className="absolute inset-0 bg-[linear-gradient(45deg,#1e293b_25%,transparent_25%,transparent_75%,#1e293b_75%,#1e293b),linear-gradient(45deg,#1e293b_25%,transparent_25%,transparent_75%,#1e293b_75%,#1e293b)] bg-[length:80px_80px] bg-[position:0_0,40px_40px] transition-transform duration-1000"
            style={{ transform: `translateY(${scrollY * 0.1}px)` }}
          />
        </div>
        <div className="absolute top-0 left-0 w-96 h-96 bg-gradient-to-br from-amber-200/20 to-slate-200/20 rounded-full blur-3xl animate-pulse" style={{ animationDuration: '8s' }} />
        <div className="absolute bottom-0 right-0 w-80 h-80 bg-gradient-to-br from-slate-200/20 to-amber-200/20 rounded-full blur-3xl animate-pulse" style={{ animationDuration: '6s', animationDelay: '2s' }} />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`text-center mb-20 transition-all duration-1200 ease-out ${isLoaded && isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}>
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-amber-600/10 to-slate-600/10 backdrop-blur-sm px-4 py-2 rounded-full mb-6 border border-amber-200/30">
            <Zap className="w-4 h-4 text-amber-600 animate-pulse" />
            <span className="text-sm font-medium text-slate-700">Our Services</span>
          </div>
          
          <h2 className="text-4xl md:text-6xl font-light text-slate-900 mb-6 tracking-tight">
            What We{' '}
            <span className="relative inline-block">
              <span className="font-semibold bg-gradient-to-r from-slate-700 via-slate-600 to-amber-600 bg-clip-text text-transparent animate-pulse">
                Do
              </span>
              <div className="absolute -bottom-2 left-0 right-0 h-1 bg-gradient-to-r from-amber-600 to-slate-600 rounded-full transform scale-x-0 animate-[scaleX_2s_ease-out_1s_forwards]" />
            </span>
          </h2>
          
          <p className="text-xl md:text-2xl text-slate-600 max-w-4xl mx-auto leading-relaxed font-light">
            Comprehensive solutions to enhance your business operations and customer engagement.
          </p>
        </div>

        <div className={`grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20 transition-all duration-1200 delay-300 ${isLoaded && isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}>
          {services.map((service, index) => (
            <div 
              key={index}
              className={`group relative bg-gradient-to-br from-white to-slate-50/50 p-6 rounded-3xl border border-slate-200/50 hover:border-amber-300/50 transition-all duration-700 text-center hover:shadow-2xl hover:shadow-amber-100/30 transform hover:-translate-y-3 hover:scale-105 ${isLoaded && isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
              style={{ transitionDelay: `${400 + index * 100}ms` }}
            >
              <div className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-0 group-hover:opacity-100 transition-opacity duration-700 rounded-3xl`} />
              
              <div className="relative z-10">
                <div className={`w-16 h-16 bg-gradient-to-br ${service.color} text-white rounded-2xl flex items-center justify-center text-xl font-bold mx-auto mb-4 shadow-xl group-hover:scale-110 group-hover:rotate-6 transition-all duration-500`}>
                  {service.icon}
                </div>
                <h4 className="font-semibold text-slate-900 mb-2 group-hover:text-amber-700 transition-colors duration-300">{service.title}</h4>
                <p className="text-sm text-slate-600 leading-relaxed group-hover:text-slate-700 transition-colors duration-300">{service.desc}</p>
              </div>

              <div className={`absolute bottom-0 left-0 h-1 bg-gradient-to-r ${service.color} rounded-b-3xl transform scale-x-0 group-hover:scale-x-100 transition-transform duration-700 origin-left`} />
            </div>
          ))}
        </div>

        <div className={`text-center mb-20 transition-all duration-1200 delay-500 ${isLoaded && isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}>
          <h3 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">Frequently Asked Questions</h3>
          <div className="max-w-4xl mx-auto space-y-6">
            {faqs.map((faq, index) => (
              <div 
                key={index}
                className={`group relative bg-white p-6 rounded-xl border border-slate-200/50 hover:border-amber-300/50 transition-all duration-500 hover:shadow-lg hover:shadow-amber-100/50 ${isLoaded && isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
                style={{ transitionDelay: `${600 + index * 150}ms` }}
              >
                <h4 className="text-lg font-semibold text-slate-900 mb-2 group-hover:text-amber-700 transition-colors duration-300">{faq.question}</h4>
                <p className="text-slate-600 leading-relaxed">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>

        <div className={`text-center transition-all duration-1200 delay-700 ${isLoaded && isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <div className="relative bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 p-12 rounded-3xl text-white overflow-hidden group hover:shadow-2xl hover:shadow-slate-900/30 transition-all duration-700">
            <div className="absolute inset-0 bg-gradient-to-r from-amber-600/20 via-slate-600/20 to-amber-600/20 opacity-0 group-hover:opacity-100 transition-opacity duration-1000" />
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(245,158,11,0.1)_0%,transparent_70%)] opacity-0 group-hover:opacity-100 transition-opacity duration-1000" />
            
            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-1000">
              {[...Array(8)].map((_, i) => (
                <div
                  key={i}
                  className="absolute w-2 h-2 bg-white/20 rounded-full animate-pulse"
                  style={{
                    top: `${Math.random() * 100}%`,
                    left: `${Math.random() * 100}%`,
                    animationDelay: `${i * 0.3}s`,
                    animationDuration: `${2 + Math.random() * 2}s`
                  }}
                />
              ))}
            </div>
            
            <div className="relative z-10">
              <div className="flex items-center justify-center gap-2 mb-6">
                <Zap className="w-6 h-6 text-amber-400 animate-pulse" />
                <h3 className="text-3xl md:text-4xl font-bold">Explore Our Solutions</h3>
                <Zap className="w-6 h-6 text-amber-300 animate-pulse" style={{ animationDelay: '0.5s' }} />
              </div>
              
              <p className="text-slate-300 text-xl mb-8 max-w-3xl mx-auto leading-relaxed">
                Discover how <span className="text-amber-400 font-semibold">QRPE</span> can transform your business operations.
              </p>
              
              <button className="group/btn relative bg-white text-slate-900 px-10 py-4 rounded-2xl font-bold text-lg hover:bg-slate-100 transition-all duration-500 shadow-xl hover:shadow-2xl transform hover:scale-110 hover:-translate-y-1 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-r from-amber-600 to-slate-600 opacity-0 group-hover/btn:opacity-10 transition-opacity duration-300 rounded-2xl" />
                <span className="relative z-10 flex items-center gap-2">
                  Get Started
                  <Zap className="w-5 h-5 group-hover/btn:text-amber-600 transition-colors duration-300" />
                </span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;