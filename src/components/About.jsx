import React, { useEffect, useState, useRef } from 'react';
import { CheckCircle, Award, Users, Target, Eye, Sparkles, Zap, Shield, Cpu } from 'lucide-react';

const About = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [scrollY, setScrollY] = useState(0);
  const sectionRef = useRef(null);
  const [isInView, setIsInView] = useState(false);

  const certifications = [
    { text: "Certified Technology Service Partner", icon: <Shield className="w-4 h-4" /> },
    { text: "Expert in POS and Payment Solutions", icon: <Zap className="w-4 h-4" /> },
    { text: "Custom ERP Integration Specialists", icon: <Cpu className="w-4 h-4" /> },
    { text: "24/7 Technical Support Team", icon: <Users className="w-4 h-4" /> }
  ];

  const achievements = [
    { 
      icon: <Award className="w-8 h-8" />, 
      title: "15+", 
      subtitle: "Years", 
      desc: "Industry Experience", 
      color: "from-blue-800 to-blue-900",
      bgColor: "from-blue-50 to-blue-100",
      number: 15
    },
    { 
      icon: <Users className="w-8 h-8" />, 
      title: "10,000+", 
      subtitle: "Happy", 
      desc: "Satisfied Clients", 
      color: "from-blue-800 to-blue-900",
      bgColor: "from-blue-50 to-blue-100",
      number: 10000
    },
    { 
      icon: <Target className="w-8 h-8" />, 
      title: "99.9%", 
      subtitle: "Perfect", 
      desc: "Success Rate", 
      color: "from-blue-800 to-blue-900",
      bgColor: "from-blue-50 to-blue-100",
      number: 99.9
    }
  ];

  const floatingElements = [
    { size: 'w-4 h-4', color: 'bg-blue-400', position: 'top-20 right-20', delay: '0s', duration: '6s' },
    { size: 'w-6 h-6', color: 'bg-blue-300', position: 'top-1/3 right-1/4', delay: '2s', duration: '8s' },
    { size: 'w-3 h-3', color: 'bg-blue-300', position: 'bottom-32 left-16', delay: '4s', duration: '7s' },
    { size: 'w-5 h-5', color: 'bg-blue-400', position: 'top-1/2 left-1/4', delay: '1s', duration: '9s' },
    { size: 'w-2 h-2', color: 'bg-blue-500', position: 'bottom-20 right-1/3', delay: '3s', duration: '5s' },
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
      id="about" 
      className="relative py-24 bg-gradient-to-br from-blue-50 via-white to-blue-100 overflow-hidden"
    >
      <div className="absolute inset-0">
        <div 
          className="absolute inset-0 opacity-[0.04] transition-all duration-1000 ease-out"
          style={{
            background: `radial-gradient(circle at ${mousePosition.x}% ${mousePosition.y}%, #0c3155 0%, #0671ca 25%, transparent 60%)`
          }}
        />
        
        <div className="absolute inset-0 opacity-[0.02]">
          <div 
            className="absolute inset-0 bg-[linear-gradient(45deg,#0c3155_25%,transparent_25%,transparent_75%,#0c3155_75%,#0c3155),linear-gradient(45deg,#0c3155_25%,transparent_25%,transparent_75%,#0c3155_75%,#0c3155)] bg-[length:80px_80px] bg-[position:0_0,40px_40px] transition-transform duration-1000"
            style={{ transform: `translateY(${scrollY * 0.1}px)` }}
          />
        </div>

        <div className="absolute top-0 left-0 w-96 h-96 bg-gradient-to-br from-blue-200/20 to-blue-200/20 rounded-full blur-3xl animate-pulse" style={{ animationDuration: '8s' }} />
        <div className="absolute bottom-0 right-0 w-80 h-80 bg-gradient-to-br from-blue-200/20 to-blue-200/20 rounded-full blur-3xl animate-pulse" style={{ animationDuration: '6s', animationDelay: '2s' }} />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`text-center mb-20 transition-all duration-1200 ease-out ${isLoaded && isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}>
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-600/10 to-blue-800/10 backdrop-blur-sm px-4 py-2 rounded-full mb-6 border border-blue-200/30">
            <Sparkles className="w-4 h-4 text-blue-600 animate-pulse" />
            <span className="text-sm font-medium text-blue-800">Leading Technology Partner</span>
          </div>
          
          <h2 className="text-4xl md:text-6xl font-light text-blue-900 mb-6 tracking-tight">
            About{' '}
            <span className="relative inline-block">
              <span className="font-semibold bg-gradient-to-r from-blue-900 via-blue-700 to-blue-600 bg-clip-text text-transparent animate-pulse">
                QRPE
              </span>
              <div className="absolute -bottom-2 left-0 right-0 h-1 bg-gradient-to-r from-blue-600 to-blue-800 rounded-full transform scale-x-0 animate-[scaleX_2s_ease-out_1s_forwards]" />
            </span>
          </h2>
          
          <p className="text-xl md:text-2xl text-blue-700 max-w-4xl mx-auto leading-relaxed font-light">
            QRpe is an Indian Brand, your gateway to seamless digital interactions and effortless transactions.
          </p>
          
          <div className="flex items-center justify-center gap-2 mt-8">
            <div className="w-2 h-2 bg-blue-500 rounded-full animate-bounce" />
            <div className="w-8 h-1 bg-gradient-to-r from-blue-600 to-blue-800 rounded-full" />
            <div className="w-2 h-2 bg-blue-700 rounded-full animate-bounce" style={{ animationDelay: '0.5s' }} />
          </div>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-start mb-20">
          <div className={`transition-all duration-1200 delay-300 ${isLoaded && isInView ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-12'}`}>
            <div className="sticky top-8">
              <div className="relative mb-8">
                <div className="flex items-center mb-6">
                  <div className="w-2 h-12 bg-gradient-to-b from-blue-600 via-blue-500 to-blue-800 rounded-full mr-4 animate-pulse" />
                  <h3 className="text-3xl font-bold text-blue-900 bg-gradient-to-r from-blue-900 to-blue-700 bg-clip-text">
                    Who We Are
                  </h3>
                </div>
                
                <div className="space-y-6 text-blue-700 leading-relaxed">
                  <p className="text-lg">
                    Step into a world of convenience and innovation with QRpe – where every scan opens doors to endless possibilities.
                  </p>
                  <p className="text-lg">
                    Join us as we redefine connectivity and accessibility at QRpe – your trusted companion in the digital realm.
                  </p>
                  <p className="text-lg">
                    Embark on a journey of simplicity and efficiency with QRpe – where every welcome is met with unparalleled ease.
                  </p>
                </div>
              </div>
              
              <div className="space-y-4">
                {certifications.map((item, index) => (
                  <div 
                    key={index} 
                    className={`group flex items-center p-4 bg-white/60 backdrop-blur-sm rounded-xl border border-blue-200/50 hover:border-blue-300/50 hover:bg-white/80 transition-all duration-500 hover:shadow-lg hover:shadow-blue-100/50 ${isLoaded && isInView ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8'}`}
                    style={{ transitionDelay: `${600 + index * 150}ms` }}
                  >
                    <div className="flex items-center justify-center w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl mr-4 group-hover:scale-110 group-hover:rotate-3 transition-all duration-300 shadow-lg">
                      <CheckCircle className="w-5 h-5 text-white" />
                    </div>
                    <div className="flex-1">
                      <span className="text-blue-800 font-medium group-hover:text-blue-900 transition-colors duration-300">
                        {item.text}
                      </span>
                    </div>
                    <div className="text-blue-600 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-x-2 group-hover:translate-x-0">
                      {item.icon}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className={`transition-all duration-1200 delay-500 ${isLoaded && isInView ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-12'}`}>
            <div className="space-y-8">
              <div className="group relative bg-gradient-to-br from-white to-blue-50/50 p-8 rounded-3xl border border-blue-200/50 hover:border-blue-300/50 transition-all duration-700 hover:shadow-2xl hover:shadow-blue-100/30 transform hover:-translate-y-2">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-600/5 via-blue-600/5 to-blue-800/5 opacity-0 group-hover:opacity-100 transition-opacity duration-700 rounded-3xl" />
                
                <div className="relative z-10">
                  <div className="flex items-center mb-6">
                    <div className="flex items-center justify-center w-16 h-16 bg-gradient-to-br from-blue-600 to-blue-700 rounded-2xl mr-6 group-hover:scale-110 group-hover:rotate-6 transition-all duration-500 shadow-xl">
                      <Target className="w-8 h-8 text-white" />
                    </div>
                    <div>
                      <h4 className="text-2xl font-bold text-blue-900 group-hover:text-blue-700 transition-colors duration-300">Our Mission</h4>
                      <div className="w-12 h-1 bg-gradient-to-r from-blue-600 to-blue-400 rounded-full mt-1 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500" />
                    </div>
                  </div>
                  <p className="text-blue-700 text-lg leading-relaxed group-hover:text-blue-800 transition-colors duration-300">
                    To simplify digital interactions and transactions for businesses, enabling them to focus on <span className="text-blue-700 font-semibold">growth</span> while we handle the <span className="text-blue-800 font-semibold">technology</span>.
                  </p>
                </div>
              </div>
              
              <div className="group relative bg-gradient-to-br from-white to-blue-50/50 p-8 rounded-3xl border border-blue-200/50 hover:border-blue-300/50 transition-all duration-700 hover:shadow-2xl hover:shadow-blue-100/30 transform hover:-translate-y-2">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-800/5 via-blue-600/5 to-blue-600/5 opacity-0 group-hover:opacity-100 transition-opacity duration-700 rounded-3xl" />
                
                <div className="relative z-10">
                  <div className="flex items-center mb-6">
                    <div className="flex items-center justify-center w-16 h-16 bg-gradient-to-br from-blue-800 to-blue-900 rounded-2xl mr-6 group-hover:scale-110 group-hover:rotate-6 transition-all duration-500 shadow-xl">
                      <Eye className="w-8 h-8 text-white" />
                    </div>
                    <div>
                      <h4 className="text-2xl font-bold text-blue-900 group-hover:text-blue-800 transition-colors duration-300">Our Vision</h4>
                      <div className="w-12 h-1 bg-gradient-to-r from-blue-800 to-blue-600 rounded-full mt-1 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500" />
                    </div>
                  </div>
                  <p className="text-blue-700 text-lg leading-relaxed group-hover:text-blue-800 transition-colors duration-300">
                    To be the most <span className="text-blue-800 font-semibold">trusted Technology Service Partner</span> in digital innovation, setting new standards for connectivity and accessibility.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className={`grid md:grid-cols-3 gap-8 mb-20 transition-all duration-1200 delay-700 ${isLoaded && isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}>
          {achievements.map((achievement, index) => (
            <div
              key={index}
              className={`group relative transition-all duration-700 ${isLoaded && isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}
              style={{ transitionDelay: `${900 + index * 200}ms` }}
            >
              <div className={`relative bg-gradient-to-br ${achievement.bgColor} p-8 rounded-3xl border border-blue-200/50 hover:border-blue-300/50 transition-all duration-700 text-center group-hover:shadow-2xl transform group-hover:-translate-y-3 group-hover:scale-105 overflow-hidden`}>
                <div className={`absolute inset-0 bg-gradient-to-br ${achievement.color} opacity-0 group-hover:opacity-[0.08] transition-all duration-700`} />
                
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-1000">
                  {[...Array(6)].map((_, i) => (
                    <div
                      key={i}
                      className={`absolute w-1 h-1 bg-gradient-to-r ${achievement.color} rounded-full animate-ping`}
                      style={{
                        top: `${Math.random() * 100}%`,
                        left: `${Math.random() * 100}%`,
                        animationDelay: `${i * 0.2}s`,
                        animationDuration: '2s'
                      }}
                    />
                  ))}
                </div>
                
                <div className="relative z-10">
                  <div className={`flex items-center justify-center w-20 h-20 bg-gradient-to-br ${achievement.color} rounded-2xl mx-auto mb-6 shadow-xl transform group-hover:scale-125 group-hover:rotate-12 transition-all duration-500`}>
                    <div className="text-white transform group-hover:scale-110 transition-transform duration-300">
                      {achievement.icon}
                    </div>
                  </div>
                  
                  <div className="space-y-2 mb-4">
                    <div className="text-3xl md:text-4xl font-bold text-blue-900 group-hover:text-blue-700 transition-colors duration-300">
                      {achievement.title}
                    </div>
                    <div className="text-sm font-semibold text-blue-600 uppercase tracking-wider">
                      {achievement.subtitle}
                    </div>
                  </div>
                  
                  <div className="text-blue-700 font-medium text-lg group-hover:text-blue-800 transition-colors duration-300">
                    {achievement.desc}
                  </div>
                </div>

                <div className={`absolute bottom-0 left-0 h-2 bg-gradient-to-r ${achievement.color} rounded-b-3xl transform scale-x-0 group-hover:scale-x-100 transition-transform duration-1000 origin-left`} />
              </div>
            </div>
          ))}
        </div>

        <div className={`text-center transition-all duration-1200 delay-1000 ${isLoaded && isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <div className="relative bg-gradient-to-br from-blue-900 via-blue-800 to-blue-900 p-12 rounded-3xl text-white overflow-hidden group hover:shadow-2xl hover:shadow-blue-900/30 transition-all duration-700">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 via-blue-600/20 to-blue-600/20 opacity-0 group-hover:opacity-100 transition-opacity duration-1000" />
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(6,113,202,0.1)_0%,transparent_70%)] opacity-0 group-hover:opacity-100 transition-opacity duration-1000" />
            
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
                <Sparkles className="w-6 h-6 text-blue-400 animate-pulse" />
                <h3 className="text-3xl md:text-4xl font-bold">Ready to Transform Your Business?</h3>
                <Sparkles className="w-6 h-6 text-blue-300 animate-pulse" style={{ animationDelay: '0.5s' }} />
              </div>
              
              <p className="text-blue-300 text-xl mb-8 max-w-3xl mx-auto leading-relaxed">
                Partner with <span className="text-blue-400 font-semibold">QRPE</span> and experience the difference of working with true technology professionals.
              </p>
              
              <button className="group/btn relative bg-white text-blue-900 px-10 py-4 rounded-2xl font-bold text-lg hover:bg-blue-100 transition-all duration-500 shadow-xl hover:shadow-2xl transform hover:scale-110 hover:-translate-y-1 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-blue-800 opacity-0 group-hover/btn:opacity-10 transition-opacity duration-300 rounded-2xl" />
                <span className="relative z-10 flex items-center gap-2">
                  Start Your Journey
                  <Zap className="w-5 h-5 group-hover/btn:text-blue-600 transition-colors duration-300" />
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
        
        <div className="absolute top-1/4 left-1/4 w-32 h-32 border border-blue-200/20 rounded-full animate-spin" style={{ animationDuration: '20s' }} />
        <div className="absolute bottom-1/4 right-1/4 w-24 h-24 border border-blue-200/20 rounded-full animate-spin" style={{ animationDuration: '15s', animationDirection: 'reverse' }} />
      </div>
    </section>
  );
};

export default About;