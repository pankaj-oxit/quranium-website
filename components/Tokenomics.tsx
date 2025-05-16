"use client";

import { motion } from "framer-motion";

const tokenomicsData = [
  {
    title: "Global team ",
    value: "120+",
    description: "Global team since our 2024 launch.",
  },
  {
    title: "Established",
    value: "3+",
    description: "Established regional hubs: Singapore, UAE, and Switzerland.",
  },
  {
    title: "Vision",
    value: "Bold Vision",
    description:
      "Driving a bold vision “Be Uncrackable” to create a secure, resilient digital world.",
  },
];

const distributionData = [
  {
    category: "Public Sale",
    percentage: 40,
    color: "bg-blue-500",
  },
  {
    category: "Team & Advisors",
    percentage: 20,
    color: "bg-green-500",
  },
  {
    category: "Development",
    percentage: 15,
    color: "bg-purple-500",
  },
  {
    category: "Marketing",
    percentage: 10,
    color: "bg-yellow-500",
  },
  {
    category: "Community Rewards",
    percentage: 10,
    color: "bg-red-500",
  },
  {
    category: "Reserve",
    percentage: 5,
    color: "bg-gray-500",
  },
];

export default function Tokenomics() {
  return (
    <section className="lg:pt-20 pb-20 pt-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className=""
          initial={{ opacity: 0, y: -40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 2, ease: "easeInOut" }}
          viewport={{ once: true, amount: 0.6 }}
        >
          <div className="text-center">
            <h2 className="text-3xl  text-black  sm:text-4xl pb-10 lg:pb-0">
              Our Progress so far
            </h2>
          </div>
        </motion.div>

        {/* Token Stats */}
        <div className=" grid grid-cols-1 gap-8 sm:grid-cols-3">
          {tokenomicsData.map((item, index) => (
            // <motion.div
            //   key={item.title}
            //   initial={{ opacity: 0, y: 20 }}
            //   whileInView={{ opacity: 1, y: 0 }}
            //   transition={{ duration: 0.5, delay: index * 0.1 }}
            //   viewport={{ once: true }}
            //   className="bg-gray-50 dark:bg-white rounded-lg p-6 text-center border border-gray-200 dark:border-gray-300 hover:shadow-lg transition-shadow transform rounded-xl  bg-white shadow-xl transition duration-300 hover:scale-105 h-[200px] flex flex-col items-center justify-center"
            // >
            //   <h3 className="text-lg font-medium text-gray-900 dark:text-black">
            //     {item.title}
            //   </h3>
            //   <p className="mt-2 text-3xl font-bold text-black">{item.value}</p>
            //   <p className="mt-2 text-sm text-gray-900 dark:text-gray-900">
            //     {item.description}
            //   </p>
            // </motion.div>
            <div className="containercard">
              <div className="card">
                <div className="face face1">
                  <div className="content">
                    <h3 className="text-lg font-medium text-gray-900 dark:text-black">
                      {item.title}
                    </h3>
                  </div>
                </div>
                <div className="face face2">
                  <div className="content">
                    <p className="mt-2 text-lg lg:text-3xl font-bold text-black">
                      {item.value}
                    </p>
                    <p className="mt-2 text-sm text-gray-900 dark:text-gray-900">
                      {item.description}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
