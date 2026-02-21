//<></>
//{}
//[]
//-
import {
  ArrowBigDownIcon,
  ArrowBigLeft,
  ArrowBigRight,
  ChevronDown,
  Sparkles,
} from "lucide-react";
import SyntaxHighlighter from "react-syntax-highlighter";
import { codeExamples } from "../data/codeExamples";
import { useEffect, useState } from "react";
import { floatingCard } from "../data/codeExamples";
import { ArrowRight, Play } from "lucide-react";
import { nightOwl } from "react-syntax-highlighter/dist/esm/styles/hljs";

export default function Hero() {
  const [MousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [activeTab, setactiveTab] = useState("App.jsx");
  useEffect(() => {
    function handleMouseMove(e) {
      setMousePosition({ x: e.clientX, y: e.clientY });
    }
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);
  return (
    <section className="relative min-h-screen flex items-center justify-center pt-17 sm:pt-20 px-4 sm:px-7 lg:px-8 overflow-hidden">
      <div
        className="absolute inset-0 opacity-30"
        style={{
          background: `radial-gradient(700px circle at ${MousePosition.x}px ${MousePosition.y}px, rgba(118, 162, 237, 0.6), transparent 40%)`,
        }}
      />
      <div className="absolute top-20 left-4 sm:left-10 w-78 sm:w-72 h-78 sm:h-72 bg-blue-500/30 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-20 right-4 sm:right-10 w-48 sm:w-72 h-48 sm:h-72 bg-cyan-500/30 rounded-full blur-3xl animate-pulse delay-1000"></div>
      <div className="max-w-7xl mx-auto relative text-center w-full">
        <div className="max-w-7xl mx-auto text-center lg:text-left flex flex-col lg:grid lg:grid-cols-2 gap-7 sm:gap-8 lg:gap-12 items-center relative">
          <div className="">
            <div className="bg-gradient-to-r from-blue-300/30 to-white-200 inline-flex items-center sm:px-4 px-4 py-2 flex flex-row gap-2 bg-blue-500/10 border border-blue-400/40 rounded-3xl mb-3 sm:mb-4">
              <Sparkles className="w-4 h-4 text-blue-200/40" />
              <span className="text-xs sm:text-sm text-blue-300">
                Introducing CodeFlow AI 2.0
              </span>
            </div>
            <h1 className="flex flex-col lg:text-5xl text-5xl sm:text-3xl space-y-2 font-semibold mb-4 sm:mb-6">
              <span className="bg-gradient-to-r from-white via-blue-200 to-cyan-300 bg-clip-text text-transparent text-block mb-1 sm:mb-2">
                Code Faster
              </span>
              <span className="bg-gradient-to-r from-blue-499 via-cyan-300 to-blue-499 bg-clip-text text-transparent text-block mb-1 sm:mb-2">
                Build Better
              </span>
              <span className="bg-gradient-to-r from-white via-cyan-200 to-blue-300 bg-clip-text text-transparent text-block mb-1 sm:mb-2">
                With CodeFlow AI
              </span>
            </h1>
            <span className="text-md text-blue-200/40">
              accelerate your developement workflow with inteligent code
              completion automated testing, and smart debugging. Ship
              production-ready code 10x faster
            </span>
            <div className="flex w-full flex-col sm:flex-row items-center justify-center lg:justify-start gap-3 sm:gap-4 mb-8 sm:mb-12 mt-4">
              <button className="group w-full sm:w-auto px-6 sm:px-8 py-3 sm:py-4 bg-gradient-to-b from-blue-600 to-blue-400 rounded-lg font-semibold text-sm sm:text-base transition-all duration-300 hover:scale-105 flex items-center justify-center gap-2">
                Start coding free
                <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-3 transition-transform duration-300" />
              </button>
              <button className="group w-full sm:w-auto px-6 sm:px-8 py-3 sm:py-4 bg-white/10 backdrop-blur-sm border border-white/10 rounded-lg font-semibold text-sm sm:text-base transition-color duration-300 hover:bg-white/20 flex items-center justify-center gap-2">
                <div className="p-2 bg-white/10 rounded-full">
                  <Play className="w-4 h-4 fill-white" />
                </div>
                <span>Watch Demo</span>
              </button>
            </div>
          </div>
          <div className="relative order-2 w-full">
            <div className="relative bg-white/7 backdrop-blur-xl rounded-xl sm:rounded-2xl p-3 sm:p-4 shadow-2xl border border-white/10">
              <div className="bg-gradient-to-br from-gray-900/20 to-gray-800/20 backdrop-blur-sm rounded-lg overflow-hidden h-[280px] sm:w-[349px] lg:h-[449px] border border-white/7 w-full">
                {/* IDE HEADER */}
                <div className="flex  justify-between items-center px-3 sm:px-4 py-2 sm:py-3 bg-white/5 backdrop-blur-sm border-b border-white/10">
                  <div className="flex space-x-2 items-center">
                    <div className="flex space-x-1 sm:space-x-2 items-center">
                      <div className="w-2 h-2 sm:w-3 sm:h-3 rounded-full bg-red-500" />
                      <div className="w-2 h-2 sm:w-3 sm:h-3 rounded-full bg-yellow-500" />
                      <div className="w-2 h-2 sm:w-3 sm:h-3 rounded-full bg-green-500" />
                    </div>
                    <span className="text-xs sm:text-sm text-gray-300">
                      CodeFlow AI
                    </span>
                  </div>
                  <ChevronDown className="text-gray-400 w-3 h-3 sm:w-4 sm:w-4" />
                </div>
                <div className="p-3 sm:p-4 relative h-full">
                  <div className="flex space-x-1 sm:space-x-2 mb-3 sm:mb-4 overflow-x-auto">
                    <button
                      onClick={() => setactiveTab("App.jsx")}
                      className={`px-3 py-4 backdrop-blur-sm text-xd sm:text-sm rounded-t-lg border transition-all duration-300 whitespace-nowrap ${
                        activeTab === "App.jsx"
                          ? "bg-blue-400/20 text-white border-blue-400/40"
                          : "bg-white/5 text-gray-300 border-white/10 hover:bg-white/10"
                      }`}
                    >
                      App.jsx
                    </button>
                    <button
                      onClick={() => setactiveTab("Hero.jsx")}
                      className={`px-3 py-4 backdrop-blur-sm text-xd sm:text-sm rounded-t-lg border transition-all duration-300 whitespace-nowrap ${
                        activeTab === "Hero.jsx"
                          ? "bg-blue-400/20 text-white border-blue-400/40"
                          : "bg-white/5 text-gray-300 border-white/10 hover:bg-white/10"
                      }`}
                    >
                      Hero.jsx
                    </button>
                    <button
                      onClick={() => setactiveTab("Navbar.jsx")}
                      className={`px-3 py-4 backdrop-blur-sm text-xd sm:text-sm rounded-t-lg border transition-all duration-300 whitespace-nowrap ${
                        activeTab === "Navbar.jsx"
                          ? "bg-blue-400/20 text-white border-blue-400/40"
                          : "bg-white/5 text-gray-300 border-white/10 hover:bg-white/10"
                      }`}
                    >
                      Navbar.jsx
                    </button>
                  </div>
                  {/* Code Content */}
                  <div className="relative overflow-hidden flex-grow">
                    <SyntaxHighlighter
                      language="javascript"
                      style={nightOwl}
                      customStyle={{
                        margin: 0,
                        borderRadius: "8px",
                        fontSize: "11px",
                        lineHeight: "1.4",
                        border: "1px solid #3c3c3c",
                      }}
                    >
                      {codeExamples[activeTab]}
                    </SyntaxHighlighter>
                  </div>
                </div>
              </div>
              {/* Floating content */}
              <div
                className={`hidden lg:block bottom-4 absolute right-4 transform translate-x-8 translate-y-8 w-72 rounded-xl backdrop-blur-md ${floatingCard[activeTab].bgColor} p-4 border border-white/20 shadow-2xl`}
              >
                <div className="flex flex-col space-y-2 space-x-2 mb-2">
                  <div className="flex flex-row space-x-1">
                    <div
                      className={`${floatingCard[activeTab].iconColor} w-6 h-6 text-sm font-bold`}
                    >
                      {floatingCard[activeTab].icon}
                    </div>
                    <span
                      className={`text-sm font-medium ${floatingCard[activeTab].textColor}`}
                    >
                      {floatingCard[activeTab].title}
                    </span>
                  </div>
                  <div
                    className={`text-left text-sm text-color-gray font-light ${floatingCard[activeTab].contentColor}`}
                  >
                    {floatingCard[activeTab].content}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
