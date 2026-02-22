import { Menu, X } from "lucide-react";
import { useState } from "react";
import Features from "./Features";
//<></>
//{}
export default function Navbar() {
  const [MobileMenuIsOpen, setMobileMenuIsOpen] = useState(false);
  return (
    <nav className="fixed top-0 w-full z-50 transition-all duration-300 bg-slate-950/20 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-14 sm:h-16 md:h-20">
          {/* Left side — logo + brand name */}
          <div className="flex items-center space-x-2 cursor-pointer transition-transform duration-200 hover:scale-107">
            <img
              src="/logo.png"
              alt="CodeFlow"
              className="w-6 h-6 sm:h-8 sm:w-8"
            />
            <span className="text-lg sm:text-xl md:text-2xl font-medium space-x-1">
              <span className="text-white">Code</span>
              <span className="text-blue-400">Flow</span>
            </span>
          </div>

          {/* Right side — nav links */}
          <div className="md:flex hidden items-center space-x-6 lg:space-x-8">
            <a
              href="#features"
              className="text-gray-400 hover:text-white text-sm lg:text-base"
            >
              Features
            </a>
            <a
              href="#Pricing"
              className="text-gray-400 hover:text-white text-sm lg:text-base"
            >
              Pricing
            </a>
            <a
              href="#Testimoniales"
              className="text-gray-400 hover:text-white text-sm lg:text-base"
            >
              Testimoniales
            </a>
          </div>
          <button
            onClick={() => {
              setMobileMenuIsOpen((prev) => !prev);
            }}
            className="md:hidden p-2 text-gray-300 hover:text-white cursor-pointer"
          >
            {MobileMenuIsOpen ? (
              <X className="w-5 h-5 sm:w-6 sm:h-6" />
            ) : (
              <Menu className="w-5 h-5 sm:w-6 sm:h-6" />
            )}
          </button>
        </div>
      </div>
      {MobileMenuIsOpen && (
        <div className="md:hidden bg-slate-900/94 backdrop-blur-lg border-t border-slate-800 animation-in slide-in-from-top duration-300">
          <div className="py-4 px-4 sm:py-6 space-y-3 sm:space-y-4 ">
            <a
              onClick={() => setMobileMenuIsOpen(false)}
              href="#Features"
              className=" block text-gray-400 hover:text-white text-sm lg:text-base"
            >
              Features
            </a>
            <a
              onClick={() => setMobileMenuIsOpen(false)}
              href="#Pricing"
              className=" block text-gray-400 hover:text-white text-sm lg:text-base"
            >
              Pricing
            </a>
            <a
              onClick={() => setMobileMenuIsOpen(false)}
              href="#Testimoniales"
              className=" block text-gray-400 hover:text-white text-sm lg:text-base"
            >
              Testimoniales
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}
