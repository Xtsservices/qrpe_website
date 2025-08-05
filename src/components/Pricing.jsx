'use client';
import React, { useState, useEffect, useRef } from "react";
import { Check, Zap } from 'lucide-react';

const pricingPlans = [
    {
        name: "Basic",
        price: "₹2000.00",
        period: "Per Month",
        description: "All the basics for businesses that are just getting started.",
        features: [
            "SMS",
            "WhatsApp",
            "POS",
            "Payment Gateway",
            "QR Solution",
            "No Need to Wait"
        ],
        highlight: false
    },
    {
        name: "Business",
        price: "₹5000.00",
        period: "Per Month",
        description: "Better for growing businesses that want more customers.",
        features: [
            "SMS With DLT Support",
            "Business WhatsApp",
            "POS With Customised App",
            "Reseller Gateway",
            "Customised QR Solution",
            "No Need to Wait"
        ],
        highlight: true,
        highlightText: "Most Popular"
    },
    {
        name: "Enterprise",
        price: "₹9000.00",
        period: "Per Month",
        description: "Advanced features for pros who need more customization.",
        features: [
            "Full Access for SMS",
            "Verified Business WhatsApp",
            "White Label POS",
            "White Label Gateway",
            "Own QR Brand",
            "No Need to Wait"
        ],
        highlight: false
    }
];

