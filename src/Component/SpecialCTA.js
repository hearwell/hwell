import React, { useState } from "react";

const SpecialCTA = () => {
  const [formVisible, setFormVisible] = useState(false);
  const [thankYouVisible, setThankYouVisible] = useState(false);
  const [phone, setPhone] = useState("");
  const [name, setName] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  // Validate phone number
  const validatePhoneNumber = (phone) => /^[5-9]\d{9}$/.test(phone);

  const handleSubmit = async () => {
    if (!phone || !name) {
      setErrorMessage("Please fill in all fields.");
      return;
    }

    if (!validatePhoneNumber(phone)) {
      setErrorMessage("Invalid phone number. Enter a valid 10-digit number.");
      return;
    }

    setErrorMessage(""); // Clear error messages
    const refurl = document.referrer || "N/A";
    const source = window.location.href;

    const data = {
      phone: "91" + phone,
      name,
      refurl,
      source,
      medium: "cta_id_example", // Replace with unique ID if necessary
    };

    try {
      await fetch("https://hkdk.events/gpxuv3t1p1c23x", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });
      setFormVisible(false);
      setThankYouVisible(true);
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <div className="max-w-lg mx-auto mt-10 relative">
      {/* CTA Button */}
      {!formVisible && !thankYouVisible && (
        <div className="flex justify-center">
          <button
            onClick={() => setFormVisible(true)}
            className="px-6 py-3 bg-orange-500 text-white text-lg rounded-lg shadow-lg hover:bg-orange-600 transition"
          >
            Download Latest Price List
          </button>
        </div>
      )}

      {/* Form */}
      {formVisible && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
          <div className="bg-gray-100 p-6 rounded-lg shadow-lg relative w-full max-w-md">
            <button
              onClick={() => setFormVisible(false)}
              className="absolute top-2 right-2 text-gray-500 hover:text-gray-800 text-xl font-bold"
            >
              &times;
            </button>
            <p className="text-center mb-4 text-sm text-gray-600">
              🦻 Compare Prices 🆓 Claim Free Trial 🧑🏻‍⚕️ Consult top audiologists
            </p>
            <form className="space-y-4">
              <div>
                <input
                  type="text"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  placeholder="10 digit WhatsApp Number"
                  className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
                  required
                />
              </div>
              <div>
                <input
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Your Name"
                  className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
                  required
                />
              </div>
              {errorMessage && (
                <p className="text-red-500 text-sm text-center">
                  {errorMessage}
                </p>
              )}
              <button
                type="button"
                onClick={handleSubmit}
                className="w-full px-4 py-2 bg-orange-500 text-white rounded-lg hover:bg-orange-600 focus:outline-none focus:ring-2 focus:ring-orange-500"
              >
                Download Latest Price List
              </button>
            </form>
          </div>
        </div>
      )}

      {/* Thank You Message */}
      {thankYouVisible && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
          <div className="bg-gray-100 p-6 rounded-lg shadow-lg relative w-full max-w-md">
            <button
              onClick={() => setThankYouVisible(false)}
              className="absolute top-2 right-2 text-gray-500 hover:text-gray-800 text-xl font-bold"
            >
              &times;
            </button>
            <p className="text-center text-lg font-bold">Thank You!</p>
            <p className="text-center text-sm text-gray-600 mt-2">
              <a
                href="https://offers.hearwellhearing.in/wp-content/uploads/2024/12/HearWell_HearingPD.pdf"
                className="text-blue-500 hover:underline"
              >
                Click here to download
              </a>{" "}
              the price list.
            </p>
            <p className="text-center text-sm text-gray-600">
              You can also contact us via{" "}
              <a
                href="https://api.whatsapp.com/send/?phone=918556086888&text=hi&type=phone_number&app_absent=0"
                className="text-blue-500 hover:underline"
              >
                WhatsApp
              </a>{" "}
              or call us at{" "}
              <a
                href="tel:918556086888"
                className="text-blue-500 hover:underline"
              >
                +918556086888
              </a>
              .
            </p>
          </div>
        </div>
      )}
    </div>
  );
};

export default SpecialCTA;
