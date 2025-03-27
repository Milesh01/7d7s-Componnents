"use client"
import Image from "next/image";
import React from "react";
import { FaCalendarAlt , FaRegCircle} from "react-icons/fa";
import { MdPlayArrow, MdOutlineArrowOutward } from "react-icons/md";

interface CaseStudyProps {
  category: string;
  date: string;
  title: string;
  description: string;
  image: string;
}

const BlogCard: React.FC<CaseStudyProps> = ({
    category,
  date,
  title,
  image,
}) => {
  return (
    <div className="blog-card bg-white group  text-black rounded-md border transition-transform duration-300">
      <div className="blog-img relative h-64 overflow-hidden">
        <Image src={image} alt={title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" width={1000} height={1000}/>
      </div>
        <div className="p-7 bg-white rounded-xl ">
        <div className="text-md text-gray-800 flex items-center gap-2 mb-10">
        <MdPlayArrow /><span className="font-medium mr-4">{category}</span>
        <FaRegCircle size={10} /> <span> {date}</span>
        </div>
        <a href="#" className="text-3xl text-gray-900 transition-transform duration-300 hover:text-gray-500">{title}</a>         
      </div>
      <a href="#" className="flex items-center justify-between border-t mt-5">
  <span className="text-md ps-3">Read More</span>
  <div
    className=" text-xl flex items-center justify-center w-20 h-10 border-l transition-all transi hover:bg-green-700"
  >
    <MdOutlineArrowOutward className="text-black group-hover:rotate-[48deg] transition-all hover:text-white" />
  </div>
</a>
      </div>
     
  );
};

export default BlogCard;
