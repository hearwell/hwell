import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
const SpecialCTA = () => {
  const navigate = useNavigate();

    return (
    <div className="max-w-lg mx-auto mt-10 relative">
      {/* CTA Button */}
      {(
        <div className="flex justify-center">
          <button
            onClick={() => navigate("/form")}
            className="px-6 py-3 bg-orange-500 text-white text-lg rounded-lg shadow-lg hover:bg-orange-600 transition"
          >
            Download Latest Price List
          </button>
        </div>
      )}
    </div>
  );
};

export default SpecialCTA;
