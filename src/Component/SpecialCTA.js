import React from "react";
import { useNavigate } from "react-router-dom";

const SpecialCTA = () => {
  const navigate = useNavigate();
  return (
    <div className="max-w-lg mx-auto m-7 flex items-center justify-center relative">
      {/* CTA Button */}
      <button
        onClick={() => navigate("/form")}
        className="px-6 py-3 bg-orange-500 text-white text-lg rounded-lg shadow-lg hover:bg-orange-600 transition"
      >
        Download Latest Price List
      </button>
    </div>
  );
};

export default SpecialCTA;
