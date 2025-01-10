import React from "react";
import image1 from "../Assets/image1.jpg";
import image2 from "../Assets/image2.jpg";
import image4 from "../Assets/image4.jpg";
import image5 from "../Assets/image5.jpg";
import image8 from "../Assets/image8.jpg";

const CardComponent = () => {
  const cards = [
    {
      image: image1,
      title: "Signia Insio IX series",
      rating: 5,
      features: [
        "Easy smartphone control via app",
        "Nearly invisible design",
        "Signia Xperience technology",
        "Crystal clear hearing",
      ],
    },
    {
      image: image2,
      title: "Signia Styletto IX series",
      rating: 5,
      features: [
        "Easy smartphone control via app",
        "Nearly invisible design",
        "Signia Xperience technology",
        "Crystal clear hearing",
      ],
    },
    {
      image: image4,
      title: "Signia Motion X series",
      rating: 5,
      features: [
        "Discreet comfortable design",
        "Outstanding speech clarity",
        "Wireless Recharging",
        "SmartPhones connectivity",
      ],
    },
    {
      image: image5,
      title: "Signia Pure AX series",
      rating: 5,
      features: [
        "Discreet comfortable design",
        "Outstanding speech clarity",
        "Wireless Recharging",
        "SmartPhones connectivity",
      ],
    },
    {
      image: image8,
      title: "Signia Silk IX series",
      rating: 5,
      features: [
        "Easy smartphone control via app",
        "Nearly invisible design",
        "Signia Xperience technology",
        "Crystal clear hearing",
      ],
    },
  ];

  const renderStars = (rating) => {
    return Array.from({ length: rating }, (_, i) => (
      <span key={i} className="text-yellow-500">
        &#9733;
      </span>
    ));
  };

  return (
    <div className="bg-gray-100 py-10">
      <div
        className="max-w-7xl mx-auto overflow-x-auto scrollbar-hide"
        style={{
          scrollbarWidth: "none",
          msOverflowStyle: "none",
        }} >
        <div className="flex space-x-6">
          {cards.map((card, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-lg flex flex-col w-80 shrink-0"
            >
              {/* Image Section */}
              <div className="h-48 w-full">
                <img
                  src={card.image}
                  alt={card.title}
                  className="w-full h-full object-cover"
                />
              </div>
              {/* Content Section */}
              <div className="p-4">
                <h2 className="text-xl font-bold mb-2">{card.title}</h2>
                <div className="flex items-center mb-4">
                  {renderStars(card.rating)}
                </div>
                <ul className="text-gray-700 list-disc ml-4 space-y-1">
                  {card.features.map((feature, idx) => (
                    <li key={idx}>{feature}</li>
                  ))}
                </ul>
                <button className="mt-4 bg-blue-600 text-white px-4 py-2 rounded w-full hover:bg-blue-700">
                  Get Price Estimate Now
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CardComponent;

// import React from "react";
// import image1 from "../Assets/image1.jpg";
// import image2 from "../Assets/image2.jpg";
// import image3 from "../Assets/image3.jpg";
// import image4 from "../Assets/image4.jpg";

// const CardComponent = () => {
//   const cards = [
//     {
//       image: image1,
//       title: "Signia Insio IX series",
//       rating: 5,
//       features: [
//         "Easy smartphone control via app",
//         "Nearly invisible design",
//         "Signia Xperience technology",
//         "Crystal clear hearing",
//       ],
//     },
//     {
//       image: image2,
//       title: "Signia Styletto IX series",
//       rating: 5,
//       features: [
//         "Easy smartphone control via app",
//         "Nearly invisible design",
//         "Signia Xperience technology",
//         "Crystal clear hearing",
//       ],
//     },
//     {
//       image: image3,
//       title: "Signia Pure IX series",
//       rating: 5,
//       features: [
//         "Easy smartphone control via app",
//         "Nearly invisible design",
//         "Signia Xperience technology",
//         "Crystal clear hearing",
//       ],
//     },
//     {
//       image: image4,
//       title: "Signia Motion X series",
//       rating: 5,
//       features: [
//         "Discreet comfortable design",
//         "Outstanding speech clarity",
//         "Wireless Recharging",
//         "SmartPhones connectivity",
//       ],
//     },
//     ,
//     {
//       image: image4,
//       title: "Signia Motion X series",
//       rating: 5,
//       features: [
//         "Discreet comfortable design",
//         "Outstanding speech clarity",
//         "Wireless Recharging",
//         "SmartPhones connectivity",
//       ],
//     },
//   ];

//   const renderStars = (rating) => {
//     return Array.from({ length: rating }, (_, i) => (
//       <span key={i} className="text-yellow-500">&#9733;</span>
//     ));
//   };

//   return (
//     <div className="bg-gray-100 py-10">
//       <div className="max-w-7xl mx-auto overflow-x-auto">
//         <div className="flex space-x-6">
//           {cards.map((card, index) => (
//             <div
//               key={index}
//               className="bg-white rounded-lg shadow-lg flex flex-col w-80 shrink-0"
//             >
//               {/* Image Section */}
//               <div className="h-48">
//                 <img
//                   src={card.image}
//                   alt={card.title}
//                   className="w-full h-full object-cover"
//                 />
//               </div>
//               {/* Content Section */}
//               <div className="p-4">
//                 <h2 className="text-xl font-bold mb-2">{card.title}</h2>
//                 <div className="flex items-center mb-4">
//                   {renderStars(card.rating)}
//                 </div>
//                 <ul className="text-gray-700 list-disc ml-4 space-y-1">
//                   {card.features.map((feature, idx) => (
//                     <li key={idx}>{feature}</li>
//                   ))}
//                 </ul>
//                 <button className="mt-4 bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">
//                   Get Price Estimate Now
//                 </button>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default CardComponent;
