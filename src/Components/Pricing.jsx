//<></>
//{}
import { Check, TrendingUpDown, Star } from "lucide-react";
const prices = [
  {
    state: "Entreprise",
    description: "For large organizations",
    pricing: "199.99",
    detailes: [
      "Unlimited team members",
      "Unlimited storage",
      "Entreprise analytics",
      "24/7 phone support",
      "API acces",
      "Mobile app",
      "Custom integrations",
      "Advanced security",
      "Dedicated account manager",
      "Custom SLA",
    ],
    star: false,
  },
  {
    state: "Professional",
    description: "best for growing businesses",
    pricing: "79.99",
    detailes: [
      "Up to 25 team members",
      "100GB storage",
      "advanced analytics",
      "Priority support",
      "API acces",
      "Mobile app",
      "Custom integrations",
      "Advanced security",
    ],
    star: true,
  },
  {
    state: "Starter",
    description: "Perfect for individuals and small teams",
    pricing: "29.99",
    detailes: [
      "Up to 5 team members",
      "10GB storage",
      "Basic analytics",
      "Email support",
      "API acces",
      "Mobile app",
    ],
    star: false,
  },
];
export default function Pricing() {
  return (
    <div id="Pricing" className="scroll-mt-20">
      <div>
        <div className="flex flex-col items-center text-5xl font-semibold lg:font-bold  gap-2 mt-10 mb-5">
          <span className="bg-gradient-to-r from-white to-gray-700 bg-clip-text text-transparent">
            Simple, Transparent
          </span>
          <span className="bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent">
            Pricing Plans
          </span>
        </div>
        <div className="flex flex-col items-center text-gray-400/70 font-medium text-center px-9 sm:px-8">
          Choose the perfect plan for your needs. All plans include a 14-day
          free trial
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 sm:gap-10 lg:gap-10 mt-16 px-10 sm:px-12 mb-15">
        {prices.map((price, key) => (
          <div
            key={key}
            className={`relative bg-slate-900/50 group backdrop-blur-sm border rounded-xl sm:rounded-2xl p-6 sm:p-8 transition-all duration-300 overflow-visible group flex flex-col h-full ${price.star ? "border-blue-500 shadow-2xl shadow-blue-500/20 lg:scale-108" : "border border-slate-800 hover:border-slate-700"}`}
          >
            <div className="absolute inset-0 bg-gradient-to-br from-white/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl" /> 
            {price.star && (
              <div className="absolute -top-2 sm:-top-3 left-1/2 transform -translate-x-1/2 z-10">
                <div className="flex items-center space-x-1 px-3 sm:px-4 py-1 sm:py-1.5 bg-gradient-to-b from-blue-500 to-cyan-500 rounded-full text-xs sm:text-sm font-semibold shadow-lg whitespace-nowrap">
                  <Star className="w-3 h-3 sm:h-3 sm:h-3 fill-white" />
                  <span>Most Popular</span>
                </div>
              </div>
            )}
            <div className="flex flex-col gap-2 items-center">
              <span className="font-semibold text-2xl">{price.state}</span>
              <span className="text-gray-400/40 font-medium">
                {price.description}
              </span>
            </div>
            <div className="text-center mt-4 sm:mt-5 mb-4 sm:mb-5 font-bold text-5xl bg-gradient-to-r from-blue-400/40 to-cyan-300 bg-clip-text text-transparent">
              ${price.pricing}
              <span className="text-gray-500 font-medium text-sm">/month</span>
            </div>
            <div className="flex flex-col items-center">
              <ul className="space-y-3 sm:space-y-4 mb-6 sm:mb-8 flex-row">
                {price.detailes.map((detaile, key) => (
                  <li
                    key={key}
                    className="flex flex-start gap-2  space-x-2 sm:space-x-3"
                  >
                    <div className="flex-shrink-0 w-3 h-3 sm:h-4 sm:w-4 rounded-full bg-blue-500/20 flex items-center justify-center mt-0.5">
                      <Check className="w-2.5 h-2.5 sm:w-5 sm:h-5 text-blue-400/50" />
                    </div>
                    <div className="text-sm font-medium text-gray-400">
                      {detaile}
                    </div>
                  </li>
                ))}
              </ul>
            </div>
            <button
              className={`mt-auto w-full flex justify-center items-center rounded-sm py-3 sm:py-2.5 font-semibold cursor-pointer transition-all duration-200 ${
                price.star
                  ? "bg-gradient-to-b from-blue-500 to-cyan-500 border border-gray-300/30 transition-all duration-300 hover:scale-105"
                  : "bg-white/5 border border-white/10 hover:bg-white/10"
              }`}
            >
              Get Started
            </button>
          </div>
        ))}
      </div>
      <div className="flex items-center gap-1 justify-center mb-20 text-medium">
        <div className="text-gray-400">Need a custom plan?</div>
        <a href="#" className="text-cyan-400">
          Contact our Sales team
        </a>
      </div>
    </div>
  );
}
