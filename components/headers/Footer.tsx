import Link from "next/link";
import {
  FaFacebook,
  FaInstagram,
  FaTwitter,
  FaPhone,
  FaEnvelope,
} from "react-icons/fa";

const Footer: React.FC = () => {
  interface NavItem {
    href: string;
    label: string;
  }

  const navItems: NavItem[] = [
    { href: "#", label: "Home" },
    { href: "#", label: "About" },
    { href: "#", label: "Services" },
    { href: "#", label: "Price Guide" },
    { href: "#", label: "Contact" },
  ];

  const aboutUsItems: NavItem[] = [
    { href: "#", label: "About Us" },
    { href: "#", label: "Corporate Profile" },
    { href: "#", label: "Clinical Outcomes" },
    { href: "#", label: "Locations" },
    { href: "#", label: "Media Requests" },
  ];

  return (
    <div className="bg-gray-100 text-gray-700 flex flex-col">
      <div className="container mx-auto px-4 sm:px-6 lg:px-10 py-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {/* Main Text */}
        <div className="lg:order-3 text-left col-span-2 lg:col-span-1 px-3 sm:px-0">
          <h2 className="text-3xl text-gray-600">Your Smile, Our Priority</h2>
          <p className="mt-4 text-gray-600 tracking-wider">
            We understand just how closely connected oral health is to your
            overall health, confidence, and appearance, and we pride ourselves
            on cultivating a friendly, upbeat dental environment where you can
            always feel comfortable in our care.
          </p>
        </div>

        {/* Contact Info */}
        <div className="lg:order-4 col-span-2 lg:col-span-1">
          <div className="flex flex-col text-gray-600 space-y-3 sm:space-y-2 mb-6 text-center sm:text-right px-3 sm:px-0">
            <p className="flex items-center gap-2 text-sm sm:justify-end">
              511 SW 10th Ave 1206
              <br className="hidden sm:block" /> Portland, OR USA
            </p>
            <p className="flex items-center gap-2 sm:justify-end text-sm text-gray-700 font-semibold">
              <FaPhone className="text-[#004a5e]" />
              +1 800-123-1234
            </p>
            <p className="flex items-center gap-2 sm:justify-end text-sm text-gray-700 font-semibold">
              <FaEnvelope className="text-[#004a5e]" />
              clinic@example.com
            </p>
          </div>
          <Link
            href="/book-appointment"
            className="bg-[#004a5e] text-white px-6 py-3 text-sm sm:float-right font-semibold rounded-xl transition-all hover:bg-[#004052] mx-3 sm:mx-0"
          >
            Book a Visit
          </Link>
        </div>

        {/* Sidebar Navigation */}
        <nav className="lg:order-1 flex flex-col space-y-3 text-lg font-medium text-gray-500 text-left lg:text-lg">
          {navItems.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              className="text-gray-400 text-xl md:text-2xl font-medium px-3 hover:text-gray-700 transition-colors"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        {/* About us */}
        <div className="lg:order-2 flex flex-col space-y-3 text-lg font-medium text-gray-500 text-left lg:text-lg">
          {aboutUsItems.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              className="text-gray-400 text-xl md:text-2xl font-medium px-3 hover:text-gray-700 transition-colors"
            >
              {item.label}
            </Link>
          ))}
        </div>
      </div>

      {/* Footer Section */}
      <footer className="py-6 text-center border-t border-gray-300">
        <div className="flex justify-center space-x-6 mb-4">
          <Link
            href="#"
            className="text-gray-500 hover:text-gray-900 transition-colors"
          >
            <FaFacebook size={24} />
          </Link>
          <Link
            href="#"
            className="text-gray-500 hover:text-gray-900 transition-colors"
          >
            <FaInstagram size={24} />
          </Link>
          <Link
            href="#"
            className="text-gray-500 hover:text-gray-900 transition-colors"
          >
            <FaTwitter size={24} />
          </Link>
        </div>
        <p className="text-gray-500 text-base">
          © 2025 Dental Care. All Rights Reserved.
        </p>
        <p className="text-gray-400 text-xs mt-1">
          Developed with ❤️ by{" "}
          <span className="text-red-600 font-bold">7D7S Team</span>
        </p>
      </footer>
    </div>
  );
};

export default Footer;
