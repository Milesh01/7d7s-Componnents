"use client";
import { useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { FaCheck } from "react-icons/fa";
import { MdArrowOutward } from "react-icons/md";
import Counter from "../common/countingCard";


const ITSection = () => {
  const videoRef = useRef<HTMLVideoElement | null>(null);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.play().catch((error) => console.error("Video autoplay failed:", error));
    }
  }, []);
  return (
    <>
    <div>
    <video
      ref={videoRef}
      src="https://demo-egenslab.b-cdn.net/html/mortar/preview/assets/video/home4-contact-video2.mp4"
      autoPlay
      muted
      loop
      playsInline
      className="w-full lg:h-[500] object-cover"
    ></video>

    </div>
    <section className="bg-[#063e33] relative text-white md:py-28 p-5 z-10">
        <Image src="https://res.cloudinary.com/ddgbehuxg/image/upload/v1743059013/vector2mk_whbvpl.svg" alt="mk" width={1000} height={1000} className="hidden lg:block absolute top-0 right-0 -z-10 h-full w-1/3 invert brightness-0 opacity-10"/>
        <Image src="https://res.cloudinary.com/ddgbehuxg/image/upload/v1743057134/vector-mk_jodr3t.svg" alt="mk" width={1000} height={1000} className="hidden lg:block absolute top-0 left-0 -z-10 h-full w-2/5 invert brightness-0 opacity-5"/>
      <div className="container mx-auto">

        <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-8">
      <div className=" space-y-4 relative z-10">
        
        <h2 className="text-4xl font-medium md:text-5xl">
          Business-Driven 
          IT Solutions
        </h2>
        <p className="text-gray-300 text-lg">
          Aligning Technology with Your Business Goals for Maximum Impact.
        </p>
      </div>

      <div className="md:pl-16 space-y-4">
        <h3 className="text-2xl font-semibold">Benefits of IT Strategy :</h3>
        <ul className="space-y-5 text-gray-300 text-lg">
            <li className="flex items-center justify-start font-medium"><FaCheck className="text-[#a0f0c2] mr-2" /> <span>IT Project Planning & Execution</span></li>
            <li className="flex items-center justify-start font-medium"><FaCheck className="text-[#a0f0c2] mr-2" /> <span><b className="text-white">Agile & Scrum</b> Consulting</span></li>
            <li className="flex items-center justify-start font-medium"><FaCheck className="text-[#a0f0c2] mr-2" /> <span>Budgeting & Cost Control</span></li>
            <li className="flex items-center justify-start font-medium"><FaCheck className="text-[#a0f0c2] mr-2" /> <span>Project <b className="text-white">Tracking & Reporting</b></span></li>
         
        </ul>
      </div>

      <div className="lg:col-span-1 md:col-span-2 flex flex-col items-start space-y-3 ">
        <Counter end={50} className="text-4xl font-extrabold text-red-500" />
        <p className="text-xl font-semibold">
          Years of <br /> Experience.
        </p>
        <br/>      
        <div className="group relative">
        <Link
  href="#"
  className="relative font-semibold px-6 py-4 shadow-lg overflow-hidden text-white 
             bg-[#5ebf97] transition-all duration-500 ease-in-out flex items-center gap-2 group"
>
  {/* Background Animation */}
  <span className="absolute inset-0 bg-secondary-teal transition-transform duration-500 ease-in-out 
                  -translate-x-full group-hover:translate-x-0"></span>

  {/* Text and Icon Wrapper */}
  <span className="relative z-10 flex items-center gap-2">
    Schedule A Free Consultation
    <MdArrowOutward size={20} />
  </span>
</Link>



    </div>
      </div>
      </div>
      </div>
    </section>
    </>
  );
};

export default ITSection;
