import {
    FaMapMarkerAlt,
    FaPhoneAlt,
    FaEnvelope,
    FaGlobe,
    FaWhatsapp,
    FaSkype,
  } from "react-icons/fa";
  
  function Footer() {
    return (
      <footer className="bg-gray-100 text-gray-800 pt-10 px-6 md:px-24">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          {/* Quick Links */}
          <div>
            <h4 className="text-xl font-bold mb-5">Quick Link</h4>
            <ul className="space-y-3 text-base">
              {["Home", "Products", "About Us", "News", "Cases", "Contact Us"].map((item, idx) => (
                <li
                  key={idx}
                  className="hover:text-[#023430] cursor-pointer transition-colors"
                >
                  {item}
                </li>
              ))}
            </ul>
          </div>
  
          {/* Quick Contact */}
          <div>
            <h4 className="text-xl font-bold mb-5">Quick Contact</h4>
            <ul className="space-y-5 text-base">
              <li className="flex items-start gap-4">
                <FaMapMarkerAlt className="text-[#023430] mt-1 text-lg" />
                <div>
                  <span className="font-semibold">Address</span>
                </div>
              </li>
              <li className="flex items-start gap-4">
                <FaPhoneAlt className="text-[#023430] mt-1 text-lg" />
                <div>
                  <span className="font-semibold">Tel</span><br />
                  86-0751-5363399
                </div>
              </li>
              <li className="flex items-start gap-4">
                <FaEnvelope className="text-[#023430] mt-1 text-lg" />
                <div>
                  <span className="font-semibold">E-mail</span><br />
                  jack.w@weem-abrasives.com
                </div>
              </li>
            </ul>
            <div className="flex gap-6 mt-6 text-[#023430] text-2xl">
              <FaGlobe className="cursor-pointer hover:opacity-70" />
              <FaWhatsapp className="cursor-pointer hover:opacity-70" />
              <FaSkype className="cursor-pointer hover:opacity-70" />
            </div>
          </div>
  
          {/* Newsletter */}
          <div>
            <h4 className="text-xl font-bold mb-5">Our Newsletter</h4>
            <p className="text-base mb-5">
              Subscribe to our newsletter for discounts and more.
            </p>
            <form className="space-y-5">
              <input
                type="email"
                placeholder="Email"
                className="w-full px-5 py-3 border border-gray-300 rounded text-base focus:outline-none focus:ring-2 focus:ring-[#023430]"
              />
              <textarea
                rows="3"
                placeholder="Message"
                className="w-full px-5 py-3 border border-gray-300 rounded text-base focus:outline-none focus:ring-2 focus:ring-[#023430]"
              ></textarea>
              <button
                type="submit"
                className="bg-[#023430] text-white px-6 py-3 rounded hover:bg-[#01281f] transition duration-300 text-base font-medium"
              >
                Contact Us
              </button>
            </form>
          </div>
        </div>
  
        {/* Bottom */}
        <div className="text-center text-sm text-gray-500 border-t pt-6">
          Privacy Policy | Sitemap | China Good Quality Abrasive Cloth Rolls Supplier. <br />
          Copyright © 2013–2025 <span className="font-semibold text-[#023430]">WEEM Abrasives</span>. All Rights Reserved.
        </div>
      </footer>
    );
  }
  
  export default Footer;
  