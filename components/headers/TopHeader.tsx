"use client";

import Link from "next/link";
import { FaSquareXTwitter } from "react-icons/fa6";
import {
  FaApple,
  FaFacebookF,
  FaGooglePlay,
  FaInstagramSquare,
} from "react-icons/fa";

const TopHeader: React.FC = () => {
  return (
    <div className="h-8 w-full bg-[#004a5e] text-white px-4 sm:px-6 lg:px-16">
      <div className="container mx-auto flex justify-between items-center h-full text-xs sm:text-sm font-medium">
        <div className="hidden lg:flex items-center gap-3">
          <span className="text-xs">Follow us on:</span>
          <ul className="flex gap-2">
            <li>
              <Link href="" target="_blank" title="Facebook">
                <FaFacebookF
                  size={14}
                  className="hover:text-[#cbf2fe] transition"
                />
              </Link>
            </li>
            <li>
              <Link href="" target="_blank" title="Twitter">
                <FaSquareXTwitter
                  size={14}
                  className="hover:text-[#cbf2fe] transition"
                />
              </Link>
            </li>
            <li>
              <Link
                href="https://www.instagram.com/officialdmrc/?hl=en"
                target="_blank"
                title="Instagram"
              >
                <FaInstagramSquare
                  size={14}
                  className="hover:text-[#cbf2fe] transition"
                />
              </Link>
            </li>
          </ul>
          <span className="text-gray-500">|</span>
          <div className="flex items-center gap-2">
            <FaGooglePlay
              size={16}
              className="cursor-pointer hover:text-[#cbf2fe] transition"
            />
            <FaApple
              size={16}
              className="cursor-pointer hover:text-[#cbf2fe] transition"
            />
          </div>
        </div>

        {/* Right Section - Language and Navigation */}
        <div className="flex items-center justify-between w-full lg:w-auto lg:justify-end lg:gap-10">
          {/* Language Switcher */}
          <div className="flex items-center gap-2">
            <span className="cursor-pointer hover:text-[#cbf2fe]">हिन्दी</span>
            <span className="text-gray-500">|</span>
            <span className="cursor-pointer hover:text-[#cbf2fe]">English</span>
          </div>
          {/* Navigation Links */}
          <nav className="flex gap-2">
            <Link href="/doctor-profile" className="hover:text-[#cbf2fe] transition">
              We are Open
            </Link>
            <span className="text-gray-500">|</span>
            <Link href="/book-appointment" className="hover:text-[#cbf2fe] transition">
              Book Appointment
            </Link>
          </nav>
        </div>
      </div>
    </div>
  );
};

export default TopHeader;
