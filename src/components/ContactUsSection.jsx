import React from "react";

function ContactUs() {
  return (
    <div className="flex justify-center items-center py-20 px-6 bg-gray-400 min-h-screen">
      <div className="bg-white w-full max-w-5xl p-12 rounded shadow-lg">
        {/* Heading */}
        <h2 className="text-3xl md:text-4xl font-bold text-[#023430] uppercase w-full text-center mb-10 relative inline-block">
          CONTACT US AT ANY TIME!
          <span className="block w-16 border-b-4 border-[#023430] mx-auto mt-3"></span>
        </h2>

        {/* Form */}
        <form className="space-y-8">
          {/* Name and Email */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <input
                type="text"
                placeholder="Your Name"
                required
                className="w-full border border-gray-300 px-6 py-4 text-lg focus:outline-none focus:ring-2 focus:ring-[#023430] rounded"
              />
            </div>
            <div>
              <input
                type="email"
                placeholder="Your E-mail"
                required
                className="w-full border border-gray-300 px-6 py-4 text-lg focus:outline-none focus:ring-2 focus:ring-[#023430] rounded"
              />
            </div>
          </div>

          {/* Message */}
          <div>
            <textarea
              rows="6"
              placeholder="Please send your request, we will reply you as soon as possible."
              required
              className="w-full border border-gray-300 px-6 py-4 text-lg focus:outline-none focus:ring-2 focus:ring-[#023430] resize-none rounded"
            ></textarea>
          </div>

          {/* Send Button */}
          <div>
            <button
              type="submit"
              className="w-full bg-[#023430] text-white py-4 text-xl font-semibold rounded hover:bg-[#01281f] transition-colors duration-300 cursor-pointer"
            >
              Send
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default ContactUs;
