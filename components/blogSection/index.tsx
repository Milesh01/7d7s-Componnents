import React from "react";
import CaseStudyCard from "@/components/common/blogCard";
import { MdOutlineArrowOutward } from "react-icons/md";

const caseStudies = [
  {
    id: 1,
    company: "InterEX",
    date: "January, 15 2024",
    title: "Market Entry Strategy For International Expansion",
    description:
      "A global company consults on expanding into a new international market",
    category: "Market Entry",
    image: "https://res.cloudinary.com/ddgbehuxg/image/upload/v1728031248/cld-sample-3.jpg",
  },
  {
    id: 2,
    company: "DisCOM",
    date: "February, 23 2024",
    title: "Financial Restructuring For A Distressed Company",
    description:
      "A retail company seeks consulting  to restructure its and regain stability.",
    category: "Financial",
    image: "https://res.cloudinary.com/ddgbehuxg/image/upload/v1728031247/cld-sample.jpg",
  },
  {
    id: 3,
    company: "FinFirm",
    date: "March, 18 2024",
    title: "Digital Transformation For A Financial Services Firm",
    description:
      "Financial services firms need to modernize their operations to keep up with.",
    category: "Financial",
    image: "https://res.cloudinary.com/ddgbehuxg/image/upload/v1728031248/cld-sample-4.jpg",
  },
];

const BlogSection: React.FC = () => {
  return (
    <section className="py-16 bg-white px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto">
      <div className=" grid md:grid-cols-2">
        <div>
        <h2 className="text-5xl font-bold text-gray-900 mt-2">
        Business-Driven IT Solutions
        </h2></div>
        <p className="text-end text-gray-600 text-md mt-2 max-w-2xl ">
        <a href="" className="group flex items-center justify-end cursor-pointer">View All Insights &nbsp; <MdOutlineArrowOutward className="group-hover:rotate-45 transition-all "/></a>  
        </p>
      </div>

      <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-6 mt-8">
        {caseStudies.map((study) => (
          <CaseStudyCard key={study.id} {...study} />
        ))}
      </div>
      
      <div className="grid lg:grid-cols-2 text-black md:grid-cols-1 gap-6 mt-16">
<div className="md:flex items-center justify-start">       <div className=" md:mr-5">
       <h2 className="text-3xl">Do You Want to See More?</h2>
       <p className="text-lg">We Have Helped Solve Several Case Studies</p>
       </div>
       <button className="mt-5 px-4 py-2 border bg-black text-white rounded-lg hover:bg-white hover:text-black transition">
          See All Cases
        </button></div>
      </div>
      </div>
    </section>
  );
};

export default BlogSection;
