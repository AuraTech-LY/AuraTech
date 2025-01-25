import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link, useLocation } from 'react-router-dom';
import { Palette, Globe2, Menu, X, Github, Facebook, Instagram } from 'lucide-react';
import { useScrollReveal } from './hooks/useScrollReveal';
import { useSmoothScroll } from './hooks/useSmoothScroll';
import { Logo } from './components/Logo';
import { MouseGlow } from './components/MouseGlow';
import { BackgroundGlow } from './components/BackgroundGlow';
import { Projects } from './components/Projects';

function HomePage() {
  const heroRef = useScrollReveal();
  const servicesRef = useScrollReveal();
  const servicesGridRef = useScrollReveal();
  const aboutRef = useScrollReveal();
  const contactRef = useScrollReveal();

  return (
    <>
      <section className="pt-32 pb-20 px-4 sm:px-6">
        <div ref={heroRef} className="max-w-7xl mx-auto text-center scroll-reveal">
          <h1 className="text-3xl sm:text-4xl md:text-6xl font-bold mb-6 leading-tight">
            Crafting Digital Excellence<br />
            <span className="text-[#9F73C1]">One Pixel at a Time</span>
          </h1>
          <p className="text-lg sm:text-xl text-gray-400 mb-8 max-w-2xl mx-auto">
            We transform your vision into exceptional digital experiences through innovative design and cutting-edge technology solutions.
          </p>
          <Link to="/projects" className="btn-primary text-lg">View Our Projects</Link>
        </div>
      </section>

      <section id="services" className="py-16 sm:py-20 px-4 sm:px-6">
        <div className="max-w-7xl mx-auto">
          <div ref={servicesRef} className="scroll-reveal">
            <h2 className="text-2xl sm:text-3xl font-bold text-center mb-12 sm:mb-16">Our Services</h2>
          </div>
          <div 
            ref={servicesGridRef}
            className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 stagger-children scroll-reveal"
          >
            <div className="service-card">
              <Palette className="h-12 w-12 text-[#9F73C1] mb-4" />
              <h3 className="text-xl font-bold mb-2">Web Design</h3>
              <p className="text-gray-400">Beautiful, responsive designs that engage your audience and drive results.</p>
            </div>
            <div className="service-card">
              <Globe2 className="h-12 w-12 text-[#9F73C1] mb-4" />
              <h3 className="text-xl font-bold mb-2">Development</h3>
              <p className="text-gray-400">Clean, efficient code that brings your website to life with modern technologies.</p>
            </div>
            <div className="service-card">
              <Globe2 className="h-12 w-12 text-[#9F73C1] mb-4" />
              <h3 className="text-xl font-bold mb-2">Digital Strategy</h3>
              <p className="text-gray-400">Strategic solutions that help your business thrive in the digital landscape.</p>
            </div>
          </div>
        </div>
      </section>

      <section id="about" className="py-16 sm:py-20 px-4 sm:px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8 sm:gap-12">
            <div 
              ref={aboutRef}
              className="bg-white/5 backdrop-blur-lg rounded-2xl border border-white/10 p-6 sm:p-8 scroll-reveal"
            >
              <h2 className="text-2xl sm:text-3xl font-bold mb-6">About Us</h2>
              <p className="text-gray-400 mb-6">
                We're a team of passionate designers and developers dedicated to creating exceptional digital experiences. With years of industry expertise, we help businesses transform their online presence.
              </p>
              <div className="flex space-x-4">
                <a 
                  href="https://github.com/Aura-Tech-Libya" 
                  className="text-white hover:text-[#9F73C1] transition-colors p-2 -m-2"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Github className="h-6 w-6" />
                </a>
                <a 
                  href="https://www.facebook.com/auratech.ly" 
                  className="text-white hover:text-[#9F73C1] transition-colors p-2 -m-2"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Facebook className="h-6 w-6" />
                </a>
                <a 
                  href="https://www.instagram.com/auratech.ly" 
                  className="text-white hover:text-[#9F73C1] transition-colors p-2 -m-2"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Instagram className="h-6 w-6" />
                </a>
              </div>
            </div>
            <div 
              id="contact" 
              ref={contactRef}
              className="bg-white/5 backdrop-blur-lg rounded-2xl border border-white/10 p-6 sm:p-8 scroll-reveal"
            >
              <form className="space-y-4">
                <input
                  type="text"
                  placeholder="Name"
                  className="form-input"
                />
                <input
                  type="email"
                  placeholder="Email"
                  className="form-input"
                />
                <textarea
                  placeholder="Message"
                  rows={4}
                  className="form-input"
                ></textarea>
                <button type="submit" className="btn-primary w-full">
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

function Layout() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();
  const scrollToElement = useSmoothScroll();

  // Close mobile menu when clicking outside
  React.useEffect(() => {
    const handleClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (isMenuOpen && !target.closest('.mobile-menu') && !target.closest('.menu-button')) {
        setIsMenuOpen(false);
      }
    };

    document.addEventListener('click', handleClick);
    return () => document.removeEventListener('click', handleClick);
  }, [isMenuOpen]);

  // Prevent body scroll when mobile menu is open
  React.useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
  }, [isMenuOpen]);

  // Close mobile menu on route change
  React.useEffect(() => {
    setIsMenuOpen(false);
  }, [location]);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    scrollToElement(id);
    setIsMenuOpen(false);
  };

  return (
    <>
      <MouseGlow />
      <BackgroundGlow />
      <div className="grid-background" aria-hidden="true" />
      <div className="min-h-screen relative z-10">
        <header className="fixed w-full z-50 px-4 sm:px-6 top-4">
          <div className="max-w-5xl mx-auto">
            <div className="bg-white/5 backdrop-blur-lg rounded-full border border-white/10">
              <div className="flex justify-between items-center py-3 px-4 sm:px-6">
                <Link to="/">
                  <Logo />
                </Link>
                
                <nav className="hidden md:flex items-center space-x-8">
                  <a 
                    href="#services" 
                    className="nav-link relative group"
                    onClick={(e) => handleNavClick(e, 'services')}
                  >
                    Services
                    <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-[#9F73C1] transition-all duration-300 group-hover:w-full" />
                  </a>
                  <a 
                    href="#about" 
                    className="nav-link relative group"
                    onClick={(e) => handleNavClick(e, 'about')}
                  >
                    About
                    <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-[#9F73C1] transition-all duration-300 group-hover:w-full" />
                  </a>
                  <a 
                    href="#contact" 
                    className="nav-link relative group"
                    onClick={(e) => handleNavClick(e, 'contact')}
                  >
                    Contact
                    <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-[#9F73C1] transition-all duration-300 group-hover:w-full" />
                  </a>
                  <Link to="/projects" className="btn-primary">Projects</Link>
                </nav>

                <button 
                  className="md:hidden p-2 hover:bg-white/10 rounded-full transition-colors menu-button"
                  onClick={(e) => {
                    e.stopPropagation();
                    setIsMenuOpen(!isMenuOpen);
                  }}
                  aria-label="Toggle menu"
                >
                  {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                </button>
              </div>
            </div>

            {isMenuOpen && (
              <div className="md:hidden mt-2 mobile-menu">
                <nav className="bg-white/5 backdrop-blur-lg rounded-2xl border border-white/10 p-4 flex flex-col space-y-4 animate-in slide-in-from-top">
                  <a 
                    href="#services" 
                    className="nav-link px-4 py-3 -mx-4 rounded-xl hover:bg-white/5"
                    onClick={(e) => handleNavClick(e, 'services')}
                  >
                    Services
                  </a>
                  <a 
                    href="#about" 
                    className="nav-link px-4 py-3 -mx-4 rounded-xl hover:bg-white/5"
                    onClick={(e) => handleNavClick(e, 'about')}
                  >
                    About
                  </a>
                  <a 
                    href="#contact" 
                    className="nav-link px-4 py-3 -mx-4 rounded-xl hover:bg-white/5"
                    onClick={(e) => handleNavClick(e, 'contact')}
                  >
                    Contact
                  </a>
                  <Link 
                    to="/projects" 
                    className="btn-primary w-full text-center"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Projects
                  </Link>
                </nav>
              </div>
            )}
          </div>
        </header>

        <main>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/projects" element={<Projects />} />
          </Routes>
        </main>
      </div>
    </>
  );
}

export default function App() {
  return (
    <Router>
      <Layout />
    </Router>
  );
}