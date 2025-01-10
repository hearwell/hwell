import React from "react";
import pic from "./image6.jpg";
import "font-awesome/css/font-awesome.min.css"; // Import Font Awesome CSS
import Navbar from "./navbar";
const HearingAidPage = () => {
  return (
    <>
      <div className="flex flex-col items-center justify-center bg-gray-100 min-h-screen">
      <Navbar></Navbar>
        <div className="bg-white p-8 rounded-lg shadow-md max-w-3xl">
          <div className="flex flex-col md:flex-row items-center">
            <div className="flex-1 mb-6 md:mb-0">
              <img
                src={pic} // Replace with actual image URL
                alt="Hearing Aid"
                className="w-full max-w-sm mx-auto"
              />
            </div>
            <div className="flex-1 text-center md:text-left">
              <h1 className="text-3xl font-bold mb-4">We will be in touch.</h1>
              <p className="text-lg mb-2">
                You can download the hearing aid price list brochure here.
              </p>
              <p className="text-lg mb-6">
                Call us to know about the latest offers on any brand.
              </p>
              <a
                href="https://offers.hearwellhearing.in/wp-content/uploads/2024/12/HearWell_HearingPD.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-black text-white px-6 py-2 rounded hover:bg-slate-950"
              >
                Download PDF
              </a>
              {/* <div className="flex justify-center md:justify-start space-x-4 mt-6">
              <a href="#" className="text-black hover:text-black">
                <i className="fab fa-instagram"></i>
              </a>
              <a href="#" className="text-black hover:text-black">
                <i className="fab fa-whatsapp"></i>
              </a>
              <a href="#" className="text-black hover:text-black">
                <i className="fab fa-youtube"></i>
              </a>
              <a href="#" className="text-black hover:text-black">
                <i className="fab fa-facebook"></i>
              </a>
            </div> */}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HearingAidPage;
