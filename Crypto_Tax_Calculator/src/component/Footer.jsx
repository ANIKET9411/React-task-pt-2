import React from "react";
import {
  FaFacebookSquare,
  FaInstagramSquare,
  FaYoutubeSquare,
  FaLinkedin,
  FaTelegram,
  FaTwitter,
} from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
const Footer = () => {
  return (
    <footer className="bg-black text-white py-8 w-full">
      <div className="container mx-auto px-4 w-full">
        <div className="  mb-8 w-full">
          <div className="flex  flex-wrap flex-col justify-between items-center lg:justify-between md:justify-between sm:justify-center w-full lg:flex-row  md:flex-row sm:flex-col xs:flex-col">
            <img
              src="https://image.pitchbook.com/jK0FivhuTSLdNTpRhVxZyNg5hmt1681803029968_200x200"
              alt="KoinX Logo"
              className="h-32"
            />
            <div className="flex items-center justify-between w-full lg:w-1/2 md:w-1/2 sm:w-full">
              <a href="#" className="text-gray-500 hover:text-white m-2">
                <FaSquareXTwitter className="lg:text-3xl md:text-3xl sm:text-2xl text-blue-700" />
              </a>
              <a href="#" className="text-gray-500 hover:text-white m-2">
                <FaYoutubeSquare className="lg:text-3xl md:text-2xl sm:text-2xl text-blue-700" />
              </a>
              <a href="#" className="text-gray-500 hover:text-white m-2">
                <FaLinkedin className="lg:text-3xl md:text-2xl sm:text-2xl text-blue-700" />
              </a>
              <a href="#" className="text-gray-500 hover:text-white m-2">
                <FaInstagramSquare className="lg:text-3xl md:text-2xl sm:text-2xl text-blue-700" />
              </a>
              <a href="#" className="text-gray-500 hover:text-white m-2">
                <FaTelegram className="lg:text-3xl md:text-2xl sm:text-2xl text-blue-700" />
              </a>
              <a href="#" className="text-gray-500 hover:text-white m-2">
                <FaFacebookSquare className="lg:text-3xl md:text-2xl sm:text-2xl text-blue-700" />
              </a>
              <a href="#" className="text-gray-500 hover:text-white m-2">
                <FaTwitter className="lg:text-3xl md:text-2xl sm:text-2xl text-blue-700" />
              </a>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-5 gap-8 mb-4 lg:text-lg md:text-xs">
          <div>
            <h3 className="font-bold text-lg mb-4">Crypto Taxes for</h3>
            <ul>
              <li>Individuals and investors</li>
              <li>Tax Professionals and Accountants</li>
              <li>Exchanges and Web3 projects</li>
            </ul>
          </div>
          <div>
            <h3 className="font-bold text-lg mb-4">Free Tools</h3>
            <ul>
              <li>Crypto Prices Live</li>
              <li>Crypto Tax Calculator</li>
              <li>Crypto Tax Saving Speculator</li>
              <li>Crypto Profit Calculator</li>
              <li>Crypto Converter</li>
              <li>Crypto Staking ROI Calculator</li>
            </ul>
          </div>
          <div>
            <h3 className="font-bold text-lg mb-4">Resource Center</h3>
            <ul>
              <li>Crypto Tax Guides</li>
              <li>Dumb Ways To Lose Money</li>
              <li>Crypto Tax Savings Guide</li>
              <li>Blogs</li>
              <li>Crypto Buying Guides</li>
              <li>Crypto Staking Guides</li>
              <li>Crypto Mining Guides</li>
              <li>Crypto Price Predictions</li>
            </ul>
          </div>
          <div>
            <h3 className="font-bold text-lg mb-4">Help And Support</h3>
            <ul>
              <li>Product Guides</li>
              <li>How To Guides</li>
              <li>Templates</li>
              <li>Contact us</li>
            </ul>
          </div>
          <div>
            <h3 className="font-bold text-lg mb-4">Company</h3>
            <ul>
              <li>About Us</li>
              <li>Backed by</li>
              <li>Media and Press</li>
              <li>
                Careers <span className="text-blue-500">We're hiring</span>
              </li>
              <li>Security</li>
              <li>Refund Policy</li>
              <li>Brand Assets</li>
              <li>Terms of use</li>
              <li>Privacy Policy</li>
            </ul>
          </div>
        </div>
        <div className="  border-t border-gray-700 pt-4 mx-auto">
          <p className="text-gray-500 mx-auto w-2/3 text-center">
            &copy; All rights reserved by Simplify Infotech Pvt. Ltd.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
