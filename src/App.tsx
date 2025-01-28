import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HeroSection from "./components/HeroSection/HeroSection";
import PromptingInterface from "./components/PromptingInterface/PromptingInterface";
import FAQ from "./components/FAQ/FAQ";
import Docs from "./components/Docs/Docs";
import ProjectsList from "./components/ProjectsList/ProjectsList";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import Background from "./components/Background/Background";
import GenerationResult from "./components/GenerationResult/GenerationResult";
import SocialsPill from "./components/SocialsPill/SocialsPill"; // Import the new component

const App = () => {
  return (
    <Router>


      {/* Navbar is outside Routes so it appears on all pages */}
      <Navbar />

      {/* Socials Pill Component */}
      <SocialsPill />

      {/* Main Content */}
      <div className="flex flex-col min-h-screen">
        <Routes>
          <Route path="/" element={<HeroSection />} />
          <Route path="/prompt" element={<PromptingInterface />} />
          <Route path="/docs" element={<Docs />} />
          <Route path="/faq" element={<FAQ />} />
          <Route path="/projects" element={<ProjectsList />} />

          {/* Add the new route for GenerationResult */}
          <Route
            path="/generation-result"
            element={
              <GenerationResult/>
            }
          />
        </Routes>
      </div>
      {/* Background Component */}
      <Background />
      
      {/* Footer is outside Routes so it appears on all pages */}
      <Footer />
    </Router>
  );
};

export default App;