const Pricing = () => {
    const [hoveredButton, setHoveredButton] = useState(null);
    const leftCardRef = useRef(null);
    const rightCardRef = useRef(null);
    const centerCardRef = useRef(null);
    
    const [isLeftInView, setIsLeftInView] = useState(false);
    const [isRightInView, setIsRightInView] = useState(false);
    const [isCenterInView, setIsCenterInView] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (leftCardRef.current) {
                const rect = leftCardRef.current.getBoundingClientRect();
                const isVisible = rect.top < window.innerHeight && rect.bottom > 0;
                
                if (!isVisible && isLeftInView) {
                    leftCardRef.current.style.transform = "translateX(-30px)";
                    leftCardRef.current.style.opacity = "0";
                    setIsLeftInView(false);
                } else if (isVisible && !isLeftInView) {
                    leftCardRef.current.style.transform = "translateX(0)";
                    leftCardRef.current.style.opacity = "1";
                    setIsLeftInView(true);
                }
            }
            
            if (rightCardRef.current) {
                const rect = rightCardRef.current.getBoundingClientRect();
                const isVisible = rect.top < window.innerHeight && rect.bottom > 0;
                
                if (!isVisible && isRightInView) {
                    rightCardRef.current.style.transform = "translateX(30px)";
                    rightCardRef.current.style.opacity = "0";
                    setIsRightInView(false);
                } else if (isVisible && !isRightInView) {
                    rightCardRef.current.style.transform = "translateX(0)";
                    rightCardRef.current.style.opacity = "1";
                    setIsRightInView(true);
                }
            }
            
            if (centerCardRef.current) {
                const rect = centerCardRef.current.getBoundingClientRect();
                const isVisible = rect.top < window.innerHeight && rect.bottom > 0;
                
                if (!isVisible && isCenterInView) {
                    centerCardRef.current.style.transform = "translateY(30px)";
                    centerCardRef.current.style.opacity = "0";
                    setIsCenterInView(false);
                } else if (isVisible && !isCenterInView) {
                    centerCardRef.current.style.transform = "translateY(0)";
                    centerCardRef.current.style.opacity = "1";
                    setIsCenterInView(true);
                }
            }
        };

        handleScroll();
        window.addEventListener('scroll', handleScroll);
        
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, [isLeftInView, isRightInView, isCenterInView]);

    return (
        <div className="pricing-container">
            <div className="pricing-header">
                <span className="pricing-badge">
                    <Zap className="w-4 h-4 text-blue-500" />
                    Our Pricing
                </span>
                <h2 className="pricing-title">
                    Pricing <span className="text-gradient">Plans</span>
                </h2>
                <p className="pricing-subtitle">
                    Choose the plan that best fits your business needs.
                </p>
            </div>
            <div className="plans-container">
                <div
                    ref={leftCardRef}
                    className="plan-card"
                    style={{
                        transform: "translateX(-30px)",
                        opacity: 0,
                        transition: "transform 0.5s ease-out, opacity 0.5s ease-out",
                    }}
                >
                    <div className="plan-title">{pricingPlans[0].name}</div>
                    <div className="plan-price">
                        {pricingPlans[0].price}
                        <span className="plan-period">{pricingPlans[0].period}</span>
                    </div>
                    <div className="plan-description">{pricingPlans[0].description}</div>
                    <ul className="plan-features">
                        {pricingPlans[0].features.map((feature, idx) => (
                            <li key={idx} className="plan-feature">
                                <Check className="w-4 h-4 text-green-500 mr-2" />
                                {feature}
                            </li>
                        ))}
                    </ul>
                    <button
                        className={`plan-button ${hoveredButton === 0 ? 'hovered' : ''}`}
                        onMouseEnter={() => setHoveredButton(0)}
                        onMouseLeave={() => setHoveredButton(null)}
                    >
                        Choose {pricingPlans[0].name} <span className="button-arrow">→</span>
                    </button>
                </div>

                <div
                    ref={centerCardRef}
                    className="plan-card highlighted"
                    style={{
                        transform: "translateY(30px)",
                        opacity: 0,
                        transition: "transform 0.5s ease-out, opacity 0.5s ease-out",
                    }}
                >
                    {pricingPlans[1].highlight && <div className="highlight-badge">{pricingPlans[1].highlightText}</div>}
                    <div className="plan-title">{pricingPlans[1].name}</div>
                    <div className="plan-price">
                        {pricingPlans[1].price}
                        <span className="plan-period">{pricingPlans[1].period}</span>
                    </div>
                    <div className="plan-description">{pricingPlans[1].description}</div>
                    <ul className="plan-features">
                        {pricingPlans[1].features.map((feature, idx) => (
                            <li key={idx} className="plan-feature">
                                <Check className="w-4 h-4 text-green-500 mr-2" />
                                {feature}
                            </li>
                        ))}
                    </ul>
                    <button
                        className={`plan-button ${hoveredButton === 1 ? 'hovered' : ''}`}
                        onMouseEnter={() => setHoveredButton(1)}
                        onMouseLeave={() => setHoveredButton(null)}
                    >
                        Choose {pricingPlans[1].name} <span className="button-arrow">→</span>
                    </button>
                </div>

                <div
                    ref={rightCardRef}
                    className="plan-card"
                    style={{
                        transform: "translateX(30px)",
                        opacity: 0,
                        transition: "transform 0.5s ease-out, opacity 0.5s ease-out",
                    }}
                >
                    <div className="plan-title">{pricingPlans[2].name}</div>
                    <div className="plan-price">
                        {pricingPlans[2].price}
                        <span className="plan-period">{pricingPlans[2].period}</span>
                    </div>
                    <div className="plan-description">{pricingPlans[2].description}</div>
                    <ul className="plan-features">
                        {pricingPlans[2].features.map((feature, idx) => (
                            <li key={idx} className="plan-feature">
                                <Check className="w-4 h-4 text-green-500 mr-2" />
                                {feature}
                            </li>
                        ))}
                    </ul>
                    <button
                        className={`plan-button ${hoveredButton === 2 ? 'hovered' : ''}`}
                        onMouseEnter={() => setHoveredButton(2)}
                        onMouseLeave={() => setHoveredButton(null)}
                    >
                        Choose {pricingPlans[2].name} <span className="button-arrow">→</span>
                    </button>
                </div>
            </div>
            <div className="clients-section">
                <div className="clients-title">Join Thousands of Businesses</div>
                <div className="clients-badge">
                    <span className="client-avatars">
                        <div className="client-avatar" />
                        <div className="client-avatar" />
                        <div className="client-avatar" />
                    </span>
                    10,000+ Businesses trust
                    <span className="brand-name">QRPE</span>
                </div>
            </div>

            <style jsx>{`
                .pricing-container {
                    min-height: 80vh;
                    background: #fff;
                    font-family: 'Inter', sans-serif;
                    padding: 80px 0;
                    margin: 0;
                }
                
                .pricing-header {
                    text-align: center;
                    margin-bottom: 60px;
                }
                
                .pricing-badge {
                    display: inline-flex;
                    align-items: center;
                    background: #f4f8ff;
                    color: #3b82f6;
                    font-weight: 500;
                    font-size: 14px;
                    border-radius: 16px;
                    padding: 6px 14px;
                    margin-bottom: 16px;
                    gap: 6px;
                }
                
                .pricing-title {
                    font-weight: 700;
                    font-size: 42px;
                    margin: 0;
                    color: #222;
                    letter-spacing: -0.01em;
                    margin-bottom: 16px;
                }
                
                .text-gradient {
                    background: linear-gradient(90deg, #0a1f44 0%, #1a3d8d 100%);
                    -webkit-background-clip: text;
                    -webkit-text-fill-color: transparent;
                }
                
                .pricing-subtitle {
                    color: #6b7280;
                    font-size: 18px;
                    max-width: 600px;
                    margin: 0 auto;
                    line-height: 1.5;
                }
                
                .plans-container {
                    display: flex;
                    justify-content: center;
                    gap: 24px;
                    margin-top: 20px;
                    margin-bottom: 60px;
                    padding: 0 20px;
                }
                
                .plan-card {
                    background: #f4f8ff;
                    border-radius: 16px;
                    box-shadow: 0 3px 20px rgba(59,130,246,0.08);
                    border: 1px solid #e5e7eb;
                    width: 100%;
                    max-width: 340px;
                    padding: 24px;
                    position: relative;
                    transition: all 0.3s ease;
                }
                
                .plan-card:hover {
                    background: linear-gradient(135deg, rgba(10,31,68,0.9) 0%, rgba(26,61,141,0.9) 100%);
                    color: #fff;
                    transform: translateY(-4px) !important;
                }
                
                .plan-card:hover .plan-title,
                .plan-card:hover .plan-description,
                .plan-card:hover .plan-price,
                .plan-card:hover .plan-period,
                .plan-card:hover .plan-feature {
                    color: #fff !important;
                }
                
                .plan-card.highlighted {
                    box-shadow: 0 6px 28px 0 rgba(59,130,246,0.15);
                    border: 2px solid #3b82f6;
                    transform: scale(1.02);
                }
                
                .highlight-badge {
                    position: absolute;
                    top: -10px;
                    right: 20px;
                    background: #fff7ed;
                    color: #fb923c;
                    font-weight: 600;
                    font-size: 12px;
                    border-radius: 12px;
                    padding: 4px 10px;
                }
                
                .plan-title {
                    font-weight: 600;
                    font-size: 22px;
                    color: #222;
                    margin-bottom: 12px;
                }
                
                .plan-price {
                    font-size: 32px;
                    font-weight: 300;
                    color: #222;
                    margin-bottom: 8px;
                }
                
                .plan-period {
                    font-size: 14px;
                    font-weight: 500;
                    color: #6b7280;
                    margin-left: 6px;
                }
                
                .plan-description {
                    color: #6b7280;
                    font-size: 15px;
                    margin-bottom: 20px;
                    line-height: 1.5;
                }
                
                .plan-features {
                    margin-bottom: 24px;
                }
                
                .plan-feature {
                    color: #6b7280;
                    font-size: 14px;
                    margin-bottom: 12px;
                    line-height: 1.5;
                    display: flex;
                    align-items: flex-start;
                }
                
                .plan-button {
                    margin-top: 16px;
                    width: 100%;
                    background: linear-gradient(90deg, #3b82f6 0%, #06b6d4 100%);
                    color: #fff;
                    font-weight: 600;
                    font-size: 15px;
                    border: none;
                    border-radius: 8px;
                    padding: 14px 0;
                    cursor: pointer;
                    box-shadow: 0 3px 10px rgba(59,130,246,0.15);
                    transition: all 0.3s ease;
                    outline: none;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    gap: 6px;
                }
                
                .plan-button.hovered {
                    background: linear-gradient(90deg, #2563eb 0%, #0ea5e9 100%);
                    transform: translateY(-2px);
                    box-shadow: 0 5px 14px rgba(59,130,246,0.25);
                }
                
                .button-arrow {
                    font-size: 16px;
                    transition: transform 0.2s;
                }
                
                .plan-button.hovered .button-arrow {
                    transform: translateX(3px);
                }
                
                .clients-section {
                    text-align: center;
                    margin-top: 60px;
                }
                
                .clients-title {
                    font-weight: 700;
                    font-size: 28px;
                    color: #222;
                    margin-bottom: 16px;
                    letter-spacing: -0.01em;
                    background: linear-gradient(90deg, #0a1f44 0%, #1a3d8d 100%);
                    -webkit-background-clip: text;
                    -webkit-text-fill-color: transparent;
                }
                
                .clients-badge {
                    display: inline-flex;
                    align-items: center;
                    gap: 8px;
                    background: #f4f8ff;
                    border-radius: 24px;
                    padding: 8px 20px;
                    font-size: 16px;
                    color: #6b7280;
                    font-weight: 500;
                }
                
                .client-avatars {
                    display: flex;
                }
                
                .client-avatar {
                    width: 32px;
                    height: 32px;
                    border-radius: 50%;
                    border: 2px solid #fff;
                    margin-left: 0;
                    margin-right: -8px;
                    box-shadow: 0 0 0 2px #f4f8ff;
                    background: #e0f2fe;
                }
                
                .brand-name {
                    color: #3b82f6;
                    font-weight: 600;
                    margin-left: 4px;
                }
                
                @media (max-width: 1024px) {
                    .plans-container {
                        flex-direction: column;
                        align-items: center;
                        gap: 24px;
                    }
                    
                    .plan-card {
                        max-width: 400px;
                    }
                    
                    .plan-card.highlighted {
                        transform: none;
                    }
                    
                    .pricing-title {
                        font-size: 36px;
                        padding: 0 20px;
                    }
                    
                    .clients-title {
                        font-size: 24px;
                    }
                }
                
                @media (max-width: 768px) {
                    .pricing-container {
                        padding: 60px 0;
                    }
                    
                    .pricing-title {
                        font-size: 32px;
                    }
                    
                    .pricing-subtitle {
                        font-size: 16px;
                    }
                    
                    .clients-title {
                        font-size: 22px;
                    }
                    
                    .clients-badge {
                        font-size: 14px;
                        padding: 6px 16px;
                    }
                    
                    .plan-card {
                        padding: 20px;
                        max-width: 360px;
                    }
                    
                    .plan-title {
                        font-size: 20px;
                    }
                    
                    .plan-price {
                        font-size: 28px;
                    }
                    
                    .plan-description {
                        font-size: 14px;
                    }
                }
            `}</style>
        </div>
    );
};

export default Pricing;