"use client";

import { useState } from "react";
import Link from "next/link";
import {
  FaChevronDown,
  FaEnvelope,
  FaFacebook,
  FaInstagram,
  FaTwitter,
} from "react-icons/fa";
import { GiHamburgerMenu } from "react-icons/gi";
import { RxCross2 } from "react-icons/rx";
import { BiPhoneCall } from "react-icons/bi";

interface Service {
  name: string;
  href: string;
}

interface Page {
  name: string;
  href: string;
}

const services: Service[] = [
  { name: "General Dentistry", href: "/services/general-dentistry" },
  { name: "Cosmetic Dentistry", href: "/services/cosmetic-dentistry" },
  { name: "Pediatric Dentistry", href: "/services/pediatric-dentistry" },
  { name: "Specialized Care", href: "/services/specialized-care" },
];

const pages: Page[] = [
  { name: "About Us", href: "/about-us" },
  { name: "Price Guide", href: "/price-guide" },
  { name: "Shop", href: "/shop" },
  { name: "Appointment Page", href: "/appointment" },
  { name: "Image Credits", href: "/image-credits" },
];

const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const [mobileDropdown, setMobileDropdown] = useState<string | null>(null);

  const handleMouseEnter = (dropdown: string) => {
    setOpenDropdown(dropdown);
  };

  const handleMouseLeave = () => {
    setOpenDropdown(null);
  };

  const toggleMobileDropdown = (dropdown: string) => {
    setMobileDropdown(mobileDropdown === dropdown ? null : dropdown);
  };

  return (
    <nav className="bg-white shadow-md p-4 text-gray-600 md:px-8 lg:px-16">
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex items-center gap-2">
          <span className="text-xl font-semibold">Dentissimo</span>
        </div>

        <div className="hidden md:flex gap-3 lg:gap-8 items-center">
          <Link href="/" className="hover:text-gray-800">
            Home
          </Link>
          <div
            className="relative group"
            onMouseEnter={() => handleMouseEnter("services")}
            onMouseLeave={handleMouseLeave}
          >
            <Link
              href="/services"
              className="flex items-center gap-1 hover:text-gray-800"
            >
              Services <FaChevronDown size={12} />
            </Link>
            <div
              className={`absolute top-full left-0 bg-gray-100 shadow-md rounded-3xl w-60 px-6 py-5 mt-2 transition-all duration-300 ease-in-out z-50 ${
                openDropdown === "services"
                  ? "opacity-100 visible"
                  : "opacity-0 invisible"
              }`}
            >
              {services.map((service) => (
                <Link
                  key={service.name}
                  href={service.href}
                  className="block py-3 hover:text-gray-500 border-b border-gray-300 last:border-0 text-gray-600"
                >
                  {service.name}
                </Link>
              ))}
            </div>
          </div>

          <div
            className="relative group"
            onMouseEnter={() => handleMouseEnter("pages")}
            onMouseLeave={handleMouseLeave}
          >
            <button className="flex items-center gap-1 hover:text-gray-800">
              Pages <FaChevronDown size={12} />
            </button>
            <div
              className={`absolute top-full left-0 bg-gray-100 shadow-md rounded-3xl w-60 px-6 py-5 mt-2 transition-all duration-300 ease-in-out z-50 ${
                openDropdown === "pages"
                  ? "opacity-100 visible"
                  : "opacity-0 invisible"
              }`}
            >
              {pages.map((page) => (
                <Link
                  key={page.name}
                  href={page.href}
                  className="block py-3 hover:text-gray-500 border-b border-gray-300 last:border-0 text-gray-600"
                >
                  {page.name}
                </Link>
              ))}
            </div>
          </div>
          <Link href="/blog" className="hover:text-gray-800">
            Blog
          </Link>
          <Link href="/about" className="hover:text-gray-800">
            About Us
          </Link>
          <Link href="/contacts" className="hover:text-gray-800">
            Contacts
          </Link>
          <Link
            href="/book-appointment"
            className="bg-[#004a5e] text-white px-6 py-4 rounded-xl hover:text-gray-50 transition duration-700 ease-in-out"
          >
            Book a Visit
          </Link>
        </div>
        <button
          className="md:hidden p-3 text-white rounded-xl bg-slate-700 z-50"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <RxCross2 size={22} /> : <GiHamburgerMenu size={22} />}
        </button>
      </div>

      {/* Mobile menu */}
      <div
        className={`md:hidden fixed top-0 right-0 h-full w-full bg-white p-4 transform transition-transform duration-1000 ease-in-out z-40 ${
          isMenuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        {/* Mobile menu content */}
        <div className="text-gray-400 text-2xl font-medium px-3">
          <Link
            href="/"
            className="block py-1"
            onClick={() => setIsMenuOpen(false)}
          >
            Home
          </Link>

          <Link
            href="/services"
            className="flex items-center gap-2 w-full py-2"
            onClick={() => toggleMobileDropdown("services")}
          >
            Services <FaChevronDown size={14} />
          </Link>
          {mobileDropdown === "services" && (
            <div className="overflow-hidden pl-4">
              {services.map((service) => (
                <Link
                  key={service.name}
                  href={service.href}
                  className="block py-1 text-base text-gray-400"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {service.name}
                </Link>
              ))}
            </div>
          )}
          <button
            className="flex items-center gap-2 w-full py-2"
            onClick={() => toggleMobileDropdown("pages")}
          >
            Pages <FaChevronDown size={14} />
          </button>
          {mobileDropdown === "pages" && (
            <div className="overflow-hidden pl-4">
              {pages.map((page) => (
                <Link
                  key={page.name}
                  href={page.href}
                  className="block py-1 text-base text-gray-400"
                >
                  {page.name}
                </Link>
              ))}
            </div>
          )}
          <Link href="/blog" className="block py-1">
            Blog
          </Link>
          <Link href="/about" className="block py-2">
            About Us
          </Link>
          <Link href="/contacts" className="block py-1">
            Contacts
          </Link>
          <div className="mt-10 space-y-4">
            {/* Address Section  */}
            <div className="mb-4">
              <p className="text-sm font-semibold text-gray-500">
                511 SW 10th Ave 1206,
              </p>
              <p className="text-sm text-gray-400">Portland, OR</p>
              <p className="text-sm text-gray-400">United States</p>
            </div>

            {/* Contact Information */}
            <div className="mb-4">
              <div className="flex items-center space-x-2">
                <BiPhoneCall size={19} className="text-gray-700" />
                <p className="text-sm font-semibold text-gray-700">
                  +1 800-123-1234
                </p>
              </div>
              <div className="flex items-center space-x-2">
                <FaEnvelope size={17} className="text-gray-600" />
                <p className="text-sm text-gray-600">clinic@example.com</p>
              </div>
            </div>

            {/* Buttons */}
            <div className="flex items-center space-x-10">
              <Link
                href="/book-appointment"
                className="bg-[#004a5e] text-white px-8 py-4 text-sm font-semibold rounded-xl transition hover:bg-[#004052] hover:text-white"
              >
                Book a Visit
              </Link>
              <div className="flex items-center space-x-3">
                <FaInstagram className="text-gray-600 bg-gray-200 rounded-full p-2 w-9 h-9 hover:bg-gray-300 cursor-pointer" />
                <FaFacebook className="text-gray-600 bg-gray-200 rounded-full p-2 w-9 h-9 hover:bg-gray-300 cursor-pointer" />
                <FaTwitter className="text-gray-600 bg-gray-200 rounded-full p-2 w-9 h-9 hover:bg-gray-300 cursor-pointer" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
