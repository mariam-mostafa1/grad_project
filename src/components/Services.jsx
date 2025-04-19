// import Select from 'react-select';
import React, { useState } from 'react';
// import Select from 'react-select';
import '../styles/Services.css';

import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

// const ServiceCard = ({ image, title, price, services = [] }) => {
//     const [quantity, setQuantity] = useState(0);
//     const [selectedServices, setSelectedServices] = useState([]);

//     const serviceOptions = services.map(service => ({ value: service, label: service }));

//     return (
     
//         <div className="service-caard">
//             <img src={image} alt={title} className="service-caard-image" />
//             <div className="service-caard-content">
//                 <h3 className="service-caard-title">{title}</h3>


//                 <Select
//                     options={serviceOptions}
//                     isMulti
//                     className="service-seelect"
//                     placeholder="select services..."
//                     onChange={setSelectedServices}
//                 />



//                 <p className='price'>{price} EGP</p>
//                 <div className="quantity-selector">
//                     <button className='quantity-btndecrement' onClick={() => setQuantity(prev => Math.max(prev - 1, 0))}>-</button>
//                     <span className='quantity-number'>{quantity}</span>
//                     <button className='quantity-btnincrement' onClick={() => setQuantity(prev => prev + 1)}>+</button>
//                 </div>
//             </div>
//         </div>

//     );
// };









// const ServiceCard = ({ image, title, price, services = [] }) => {
//     const [quantity, setQuantity] = useState(0);
//     const [selectedServices, setSelectedServices] = useState([]);

//     const handleSelect = (service) => {
//         if (selectedServices.includes(service)) {
//             setSelectedServices(selectedServices.filter(item => item !== service));
//         } else {
//             setSelectedServices([...selectedServices, service]);
//         }
//     };

//     return (
//         <div className="service-caard">
//             <img src={image} alt={title} className="service-caard-image" />
//             <div className="service-caard-content">
//                 <h3 className="service-caard-title">{title}</h3>

//                 {/* خيارات الخدمات */}
//                 <div className="custom-select">
//                     {services.map((service, index) => (
//                         <label key={index} className="custom-option">
//                             <input
//                                 type="checkbox"
//                                 value={service}
//                                 checked={selectedServices.includes(service)}
//                                 onChange={() => handleSelect(service)}
//                             />
//                             {service}
//                         </label>
//                     ))}
//                 </div>

//                 <p className="price">{price} EGP</p>
//                 <div className="quantity-selector">
//                     <button
//                         className="quantity-btndecrement"
//                         onClick={() => setQuantity(prev => Math.max(prev - 1, 0))}
//                     >
//                         -
//                     </button>
//                     <span className="quantity-number">{quantity}</span>
//                     <button
//                         className="quantity-btnincrement"
//                         onClick={() => setQuantity(prev => prev + 1)}
//                     >
//                         +
//                     </button>
//                 </div>
//             </div>
//         </div>
//     );
// };


// const Services = () => {

//     const cardData = [
//         {
//             image: '/images/coat.jpg',
//             title: 'T-shirt 1',
//             price: 100,
//             services: ['Cleaning & Dry Cleaning', 'Cleaning', 'Dry Cleaning', 'Stains Removal', 'Adjustments & Repairs'],
//         },
//         {
//             image: '/images/bags.jpg',
//             title: 'T-shirt 2',
//             price: 120,
//             services: ['Cleaning & Dry Cleaning', 'Cleaning', 'Dry Cleaning', 'Stains Removal', 'Adjustments & Repairs'],
//         },
//         {
//           image: '/images/suit.jpg',
//           title: 'T-shirt 1',
//           price: 100,
//           services: ['Cleaning & Dry Cleaning', 'Cleaning', 'Dry Cleaning', 'Stains Removal', 'Adjustments & Repairs'],
//       },
//       {
//           image: '/images/belts.jpg',
//           title: 'T-shirt 2',
//           price: 120,
//           services: ['Cleaning & Dry Cleaning', 'Cleaning', 'Dry Cleaning', 'Stains Removal', 'Adjustments & Repairs'],
//       },
//       {
//             image: '/images/pyjama.jpg',
//             title: 'T-shirt 1',
//             price: 100,
//             services: ['Cleaning & Dry Cleaning', 'Cleaning', 'Dry Cleaning', 'Stains Removal', 'Adjustments & Repairs'],
//         },
//         {
//             image: '/images/skirt.jpg',
//             title: 'T-shirt 2',
//             price: 120,
//             services: ['Cleaning & Dry Cleaning', 'Cleaning', 'Dry Cleaning', 'Stains Removal', 'Adjustments & Repairs'],
//         },
//         // أضيفي باقي الكروت بنفس الشكل
    
