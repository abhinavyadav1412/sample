import React, { useEffect, useRef, useState } from "react";
import aboutImage from "../assets/image1.jpg";
import { FaPhone, FaEnvelope, FaWhatsapp } from "react-icons/fa";
import {
  animate,
  useMotionValue,
  useTransform,
  useInView,
  motion,
} from "framer-motion";

// Inline AnimatedNumber component
const AnimatedNumber = ({ value, shouldAnimate }) => {
  const motionValue = useMotionValue(0);
  const [display, setDisplay] = useState("0");

  const formatted = useTransform(motionValue, (latest) => {
    const unit = value.replace(/[0-9,]/g, "");
    return `${Math.floor(latest).toLocaleString()}${unit}`;
  });

  useEffect(() => {
    if (!shouldAnimate) return;

    const unsubscribe = formatted.on("change", (v) => {
      setDisplay(v);
    });

    const numeric = parseInt(value.replace(/\D/g, ""), 10) || 0;

    const controls = animate(motionValue, numeric, {
      duration: 2,
      ease: "easeOut",
    });

    return () => {
      controls.stop();
      unsubscribe();
    };
  }, [shouldAnimate, value]);

  return <span className="text-3xl font-bold mb-2">{display}</span>;
};

const AboutUs = () => {
  const statsRef = useRef(null);
  const isInView = useInView(statsRef, { once: true, margin: "-50px" });

  return (
    <div className="bg-gray-100 py-12 px-6 md:px-20">
      {/* Section Header */}
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold text-[#023430] inline-block border-b-4 border-[#023430] pb-1">
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

        {/* Right: Green background */}
        <div className="md:w-1/2 w-full bg-[#023430] text-white rounded-lg shadow-xl flex flex-col">
          <div className="p-8 py-12">
            <h3 className="text-4xl font-bold border-b-4 border-white inline-block pb-1 mb-6">
              ABOUT US
            </h3>
            <h4 className="text-2xl font-semibold mb-4">GRH Abrasives</h4>
            <p className="text-md md:text-md leading-relaxed mb-6">
              GRH Abrasives is a professional manufacturer of high-quality
              coated abrasives. Originally established in Guangzhou, we have
              evolved from a trading company into a jumbo roll manufacturer
              through decades of development and continuous business growth.
              <br />
              <br />
              Mission: SAND SHINING THE WORLD. LIVE A BEAUTIFUL LIFE.
            </p>
            <div className="flex gap-4">
              <button className="border border-white px-6 py-2 hover:bg-white hover:text-[#023430] transition-all duration-300 cursor-pointer">
                Read more
              </button>
              <button className="bg-white text-[#023430] px-6 py-2 hover:bg-[#023430] hover:text-white transition-all cursor-pointer duration-300">
                Chat Now
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Statistics Section */}
      <div
        ref={statsRef}
        className="bg-white shadow-md rounded-lg flex flex-wrap justify-between text-center p-6 md:px-20 mb-12"
      >
        {[
          { label: "Annualsales", value: "20000000+" },
          { label: "Year", value: "1994" },
          { label: "Customers", value: "500" },
          { label: "P.C", value: "30%" },
          { label: "Employees", value: "150+" },
        ].map((item, index) => (
          <div key={index} className="flex-1 min-w-[90px] py-4">
            <AnimatedNumber value={item.value} shouldAnimate={isInView} />
            <div className="text-lg text-gray-600">{item.label}</div>
          </div>
        ))}
      </div>

      {/* Contact Cards with Hover Animation */}
      <div className="grid grid-cols-1 md:grid-cols-5 gap-4 text-center">
        <div className="md:col-span-2 flex flex-col justify-center items-center bg-[#023430] text-white p-6 rounded-lg shadow-md">
          <h3 className="text-xl font-bold mb-2 leading-tight text-center">
            WE PROVIDE
            THE BEST
            SERVICE!
          </h3>
          <p className="mb-4 text-sm">You can contact us in various ways</p>
          <button className="border border-white text-white px-4 py-2 hover:bg-white hover:text-[#023430] transition cursor-pointer">
            Chat Now
          </button>
        </div>

        {[
          {
            icon: <FaPhone className="text-4xl text-[#023430] mb-4" />,
            title: "Tel",
            value: "86-0751-5363399",
          },
          {
            icon: <FaEnvelope className="text-4xl text-[#023430] mb-4" />,
            title: "Email",
            value: "jack.w@weem-abrasives.com",
          },
          {
            icon: <FaWhatsapp className="text-4xl text-[#023430] mb-4" />,
            title: "WhatsApp",
            value: "+8613814838149",
          },
        ].map((contact, idx) => (
          <motion.div
            key={idx}
            whileHover={{ scale: 1.05, boxShadow: "0 10px 15px rgba(0,0,0,0.1)" }}
            transition={{ type: "spring", stiffness: 300 }}
            className="bg-white p-6 shadow-md rounded-lg text-gray-800 flex flex-col items-center justify-center cursor-pointer"
          >
            {contact.icon}
            <h4 className="font-bold text-lg mb-1">{contact.title}</h4>
            <p className="text-base break-words text-center">{contact.value}</p>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default AboutUs;
