import React from "react";
const RatingCard = ({ platform, rating, icon, additionalInfo }) => {
    return (
      <div className="flex flex-col md:flex-row items-center justify-between bg-white shadow-lg rounded-lg p-4 w-full md:w-64">
        <div className="flex items-center gap-3">
          <img src={icon} alt={`${platform} logo`} className="w-8 h-8" />
          <div>
            <h3 className="font-medium text-gray-800 text-center md:text-left">{platform}</h3>
            <p className="text-xl font-bold text-gray-900 text-center md:text-left">{rating}</p>
          </div>
        </div>
        <div className="mt-3 md:mt-0">{additionalInfo}</div>
      </div>
    );
  };
  export default RatingCard;