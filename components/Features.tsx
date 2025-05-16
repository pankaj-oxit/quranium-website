"use client";

import Spline from "@splinetool/react-spline";
import { motion } from "framer-motion";
import Link from "next/link";
import Imgicon from "../public/leftimg.png";
import Image from "next/image";
const features = [
  {
    title: "Decentralized Storage",
    description:
      "Your Quranic data is securely stored on the blockchain, ensuring immutability and accessibility.",
    icon: "🔒",
  },
  {
    title: "Smart Contracts",
    description:
      "Automated and transparent transactions for donations, educational content, and community governance.",
    icon: "📜",
  },
  {
    title: "Community Driven",
    description:
      "A global community of scholars, developers, and enthusiasts contributing to Islamic knowledge.",
    icon: "🌍",
  },
  {
    title: "Educational Resources",
    description:
      "Access to verified translations, tafsir, and scholarly interpretations from trusted sources.",
    icon: "📚",
  },
];

export default function Features() {
  return (
    // <section className="py-20 bg-white dark:bg-gray-800">
    //   <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    //     <div className="text-center">
    //       <h2 className="text-3xl font-bold text-gray-900 dark:text-white sm:text-4xl">
    //         Key Features
    //       </h2>
    //       <p className="mt-4 text-lg text-gray-600 dark:text-gray-300">
    //         Discover how Quranium is revolutionizing Islamic knowledge sharing
    //       </p>
    //     </div>

    //     <div className="mt-20 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
    //       {features.map((feature, index) => (
    //         <motion.div
    //           key={feature.title}
    //           initial={{ opacity: 0, y: 20 }}
    //           whileInView={{ opacity: 1, y: 0 }}
    //           transition={{ duration: 0.5, delay: index * 0.1 }}
    //           viewport={{ once: true }}
    //           className="relative p-6 bg-gray-50 dark:bg-gray-700 rounded-lg shadow-lg"
    //         >
    //           <div className="text-4xl mb-4">{feature.icon}</div>
    //           <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
    //             {feature.title}
    //           </h3>
    //           <p className="text-gray-600 dark:text-gray-300">
    //             {feature.description}
    //           </p>
    //         </motion.div>
    //       ))}
    //     </div>
    //   </div>
    // </section>
    <>
      <section className="bg-[linear-gradient(to_bottom,rgba(0,151,255,0.2),rgba(52,118,255,0.2))]">
        <section className=" max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="block lg:flex md:flex gap-20 pb-7 justify-between items-center">
            <div className="w-[100%] h-[300px] lg:w-[50%] lg:h-[500px]">
              {/* <Image
                src={Imgicon}
                alt="Left icon"
                className="w-[300px] h-full object-contain"
              /> */}
              <script
                type="module"
                src="https://unpkg.com/@splinetool/viewer@1.9.94/build/spline-viewer.js"
              ></script>
              <Spline scene="https://prod.spline.design/k9SnYdkBhHlkspQX/scene.splinecode" />
            </div>
            <div className="lg:w-[50%]">
              <motion.div
                className=""
                initial={{ opacity: 0, y: -40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 2, ease: "easeInOut" }}
                viewport={{ once: true, amount: 0.6 }}
              >
                <h2 className="text-black lg:text-5xl pb-6 text-3xl">
                  We are Uncrackable. Are you?
                </h2>
                <p className="lg:text-xl lg:leading-8 pb-7 text-md">
                  In a world where no other blockchain infrastructure can truly
                  stand against today’s and tomorrow’s threats, Quranium is
                  changing this with its truly uncrackable decentralized
                  infrastructure.
                </p>
                <Link
                  href="/"
                  className="ripple  text-white bg-[linear-gradient(to_bottom,rgba(60,145,255,1),rgba(52,118,255,1))] rounded-lg px-7 py-3 me-2 relative overflow-hidden  hover:shadow-lg focus:outline-none font-medium text-sm uppercase "
                >
                  Understand Technology
                </Link>
              </motion.div>
            </div>
          </div>
        </section>
      </section>
      {/* <section className="mt-[6%] max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex gap-20 pb-7 justify-between items-center">
          <div className="w-[50%] h-[500px]">
            <script
              type="module"
              src="https://unpkg.com/@splinetool/viewer@1.9.94/build/spline-viewer.js"
            ></script>
            <Spline scene="https://prod.spline.design/3dV33FrSwddoEdwN/scene.splinecode" />
          </div>
          <div className="w-[50%]">
            <h2 className="text-black text-5xl pb-6">
              We are Uncrackable. Are you?
            </h2>
            <p className="text-xl leading-8 pb-7">
              At Quranium, Be Uncrackable isn’t just a tag-line - it’s our DNA.
              Our Layer 1 technology is built using Post Quantum Cryptography;
              it’s engineered to withstand any threat, today and in the quantum
              future.
            </p>
            <p className="text-xl leading-8 pb-7">
              But uncrackable goes beyond tech; it’s a mindset, a movement, a
              bond that drives everything we do. We’re here to do more than
              protect; we’re here to empower, innovate, and make the impossible
              real.
            </p>
            <Link
              href="/"
              className="ripple  text-white bg-black rounded-lg px-7 py-3 me-2 relative overflow-hidden  hover:shadow-lg focus:outline-none font-medium text-sm uppercase "
            >
              Join us. Be Uncrackable.
            </Link>
          </div>
        </div>
      </section> */}
    </>
  );
}
