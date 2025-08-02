import React, { useState } from "react";
import { motion } from "framer-motion";

const products = {
  hot: [
    {
      title: "SILICON CARBIDE POLYESTER CLOTH RAW MATERIAL JUMBO ROLL",
      image: "/images/product1.jpg",
    },
    {
      title: "CERAMIC ALUMINA RESIN FIBER JUMBO ROLL - RAW MATERIAL FOR DISC",
      image: "/images/product2.jpg",
    },
    {
      title: "DURABLE ECONOMIC SILICON CARBIDE POLYESTER CLOTH",
      image: "/images/product3.jpg",
    },
    {
      title: "SILICON CARBIDE POLYESTER CLOTH ABRASIVE JUMBO ROLL FOR METAL POLISHING",
      image: "/images/product4.jpg",
    },
  ],
  top: [
    {
      title: "TOP QUALITY ABRASIVE PAPER FOR WOOD POLISHING",
      image: "/images/product5.jpg",
    },
    {
      title: "PREMIUM ALUMINUM OXIDE CLOTH ROLL FOR INDUSTRIAL GRINDING",
      image: "/images/product6.jpg",
    },
    {
      title: "FLEXIBLE SANDING BELT FOR AUTOMOTIVE FINISHING",
      image: "/images/product7.jpg",
    },
    {
      title: "HIGH PERFORMANCE FIBER DISCS FOR METAL WORKS",
      image: "/images/product8.jpg",
    },
  ],
};

const ProductTabs = () => {
  const [activeTab, setActiveTab] = useState("hot");

  return (
    <div className="bg-white py-12 px-6 md:px-20">
      {/* Tabs */}
      <div className="text-center mb-10 flex justify-center gap-10">
        <button
          onClick={() => setActiveTab("hot")}
          className={`text-2xl font-bold transition duration-300 pb-1 border-b-4 ${
            activeTab === "hot"
              ? "text-teal-400 border-teal-100"
              : "text-gray-600 border-transparent"
          }`}
        >
          HOT PRODUCTS
        </button>
        <button
          onClick={() => setActiveTab("top")}
          className={`text-2xl font-bold transition duration-300 pb-1 border-b-4 ${
            activeTab === "top"
              ? "text-teal-900 border-teal-900"
              : "text-gray-600 border-transparent"
          }`}
        >
          TOP PRODUCTS
        </button>
      </div>

      {/* Product Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
        {products[activeTab].map((item, index) => (
          <motion.div
            key={index}
            whileHover={{ scale: 1.03 }}
            transition={{ type: "spring", stiffness: 300 }}
            className="bg-white rounded-lg shadow-md overflow-hidden border"
          >
            <img
              src={item.image}
              alt={item.title}
              className="h-60 w-full object-cover"
            />
            <div className="p-4 text-center">
              <h3 className="text-sm font-semibold mb-4 text-gray-800 truncate">
                {item.title}
              </h3>
              <button className="border border-red-600 text-red-600 hover:bg-red-600 hover:text-white px-4 py-2 rounded">
                Chat Now
              </button>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default ProductTabs;