//     ];


   

//     return (
//         <div className="serv_contaiinn">
 

//         <div className="services_containeeer">
           
//             {cardData.map((card, index) => (
//                 <ServiceCard key={index} {...card} />

               
            
//             ))}
//         </div>
//         </div>

      

//     );

// };


// export default Services;









// const ServiceCard = ({ image, title, price, services = [] }) => {
//   const [quantity, setQuantity] = useState(0);
//   const [selectedServices, setSelectedServices] = useState([]);

//   const handleSelect = (service) => {
//     if (selectedServices.includes(service)) {
//       setSelectedServices(selectedServices.filter(item => item !== service));
//     } else {
//       setSelectedServices([...selectedServices, service]);
//     }
//   };

//   return (
//     <div className="service-caard">
//       <img src={image} alt={title} className="service-caard-image" />
//       <div className="service-caard-content">
//         <h3 className="service-caard-title">{title}</h3>

//         <div className="custom-select">
//           {services.map((service, index) => (
//             <label key={index} className="custom-option">
//               <input
//                 type="checkbox"
//                 value={service}
//                 checked={selectedServices.includes(service)}
//                 onChange={() => handleSelect(service)}
//               />
//               {service}
//             </label>
//           ))}
//         </div>

//         <p className="price">{price} EGP</p>
//         <div className="quantity-selector">
//           <button
//             className="quantity-btndecrement"
//             onClick={() => setQuantity(prev => Math.max(prev - 1, 0))}
//           >
//             -
//           </button>
//           <span className="quantity-number">{quantity}</span>
//           <button
//             className="quantity-btnincrement"
//             onClick={() => setQuantity(prev => prev + 1)}
//           >
//             +
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// };




// const Services = () => {
//   const [currentPage, setCurrentPage] = useState(0);
//   const cardsPerPage = 4; // عدد الكروت في كل صفحة
// //   const totalPages = Math.ceil(cardData.length / cardsPerPage);

//   const cardData = [
//     {
//       image: '/images/coat.jpg',
//       title: 'T-shirt 1',
//       price: 100,
//       ID: 1,
//       services: ['Cleaning & Dry Cleaning', 'Cleaning', 'Dry Cleaning', 'Stains Removal', 'Adjustments & Repairs'],
//     },
//     {
//       image: '/images/bags.jpg',
//       title: 'T-shirt 2',
//       price: 120,
//       ID: 2,
//       services: ['Cleaning & Dry Cleaning', 'Cleaning', 'Dry Cleaning', 'Stains Removal', 'Adjustments & Repairs'],
//     },
//     {
//       image: '/images/suit.jpg',
//       title: 'T-shirt 3',
//       price: 100,
//       ID: 3,
//       services: ['Cleaning & Dry Cleaning', 'Cleaning', 'Dry Cleaning', 'Stains Removal', 'Adjustments & Repairs'],
//     },
//     {
//       image: '/images/belts.jpg',
//       title: 'T-shirt 4',
//       price: 120,
//       ID: 4,
//       services: ['Cleaning & Dry Cleaning', 'Cleaning', 'Dry Cleaning', 'Stains Removal', 'Adjustments & Repairs'],
//     },
//     {
//       image: '/images/pyjama.jpg',
//       title: 'T-shirt 5',
//       price: 100,
//       ID: 5,
//       services: ['Cleaning & Dry Cleaning', 'Cleaning', 'Dry Cleaning', 'Stains Removal', 'Adjustments & Repairs'],
//     },
//     {
//       image: '/images/skirt.jpg',
//       title: 'T-shirt 6',
//       price: 120,
//       ID: 6,
//       services: ['Cleaning & Dry Cleaning', 'Cleaning', 'Dry Cleaning', 'Stains Removal', 'Adjustments & Repairs'],
//     },
//     {
//       image: '/images/suit.jpg',
//       title: 'T-shirt 7',
//       price: 110,
//       ID: 7,
//       services: ['Cleaning & Dry Cleaning', 'Cleaning', 'Dry Cleaning', 'Stains Removal', 'Adjustments & Repairs'],
//     },
//     {
//       image: '/images/coat.jpg',
//       title: 'T-shirt 8',
//       price: 130,
//       ID: 8,
//       services: ['Cleaning & Dry Cleaning', 'Cleaning', 'Dry Cleaning', 'Stains Removal', 'Adjustments & Repairs'],
//     },
//     {image: '/images/coat.jpg',
//                 title: 'T-shirt 9',
//                 price: 100,
//       ID: 9,
//                 services: ['Cleaning & Dry Cleaning', 'Cleaning', 'Dry Cleaning', 'Stains Removal', 'Adjustments & Repairs'],
//             },
//             {
//                 image: '/images/bags.jpg',
//                 title: 'T-shirt 10',
//                 price: 120,
//       ID: 10,
//                 services: ['Cleaning & Dry Cleaning', 'Cleaning', 'Dry Cleaning', 'Stains Removal', 'Adjustments & Repairs'],
//             },
//             {
//               image: '/images/suit.jpg',
//               title: 'T-shirt 11',
//               price: 100,
//       ID: 11,
//               services: ['Cleaning & Dry Cleaning', 'Cleaning', 'Dry Cleaning', 'Stains Removal', 'Adjustments & Repairs'],
//           },
//           {
//               image: '/images/belts.jpg',
//               title: 'T-shirt 12',
//               price: 120,
//                     ID: 12,
//               services: ['Cleaning & Dry Cleaning', 'Cleaning', 'Dry Cleaning', 'Stains Removal', 'Adjustments & Repairs'],
//           },
//     // زوّد كروت كمان لو حبيت
//   ];
//   const startIndex = currentPage * cardsPerPage;
//   const endIndex = startIndex + cardsPerPage;
//   const currentCards = cardData.slice(startIndex, endIndex);

