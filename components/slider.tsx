"use client";

import React, { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { motion } from "framer-motion";
import "swiper/css";
import "swiper/css/navigation";

export default function PartnerSlider() {
  const partners = [
    "/1.svg",
    "/2.svg",
    "/3.svg",
    "/4.svg",
    "/5.svg",
    "/1.svg",
    "/2.svg",
    "/3.svg",
    "/4.svg",
    "/5.svg",
    "/1.svg",
    "/2.svg",
    "/3.svg",
    "/4.svg",
    "/5.svg",
  ];

  const swiperRef = useRef(null);

  return (
    <section className="w-full pt-10 pb-10 lg:pt-15 lg:pb-20 via-white relative select-none bg-[linear-gradient(to_bottom,rgba(0,151,255,0.1),rgba(52,118,255,0.1))]">
      <motion.div
        className=""
        initial={{ opacity: 0, y: -40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 2, ease: "easeInOut" }}
        viewport={{ once: true, amount: 0.6 }}
      >
        <div className="text-center">
          <h2 className="text-3xl  text-black  sm:text-4xl pb-10">
            Our Partners
          </h2>
        </div>
      </motion.div>

      <div
        className="relative mx-auto px-4"

      >
        <Swiper
          modules={[Navigation, Autoplay]}
          navigation={{
            prevEl: "#partner-prev",
            nextEl: "#partner-next",
          }}
          autoplay={{ delay: 2500, disableOnInteraction: false }}
          loop
          slidesPerView={3}
          spaceBetween={30}
          breakpoints={{
            320: { slidesPerView: 2, spaceBetween: 12 },
            640: { slidesPerView: 4, spaceBetween: 24 },
            1024: { slidesPerView: 4, spaceBetween: 24 },
            1280: { slidesPerView: 6, spaceBetween: 24 },
            1365: { slidesPerView: 8, spaceBetween: 24 },
          }}
          className="pb-12"
        >
          {partners.map((logo, idx) => (
            <SwiperSlide key={idx} className="flex justify-center items-center">
              <div className="lg:w-40 w-[128px] h-20 p-4 rounded-xl  border border-gray-400 shadow-sm flex items-center justify-center">
                <img
                  src={logo}
                  alt={`Partner logo ${idx + 1}`}
                  className="max-h-20 object-contain grayscale hover:grayscale-0 transition duration-300"
                  loading="lazy"
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}
