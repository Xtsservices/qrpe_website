"use client";

import React, { useEffect, useState } from 'react';
import { CreditCard, Users, Shield, Phone, Trophy, Star, Target, ArrowRight } from 'lucide-react';

const Achievements = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [counts, setCounts] = useState({
    pos: 0,
    clients: 0,
    uptime: 0,
    support: 24
  });

  const achievements = [
    { 
      number: "10,000+", 
      label: "POS Deployments", 
      icon: <CreditCard className="w-6 h-6" />,
      color: "from-slate-600 to-slate-700",
      shadowColor: "shadow-slate-500/30",
      targetNumber: 10000,
      suffix: "+"
    },
    { 
      number: "500+", 
      label: "Happy Clients", 
      icon: <Users className="w-6 h-6" />,
      color: "from-blue-600 to-blue-700",
      shadowColor: "shadow-blue-500/30",
      targetNumber: 500,
      suffix: "+"
    },
    { 
      number: "99.9%", 
      label: "Uptime", 
      icon: <Shield className="w-6 h-6" />,
      color: "from-slate-600 to-slate-700",
      shadowColor: "shadow-slate-500/30",
      targetNumber: 99.9,
      suffix: "%"
    },
    { 
      number: "24/7", 
      label: "Support", 
      icon: <Phone className="w-6 h-6" />,
      color: "from-blue-600 to-blue-700",
      shadowColor: "shadow-blue-500/30",
      targetNumber: 24,
      suffix: "/7"
    }
  ];

  const awards = [
    { 
      title: "Best Fintech Solution 2024", 
      organization: "Tech Innovation Awards",
      icon: <Trophy className="w-8 h-8" />,
      color: "from-blue-500 to-blue-600",
      shadowColor: "shadow-blue-500/40"
    },
    { 
      title: "Excellence in Payment Processing", 
      organization: "Digital Commerce Summit",
      icon: <Star className="w-8 h-8" />,
      color: "from-slate-500 to-slate-600",
      shadowColor: "shadow-slate-500/40"
    },
    { 
      title: "Top TSP Partner", 
      organization: "Payment Industry Council",
      icon: <Target className="w-8 h-8" />,
      color: "from-blue-600 to-blue-700",
      shadowColor: "shadow-blue-500/40"
    }
  ];

  // Enhanced counter animation
  useEffect(() => {
    const timer = setTimeout(() => {
      const duration = 2000;
      const steps = 50;
      const stepDuration = duration / steps;

      let currentStep = 0;
      const interval = setInterval(() => {
        currentStep++;
        const easeOutQuart = 1 - Math.pow(1 - currentStep / steps, 4);
        
        setCounts({
          pos: Math.floor(10000 * easeOutQuart),
          clients: Math.floor(500 * easeOutQuart),
          uptime: Math.min(99.9, 99.9 * easeOutQuart),
          support: 24
        });

        if (currentStep >= steps) {
          clearInterval(interval);
        }
      }, stepDuration);

      return () => clearInterval(interval);
    }, 500);

    return () => clearTimeout(timer);
  }, [isLoaded]);

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({ 
        x: (e.clientX / window.innerWidth) * 100,
        y: (e.clientY / window.innerHeight) * 100
      });
    };

    window.addEventListener('mousemove', handleMouseMove);
    setIsLoaded(true);
    
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const getDisplayNumber = (index) => {
    switch(index) {
      case 0: return `${counts.pos.toLocaleString()}+`;
      case 1: return `${counts.clients}+`;
      case 2: return `${counts.uptime.toFixed(1)}%`;
      case 3: return "24/7";
      default: return achievements[index].number;
    }
  };

  return (
    <section className="relative py-20 bg-gradient-to-br from-[#0c3155] via-[#0a2847] to-[#0c3155] text-white overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        {/* Mouse-following gradient */}
        <div 
          className="absolute inset-0 opacity-10 transition-all duration-1000 ease-out"
          style={{
            background: `radial-gradient(600px circle at ${mousePosition.x}% ${mousePosition.y}%, rgba(6, 113, 202, 0.15), rgba(12, 49, 85, 0.1) 25%, transparent 50%)`
          }}
        />
        
        {/* Pattern overlay */}
        <div className="absolute inset-0 opacity-[0.03]">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(6,113,202,0.1),transparent_50%)]"></div>
          <div className="absolute inset-0 bg-[linear-gradient(60deg,transparent_40%,rgba(255,255,255,0.01)_50%,transparent_60%)] bg-[length:300px_300px]"></div>
        </div>

        {/* Gradients */}
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/5 via-slate-600/5 to-blue-600/5"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#0c3155]/80 to-transparent"></div>
      </div>

      <div className="relative max-w-6xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <div className={`text-center mb-16 transition-all duration-1000 ease-out ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}>
          <div className="mb-6">
            <h2 className="text-4xl md:text-6xl font-light tracking-tight">
              Our <span className="font-normal bg-gradient-to-r from-blue-300 via-blue-200 to-blue-300 bg-clip-text text-transparent">Achievements</span>
            </h2>
          </div>
          <p className="text-lg text-slate-300 max-w-3xl mx-auto leading-relaxed font-light">
            Recognized for <span className="text-transparent bg-gradient-to-r from-blue-400 to-blue-300 bg-clip-text font-medium">innovation</span>, 
            <span className="text-transparent bg-gradient-to-r from-slate-300 to-slate-200 bg-clip-text font-medium"> excellence</span>, and 
            <span className="text-transparent bg-gradient-to-r from-blue-300 to-blue-200 bg-clip-text font-medium"> customer satisfaction</span>.
          </p>
          <div className="flex justify-center mt-8">
            <div className="w-24 h-0.5 bg-gradient-to-r from-transparent via-blue-400 to-transparent rounded-full"></div>
          </div>
        </div>

        {/* Stats Grid */}
        <div className="grid md:grid-cols-4 gap-6 mb-20">
          {achievements.map((achievement, index) => (
            <div 
              key={index}
              className={`group relative transition-all duration-1000 ease-out ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}
              style={{ transitionDelay: `${300 + index * 150}ms` }}
            >
              <div className={`relative bg-gradient-to-br from-white/5 via-white/3 to-transparent backdrop-blur-sm border border-white/10 p-8 rounded-xl hover:bg-gradient-to-br hover:from-white/10 hover:to-white/5 transition-all duration-500 text-center group-hover:shadow-lg ${achievement.shadowColor} transform group-hover:-translate-y-2`}>
                
                {/* Background gradient */}
                <div className={`absolute inset-0 bg-gradient-to-br ${achievement.color} opacity-0 group-hover:opacity-[0.08] transition-all duration-500 rounded-xl`} />
                
                {/* Border effect */}
                <div className={`absolute inset-0 bg-gradient-to-br ${achievement.color} opacity-0 group-hover:opacity-20 rounded-xl transition-opacity duration-500`} style={{ padding: '1px' }}>
                  <div className="w-full h-full bg-[#0c3155] rounded-xl"></div>
                </div>
                
                <div className="relative z-20">
                  {/* Icon */}
                  <div className={`relative flex items-center justify-center w-16 h-16 bg-gradient-to-br ${achievement.color} rounded-lg mx-auto mb-6 shadow-md ${achievement.shadowColor} transform group-hover:scale-110 group-hover:rotate-3 transition-all duration-300`}>
                    <div className="text-white transform group-hover:scale-105 transition-transform duration-200">
                      {achievement.icon}
                    </div>
                    {/* Glow */}
                    <div className={`absolute -inset-1 bg-gradient-to-br ${achievement.color} rounded-lg opacity-0 group-hover:opacity-30 blur-sm transition-opacity duration-300`}></div>
                  </div>
                  
                  {/* Number display */}
                  <div className="text-3xl md:text-4xl font-light mb-3 text-transparent bg-gradient-to-br from-white via-slate-100 to-blue-100 bg-clip-text group-hover:from-blue-200 group-hover:via-white group-hover:to-blue-200 transition-all duration-300">
                    {getDisplayNumber(index)}
                  </div>
                  
                  {/* Label */}
                  <div className="text-slate-300 font-medium text-base group-hover:text-white transition-all duration-300 tracking-wide">
                    {achievement.label}
                  </div>
                </div>

                {/* Animated border */}
                <div className={`absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r ${achievement.color} rounded-b-xl transform scaleX-0 group-hover:scaleX-100 transition-transform duration-500 origin-center`}></div>
              </div>
            </div>
          ))}
        </div>

        {/* Awards Section */}
        <div className={`text-center transition-all duration-1000 delay-700 ease-out ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}>
          <div className="mb-12">
            <h3 className="text-3xl md:text-5xl font-light tracking-tight mb-6">
              Awards & <span className="font-normal bg-gradient-to-r from-blue-300 via-blue-200 to-blue-300 bg-clip-text text-transparent">Recognition</span>
            </h3>
            <p className="text-lg text-slate-300 max-w-2xl mx-auto leading-relaxed font-light">
              Industry recognition for our innovations and exceptional service.
            </p>
            <div className="flex justify-center mt-6">
              <div className="w-20 h-0.5 bg-gradient-to-r from-transparent via-blue-400 to-transparent rounded-full"></div>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {awards.map((award, index) => (
              <div 
                key={index}
                className={`group relative transition-all duration-1000 ease-out ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}
                style={{ transitionDelay: `${900 + index * 150}ms` }}
              >
                <div className={`relative bg-gradient-to-br from-white/5 via-white/3 to-transparent backdrop-blur-sm border border-white/10 p-8 rounded-xl hover:bg-gradient-to-br hover:from-white/10 hover:to-white/5 transition-all duration-500 h-full group-hover:shadow-lg ${award.shadowColor} transform group-hover:-translate-y-2`}>
                  
                  {/* Background gradient */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${award.color} opacity-0 group-hover:opacity-[0.08] transition-all duration-500 rounded-xl`} />
                  
                  <div className="relative z-20">
                    {/* Icon */}
                    <div className={`relative flex items-center justify-center w-20 h-20 bg-gradient-to-br ${award.color} rounded-lg mx-auto mb-6 shadow-md ${award.shadowColor} transform group-hover:scale-110 group-hover:rotate-3 transition-all duration-300`}>
                      <div className="text-white transform group-hover:scale-105 transition-transform duration-200">
                        {award.icon}
                      </div>
                      {/* Glow */}
                      <div className={`absolute -inset-1 bg-gradient-to-br ${award.color} rounded-lg opacity-0 group-hover:opacity-30 blur-sm transition-opacity duration-300`}></div>
                    </div>
                    
                    <h4 className="text-xl font-semibold mb-3 text-transparent bg-gradient-to-br from-white via-blue-100 to-white bg-clip-text group-hover:from-blue-200 group-hover:via-white group-hover:to-blue-200 transition-all duration-300 leading-tight">
                      {award.title}
                    </h4>
                    
                    <p className="text-slate-300 leading-relaxed group-hover:text-slate-200 transition-colors duration-300 font-medium text-sm">
                      {award.organization}
                    </p>
                  </div>

                  {/* Animated border */}
                  <div className={`absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r ${award.color} rounded-b-xl transform scaleX-0 group-hover:scaleX-100 transition-transform duration-500 origin-center`}></div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <div className={`text-center mt-20 transition-all duration-1000 delay-1200 ease-out ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <div className="relative bg-gradient-to-br from-white/5 via-white/3 to-transparent backdrop-blur-sm border border-white/10 p-10 rounded-xl overflow-hidden shadow-lg shadow-blue-500/10 hover:shadow-blue-500/20 transition-all duration-500">
            
            {/* Background effects */}
            <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 via-slate-500/3 to-blue-500/5 opacity-0 hover:opacity-100 transition-opacity duration-500"></div>
            
            <div className="relative z-10">
              <h3 className="text-2xl md:text-3xl font-light mb-4 text-transparent bg-gradient-to-r from-white via-blue-200 to-white bg-clip-text">
                Join Our Success Story
              </h3>
              <p className="text-lg text-slate-300 mb-6 max-w-2xl mx-auto leading-relaxed font-light">
                Become part of our <span className="text-transparent bg-gradient-to-r from-blue-400 to-blue-300 bg-clip-text font-medium">community</span> of successful businesses.
              </p>
              <button className="group relative bg-gradient-to-r from-blue-600 via-blue-500 to-blue-600 text-white px-10 py-3 rounded-lg font-medium text-base hover:from-blue-500 hover:via-blue-400 hover:to-blue-500 transition-all duration-500 shadow-lg shadow-blue-500/25 hover:shadow-blue-500/40 transform hover:scale-105 hover:-translate-y-1 overflow-hidden">
                <span className="relative z-10 flex items-center justify-center">
                  Get Started Today
                  <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-lg"></div>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Achievements;