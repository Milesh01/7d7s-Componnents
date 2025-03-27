"use client";
import Image from "next/image";
import React, { useState, useEffect } from "react";
import { FaSquarespace } from "react-icons/fa6";
import { HiMiniSquare3Stack3D } from "react-icons/hi2";
import { MdArrowOutward } from "react-icons/md";
import Link from "next/link";

interface CounterProps {
  end: number;
}

const Counter: React.FC<CounterProps> = ({ end }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let interval = setInterval(() => {
      setCount((prev) => (prev < end ? prev + 1 : end));
    }, 50);

    return () => clearInterval(interval);
  }, [end]);

  return <h2 className="text-3xl font-bold md:mt-10">{count}K+</h2>;
};

const AboutSection: React.FC = () => {
  const stats = [{ id: 1, label: "Projects Have Been Done", value: 23 }];

  return (
    <div className="bg-white text-black py-28 flex flex-col items-center justify-center p-5">
      <div className="container lg:grid grid-cols-2 gap-6 justify-end">
        <div className="relative bg-black text-white p-1 md:flex justify-end md:min-h-[320px] mt-5">
          <div
            className="w-full p-4 bg-red-400 lg:h-full md:h-[320px] h-[200px] md:flex flex-col justify-end items-start"
            style={{
              backgroundImage: "url('https://res.cloudinary.com/ddgbehuxg/image/upload/v1742994149/about-mk_s3i6en.jpg')",
              backgroundSize: "cover",
              backgroundPosition: "left",
            }}
          >
            <h2 className="text-xl font-semibold">Keep Reading</h2>
            <a href="#" className="text-lg underline mt-3">
              About Mortar ↗
            </a>
          </div>
          <div className="md:w-[300px] p-6 flex md:flex-col justify-end items-start bg-white text-black">
            <Image
              src="https://res.cloudinary.com/ddgbehuxg/image/upload/v1742995239/about-mk_znalte.gif"
              alt="About Animation"
              className="h-[100px] w-[100px]"
              width={100}
              height={100}
            />
            {stats.map((stat) => (
              <div key={stat.id}>
                <Counter end={stat.value} />
                <p className="text-gray-400 mt-2">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="md:grid grid-cols-2 gap-8">
          <div className="p-6 bg-purple-100 text-black flex flex-col justify-end items-end group mt-5 transition-transform duration-300 hover:translate-x-[4.2555px] hover:translate-y-[5.4755px]">
            <HiMiniSquare3Stack3D className="text-7xl text-gray-600 group-hover:animate-bounce transition-all" />
            <div>
              <h2 className="text-3xl font-semibold mb-3 mt-9">Cost <br /> Efficiency</h2>
              <p className="text-md text-gray-600 w-11/12">
                Flexible engagement models reduce overhead costs of maintaining a full-time IT staff.
              </p>
            </div>
          </div>

          <div className="p-6 bg-purple-100 text-black flex flex-col justify-end items-end group mt-5 transition-transform duration-300 hover:translate-x-[4.2555px] hover:translate-y-[5.4755px]">
            <FaSquarespace className="text-7xl text-gray-600 group-hover:animate-bounce transition-all" />
            <div>
              <h2 className="text-3xl font-semibold mb-3 mt-9">Risk <br /> Management</h2>
              <p className="text-md text-gray-600 w-11/12">
                Flexible engagement models reduce overhead costs of maintaining a full-time IT staff.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="flex items-center space-x-4 bg-gray-100 p-2 rounded-full mt-5">
        <p className="text-md max-w-80 pl-3 font-medium">
          To Make Sure to Best Service Provide Our Clients.
        </p>
        <Link
          href="#"
          className="relative font-semibold rounded-full px-6 py-4 shadow-lg overflow-hidden text-white 
                    bg-[#5ebf97] transition-all duration-500 ease-in-out flex items-center gap-2 group"
        >
          {/* Background Animation */}
          <span
            className="absolute inset-0 bg-secondary-teal transition-transform rounded-full duration-500 ease-in-out 
                      -translate-x-full group-hover:translate-x-0"
          ></span>

          {/* Text and Icon Wrapper */}
          <span className="relative z-10 flex items-center gap-2">
            Meet Our Expert
            <MdArrowOutward size={20} />
          </span>
        </Link>
      </div>
    </div>
  );
};

export default AboutSection;
