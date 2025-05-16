"use client";

import Link from "next/link";
import type React from "react";
import Spline from "@splinetool/react-spline";
import { motion } from "framer-motion";
export default function Hero() {
  return (
    <>
      <section className="mt-[5%] max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="block lg:flex md:flex gap-20 pb-7 justify-between items-center">
          <div className="w-[100%] lg:w-[50%] pt-20 lg:pt-0">
            <motion.div
              className=""
              initial={{ opacity: 0, y: -40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 2, ease: "easeInOut" }}
              viewport={{ once: true, amount: 0.6 }}
            >
              <h1 className="text-black lg:text-6xl  lg:leading-[74px] text-3xl">
                The Uncrackable Foundation for the Digital Era.
              </h1>
              <p className="lg:text-xl lg:leading-8 pb-7 text-md pt-4 lg:pt-0">
                Quranium is the future of digital security - Quantum-proof,
                Layer 1 DLT for the next generation.
              </p>
            </motion.div>
            <Link
              href="/"
              className="ripple  text-white bg-[linear-gradient(to_bottom,rgba(60,145,255,1),rgba(52,118,255,1))] rounded-lg px-7 py-3 me-2 relative overflow-hidden  hover:shadow-lg focus:outline-none font-medium text-sm uppercase "
            >
              Know More
            </Link>
          </div>
          <div className="w-[100%] h-[300px] lg:w-[50%] lg:h-[500px]">
            <script
              type="module"
              src="https://unpkg.com/@splinetool/viewer@1.9.94/build/spline-viewer.js"
            ></script>
            <Spline
              scene="https://prod.spline.design/pGeMRXYloLcI1pmT/scene.splinecode"
              className="w-full h-full"
              // onLoad={onSplineLoad}
            />
          </div>
        </div>
      </section>
    </>
  );
}
