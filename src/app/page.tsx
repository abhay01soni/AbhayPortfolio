import Navbar from "@/components/Navbar";
import SocialSidebar from "@/components/SocialSidebar";
import EmailSidebar from "@/components/EmailSidebar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-[var(--bg)] text-[var(--text-muted)] selection:bg-[var(--accent)] selection:text-[#F1EEFF] relative">
      {/* Skip to Main Content Link for WCAG Accessibility */}
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-50 focus:px-4 focus:py-2 focus:bg-[var(--accent)] focus:text-[#F1EEFF] focus:font-mono focus:text-xs focus:rounded-lg shadow-lg"
      >
        Skip to main content
      </a>

      {/* Sticky Top Navbar (Home, About, Projects, Contact) */}
      <Navbar />

      {/* Fixed Left Social Sidebar (Desktop) */}
      <SocialSidebar />

      {/* Fixed Right Email Sidebar (Desktop) */}
      <EmailSidebar />

      {/* Main Content Area */}
      <main
        id="main-content"
        role="main"
        className="flex-grow w-full max-w-6xl mx-auto px-6 sm:px-8"
      >
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Contact />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
