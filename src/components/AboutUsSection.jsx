import React from "react";
import aboutImage from "../assets/image1.jpg";
import { FaPhone, FaEnvelope, FaWhatsapp, FaWeixin } from "react-icons/fa";

const AboutUs = () => {
  return (
    <div className="bg-gray-100 py-12 px-6 md:px-20">
      {/* Section Header */}
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold text-red-700 inline-block border-b-4 border-red-700 pb-1">
          ABOUT US
        </h2>
      </div>

      {/* Two-column layout */}
      <div className="flex flex-col md:flex-row gap-10 mb-12">
        {/* Left: Image */}
        <div className="md:w-1/2 w-full">
          <img
            src={aboutImage}
            alt="About GRH Abrasives"
            className="rounded-lg shadow-lg w-full h-auto object-cover"
          />
        </div>

        {/* Right: Red background */}
        <div className="md:w-1/2 w-full bg-red-700 text-white rounded-lg shadow-xl flex flex-col">
          {/* About Text */}
          <div className="p-8 py-12">
            <h3 className="text-2xl font-bold border-b-4 border-white inline-block pb-1 mb-4">
              ABOUT US
            </h3>
            <h4 className="text-xl font-semibold mb-4">GRH Abrasives</h4>
            <p className="text-sm md:text-base leading-relaxed mb-6">
              GRH Abrasives is a professional manufacturer of high-quality
              coated abrasives. Originally established in Guangzhou, we have
              evolved from a trading company into a jumbo roll manufacturer
              through decades of development and continuous business growth.
              <br />
              <br />
              Mission: SAND SHINING THE WORLD. LIVE A BEAUTIFUL LIFE.
            </p>
            <div className="flex gap-4">
              <button className="border border-white px-6 py-2 hover:bg-white hover:text-red-700 transition-all duration-300 cursor-pointer">
                Read more
              </button>
              <button className="bg-white text-red-700 px-6 py-2 hover:bg-red-800 hover:text-white transition-all cursor-pointer duration-300">
                Chat Now
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Full-width Statistics Section */}
      <div className="bg-white shadow-md rounded-lg flex flex-wrap justify-between text-center p-6 md:px-20 mb-12">
        {[
          { label: "Annualsales", value: "20000000+" },
          { label: "Year", value: "1994" },
          { label: "Customers", value: "500" },
          { label: "P.C", value: "30%" },
          { label: "Employees", value: "150+" },
        ].map((item, index) => (
          <div key={index} className="flex-1 min-w-[90px] py-4">
            <div className="text-3xl font-bold mb-2">{item.value}</div>{" "}
            {/* Increased from 2xl to 3xl */}
            <div className="text-lg text-gray-600">{item.label}</div>{" "}
            {/* Increased font size */}
          </div>
        ))}
      </div>

      {/* Full-width Contact Cards */}
      <div className="grid grid-cols-1 md:grid-cols-5 gap-4 text-center">
        <div className="md:col-span-2 flex flex-col justify-center items-center bg-red-700 text-white p-6 rounded-lg shadow-md">
          <h3 className="text-xl font-bold mb-2 leading-tight text-center">
            WE PROVIDE
            THE BEST
            SERVICE!
          </h3>
          <p className="mb-4 text-sm">You can contact us in various ways</p>
          <button className="border border-white text-white px-4 py-2 hover:bg-white hover:text-red-700 transition">
            Chat Now
          </button>
        </div>

        {[
          {
            icon: <FaPhone className="text-4xl text-red-600 mb-4" />, // Increased icon size + spacing
            title: "Tel",
            value: "86-0751-5363399",
          },
          {
            icon: <FaEnvelope className="text-4xl text-red-600 mb-4" />,
            title: "Email",
            value: "jack.w@weem-abrasives.com",
          },
          {
            icon: <FaWhatsapp className="text-4xl text-red-600 mb-4" />,
            title: "WhatsApp",
            value: "+8613814838149",
          },
          
        ].map((contact, idx) => (
          <div
            key={idx}
            className="bg-white p-6 shadow-md rounded-lg text-gray-800 flex flex-col items-center justify-center"
          >
            {contact.icon}
            <h4 className="font-bold text-lg mb-1">{contact.title}</h4>{" "}
            {/* Larger title */}
            <p className="text-base break-words text-center">
              {contact.value}
            </p>{" "}
            {/* Centered + larger */}
          </div>
        ))}
      </div>
    </div>
  );
};

export default AboutUs;
