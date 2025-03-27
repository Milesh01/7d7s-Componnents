"use client"
import { motion } from "framer-motion";
import { MdOutlineArrowRight, MdOutlineArrowLeft } from "react-icons/md";

const steps = [
  {
    step: "01",
    title: "Strategic Planning & Solution.",
    description: "Included meetings and questionnaires to gather key information.",
  },
  {
    step: "02",
    title: "Monitoring & Optimization",
    description: "Included meetings and questionnaires to gather key information.",
  },
  {
    step: "03",
    title: "Training & Knowledge Transfer",
    description: "A comprehensive report is delivered, outlining the results, ROI.",
  },
  {
    step: "04",
    title: "Final Documentation",
    description: "Included meetings and questionnaires to gather key information.",
  },
];

const StepTimeline = () => {
  return (
    <div 
  className="bg-slate-50 relative py-16 text-black " 
  style={{
    backgroundImage: `url('https://res.cloudinary.com/ddgbehuxg/image/upload/v1742981870/home5-process-bg_uobulb.png')`,
    backgroundSize: "cover",
    backgroundPosition: "center",
  }}
>

        <div className="container mx-auto p-5">
     <div className=" md:grid grid-cols-3">
     <h2 className="text-5xl font-bold mb-8 lg:col-span-1 md:col-span-2">How to Solve the Problems.</h2>
     <div className="lg:flex hidden"></div>
    <div className="lg:w-3/5"> <p className="text-xl font-medium">100%  </p>
    <p className="text-lg text-black">  Client Satisfaction of Our First Priority. </p>
    <div className=" border-t-2 border-gray-700 mt-2 relative">
    <MdOutlineArrowRight className="text-xl absolute -left-2 -top-3"/>
    <MdOutlineArrowLeft className="text-xl absolute -right-2 -top-3"/>    
       </div>
    </div>
    
     </div>
      <div className="relative grid md:grid-cols-4 justify-between items-center mt-10">
        {steps.map((step, index) => (
          <div key={index} className="relative m-5 h-full">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.3 }}
              className="relative z-10 flex justify-center items-center bg-green-900 text-white px-3 py-1 w-max rounded-full font-bold"
            >
             <span className="bg-white text-black rounded-md px-2 text-xs"> Step</span> &nbsp;{step.step}
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.4 }}
              className="mt-4"
            >
              <h3 className="font-semibold lg:text-2xl text-xl">{step.title}</h3>
              <p className="text-gray-700 text-md mt-4">{step.description}</p>
            </motion.div>
          </div>
        ))}
        <motion.div
          initial={{ width: 0 }}
          animate={{ width: "100%" }}
          transition={{ duration: 1.5 }}
          className="absolute top-4 left-0 h-1 md:border-t border-gray-400 border-dashed w-full"
        ></motion.div>
      </div>
      </div>
    </div>
  );
};

export default StepTimeline;
