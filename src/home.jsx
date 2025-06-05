// src/App.jsx
import { FAQSection, Footer } from "./components/footer";
import { HeroUploadSection } from "./components/hero";
import { Navbar } from "./components/navbar";
import { HowItWorksSection, TemplatesSection } from "./components/templates";
import "./home.css";
export function App() {
  return (
    <div className="main-container">
      <Navbar />
      <main>
        <div className="w100 df fdc aic gap-10 main-title">
          <h1>Create your professional fix photo</h1>
          <p>
            Upload your photo and swap faces with our AI-powered templates.
            Perfect for profile pictures, social media, and more!
          </p>
        </div>
        <HeroUploadSection />
        <TemplatesSection />
        <HowItWorksSection />
        <FAQSection />
      </main>
      <Footer />
    </div>
  );
}
