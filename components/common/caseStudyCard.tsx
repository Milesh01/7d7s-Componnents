import Image from "next/image";
import React from "react";
import { FaUserTie, FaCalendarAlt } from "react-icons/fa";

interface CaseStudyProps {
  company: string;
  date: string;
  title: string;
  description: string;
  category: string;
  image: string;
}

const CaseStudyCard: React.FC<CaseStudyProps> = ({
  company,
  date,
  title,
  description,
  category,
  image,
}) => {
  return (
    <div className="bg-white rounded-xl border overflow-hidden">
      <div className="relative h-[500]">
        <Image src={image} alt={title} className="w-full h-64 object-cover" width={1000} height={1000} />
        <span className="absolute top-3 right-3 bg-white text-gray-900 text-ms px-3 py-1 rounded-md shadow">
          {category}
        </span>
        <div className="p-8 bg-white rounded-xl absolute bottom-0 group">
        <div className="text-md text-gray-800 flex items-center gap-2">
        <FaUserTie /><span className="text-md">{company}</span> &nbsp;
        <FaCalendarAlt /> <span className="text-md"> {date}</span>
        </div>
        <h3 className="text-2xl text-gray-900 mt-3">{title}</h3>
        <p className="text-gray-600 mt-2 text-lg">{description}</p>
          <button className="mt-5 px-5 py-2 border  text-black rounded-lg group-hover:bg-gray-900 group-hover:text-white transition">
            Read More
          </button>
      </div>
      </div>
     
    </div>
  );
};

export default CaseStudyCard;
