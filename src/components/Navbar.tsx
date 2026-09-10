import React, { useState, useEffect } from 'react';
import { NavLink, useLocation, Link } from 'react-router-dom';
import { Menu, X, ArrowUpRight, ShieldCheck, Terminal, FileDown, Activity } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

interface NavbarProps {
  onOpenCvModal: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenCvModal }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
  }, [location.pathname]);

  const navLinks = [
    { label: 'Capabilities', href: '#capabilities' },
    { label: 'Projects', href: '#projects' },
    { label: 'Experience', href: '#experience' },
    { label: 'Contact', href: '#contact' },
  ];

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    if (location.pathname !== '/') {
      // Allow standard navigation to home with hash
      return;
    }
    e.preventDefault();
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
    setIsOpen(false);
  };

  return (
    <header 
      id="site-navbar"
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-200 font-sans"
    >
      {/* Primary Navigation Bar */}
      <div 
        className={`transition-all duration-200 ${
          scrolled 
            ? 'bg-[#0B0F10]/95 backdrop-blur-md border-b border-[#1A242D] py-3.5 shadow-xl shadow-black/40' 
            : 'bg-[#0B0F10]/80 backdrop-blur-sm py-4 border-b border-[#151D24]'
        }`}
      >
        <div className="max-w-6xl mx-auto px-4 sm:px-6 flex items-center justify-between">
          {/* Identity Lockup */}
          <NavLink 
            to="/" 
            id="nav-logo-link"
            className="group flex items-center gap-2.5 text-[#F1F5F9] hover:text-white transition-colors"
          >
            <div className="w-8 h-8 rounded-lg bg-[#141C22] border border-[#222E38] flex items-center justify-center text-[#3ECF8E] group-hover:border-[#3ECF8E]/50 transition-colors shadow-sm">
              <span className="font-mono text-xs font-bold text-[#3ECF8E]">AN</span>
            </div>
            <div className="flex flex-col">
              <span className="text-sm font-semibold tracking-tight text-white flex items-center gap-1.5">
                {PERSONAL_INFO.name}
              </span>
              <span className="text-[11px] text-[#8598A8]">
                Founder's Office &middot; Operator
              </span>
            </div>
          </NavLink>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center gap-1 bg-[#10161C] border border-[#1C2630] rounded-full p-1 shadow-inner">
            {navLinks.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={(e) => handleNavClick(e, item.href)}
                id={`nav-link-${item.label.toLowerCase().replace(/[^a-z]/g, '-')}`}
                className="px-3.5 py-1.5 text-xs font-medium text-[#94A3B8] hover:text-white hover:bg-[#151D25] rounded-full transition-colors"
              >
                {item.label}
              </a>
            ))}
          </nav>

          {/* Direct Actions: Resume & Talk */}
          <div className="hidden md:flex items-center gap-2.5">
            <button
              type="button"
              id="nav-dossier-btn"
              onClick={onOpenCvModal}
              className="text-xs px-3.5 py-1.5 rounded-lg bg-[#141C22] hover:bg-[#1B2630] text-[#CBD5E1] hover:text-white border border-[#202C38] hover:border-[#3ECF8E]/40 transition-colors flex items-center gap-1.5"
            >
              <FileDown className="w-3.5 h-3.5 text-[#3ECF8E]" />
              <span>Resume</span>
            </button>

            <a
              href={PERSONAL_INFO.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              id="nav-linkedin-button"
              className="text-xs text-[#94A3B8] hover:text-white flex items-center gap-1 py-1 px-2 transition-colors"
            >
              <span>LinkedIn</span>
              <ArrowUpRight className="w-3 h-3" />
            </a>

            <a
              href={`mailto:${PERSONAL_INFO.email}`}
              id="nav-cta-talk"
              className="text-xs font-semibold px-3.5 py-1.5 rounded-lg text-[#0B0F10] bg-[#3ECF8E] hover:bg-[#34B87C] transition-all flex items-center gap-1 shadow-sm"
            >
              <span>Get in Touch</span>
            </a>
          </div>

          {/* Mobile Hamburger Toggle */}
          <button
            type="button"
            id="mobile-nav-toggle"
            aria-label="Toggle navigation menu"
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 rounded-lg bg-[#141C22] border border-[#202C38] text-[#94A3B8] hover:text-white"
          >
            {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {isOpen && (
        <div 
          id="mobile-nav-menu"
          className="md:hidden bg-[#0A0E12] border-b border-[#1F2C3A] px-6 py-5 space-y-4 shadow-2xl"
        >
          <div className="flex flex-col space-y-1.5">
            {navLinks.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={(e) => handleNavClick(e, item.href)}
                className="px-3 py-2.5 rounded-lg text-sm font-medium text-[#CBD5E1] hover:text-white hover:bg-[#151E28] flex items-center justify-between"
              >
                <span>{item.label}</span>
                <span className="font-mono text-xs text-[#64748B]">{item.href}</span>
              </a>
            ))}
          </div>

          <div className="pt-3 border-t border-[#1C2836] flex flex-col gap-2.5">
            <button
              type="button"
              onClick={() => { setIsOpen(false); onOpenCvModal(); }}
              className="w-full py-2.5 rounded-lg bg-[#141C22] border border-[#233140] text-xs font-medium text-[#CBD5E1] flex items-center justify-center gap-2"
            >
              <FileDown className="w-4 h-4 text-[#3ECF8E]" />
              <span>Download Resume</span>
            </button>
            <div className="flex items-center justify-between text-xs text-[#94A3B8] pt-1">
              <a
                href={PERSONAL_INFO.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-[#3ECF8E] flex items-center gap-1"
              >
                <span>LinkedIn</span>
                <ArrowUpRight className="w-3 h-3" />
              </a>
              <a
                href={`mailto:${PERSONAL_INFO.email}`}
                className="text-[#3ECF8E]"
              >
                {PERSONAL_INFO.email}
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
