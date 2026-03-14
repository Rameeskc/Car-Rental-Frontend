import React from "react";
import { FaXTwitter, FaFacebookF, FaInstagram, FaYoutube } from "react-icons/fa6";

const BottomArea = () => {
  return (
    <footer className="w-full bg-[rgb(6,19,19)] text-gray-300 px-6 lg:px-20 py-10">

      {/* Footer Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">

        {/* About */}
        <div>
          <h2 className="text-white text-xl font-semibold mb-4">About Us</h2>
          <p className="text-sm leading-relaxed">
            Founded in 2025 and headquartered in Kozhikode, India, Drivocar is a
            leading marketplace for car sharing focused in Kerala. The Drivocar
            community connects Hosts with Guests who choose from a selection of
            cars at affordable prices.
          </p>

          <p className="text-sm mt-4">
            1st Floor, abdc Techno Park, No.123,<br />
            CDE Airport Road,<br />
            HIJK Colony, Kodihalli, Kozikode,<br />
            Kerala, India - 12345678
          </p>
        </div>

        {/* Company */}
        <div>
          <h2 className="text-white text-xl font-semibold mb-4">Company</h2>
          <ul className="space-y-2 text-sm">
            <li className="hover:text-white cursor-pointer">Terms and Conditions</li>
            <li className="hover:text-white cursor-pointer">Privacy Policy</li>
            <li className="hover:text-white cursor-pointer">FAQs</li>
            <li className="hover:text-white cursor-pointer">Blogs</li>
            <li className="hover:text-white cursor-pointer">Investor Relations</li>
            <li className="hover:text-white cursor-pointer">Press Releases</li>
            <li className="hover:text-white cursor-pointer">Sitemap</li>
          </ul>
        </div>

        {/* Services */}
        <div>
          <h2 className="text-white text-xl font-semibold mb-4">Our Services</h2>
          <ul className="space-y-2 text-sm">
            <li className="hover:text-white cursor-pointer">Daily Drives</li>
            <li className="hover:text-white cursor-pointer">Zoomcar Hosts</li>
          </ul>
        </div>

        {/* Social */}
        <div>
          <h2 className="text-white text-xl font-semibold mb-4">Follow Us</h2>

          <div className="flex gap-4 text-xl">
            <FaXTwitter className="cursor-pointer hover:text-white" />
            <FaFacebookF className="cursor-pointer hover:text-white" />
            <FaInstagram className="cursor-pointer hover:text-white" />
            <FaYoutube className="cursor-pointer hover:text-white" />
          </div>
        </div>

      </div>

      {/* Bottom Copyright */}
      <div className="border-t border-gray-700 mt-10 pt-6 text-center text-sm">
        © 2024 Zoomcar India Pvt Ltd. All rights reserved.
      </div>

    </footer>
  );
};

export default BottomArea;