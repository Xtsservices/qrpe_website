import React, { useEffect, useState, useRef } from 'react';
import { Star, Sparkles, Award, Building2, TrendingUp } from 'lucide-react';

const Clients = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [scrollY, setScrollY] = useState(0);
  const sectionRef = useRef(null);
  const [isInView, setIsInView] = useState(false);

  const clients = [
    { name: "RetailMax", logo: "RM", sector: "Retail Chain", description: "Leading retail chain with 50+ stores", color: "from-slate-600 to-slate-700" },
    { name: "FoodHub", logo: "FH", sector: "Restaurant", description: "Premium restaurant chain", color: "from-amber-600 to-amber-700" },
    { name: "TechMart", logo: "TM", sector: "Electronics", description: "Electronics retail specialist", color: "from-slate-700 to-slate-800" },
    { name: "StyleZone", logo: "SZ", sector: "Fashion", description: "Fashion and lifestyle brand", color: "from-amber-500 to-amber-600" },
    { name: "MediCore", logo: "MC", sector: "Healthcare", description: "Healthcare service provider", color: "from-slate-600 to-slate-700" },
    { name: "AutoParts", logo: "AP", sector: "Automotive", description: "Automotive parts distributor", color: "from-amber-600 to-slate-600" }
  ];

  const testimonials = [
    {
      name: "John Smith",
      company: "RetailMax",
      position: "Operations Director",
      text: "QRPE's POS integration transformed our checkout process. Sales increased by 30% with faster transactions and improved customer satisfaction.",
      rating: 5,
      impact: "30% increase in sales"
    },
    {
      name: "Sarah Johnson",
      company: "FoodHub",
      position: "General Manager",
      text: "The payment gateway solution is seamless. Our customers love the multiple payment options available, and we've seen zero downtime.",
      rating: 5,
      impact: "100% uptime achieved"
    }
  ];

  const floatingElements = [
    { size: 'w-3 h-3', color: 'bg-amber-400', position: 'top-16 right-16', delay: '0s', duration: '6s' },
    { size: 'w-4 h-4', color: 'bg-slate-300', position: 'top-1/4 right-1/3', delay: '2s', duration: '8s' },
    { size: 'w-2 h-2', color: 'bg-amber-300', position: 'bottom-32 left-20', delay: '4s', duration: '7s' },
    { size: 'w-5 h-5', color: 'bg-slate-400', position: 'top-1/2 left-1/5', delay: '1s', duration: '9s' },
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
      id="clients" 
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
            <Building2 className="w-4 h-4 text-amber-600 animate-pulse" />
            <span className="text-sm font-medium text-slate-700">Trusted by Industry Leaders</span>
          </div>
          
          <h2 className="text-4xl md:text-6xl font-light text-slate-900 mb-6 tracking-tight">
            Our{' '}
            <span className="relative inline-block">
              <span className="font-semibold bg-gradient-to-r from-slate-700 via-slate-600 to-amber-600 bg-clip-text text-transparent animate-pulse">
                Clients
              </span>
              <div className="absolute -bottom-2 left-0 right-0 h-1 bg-gradient-to-r from-amber-600 to-slate-600 rounded-full transform scale-x-0 animate-[scaleX_2s_ease-out_1s_forwards]" />
            </span>
          </h2>
          
          <p className="text-xl md:text-2xl text-slate-600 max-w-4xl mx-auto leading-relaxed font-light">
            Trusted by businesses across various industries for reliable{' '}
            <span className="text-amber-700 font-medium">payment solutions</span> and{' '}
            <span className="text-slate-700 font-medium">ERP integrations</span>.
          </p>
          
          <div className="flex items-center justify-center gap-2 mt-8">
            <div className="w-2 h-2 bg-amber-500 rounded-full animate-bounce" />
            <div className="w-8 h-1 bg-gradient-to-r from-amber-600 to-slate-600 rounded-full" />
            <div className="w-2 h-2 bg-slate-500 rounded-full animate-bounce" style={{ animationDelay: '0.5s' }} />
          </div>
        </div>
        
        <div className={`grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 mb-20 transition-all duration-1200 delay-300 ${isLoaded && isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}>
          {clients.map((client, index) => (
            <div 
              key={index} 
              className={`group relative bg-gradient-to-br from-white to-slate-50/50 p-6 rounded-3xl border border-slate-200/50 hover:border-amber-300/50 transition-all duration-700 text-center hover:shadow-2xl hover:shadow-amber-100/30 transform hover:-translate-y-3 hover:scale-105 ${isLoaded && isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
              style={{ transitionDelay: `${400 + index * 100}ms` }}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-amber-600/5 via-slate-600/5 to-slate-600/5 opacity-0 group-hover:opacity-100 transition-opacity duration-700 rounded-3xl" />
              
              <div className="relative z-10">
                <div className={`w-16 h-16 bg-gradient-to-br ${client.color} text-white rounded-2xl flex items-center justify-center text-xl font-bold mx-auto mb-4 shadow-xl group-hover:scale-110 group-hover:rotate-6 transition-all duration-500`}>
                  {client.logo}
                </div>
                <h4 className="font-semibold text-slate-900 mb-2 group-hover:text-amber-700 transition-colors duration-300">{client.name}</h4>
                <p className="text-sm text-amber-700 font-medium mb-2">{client.sector}</p>
                <p className="text-xs text-slate-600 leading-relaxed group-hover:text-slate-700 transition-colors duration-300">{client.description}</p>
              </div>

              <div className={`absolute bottom-0 left-0 h-1 bg-gradient-to-r ${client.color} rounded-b-3xl transform scale-x-0 group-hover:scale-x-100 transition-transform duration-700 origin-left`} />
            </div>
          ))}
        </div>

        <div className={`grid md:grid-cols-2 gap-8 mb-16 transition-all duration-1200 delay-700 ${isLoaded && isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}>
          {testimonials.map((testimonial, index) => (
            <div 
              key={index} 
              className={`group relative bg-gradient-to-br from-white to-slate-50/50 p-8 rounded-3xl border border-slate-200/50 hover:border-amber-300/50 transition-all duration-700 hover:shadow-2xl hover:shadow-amber-100/30 transform hover:-translate-y-2 ${isLoaded && isInView ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8'}`}
              style={{ transitionDelay: `${900 + index * 200}ms` }}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-amber-600/5 via-slate-600/5 to-amber-600/5 opacity-0 group-hover:opacity-100 transition-opacity duration-700 rounded-3xl" />
              
              <div className="relative z-10">
                <div className="flex items-center justify-between mb-6">
                  <div className="flex mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 text-amber-500 fill-current group-hover:text-amber-600 transition-colors duration-300" />
                    ))}
                  </div>
                  <div className="bg-gradient-to-r from-green-500 to-green-600 text-white px-3 py-1 rounded-full text-xs font-semibold flex items-center gap-1">
                    <TrendingUp className="w-3 h-3" />
                    {testimonial.impact}
                  </div>
                </div>
                
                <p className="text-slate-700 mb-6 italic text-lg leading-relaxed group-hover:text-slate-800 transition-colors duration-300">
                  "{testimonial.text}"
                </p>
                
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-gradient-to-br from-slate-600 to-slate-700 rounded-xl flex items-center justify-center text-white font-bold mr-4 group-hover:scale-110 transition-transform duration-300">
                    {testimonial.name.split(' ').map(n => n[0]).join('')}
                  </div>
                  <div>
                    <p className="font-semibold text-slate-900 group-hover:text-amber-700 transition-colors duration-300">{testimonial.name}</p>
                    <p className="text-slate-600 text-sm">{testimonial.position}</p>
                    <p className="text-amber-700 font-medium text-sm">{testimonial.company}</p>
                  </div>
                </div>
              </div>

              <div className="absolute bottom-0 left-0 h-2 bg-gradient-to-r from-amber-600 to-slate-600 rounded-b-3xl transform scale-x-0 group-hover:scale-x-100 transition-transform duration-1000 origin-left" />
            </div>
          ))}
        </div>

        <div className={`text-center transition-all duration-1200 delay-1000 ${isLoaded && isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
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
                <Award className="w-6 h-6 text-amber-400 animate-pulse" />
                <h3 className="text-3xl md:text-4xl font-bold">Join Our Success Stories</h3>
                <Sparkles className="w-6 h-6 text-amber-300 animate-pulse" style={{ animationDelay: '0.5s' }} />
              </div>
              
              <p className="text-slate-300 text-xl mb-8 max-w-3xl mx-auto leading-relaxed">
                Become our next success story and experience the <span className="text-amber-400 font-semibold">QRPE difference</span> in payment solutions and business growth.
              </p>
              
              <button className="group/btn relative bg-white text-slate-900 px-10 py-4 rounded-2xl font-bold text-lg hover:bg-slate-100 transition-all duration-500 shadow-xl hover:shadow-2xl transform hover:scale-110 hover:-translate-y-1 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-r from-amber-600 to-slate-600 opacity-0 group-hover/btn:opacity-10 transition-opacity duration-300 rounded-2xl" />
                <span className="relative z-10 flex items-center gap-2">
                  Partner With Us
                  <Building2 className="w-5 h-5 group-hover/btn:text-amber-600 transition-colors duration-300" />
                </span>
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {floatingElements.map((element, index) => (
          <div
            key={index}
            className={`absolute ${element.size} ${element.color} rounded-full opacity-20 animate-bounce`}
            style={{
              animationDuration: element.duration,
              animationDelay: element.delay,
              ...element.position.split(' ').reduce((acc, pos) => {
                const [prop, value] = pos.split('-');
                acc[prop] = value.includes('/') ? value : `${Number(value) * 4}px`;
                return acc;
              }, {})
            }}
          />
        ))}
        
        <div className="absolute top-1/4 left-1/4 w-32 h-32 border border-amber-200/20 rounded-full animate-spin" style={{ animationDuration: '20s' }} />
        <div className="absolute bottom-1/4 right-1/4 w-24 h-24 border border-slate-200/20 rounded-full animate-spin" style={{ animationDuration: '15s', animationDirection: 'reverse' }} />
      </div>
    </section>
  );
};

export default Clients;