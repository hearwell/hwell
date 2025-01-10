// // DetailsForm.jsx
// import React, { useState } from "react";
// import ThankYouPage from "./Thankyou";

// const DetailsForm = () => {
//   const [formVisible, setFormVisible] = useState(true);
//   const [thankYouVisible, setThankYouVisible] = useState(false);
//   const [phone, setPhone] = useState("");
//   const [name, setName] = useState("");
//   const [pinCode, setPinCode] = useState("");
//   const [errorMessage, setErrorMessage] = useState("");

//   // Validate phone number
//   const validatePhoneNumber = (phone) => /^[5-9]\d{9}$/.test(phone);

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     if (!phone || !name || !pinCode) {
//       setErrorMessage("Please fill in all fields.");
//       return;
//     }

//     if (!validatePhoneNumber(phone)) {
//       setErrorMessage("Invalid phone number. Enter a valid 10-digit number.");
//       return;
//     }

//     setErrorMessage(""); // Clear error messages
//     const refurl = document.referrer || "N/A";
//     const source = window.location.href;

//     const data = {
//       phone: "91" + phone,
//       name,
//       pinCode,
//       refurl,
//       source,
//       medium: "cta_id_example", // Replace with unique ID if necessary
//     };

//     try {
//       await fetch("https://hkdk.events/gpxuv3t1p1c23x", {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//         },
//         body: JSON.stringify(data),
//       });
//       setFormVisible(false);
//       setThankYouVisible(true);
//     } catch (error) {
//       console.error("Error:", error);
//     }
//   };

//   if (thankYouVisible) {
//     return <ThankYouPage />;
//   }

//   return (
//     <div className="max-w-lg mx-auto mt-10">
//       <h2 className="text-2xl font-bold text-center text-gray-700">
//         Book Your Hearing Aid Trial
//       </h2>
//       <p className="text-center text-gray-500 mb-6">
//         Fill in your details to claim your free trial and consult top audiologists.
//       </p>
//       {formVisible && (
//         <form onSubmit={handleSubmit} className="space-y-4">
//           <div>
//             <input
//               type="text"
//               value={name}
//               onChange={(e) => setName(e.target.value)}
//               placeholder="Name"
//               className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
//               required
//             />
//           </div>
//           <div>
//             <input
//               type="text"
//               value={phone}
//               onChange={(e) => setPhone(e.target.value)}
//               placeholder="Mobile Number"
//               className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
//               required
//             />
//           </div>
//           <div>
//             <input
//               type="text"
//               value={pinCode}
//               onChange={(e) => setPinCode(e.target.value)}
//               placeholder="Pin Code"
//               className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
//               required
//             />
//           </div>
//           <div className="flex items-center gap-2">
//             <input
//               type="checkbox"
//               id="whatsapp"
//               className="w-4 h-4 text-orange-500 border-gray-300 rounded focus:ring-orange-500"
//             />
//             <label htmlFor="whatsapp" className="text-gray-600 text-sm">
//               Receive appointment details & special offers on WhatsApp
//             </label>
//           </div>
//           {errorMessage && (
//             <p className="text-red-500 text-sm text-center">{errorMessage}</p>
//           )}
//           <button
//             type="submit"
//             className="w-full bg-orange-600 text-white py-2 rounded-lg hover:bg-orange-700 focus:outline-none focus:ring-2 focus:ring-orange-500"
//           >
//             Submit
//           </button>
//         </form>
//       )}
//     </div>
//   );
// };

// export default DetailsForm;
// DetailsForm.jsx
import React, { useState } from "react";
import ThankYouPage from "./Thankyou";

const DetailsForm = () => {
  const [formVisible, setFormVisible] = useState(true);
  const [thankYouVisible, setThankYouVisible] = useState(false);
  const [phone, setPhone] = useState("");
  const [name, setName] = useState("");
  const [pinCode, setPinCode] = useState("");
  const [problem, setProblem] = useState(""); // New state for problem
  const [errorMessage, setErrorMessage] = useState("");

  // Validate phone number
  const validatePhoneNumber = (phone) => /^[5-9]\d{9}$/.test(phone);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!phone || !name || !problem) {
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
      problem, // Include the problem description
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

  if (thankYouVisible) {
    return <ThankYouPage />;
  }

  return (
    <div className="max-w-lg mx-auto mt-10">
      <h2 className="text-2xl font-bold text-center text-gray-700">
        Book Your Hearing Aid Trial
      </h2>
      <p className="text-center text-gray-500 mb-6">
        Fill in your details to claim your free trial and consult top audiologists.
      </p>
      {formVisible && (
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Name"
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
              required
            />
          </div>
          <div>
            <input
              type="text"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              placeholder="Mobile Number"
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
              required
            />
          </div>
          <div>
            <textarea
              value={problem}
              onChange={(e) => setProblem(e.target.value)}
              placeholder="Tell us your problem"
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
              required
            />
          </div>
          <div className="flex items-center gap-2">
            <input
              type="checkbox"
              id="whatsapp"
              className="w-4 h-4 text-orange-500 border-gray-300 rounded focus:ring-orange-500"
            />
            <label htmlFor="whatsapp" className="text-gray-600 text-sm">
              Receive appointment details & special offers on WhatsApp
            </label>
          </div>
          {errorMessage && (
            <p className="text-red-500 text-sm text-center">{errorMessage}</p>
          )}
          <button
            type="submit"
            className="w-full bg-orange-600 text-white py-2 rounded-lg hover:bg-orange-700 focus:outline-none focus:ring-2 focus:ring-orange-500"
          >
            Submit
          </button>
        </form>
      )}
    </div>
  );
};

export default DetailsForm;
