import React, { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { CvModal } from './components/CvModal';
import { HomePage } from './pages/HomePage';
import { WorkPage } from './pages/WorkPage';
import { ProjectDetailPage } from './pages/ProjectDetailPage';
import { WritingPage } from './pages/WritingPage';
import { ExperiencePage } from './pages/ExperiencePage';

// Scroll restoration component on route changes
function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
  }, [pathname]);

  return null;
}

export default function App() {
  const [isCvModalOpen, setIsCvModalOpen] = useState(false);

  return (
    <BrowserRouter>
      <ScrollToTop />
      <div className="min-h-screen flex flex-col bg-[#0B0F10] text-[#E7ECEE] selection:bg-[#3ECF8E]/20 selection:text-[#3ECF8E]">
        {/* Navigation */}
        <Navbar onOpenCvModal={() => setIsCvModalOpen(true)} />

        {/* Main Content Area */}
        <main className="flex-1 pt-16 sm:pt-20">
          <Routes>
            <Route path="/" element={<HomePage onOpenCvModal={() => setIsCvModalOpen(true)} />} />
            <Route path="/work" element={<WorkPage />} />
            <Route path="/work/:slug" element={<ProjectDetailPage />} />
            <Route path="/writing" element={<WritingPage />} />
            <Route path="/experience" element={<ExperiencePage onOpenCvModal={() => setIsCvModalOpen(true)} />} />
            {/* Catch-all fallback */}
            <Route path="*" element={<HomePage onOpenCvModal={() => setIsCvModalOpen(true)} />} />
          </Routes>
        </main>

        {/* Persistent Footer with Contact */}
        <Footer onOpenCvModal={() => setIsCvModalOpen(true)} />

        {/* CV Modal / Download dialog */}
        <CvModal 
          isOpen={isCvModalOpen} 
          onClose={() => setIsCvModalOpen(false)} 
        />
      </div>
    </BrowserRouter>
  );
}
