import React from "react";

const WhyHear = () => {
  const features = [
    {
      title: "Transparent Pricing",
      description: "Explore hearing aid price list",
    },
    {
      title: "1000+ certified clinics in 450+ cities",
      description: "",
    },
    {
      title: "Protection+ Plan",
      description: "Against theft, loss or damage",
    },
    {
      title: "Lifetime hearing care support",
      description: "",
    },
    {
      title: "Interest free easy EMI plans",
      description: "",
    },
    {
      title: "40+ Lacs consultations in India",
      description: "",
    },
  ];

  return (
    <div className="bg-gray-50 py-8">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-2xl font-bold text-center mb-6">Why hear.com?</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <div key={index} className="flex items-start">
              {/* Icon */}
              <div className="text-blue-600 mr-3">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  className="w-6 h-6"
                >
                  <path d="M9 16.2l-3.5-3.5 1.4-1.4L9 13.4l7.1-7.1 1.4 1.4z" />
                </svg>
              </div>
              {/* Content */}
              <div>
                <h3 className="text-lg font-semibold text-gray-800">
                  {feature.title}
                </h3>
                {feature.description && (
                  <p className="text-gray-600 text-sm">{feature.description}</p>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default WhyHear;
