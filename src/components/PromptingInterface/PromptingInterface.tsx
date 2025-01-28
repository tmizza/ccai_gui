import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FaLightbulb, FaCode, FaRocket, FaGithub, FaChevronDown, FaChevronUp, FaCheck } from "react-icons/fa";
import Background from "../Background/Background";

const PromptingInterface = () => {
  const [prompt, setPrompt] = useState("");
  const [appType, setAppType] = useState("");
  const [desktopPlatform, setDesktopPlatform] = useState("");
  const [webBackend, setWebBackend] = useState("");
  const [webFrontend, setWebFrontend] = useState("");
  const [isTechConfigExpanded, setIsTechConfigExpanded] = useState(true);
  const [isGitHubConnected, setIsGitHubConnected] = useState(false);
  const [isInstructionsExpanded, setIsInstructionsExpanded] = useState(true); // New state for instructions
  const navigate = useNavigate();

  const handleGenerate = () => {
    navigate("/generation-result", {
      state: {
        prompt,
        repoUrl: "https://github.com/your-repo",
        description: "This is a detailed description...",
        rawOutput: "// Raw generated code output goes here",
      },
    });
  };

  const handleConnectGitHub = () => {
    setIsGitHubConnected(true);
  };

  return (
    <div className="relative min-h-screen bg-primary overflow-hidden font-tomorrow">
      <Background />
      <div className="mt-10 relative z-40 flex flex-col items-center justify-center px-4 pt-16 md:pt-24 pb-24 md:pb-32">
        <div className="mb-24 text-center max-w-4xl space-y-4 md:space-y-8 w-full">
          <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold text-textPrimary leading-tight animate-fade-in-up">
            Generate Project
          </h1>
          <div className="w-full bg-secondary/70 border border-textPrimary/20 rounded-2xl shadow-card backdrop-blur-md">
            <div
              className="flex items-center justify-between p-6 cursor-pointer"
              onClick={() => setIsInstructionsExpanded(!isInstructionsExpanded)}
            >
              <h2 className="text-xl sm:text-2xl font-bold text-accent">Instructions</h2>
              <button className="text-textPrimary/80 hover:text-accent transition-colors">
                {isInstructionsExpanded ? <FaChevronUp size={24} /> : <FaChevronDown size={24} />}
              </button>
            </div>
            <div
              className={`transition-all duration-300 ease-in-out overflow-hidden ${
                isInstructionsExpanded ? "max-h-120" : "max-h-0"
              }`}
            >
              <div className="px-6 pb-6 space-y-6">
                <ul className="space-y-6">
                  <li className="flex items-start space-x-6">
                    <div className="p-3 bg-accent/10 rounded-xl flex-shrink-0">
                      <FaLightbulb className="w-7 h-7 text-accent" />
                    </div>
                    <div className="flex-1">
                      <p className="text-sm sm:text-base font-medium text-textPrimary text-left">Describe your app idea in the text box below</p>
                      <p className="text-xs sm:text-sm text-textPrimary/80 text-left">Be as detailed as possible to get the best results</p>
                    </div>
                  </li>
                  <li className="flex items-start space-x-6">
                    <div className="p-3 bg-accent/10 rounded-xl flex-shrink-0">
                      <FaCode className="w-7 h-7 text-accent" />
                    </div>
                    <div className="flex-1">
                      <p className="text-sm sm:text-base font-medium text-textPrimary text-left">Select your desired app type (optional)</p>
                      <p className="text-xs sm:text-sm text-textPrimary/80 text-left">Choose your mobile / desktop OS, or specify languages for web apps</p>
                    </div>
                  </li>
                  <li className="flex items-start space-x-8">
                    <div className="p-3 bg-accent/10 rounded-xl flex-shrink-0">
                      <FaGithub className="w-7 h-7 text-accent" />
                    </div>
                    <div className="flex-1">
                      <p className="text-sm sm:text-base font-medium text-textPrimary text-left">Connect your GitHub account to deploy to your own repository</p>
                      <p className="text-xs sm:text-sm text-textPrimary/80 text-left">Click the "GitHub Login" button in the top right, or down below before generating</p>
                    </div>
                  </li>
                  <li className="flex items-start space-x-8">
                    <div className="p-3 bg-accent/10 rounded-xl flex-shrink-0">
                      <FaRocket className="w-7 h-7 text-accent" />
                    </div>
                    <div className="flex-1">
                      <p className="text-sm sm:text-base font-medium text-textPrimary text-left">Click "Generate Code" to create your app</p>
                      <p className="text-xs sm:text-sm text-textPrimary/80 text-left">Sit back and watch your idea come to life!</p>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="w-full bg-secondary/70 border border-textPrimary/20 rounded-2xl shadow-card backdrop-blur-md p-6">
            <textarea
              className="w-full h-56 p-5 bg-primary/50 text-textPrimary rounded-xl border border-textPrimary/20 focus:border-accent focus:outline-none focus:ring-2 focus:ring-accent/50 placeholder:text-textPrimary/50 shadow-input resize-none"
              placeholder="Describe your app idea in detail..."
              value={prompt}
              onChange={(e) => setPrompt(e.target.value)}
            />
          </div>
          <div className="w-full bg-secondary/70 border border-textPrimary/20 rounded-2xl shadow-card backdrop-blur-md overflow-hidden">
            <div
              className="p-6 cursor-pointer flex justify-between items-center"
              onClick={() => setIsTechConfigExpanded(!isTechConfigExpanded)}
            >
              <h2 className="text-2xl font-bold text-accent">Technology Configuration</h2>
              <button className="text-textPrimary/80 hover:text-accent transition-colors">
                {isTechConfigExpanded ? <FaChevronUp size={24} /> : <FaChevronDown size={24} />}
              </button>
            </div>

            <div className={`transition-all duration-300 ${isTechConfigExpanded ? "max-h-[500px]" : "max-h-0"}`}>
              <div className="px-6 pb-6 space-y-6">
                <div className="space-y-3">
                  <label className="block text-sm font-medium text-textPrimary/80">App Type</label>
                  <select
                    className="w-full p-3 bg-primary/50 text-textPrimary rounded-xl border border-textPrimary/20 focus:border-accent focus:outline-none focus:ring-2 focus:ring-accent/50 shadow-input"
                    value={appType}
                    onChange={(e) => setAppType(e.target.value)}
                  >
                    <option value="">Select App Type</option>
                    <option value="Desktop">Desktop</option>
                    <option value="Web">Web</option>
                    <option value="IOS">iOS</option>
                    <option value="Android">Android</option>
                  </select>
                </div>

                {appType === "Desktop" && (
                  <div className="space-y-3 animate-fade-in-up">
                    <label className="block text-sm font-medium text-textPrimary/80">Desktop Platform</label>
                    <select
                      className="w-full p-3 bg-primary/50 text-textPrimary rounded-xl border border-textPrimary/20 focus:border-accent focus:outline-none focus:ring-2 focus:ring-accent/50 shadow-input"
                      value={desktopPlatform}
                      onChange={(e) => setDesktopPlatform(e.target.value)}
                    >
                      <option value="">Select Platform</option>
                      <option value="Mac">Mac (Tested)</option>
                      <option value="Windows">Windows (Tested)</option>
                      <option value="Linux">Linux (Beta)</option>
                    </select>
                  </div>
                )}

                {appType === "Web" && (
                  <>
                    <div className="space-y-3 animate-fade-in-up">
                      <label className="block text-sm font-medium text-textPrimary/80">Back-end Language</label>
                      <select
                        className="w-full p-3 bg-primary/50 text-textPrimary rounded-xl border border-textPrimary/20 focus:border-accent focus:outline-none focus:ring-2 focus:ring-accent/50 shadow-input"
                        value={webBackend}
                        onChange={(e) => setWebBackend(e.target.value)}
                      >
                        <option value="">Select Back-end</option>
                        <option value="Node.js">Node.js</option>
                        <option value="Python">Python</option>
                        <option value="Ruby">Ruby</option>
                        <option value="Java">Java</option>
                        <option value="Go">Go</option>
                      </select>
                    </div>

                    <div className="space-y-3 animate-fade-in-up">
                      <label className="block text-sm font-medium text-textPrimary/80">Front-end Language</label>
                      <select
                        className="w-full p-3 bg-primary/50 text-textPrimary rounded-xl border border-textPrimary/20 focus:border-accent focus:outline-none focus:ring-2 focus:ring-accent/50 shadow-input"
                        value={webFrontend}
                        onChange={(e) => setWebFrontend(e.target.value)}
                      >
                        <option value="">Select Front-end</option>
                        <option value="React">React</option>
                        <option value="Vue">Vue</option>
                        <option value="Angular">Angular</option>
                        <option value="Svelte">Svelte</option>
                      </select>
                    </div>
                  </>
                )}
              </div>
            </div>
          </div>

          <div className="flex flex-col md:flex-row items-center justify-center gap-4 pt-12 w-full">
            {/* GitHub Button */}
            <button
              className={`${
                isGitHubConnected
                  ? "bg-green-500/10 border-green-500 text-green-500"
                  : "bg-transparent border-2 border-accent text-accent hover:bg-accent/10"
              } px-8 py-4 rounded-2xl text-lg font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg shadow-accent/20 flex items-center justify-center space-x-2 w-full md:w-auto`}
              onClick={handleConnectGitHub}
            >
              <FaGithub className="w-6 h-6" />
              <span>{isGitHubConnected ? "Connected" : "Connect GitHub"}</span>
              {isGitHubConnected && <FaCheck className="w-6 h-6 text-green-500" />}
            </button>

            {/* Generate Code Button */}
            <button
              className="bg-accent hover:bg-accent/90 text-white px-8 py-4 rounded-2xl text-lg font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg shadow-accent/20 w-full md:w-auto"
              onClick={handleGenerate}
            >
              Generate Project
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PromptingInterface;