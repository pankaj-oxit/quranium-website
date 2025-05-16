"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";

export default function Navigation() {
  const pathname = usePathname();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { label: "About", href: "/about" },
    { label: "Technical", href: "/technical" },
    { label: "Ecosystem", href: "/ecosystem" },
    { label: "Resources", href: "/resources" },
    { label: "Contact Us", href: "/contact" },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm transition-all duration-300 ${
        isScrolled ? "shadow-md" : ""
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link 
            href="/" 
            className="text-black dark:text-white font-bold text-xl transition-colors duration-300 hover:text-[#3476ff] dark:hover:text-[#3476ff]"
          >
            Quranium
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-6">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`text-md font-medium transition-all duration-300 border-b-2 ${
                  pathname === link.href
                    ? "border-[#3476ff] text-[#3476ff]"
                    : "border-transparent hover:border-[#3476ff] text-gray-600 dark:text-gray-300 hover:text-[#3476ff]"
                }`}
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="/wallet"
              className="text-white ripple bg-gradient-to-b from-[#3c91ff] to-[#3476ff] rounded-lg px-4 py-2 text-sm font-semibold hover:shadow-lg transition-all duration-300 hover:-translate-y-0.5"
            >
              QSafe Wallet
            </Link>
            <Link
              href="/node-sale"
              className="text-white ripple bg-gradient-to-b from-[#3c91ff] to-[#3476ff] rounded-lg px-4 py-2 text-sm font-semibold hover:shadow-lg transition-all duration-300 hover:-translate-y-0.5"
            >
              Node Sale
            </Link>
          </div>

          {/* Hamburger Icon for Mobile */}
          <div className="md:hidden">
            <button 
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors duration-300"
            >
              {isMobileMenuOpen ? (
                <X className="w-6 h-6 text-black dark:text-white" />
              ) : (
                <Menu className="w-6 h-6 text-black dark:text-white" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu Dropdown */}
        <div 
          className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${
            isMobileMenuOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
          }`}
        >
          <div className="mt-4 space-y-4 pb-4">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`block text-md font-medium px-2 py-1 transition-all duration-300 ${
                  pathname === link.href
                    ? "text-[#3476ff]"
                    : "text-gray-600 dark:text-gray-300 hover:text-[#3476ff]"
                }`}
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="/wallet"
              className="block text-white text-center bg-gradient-to-b from-[#3c91ff] to-[#3476ff] rounded-lg px-4 py-2 text-sm font-semibold transition-all duration-300 hover:shadow-lg"
            >
              QSafe Wallet
            </Link>
            <Link
              href="/node-sale"
              className="block text-white text-center bg-gradient-to-b from-[#3c91ff] to-[#3476ff] rounded-lg px-4 py-2 text-sm font-semibold transition-all duration-300 hover:shadow-lg"
            >
              Node Sale
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}
