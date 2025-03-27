import React from "react";
import CaseStudyCard from "@/components/common/caseStudyCard";

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

const CaseStudiesSection: React.FC = () => {
  return (
    <section className="py-16 bg-white px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto">
        <div className=" lg:grid md:grid-cols-2">
          <div>
            <h3 className="text-xl text-black">Case Studies</h3>
            <h2 className="text-3xl md:text-5xl font-bold text-black mt-2">
              Client Success Stories
            </h2>
          </div>
          <p className="text-gray-700 text-md mt-2 lg:pl-36">
            Below are some examples of our case studies that illustrate common
            challenges and solutions in business and financial consulting.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-6 mt-8">
          {caseStudies.map((study) => (
            <CaseStudyCard key={study.id} {...study} />
          ))}
        </div>

        <div className="grid lg:grid-cols-2 text-black md:grid-cols-1 gap-6 mt-16">
          <div className="md:flex items-center justify-start">
            {" "}
            <div className=" md:mr-5">
              <h2 className="text-3xl">Do You Want to See More?</h2>
              <p className="text-lg">
                We Have Helped Solve Several Case Studies
              </p>
            </div>
            <button className="mt-5 px-6 py-2 border bg-gray-800 text-white rounded-lg transition hover:scale-[.955]">
              See All Cases
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CaseStudiesSection;
