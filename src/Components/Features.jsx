//<></>
//{}
import SyntaxHighlighter from "react-syntax-highlighter";
import { nightOwl } from "react-syntax-highlighter/dist/esm/styles/hljs";

const features = [
  {
    title: "AI code Completion",
    description:
      "intelligent suggestions powered by advanced AI that learns from your coding patterns. Get real-time assistance with syntax, logic, and best practices.",
    CodeSnippit: `export default function Hero() {
      const [MousePosition, setMousePosition];
      useEffect(() => {
        function handleMouseMove(e) {
          setMousePosition({ x: e.clientX});
        }
      }, []);`,
    imagePosition: "left",
  },
  {
    title: "Automated Testing",
    description:
      "Generate comprehensive test suites automatically. Our AI analyzes your code and creates unit tests, integration tests, and edge case coverage.",
    CodeSnippit: ` default function testemonial() {
      const [MousePosition, setMousePosition];
      const [activeTab, setactiveTab] = useState("App.jsx");
      useEffect(() => {
        function handleMouseMove(e) {
          setMousePosition({ x: e.clientX);
        }
        window.addEventListener("mousemove");
        return () => window
      }, []);`,
    imagePosition: "right",
  },
  {
    title: "Smart Debugging",
    description:
      "Identify and fix bugs before they reach production. AI-powered error detection and resolution suggestions help you debug faster.",
    CodeSnippit: `export default function Hero() {
      const [activeTab, setactiveTab] = useState("App.jsx");
      useEffect(() => {
        function handleMouseMove(e) {
          setMousePosition({ x: e.clientX, y: e.clientY });
        }
    imagePosition: "left",`,
  },
];
export default function Features() {
  return (
    <section id="features" className="py-17 sm:py20 px-10 sm:px-6 lg:px-10 relative">
      <div className="absolute top-20 left-4 sm:left-10 w-78 sm:w-72 h-78 sm:h-72 bg-blue-500/30 rounded-full blur-3xl animate-pulse"></div>
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12 sm:mb-17 lg:mb-20">
          <h1 className="flex flex-col gap-3 text-5xl sm:text-4xl md:5xl lg:text-6xl font-bold mb-4 sm:mb-7">
            <span className="bg-gradient-to-b from-white to-gray-300 bg-clip-text text-transparent">
              Your Complete Devlopement
            </span>
            <span className="bg-gradient-to-b from-blue-500  to-cyan-200 bg-clip-text text-transparent">
              Workflow
            </span>
          </h1>
        </div>

        <div className="space-y-17 sm:space-y-20 lg:space-y-32">
          {features.map((feature, key) => (
            <div
              key={key}
              className={`flex flex-col lg:flex-row items-center gap-8 sm:gap-12 ${feature.imagePosition === "right" ? "lg:flex-row-reverse" : ""}`}
            >
              {/* Code Section */}
              <div className="flex-1 relative bg-gray-900/50 backdrop-blur-sm border border-gray-700/50 rounded-xl sm:rounded-2xl p-4 sm:p-6 overflow-hidden hover:border hover:border-blue-600/50 hover:shadow-[0_0_12px_rgba(37,99,235,0.35)] transition-all duration-300">
                <div className="bg-black/40 rounded-2xl flex-1 w-full">
                  <div className="ralative group">
                    {/* Ide interface */}
                    <div className="bg-gray-940 rounded-lg p-3 sm:p-4 font-mono text-xs sm:text-sm">
                      <div className="flex items-center space-x-1 sm:space-x-2 mb-3 sm:mb-4">
                        <div className="flex space-x-1 sm:space-x-2 items-center">
                          <div className="w-2 h-2 sm:w-3 sm:h-3 rounded-full bg-red-500" />
                          <div className="w-2 h-2 sm:w-3 sm:h-3 rounded-full bg-yellow-500" />
                          <div className="w-2 h-2 sm:w-3 sm:h-3 rounded-full bg-green-500" />
                        </div>
                        <span className="text-gray-400 ml-2 sm:ml-4 text-xs sm:text-sm">
                          {feature.title}
                        </span>
                      </div>
                      <div>
                        <SyntaxHighlighter
                          language="javascript"
                          style={nightOwl}
                          customStyle={{
                            margin: 0,
                            borderRadius: "8px",
                            fontSize: "0.74rem",
                            lineHeight: "1.4",
                            border: "1px solid #3c3c3c",
                            overflow: "hidden",
                            padding: "17px",
                          }}
                          wrapLines={true}
                        >
                          {feature.CodeSnippit}
                        </SyntaxHighlighter>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex-1 w-full">
                {/* text Section */}
                <div className="max-w-full mx-auto lg:mx-0 text-center lg:text-left">
                  <h2 className="text-4xl sm:text-3xl lg:text-4xl font-bold mb-4 sm:mb-6 text-white/80">
                    {feature.title}
                  </h2>
                  <p className="text-gray-300/40 text-base text-xl sm:text-lg leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