//   return (
//     <div className="serv_contaiinn">
//       <div className="services_containeeer">
//         {currentCards.map((card) => (
//           <ServiceCard key={card.ID} {...card} />
//         ))}
//       </div>

//       <div className="slider-buttons">
//         <button
//           onClick={() => setCurrentPage(prev => Math.max(prev - 1, 0))}
//           disabled={currentPage === 0}
//         >
//           previous
//         </button>
//         <button
//           onClick={() =>
//             setCurrentPage(prev =>
//               (prev + 1) * cardsPerPage < cardData.length ? prev + 1 : prev
//             )
//           }
//           disabled={(currentPage + 1) * cardsPerPage >= cardData.length}
//         >
//           next
//         </button>
       
//       </div>
//     </div>
//   );
// };

// export default Services;



const ServiceCard = ({
    image,
    title,
    price,
    services = [],
    quantity,
    selectedServices,
    onQuantityChange,
    onServicesChange,
  }) => {
    const handleSelect = (service) => {
      if (selectedServices.includes(service)) {
        onServicesChange(selectedServices.filter(item => item !== service));
      } else {
        onServicesChange([...selectedServices, service]);
      }
    };
  
    return (
      <div className="service-caard">
        <img src={image} alt={title} className="service-caard-image" />
        <div className="service-caard-content">
          <h3 className="service-caard-title">{title}</h3>
  
          <div className="custom-select">
            {services.map((service, index) => (
              <label key={index} className="custom-option">
                <input
                  type="checkbox"
                  value={service}
                  checked={selectedServices.includes(service)}
                  onChange={() => handleSelect(service)}
                />
                {service}
              </label>
            ))}
          </div>
  
          <p className="price">{price} EGP</p>
          <div className="quantity-selector">
            <button
              className="quantity-btndecrement"
              onClick={() => onQuantityChange(Math.max(quantity - 1, 0))}
            >
              -
            </button>
            <span className="quantity-number">{quantity}</span>
            <button
              className="quantity-btnincrement"
              onClick={() => onQuantityChange(quantity + 1)}
            >
              +
            </button>
          </div>
        </div>
      </div>
    );
  };


  const Services = () => {
    const [currentPage, setCurrentPage] = useState(0);
    const cardsPerPage = 4;
  
    const cardData = [
      // نفس البيانات اللي عندك بالظبط
      {
              image: '/images/coat.jpg',
              title: 'T-shirt 1',
              price: 100,
              ID: 1,
              services: ['Cleaning & Dry Cleaning', 'Cleaning', 'Dry Cleaning', 'Stains Removal', 'Adjustments & Repairs'],
            },
            {
              image: '/images/bags.jpg',
              title: 'T-shirt 2',
              price: 120,
              ID: 2,
              services: ['Cleaning & Dry Cleaning', 'Cleaning', 'Dry Cleaning', 'Stains Removal', 'Adjustments & Repairs'],
            },
            {
              image: '/images/suit.jpg',
              title: 'T-shirt 3',
              price: 100,
              ID: 3,
              services: ['Cleaning & Dry Cleaning', 'Cleaning', 'Dry Cleaning', 'Stains Removal', 'Adjustments & Repairs'],
            },
            {
              image: '/images/belts.jpg',
              title: 'T-shirt 4',
              price: 120,
              ID: 4,
              services: ['Cleaning & Dry Cleaning', 'Cleaning', 'Dry Cleaning', 'Stains Removal', 'Adjustments & Repairs'],
            },
            {
              image: '/images/pyjama.jpg',
              title: 'T-shirt 5',
              price: 100,
              ID: 5,
              services: ['Cleaning & Dry Cleaning', 'Cleaning', 'Dry Cleaning', 'Stains Removal', 'Adjustments & Repairs'],
            },
            {
              image: '/images/skirt.jpg',
              title: 'T-shirt 6',
              price: 120,
              ID: 6,
              services: ['Cleaning & Dry Cleaning', 'Cleaning', 'Dry Cleaning', 'Stains Removal', 'Adjustments & Repairs'],
            },
            {
              image: '/images/suit.jpg',
              title: 'T-shirt 7',
              price: 110,
              ID: 7,
              services: ['Cleaning & Dry Cleaning', 'Cleaning', 'Dry Cleaning', 'Stains Removal', 'Adjustments & Repairs'],
            },
            {
              image: '/images/coat.jpg',
              title: 'T-shirt 8',
              price: 130,
              ID: 8,
              services: ['Cleaning & Dry Cleaning', 'Cleaning', 'Dry Cleaning', 'Stains Removal', 'Adjustments & Repairs'],
            },
            {image: '/images/coat.jpg',
                        title: 'T-shirt 9',
                        price: 100,
              ID: 9,
                        services: ['Cleaning & Dry Cleaning', 'Cleaning', 'Dry Cleaning', 'Stains Removal', 'Adjustments & Repairs'],
                    },
                    {
                        image: '/images/bags.jpg',
                        title: 'T-shirt 10',
                        price: 120,
              ID: 10,
                        services: ['Cleaning & Dry Cleaning', 'Cleaning', 'Dry Cleaning', 'Stains Removal', 'Adjustments & Repairs'],
                    },
                    {
                      image: '/images/suit.jpg',
                      title: 'T-shirt 11',
                      price: 100,
              ID: 11,
                      services: ['Cleaning & Dry Cleaning', 'Cleaning', 'Dry Cleaning', 'Stains Removal', 'Adjustments & Repairs'],
                  },
                  {
                      image: '/images/belts.jpg',
                      title: 'T-shirt 12',
                      price: 120,
                            ID: 12,
                      services: ['Cleaning & Dry Cleaning', 'Cleaning', 'Dry Cleaning', 'Stains Removal', 'Adjustments & Repairs'],
                  },
      // ... الباقي زيه
    ];
  
    // حالة لحفظ بيانات كل كارت
    const [cardStates, setCardStates] = useState({});
  
    const handleQuantityChange = (id, quantity) => {
      setCardStates((prev) => ({
        ...prev,
        [id]: {
          ...prev[id],
          quantity,
          selectedServices: prev[id]?.selectedServices || [],
        },
      }));
    };
  
    const handleServicesChange = (id, selectedServices) => {
      setCardStates((prev) => ({
        ...prev,
        [id]: {
          ...prev[id],
          selectedServices,
          quantity: prev[id]?.quantity || 0,
        },
      }));
    };
  
    const startIndex = currentPage * cardsPerPage;
    const endIndex = startIndex + cardsPerPage;
    const currentCards = cardData.slice(startIndex, endIndex);
  
    return (
      <div className="serv_contaiinn">
        <div className="services_containeeer">
          {currentCards.map((card) => (
            <ServiceCard
              key={card.ID}
              {...card}
              quantity={cardStates[card.ID]?.quantity || 0}
              selectedServices={cardStates[card.ID]?.selectedServices || []}
              onQuantityChange={(q) => handleQuantityChange(card.ID, q)}
              onServicesChange={(s) => handleServicesChange(card.ID, s)}
            />
          ))}
        </div>
  
        <div className="slider-buttons">
          <button
            onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 0))}
            disabled={currentPage === 0}
          >
            previous
          </button>
          <button
            onClick={() =>
              setCurrentPage((prev) =>
                (prev + 1) * cardsPerPage < cardData.length ? prev + 1 : prev
              )
            }
            disabled={(currentPage + 1) * cardsPerPage >= cardData.length}
          >
            next
          </button>
        </div>
      </div>
    );
  };
  
  export default Services;