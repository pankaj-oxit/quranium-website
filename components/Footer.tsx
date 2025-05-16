"use client";

import type React from "react";

export default function Hero() {
  return (
    <>
      <footer className="text-white py-10 bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-6 gap-8">
            {/* Column 1: Span 2 columns */}
            <div className="md:col-span-2">
              <h3 className="text-xl font-bold mb-4">Quranium</h3>
              <p className="text-sm text-white pe-[12%]">
                Empowering the future with Web3. Explore the ecosystem, learn,
                and connect.
              </p>
            </div>

            {/* Column 2 */}
            <div>
              <h4 className="text-lg font-semibold mb-3">Company</h4>
              <ul className="space-y-2 text-sm text-white">
                <li>
                  <a href="#" className="hover:text-white">
                    About
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white">
                    Careers
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white">
                    Blog
                  </a>
                </li>
              </ul>
            </div>

            {/* Column 3 */}
            <div>
              <h4 className="text-lg font-semibold mb-3">Support</h4>
              <ul className="space-y-2 text-sm text-white">
                <li>
                  <a href="#" className="hover:text-white">
                    Help Center
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white">
                    Privacy Policy
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white">
                    Terms of Service
                  </a>
                </li>
              </ul>
            </div>

            {/* Column 4 */}
            <div>
              <h4 className="text-lg font-semibold mb-3">Follow Us</h4>
              <ul className="space-y-2 text-sm text-white">
                <li>
                  <a href="#" className="hover:text-white">
                    Twitter
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white">
                    Discord
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white">
                    LinkedIn
                  </a>
                </li>
              </ul>
            </div>
            {/* Column 4 */}
            <div>
              <h4 className="text-lg font-semibold mb-3">Technical</h4>
              <ul className="space-y-2 text-sm text-white">
                <li>
                  <a href="#" className="hover:text-white">
                    Overview
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white">
                    Architecture
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white">
                    Security
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="mt-10 border-t border-gray-700 pt-6 text-sm text-white text-center">
          © {new Date().getFullYear()} Quranium. All rights reserved.
        </div>
      </footer>
    </>
  );
}
