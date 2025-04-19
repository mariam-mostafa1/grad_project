import React, { useState } from 'react';
import '../styles/Services2.css'; // استيراد ملف CSS مع تصميم استجابي

const ServiceCard = ({ image, title, price, services }) => {
    const [quantity, setQuantity] = useState(0); // العداد

    const handleIncrement = () => setQuantity(prev => prev + 1);
    const handleDecrement = () => setQuantity(prev => (prev > 0 ? prev - 1 : 0));

    return (
        <div className="service-card">
            <img src={image} alt={title} className="service-card-image" />
            <div className="service-card-content">
                <h3>{title}</h3>
                <select className="service-select">
                    {services.map((service, index) => (
                        <option key={index} value={service}>{service}</option>
                    ))}
                </select>
                <p style={{color:"#FFCC00"}}>{price} EGP</p>
                <div className="quantity-selector">
                    <button onClick={handleDecrement}>-</button>
                    <span>{quantity}</span>
                    <button onClick={handleIncrement}>+</button>
                </div>
            </div>
        </div>
    );
};

const Services2 = () => {
    const cardData = [
        {
            image: '/images/coat.jpg',
            title: 'T-shirt 1',
            price: 100,
            services: ['Cleaning & Dry Cleaning', 'Cleaning', 'Dry Cleaning', 'Stains Removal', 'Adjustments & Repairs'],
        },
        {
            image: '/images/bags.jpg',
            title: 'T-shirt 2',
            price: 120,
            services: ['Cleaning & Dry Cleaning', 'Cleaning', 'Dry Cleaning', 'Stains Removal', 'Adjustments & Repairs'],
        },
        {
          image: '/images/suit.jpg',
          title: 'T-shirt 1',
          price: 100,
          services: ['Cleaning & Dry Cleaning', 'Cleaning', 'Dry Cleaning', 'Stains Removal', 'Adjustments & Repairs'],
      },
      {
          image: '/images/belts.jpg',
          title: 'T-shirt 2',
          price: 120,
          services: ['Cleaning & Dry Cleaning', 'Cleaning', 'Dry Cleaning', 'Stains Removal', 'Adjustments & Repairs'],
      },
      {
            image: '/images/dress.jpg',
            title: 'T-shirt 1',
            price: 100,
            services: ['Cleaning & Dry Cleaning', 'Cleaning', 'Dry Cleaning', 'Stains Removal', 'Adjustments & Repairs'],
        },
        {
            image: '/images/skirt.jpg',
            title: 'T-shirt 2',
            price: 120,
            services: ['Cleaning & Dry Cleaning', 'Cleaning', 'Dry Cleaning', 'Stains Removal', 'Adjustments & Repairs'],
        },
        // أضيفي باقي الكروت بنفس الشكل
    ];
    

    return (
        <div className="services-container">
            {cardData.map((card, index) => (
                <ServiceCard key={index} {...card} />
            ))}
        </div>
    );
};

export default Services2;