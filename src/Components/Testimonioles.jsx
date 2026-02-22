//<></>
//{}
const users = [
  {
    name: "Souhaila berrada",
    role: "senior Devloper",
    Image:
      "https://images.pexels.com/photos/733872/pexels-photo-733872.jpeg?auto=compress&cs=tinysrgb&w=400",
    content:
      "This AI-powered developement platform has revolutionized how we write code. The intelligente suggestions save us hours every day.",
  },
  {
    name: "Hamza hasni",
    role: "Web developer",
    Image: "https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg",
    content:
      "This AI-powered developement platform has revolutionized how we write code. The intelligente suggestions save us hours every day.",
  },
  {
    name: "malak Hasni",
    role: "junior Devloper",
    Image: "https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg",
    content:
      "This AI-powered developement platform has revolutionized how we write code. The intelligente suggestions save us hours every day.",
  },
];
export default function Testimonioles() {
  return (
    <section id="Testimoniales" className="relative py-16 sm:py-20 px-10 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row items-start gap-8 sm:gap-12 lg:gap-16">
          <div className="lg:w-1/2 w-full text-center lg:text-left">
            <h2 className="text-5xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6">
              What devlopers are <span className="underline decoration-sky-500 ">saying</span> about us
            </h2>
            <p className="text-gray-400 text-base text-xl sm:text-lg max-w-2xl mx-auto">
              Everything you need to build, test, and deploy applications with
              AI-powered developement tools.
            </p>
          </div>
          {/* testimoniales */}
          <div className="lg:w-1/2 w-full">
            <div className="flex flex-col gap-3 sm:gap-6">
              {users.map((user, key) => (
                <div
                  key={key}
                  className="bg-slate-900/50 p-4 sm:p-6 backdrop-blur-sm border border-slate-800 rounded-xl sm:rounded-2xl"
                >
                  <div className="flex items-start space-x-3 sm:space-x-4">
                    <div className="flex flex-shrink-0">
                      <div className="text-2xl sm:text-3xl lg:text-4xl font-bold bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
                        "
                      </div>
                    </div>
                    <div>
                      <p className="text-white/70 text-base sm:text-lg leading-relaxed mb-3 sm:mb-4">
                        {user.content}
                      </p>

                      <div className="flex items-center space-x-2 sm:space-x-3">
                        <img
                          src={user.Image}
                          alt={user.name}
                          className="w-10 h-10 sm:w-10 sm:h-10 rounded-full object-cover"
                        />
                        <div>
                          <h4 className="font-semibold text-white text-sm sm:text-base ">{user.name}</h4>
                          <p className="text-xs sm:text-sm text-gray-400">{user.role}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
