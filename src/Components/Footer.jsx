//<></>
//{}
import { Twitter, Linkedin, Github, Mail, Link } from "lucide-react";
const footers = {
  product: ["Features", "pricing", "Security", "Roadmap", "Changelog"],
  Company: ["About", "blog", "Careers", "Press", "Partners"],
  Resources: [
    "Documentation",
    "Help center",
    "Comuunity",
    "API Reference",
    "Status",
  ],
  legal: ["Privacy", "Terms", "Cookie Policy", "Licenses", "Compliance"],
};
export default function Footer() {
  return (
    <div className="flex flex-col gap-12 sm:gap-16 w-full h-auto px-5 sm:px-7 py-10 sm:py-12 border-t-1 border-indigo-500/20">
      <div className="flex flex-row gap-12 sm:gap-14">
        <div className="max-w-3xl flex-1 space-y-1 sm:space-y-3">
          <div className="flex flex-row items-center gap-2">
            <div className="h-10 w-10">
              <img src="/logo.png" alt="" />
            </div>
            <div className="font-bold space-x-1 text-lg sm:text-xl">
              <span className="">Code</span>
              <span className="text-cyan-400/80">Flow</span>
            </div>
          </div>
          <div className="">
            <p className="font-base text-base text-wrap text-gray-300/50 font-base sm:font-light">
              Tranform your workflow with AI-powered tools and automation. Built
              for modern teams
            </p>
          </div>
          <div className="flex flex-row gap-2">
            <div className="p-2 bg-white/10 rounded-md cursor-pointer hover:bg-white/20 transition-color duration-250">
              <Twitter />
            </div>
            <div className="p-2 bg-white/10 rounded-md cursor-pointer hover:bg-white/20 transition-color duration-250">
              <Linkedin />
            </div>
            <div className="p-2 bg-white/10 rounded-md cursor-pointer hover:bg-white/20 transition-color duration-250">
              <Github />
            </div>
            <div className="p-2 bg-white/10 rounded-md cursor-pointer hover:bg-white/20 transition-color duration-250">
              <Mail />
            </div>
          </div>
        </div>
        <div className="flex-2 grid lg:grid-cols-4 lg:gap-8 md:grid-cols-2 md:gap-10 sm:grid-cols-1 sm:gap-12">
          {Object.entries(footers).map(([category, items]) => (
            <div key={category}>
              <h3 className="text-base font-semibold lg:mb-10 md:mb-8 sm:mb-6 capitalize">
                {category}
              </h3>
              <ul>
                {items.map((item) => (
                  <li
                    className="text-gray-500 hover:text-gray-700 text-sm mb-1"
                    key={item}
                  >
                    <a href="#">{item}</a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
      <div className="flex items-center justify-center">
        <hr className="w-[80%] border-t border-white/20" />
      </div>
      <div className="flex flex-row justify-between mb-5">
        <div className="text-sm text-gray-400/40 font-semibold ">
            &copy; 2026 CodeFlow. All right reserved 
        </div>
        <div className="flex flex-row gap-5 text-sm text-gray-400/40 font-semibold ">
            <div>Privacy Policy</div>
            <div>Terms Of Service</div>
            <div>Cookie Settings</div>
        </div>
      </div>
    </div>
  );
}
