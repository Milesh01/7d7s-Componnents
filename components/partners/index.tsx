import Image from "next/image";
import React from "react";

const partners = [
  "https://res.cloudinary.com/ddgbehuxg/image/upload/v1740720274/slemewhitelogo_hkmtbh.png",
  "https://res.cloudinary.com/ddgbehuxg/image/upload/v1740647826/WSClinicLogo_mk.svg",
  "https://res.cloudinary.com/ddgbehuxg/image/upload/v1742891090/7d7slogo-mk_avchym.webp",
  "https://res.cloudinary.com/ddgbehuxg/image/upload/v1742891155/CliStartLogo-mk_mizwwj.png",
//   "/logos/logo5.png",
//   "/logos/logo6.png",
//   "/logos/logo7.png",
//   "/logos/logo8.png",
//   "/logos/logo9.png",
//   "/logos/logo10.png",
//   "/logos/logo11.png",
//   "/logos/logo12.png",
];

const PartnersSection: React.FC = () => {
  return (
    <section className="py-16 bg-white text-center px-6 sm:px-6 lg:px-8">
        <div className="container mx-auto">
      <h3 className="text-xl text-black font-medium">Partner</h3>
      <h2 className="md:text-5xl font-bold text-gray-900 mt-2 text-4xl">
        Trusted By <span className="text-blue-600">4</span> Companies Worldwide
      </h2>
      <p className="text-gray-700 mt-2 max-w-2xl mx-auto text-lg">
        Here are some of the companies that have been empowered by bizio to move
        forward with confidence.
      </p>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-4 gap-4 mt-10 px-2 sm:px-4">
        {partners.map((logo, index) => (
          <div
            key={index}
            className="flex h-[100] text-center justify-center items-center bg-gray-800 border p-4 rounded-lg shadow-sm transition-transform duration-300 hover:scale-105"
          >
            <Image src={logo} alt="Partner Logo" className="h-5/6 w-auto max-w-full" width={1000} height={1000}/>
          </div>
        ))}
      </div>
      </div>
    </section>
  );
};

export default PartnersSection;
