"use client"

const ProcessSteps = () => {
  return (
    <section className="py-16 bg-gray-100 text-center px-6">
      <div className="container mx-auto">
        <h3 className="text-xl text-black">Our Process</h3>
        <h2 className="text-3xl md:text-5xl text-gray-900 mt-2">
          7 Easy Steps To Achieve Your Goals
        </h2>
        <p className="text-lg text-gray-700 mt-3 max-w-2xl mx-auto">
          Our consulting process ensures comprehensive analysis, strategic planning, and effective implementation for lasting results.
        </p>

        {/* Progress Bar */}
        <div className="relative flex justify-between items-center max-w-xl mx-auto mt-8">
        <div className="w-10 h-10 flex items-center justify-center text-black font-bold rounded-md bg-gray-300 z-10 px-3">
            01
          </div>
          <div className="w-full h-0 border-t border-dashed border-gray-400" />
          <div className="w-10 h-10 flex items-center justify-center text-white font-bold rounded-md bg-gray-800 z-10 px-3">
            02
          </div>
          <div className="w-full h-0 border-t border-dashed border-gray-400" />
          <div className="w-10 h-10 flex items-center justify-center text-black font-bold rounded-md bg-gray-300 z-10 px-3">
            03
          </div>
          <div className="w-full h-0 border-t border-dashed border-gray-400" />
          <div className="w-10 h-10 flex items-center justify-center text-white font-bold rounded-md bg-gray-800 z-10 px-3">
            04
          </div>
          <div className="w-full h-0 border-t border-dashed border-gray-400" />
          <div className="w-10 h-10 flex items-center justify-center text-black font-bold rounded-md bg-gray-300 z-10 px-3">
            05
          </div>
          <div className="w-full h-0 border-t border-dashed border-gray-400" />
          <div className="w-10 h-10 flex items-center justify-center text-white font-bold rounded-md bg-gray-800 z-10 px-3">
            06
          </div>
          <div className="w-full h-0 border-t border-dashed border-gray-400" />
          <div className="w-10 h-10 flex items-center justify-center text-black font-bold rounded-md bg-gray-300 z-10 px-3">
            07
          </div>
        </div>

        {/* Steps Cards */}
        <div className="grid md:grid-cols-3 gap-6 mt-10">
          <div className="p-6 rounded-lg shadow-md border border-gray-300 bg-white">
            <h3 className="text-xl text-gray-900">Initial Consultation</h3>
            <p className="text-gray-700 mt-2">
              We begin by understanding your business, industry challenges, and financial goals.
            </p>
          </div>
          <div className="p-6 rounded-lg shadow-md border border-gray-300 bg-white">
            <h3 className="text-xl text-gray-900">Planning & Solution</h3>
            <p className="text-gray-700 mt-2">
              We focus on solutions that align with your business model and improve efficiency.
            </p>
          </div>
          <div className="p-6 rounded-lg shadow-md border border-gray-300 bg-white">
            <h3 className="text-xl text-gray-900">Implementation</h3>
            <p className="text-gray-700 mt-2">
              We work with your team to develop a plan, provide the resources and tools needed.
            </p>
          </div>        
        </div>
        <div className="grid lg:grid-cols-4 md:grid-cols-3 gap-6 mt-5">
          <div className="p-6 rounded-lg shadow-md border border-gray-300 bg-white">
            <h3 className="text-xl text-gray-900">Initial Consultation</h3>
            <p className="text-gray-700 mt-2">
              We begin by understanding your business, industry challenges, and financial goals.
            </p>
          </div>
          <div className="p-6 rounded-lg shadow-md border border-gray-300 bg-white">
            <h3 className="text-xl text-gray-900">Planning & Solution</h3>
            <p className="text-gray-700 mt-2">
              We focus on solutions that align with your business model and improve efficiency.
            </p>
          </div>
          <div className="p-6 rounded-lg shadow-md border border-gray-300 bg-white">
            <h3 className="text-xl text-gray-900">Implementation</h3>
            <p className="text-gray-700 mt-2">
              We work with your team to develop a plan, provide the resources and tools needed.
            </p>
          </div>
          <div className="p-6 rounded-lg shadow-md border border-gray-300 bg-white">
            <h3 className="text-xl text-gray-900">Review And Support</h3>
            <p className="text-gray-700 mt-2">
              Our commitment extends beyond immediate project completion.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProcessSteps;