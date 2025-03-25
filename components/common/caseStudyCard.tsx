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
    <div className="bg-white rounded-xl border overflow-hidden transition-transform duration-300 hover:scale-105 hover:shadow-md">
      <div className="relative h-[480]">
        <img src={image} alt={title} className="w-full h-64 object-cover" />
        <span className="absolute top-3 right-3 bg-white text-gray-900 text-xs font-semibold px-3 py-1 rounded-md shadow">
          {category}
        </span>
        <div className="p-4 bg-white rounded-xl absolute bottom-0">
        <div className="text-sm text-gray-500 flex items-center gap-2">
        <FaUserTie /><span className="font-semibold">{company}</span>
        <FaCalendarAlt /> <span> {date}</span>
        </div>
        <h3 className="text-2xl font-bold text-gray-900 mt-3">{title}</h3>
        <p className="text-gray-600 mt-2 text-lg">{description}</p>
          <button className="mt-5 px-4 py-2 border text-black rounded-lg hover:bg-black hover:text-white transition">
            Read More
          </button>
      </div>
      </div>
     
    </div>
  );
};

export default CaseStudyCard;
