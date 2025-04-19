// import Select from 'react-select';
import React, { useState } from 'react';
import Select from 'react-select';
import '../styles/Services.css';

const ServiceCard = ({ image, title, price, services = [] }) => {
    const [quantity, setQuantity] = useState(0);
    const [selectedServices, setSelectedServices] = useState([]);

    const serviceOptions = services.map(service => ({ value: service, label: service }));

    return (
     
        <div className="service-card">
            <img src={image} alt={title} className="service-card-image" />
            <div className="service-card-content">
                <h3 className="service-card-title">{title}</h3>
                <Select
                    options={serviceOptions}
                    isMulti
                    className="service-select"
                    placeholder="select services..."
                    onChange={setSelectedServices}
                />
                <p className='price'>{price} EGP</p>
                <div className="quantity-selector">
                    <button className='quantity-btndecrement' onClick={() => setQuantity(prev => Math.max(prev - 1, 0))}>-</button>
                    <span className='quantity-number'>{quantity}</span>
                    <button className='quantity-btnincrement' onClick={() => setQuantity(prev => prev + 1)}>+</button>
                </div>
            </div>
        </div>

    );
};


const Services = () => {

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
            image: '/images/pyjama.jpg',
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
        <div className="serv_contaiin">

        <div className="services_containeer">
           
            {cardData.map((card, index) => (
                <ServiceCard key={index} {...card} />
            ))}
        </div>
        </div>
      

    );

};





export default Services;