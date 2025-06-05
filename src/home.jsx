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
      <main >
        <HeroUploadSection />
        <TemplatesSection />
        <HowItWorksSection />
        <FAQSection />
      </main>
      <Footer />
    </div>
  );
}
