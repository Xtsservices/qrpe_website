import React, { useEffect, useState, useRef } from "react";
import {
  Shield,
  Zap,
  TrendingUp,
  Phone,
  ArrowRight,
  Check,
} from "lucide-react";

const Home = ({ scrollToSection }) => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isLoaded, setIsLoaded] = useState(false);
  const [activeCard, setActiveCard] = useState(0);
  const [activeBg, setActiveBg] = useState(0);
  const cardIntervalRef = useRef(null);
  const bgIntervalRef = useRef(null);

  const backgroundSlides = [
    {
      color: "from-[#0c3155] via-[#0a2847] to-[#0c3155]",
      accent: "from-[#0671ca] to-[#045ba9]",
      textColor: "text-slate-100",
      buttonStyle:
        "bg-[#0671ca] text-white hover:bg-[#045ba9] shadow-blue-600/25",
      secondaryButton: "border-slate-300 text-slate-100 hover:bg-slate-800/50",
      animation: "animate-classic-fade",
    },
    {
      color: "from-[#0a2847] via-[#0c3155] to-[#0a2847]",
      accent: "from-[#0671ca] to-[#045ba9]",
      textColor: "text-slate-100",
      buttonStyle:
        "bg-[#0671ca] text-white hover:bg-[#045ba9] shadow-blue-600/25",
      secondaryButton: "border-slate-300 text-slate-100 hover:bg-slate-800/50",
      animation: "animate-classic-slide",
    },
    {
      color: "from-[#0c3155] via-[#0a2847] to-[#0c3155]",
      accent: "from-[#0671ca] to-[#045ba9]",
      textColor: "text-slate-100",
      buttonStyle:
        "bg-[#0671ca] text-white hover:bg-[#045ba9] shadow-blue-600/25",
      secondaryButton: "border-slate-300 text-slate-100 hover:bg-slate-800/50",
      animation: "animate-classic-glow",
    },
  ];

  const features = [
    {
      icon: <Shield className="w-5 h-5" />,
      title: "Safe & Secure",
      desc: "Protecting Your Peace of Mind: QRpe - Where Security Meets Seamless Experience!",
      backDesc: "Bank-grade encryption with PCI DSS compliance",
      metric: "99.9% Uptime",
      color: "from-slate-600 to-slate-700",
    },
    {
      icon: <Zap className="w-5 h-5" />,
      title: "Low Fees",
      desc: "Experience Quality Service Without Breaking the Bank – Low Fees, High Value!",
      backDesc: "Cost-effective solutions for all business sizes",
      metric: "Affordable Pricing",
      color: "from-slate-600 to-slate-700",
    },
    {
      icon: <TrendingUp className="w-5 h-5" />,
      title: "Convenient & Easy",
      desc: "Making Life Convenient and Easy – Simplifying Your Digital Journey!",
      backDesc: "Intuitive interfaces for seamless operations",
      metric: "User-Friendly",
      color: "from-slate-600 to-slate-700",
    },
    {
      icon: <Phone className="w-5 h-5" />,
      title: "Amazing Support",
      desc: "Elevating Your Experience with Exceptional Support, Because You Deserve Nothing Less!",
      backDesc: "24/7 support covering all global timezones",
      metric: "< 2min Response",
      color: "from-slate-600 to-slate-700",
    },
  ];

  const stats = [
    { value: "99.99%", label: "Reliability" },
    { value: "2.3s", label: "Response Time" },
    { value: "500M+", label: "Transactions" },
    { value: "24/7", label: "Support" },
  ];

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth) * 100,
        y: (e.clientY / window.innerHeight) * 100,
      });
    };

    cardIntervalRef.current = setInterval(() => {
      setActiveCard((prev) => (prev + 1) % features.length);
    }, 6000);

    bgIntervalRef.current = setInterval(() => {
      setActiveBg((prev) => (prev + 1) % backgroundSlides.length);
    }, 12000);

    window.addEventListener("mousemove", handleMouseMove);
    setIsLoaded(true);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      if (cardIntervalRef.current) clearInterval(cardIntervalRef.current);
      if (bgIntervalRef.current) clearInterval(bgIntervalRef.current);
    };
  }, [features.length, backgroundSlides.length]);

  return (
    <section id="home" className="relative pt-16 min-h-screen overflow-hidden">
      <div className="absolute inset-0 overflow-hidden">
        {backgroundSlides.map((slide, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-2000 ease-in-out ${
              index === activeBg ? "opacity-100" : "opacity-0"
            }`}
          >
            <div
              className={`absolute inset-0 bg-gradient-to-br ${slide.color} ${slide.animation}`}
            />
            <div className="absolute inset-0 opacity-5">
              <div className="absolute inset-0 bg-[size:60px_60px] bg-[linear-gradient(to_right,#ffffff08_1px,transparent_1px),linear-gradient(to_bottom,#ffffff08_1px,transparent_1px)]"></div>
            </div>
            <div
              className={`absolute top-0 right-0 w-1/3 h-1/2 bg-gradient-to-bl ${slide.accent} opacity-10 blur-3xl`}
            ></div>
            <div
              className={`absolute bottom-0 left-0 w-1/2 h-1/3 bg-gradient-to-tr ${slide.accent} opacity-5 blur-3xl`}
            ></div>
          </div>
        ))}
      </div>

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div
          className={`pt-20 pb-16 transition-all duration-1500 ease-out ${
            isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
          }`}
        >
          <div className="text-center max-w-4xl mx-auto">
            <div
              className={`mb-6 transition-all duration-1000 delay-300 ${
                isLoaded
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-6"
              }`}
            >
              <span
                className={`inline-flex items-center px-5 py-2 rounded-full bg-white/10 ${backgroundSlides[activeBg].textColor} text-xs font-medium backdrop-blur-md border border-white/20 hover:bg-white/15 transition-all duration-500`}
              >
                <span className="w-2 h-2 bg-blue-400 rounded-full mr-2 animate-pulse"></span>
                Trusted by 10,000+ businesses worldwide
              </span>
            </div>

            <h1
              className={`text-5xl md:text-7xl font-light ${
                backgroundSlides[activeBg].textColor
              } mb-8 leading-[0.9] tracking-tight transition-all duration-1000 delay-500 ${
                isLoaded
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-8"
              }`}
            >
              Welcome to{" "}
              <span className="relative font-normal bg-gradient-to-r from-blue-300 via-blue-200 to-blue-300 bg-clip-text text-transparent hover:scale-105 transition-transform duration-700 inline-block">
                QRPE
                <div className="absolute bottom-3 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-blue-400 to-transparent rounded-full transform scale-x-0 animate-[elegantScale_1.2s_ease-out_1.5s_forwards] origin-center"></div>
              </span>
            </h1>

            <p
              className={`text-lg ${
                backgroundSlides[activeBg].textColor
              }/80 mb-12 max-w-3xl mx-auto leading-relaxed font-light transition-all duration-1000 delay-700 ${
                isLoaded
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-6"
              }`}
            >
              Empowering Connections, QRpe Welcomes You to the Future
            </p>

            <div
              className={`flex flex-col sm:flex-row gap-4 justify-center mb-16 transition-all duration-1000 delay-900 ${
                isLoaded
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-6"
              }`}
            >
              <button
                onClick={() => scrollToSection("contact")}
                className={`group relative ${backgroundSlides[activeBg].buttonStyle} px-8 py-3 rounded-lg font-medium text-base transition-all duration-500 flex items-center justify-center shadow-xl hover:shadow-2xl transform hover:-translate-y-1 hover:scale-105`}
              >
                <span className="flex items-center">
                  Start Service with QRPE
                  <div className="ml-2 group-hover:translate-x-2 transition-transform duration-300">
                    <ArrowRight className="w-4 h-4" />
                  </div>
                </span>
              </button>

              {/* <button
  onClick={() => scrollToSection("services")}
  className={`border border-slate-300/30 ${backgroundSlides[activeBg].secondaryButton} px-8 py-3 rounded-lg font-medium text-base hover:border-slate-300/50 transition-all duration-500 transform hover:-translate-y-1 hover:scale-105 backdrop-blur-md text-black`}
>
  Learn More
</button> */}
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
              {stats.map((stat, index) => (
                <div
                  key={index}
                  className={`text-center group transition-all duration-1000 ${
                    isLoaded
                      ? "opacity-100 translate-y-0"
                      : "opacity-0 translate-y-6"
                  }`}
                  style={{ transitionDelay: `${1100 + index * 150}ms` }}
                >
                  <div
                    className={`text-3xl md:text-4xl font-light ${backgroundSlides[activeBg].textColor} mb-2 group-hover:text-blue-300 transition-colors duration-500`}
                  >
                    {stat.value}
                  </div>
                  <div
                    className={`text-xs ${backgroundSlides[activeBg].textColor}/70 font-medium uppercase tracking-wider`}
                  >
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div
          className={`pb-20 transition-all duration-1500 delay-1200 ${
            isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
          }`}
        >
          <div className="text-center mb-16">
            <h2
              className={`text-3xl md:text-4xl font-light ${backgroundSlides[activeBg].textColor} mb-4`}
            >
              Why Choose QRPE
            </h2>
            <p
              className={`text-lg ${backgroundSlides[activeBg].textColor}/70 max-w-2xl mx-auto leading-relaxed`}
            >
              Your gateway to seamless digital interactions and effortless
              transactions.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, index) => (
              <div
                key={index}
                className={`group relative transition-all duration-1000 ${
                  isLoaded
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-12"
                }`}
                style={{ transitionDelay: `${1400 + index * 200}ms` }}
                onMouseEnter={() => {
                  setActiveCard(index);
                  if (cardIntervalRef.current)
                    clearInterval(cardIntervalRef.current);
                }}
                onMouseLeave={() => {
                  cardIntervalRef.current = setInterval(() => {
                    setActiveCard((prev) => (prev + 1) % features.length);
                  }, 6000);
                }}
              >
                <div
                  className={`relative bg-white/95 backdrop-blur-sm p-8 rounded-xl border border-slate-200/50 hover:border-slate-300/70 hover:shadow-2xl transition-all duration-700 h-full transform ${
                    activeCard === index
                      ? "-translate-y-6 scale-105 shadow-2xl"
                      : "group-hover:-translate-y-3 group-hover:scale-102"
                  }`}
                >
                  <div
                    className={`absolute inset-0 bg-gradient-to-br from-slate-50 to-slate-100 opacity-0 ${
                      activeCard === index
                        ? "opacity-100"
                        : "group-hover:opacity-50"
                    } transition-opacity duration-700 rounded-xl`}
                  />

                  <div
                    className={`relative z-10 transition-all duration-800 ${
                      activeCard === index
                        ? "opacity-0 transform scale-95"
                        : "opacity-100 transform scale-100"
                    }`}
                  >
                    <div className="flex items-center justify-between mb-6">
                      <div
                        className={`flex items-center justify-center w-12 h-12 bg-gradient-to-br ${feature.color} rounded-xl text-white shadow-lg transform group-hover:scale-110 group-hover:rotate-3 transition-all duration-500`}
                      >
                        {feature.icon}
                      </div>
                      <div className="text-right">
                        <div className="text-xs font-bold text-slate-700 group-hover:text-blue-600 transition-colors duration-500">
                          {feature.metric}
                        </div>
                      </div>
                    </div>

                    <h3 className="font-semibold text-slate-900 mb-3 text-lg group-hover:text-slate-800 transition-colors duration-500">
                      {feature.title}
                    </h3>

                    <p className="text-slate-600 leading-relaxed mb-4 text-sm group-hover:text-slate-700 transition-colors duration-500">
                      {feature.desc}
                    </p>

                    <div className="flex items-center text-xs text-slate-500 group-hover:text-blue-600 transition-colors duration-500">
                      <Check className="w-3 h-3 mr-1 group-hover:text-green-600" />
                      <span className="font-medium">Enterprise Ready</span>
                    </div>
                  </div>

                  <div
                    className={`absolute inset-0 p-8 z-10 transition-all duration-800 ${
                      activeCard === index
                        ? "opacity-100 transform scale-100"
                        : "opacity-0 transform scale-95"
                    }`}
                  >
                    <div className="flex items-center justify-between mb-6">
                      <div
                        className={`flex items-center justify-center w-12 h-12 bg-gradient-to-br ${feature.color} rounded-xl text-white shadow-lg transform rotate-3`}
                      >
                        {feature.icon}
                      </div>
                      <div className="text-right">
                        <div className="text-xs font-bold text-slate-700">
                          {feature.metric}
                        </div>
                      </div>
                    </div>

                    <h3 className="font-semibold text-slate-900 mb-3 text-lg">
                      {feature.title}
                    </h3>

                    <p className="text-slate-600 leading-relaxed mb-4 text-sm">
                      {feature.backDesc}
                    </p>

                    <div className="absolute bottom-8 left-8 right-8">
                      <div className="flex items-center justify-center">
                        <div className="flex space-x-2">
                          {features.map((_, i) => (
                            <button
                              key={i}
                              onClick={(e) => {
                                e.stopPropagation();
                                setActiveCard(i);
                                if (cardIntervalRef.current)
                                  clearInterval(cardIntervalRef.current);
                              }}
                              className={`w-2 h-2 rounded-full transition-all duration-500 ${
                                i === activeCard
                                  ? "bg-blue-600 w-6"
                                  : "bg-slate-300 hover:bg-slate-400"
                              }`}
                            />
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>

                  <div
                    className={`absolute bottom-0 left-0 h-1 bg-gradient-to-r from-blue-500 to-blue-600 rounded-b-xl ${
                      activeCard === index ? "w-full scale-x-100" : "scale-x-0"
                    } transition-transform duration-700 origin-left`}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div
          className={`text-center py-16 border-t border-slate-300/20 transition-all duration-1500 delay-1800 ${
            isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <div className="max-w-3xl mx-auto">
            <h3
              className={`text-2xl md:text-3xl font-light ${backgroundSlides[activeBg].textColor} mb-4`}
            >
              Connect Your Business with QRPE
            </h3>
            <p
              className={`text-lg ${backgroundSlides[activeBg].textColor}/70 mb-8 leading-relaxed`}
            >
              Start working with QRPE that can provide everything you need for
              seamless digital interactions.
            </p>
            <button
              onClick={() => scrollToSection("contact")}
              className={`${backgroundSlides[activeBg].buttonStyle} px-8 py-3 rounded-lg font-medium text-base transition-all duration-500 shadow-xl hover:shadow-2xl transform hover:-translate-y-1 hover:scale-105`}
            >
              Get Started Today
            </button>
          </div>
        </div>
      </div>

      <div className="fixed bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-2 z-10">
        {backgroundSlides.map((_, index) => (
          <button
            key={index}
            onClick={() => {
              setActiveBg(index);
              if (bgIntervalRef.current) clearInterval(bgIntervalRef.current);
              bgIntervalRef.current = setInterval(() => {
                setActiveBg((prev) => (prev + 1) % backgroundSlides.length);
              }, 12000);
            }}
            className={`h-2 rounded-full transition-all duration-500 ${
              index === activeBg
                ? "bg-blue-400 w-6 shadow-lg shadow-blue-400/50"
                : "bg-white/40 w-2 hover:bg-white/60"
            }`}
          />
        ))}
      </div>

      <style jsx global>{`
        @keyframes elegantScale {
          0% {
            transform: scaleX(0);
            opacity: 0;
          }
          50% {
            opacity: 1;
          }
          100% {
            transform: scaleX(1);
            opacity: 0.8;
          }
        }

        @keyframes classic-fade {
          0%,
          100% {
            opacity: 0.95;
          }
          50% {
            opacity: 1;
          }
        }

        @keyframes classic-slide {
          0% {
            background-position: 0% 50%;
          }
          100% {
            background-position: 100% 50%;
          }
        }

        @keyframes classic-glow {
          0%,
          100% {
            filter: brightness(1);
          }
          50% {
            filter: brightness(1.1);
          }
        }

        .animate-classic-fade {
          animation: classic-fade 15s ease-in-out infinite;
        }

        .animate-classic-slide {
          background-size: 200% 200%;
          animation: classic-slide 25s ease-in-out infinite;
        }

        .animate-classic-glow {
          animation: classic-glow 12s ease-in-out infinite;
        }
      `}</style>
    </section>
  );
};

export default Home;
