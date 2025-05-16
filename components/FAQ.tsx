"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";

const faqs = [
  {
    question: "What is Quranium?",
    answer:
      "Quranium is a decentralized platform that combines blockchain technology with Islamic knowledge, creating a secure and accessible ecosystem for learning and sharing Quranic content.",
  },
  {
    question: "How does the QRN token work?",
    answer:
      "The QRN token is the native cryptocurrency of the Quranium platform. It's used for governance, accessing premium content, and participating in the platform's ecosystem.",
  },
  {
    question: "Is Quranium compliant with Islamic principles?",
    answer:
      "Yes, Quranium is designed with Islamic principles in mind. Our platform and tokenomics have been reviewed by Islamic scholars to ensure compliance with Shariah law.",
  },
  {
    question: "How can I participate in the project?",
    answer:
      "You can participate by holding QRN tokens, contributing to the community, developing content, or joining our team. Visit our community channels for more information.",
  },
  {
    question: "What makes Quranium unique?",
    answer:
      "Quranium is the first decentralized platform specifically designed for Islamic knowledge sharing, combining blockchain technology with traditional Islamic scholarship.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="lg:py-20 text-black bg-white py-10">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-2xl lg:text-3xl  text-black ">
            Frequently Asked Questions
          </h2>
          <p className="mt-4 text-sm lg:text-lg text-black">
            Everything you need to know about Quranium
          </p>
        </div>

        <div className="mt-16 space-y-4">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="border border-gray-200 dark:border-gray-700 rounded-lg overflow-hidden"
            >
              <button
                className="w-full px-6 py-4 text-left focus:outline-none"
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
              >
                <div className="flex items-center justify-between">
                  <h3 className="text-sm lg:text-lg font-medium text-black">
                    {faq.question}
                  </h3>
                  <span className="ml-6 flex-shrink-0">
                    <svg
                      className={`w-6 h-6 transform ${
                        openIndex === index ? "rotate-180" : ""
                      } transition-transform duration-200`}
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M19 9l-7 7-7-7"
                      />
                    </svg>
                  </span>
                </div>
              </button>
              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                    className="px-6 pb-4"
                  >
                    <p className="text-black">{faq.answer}</p>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>

        {/* Contact CTA */}
        <div className="mt-16 text-center">
          <p className="text-lg text-black pb-5">Still have questions?</p>
          <Link
            href="/"
            className="ripple  text-white bg-[linear-gradient(to_bottom,rgba(60,145,255,1),rgba(52,118,255,1))] rounded-lg px-7 py-3 inline relative overflow-hidden  hover:shadow-lg focus:outline-none font-medium text-sm uppercase "
          >
            Contact Us
          </Link>
        </div>
      </div>
    </section>
  );
}
