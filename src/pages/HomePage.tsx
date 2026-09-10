import React, { useState, useRef } from 'react';
import { 
  ArrowRight, ArrowUpRight, FileDown, ShieldCheck, Layers, 
  Sparkles, ExternalLink, ChevronRight, Upload, Camera, 
  Check, Copy, Mail, Target, Zap, Briefcase, GraduationCap, Video, Globe
} from 'lucide-react';
import { 
  PERSONAL_INFO, CAPABILITIES, PROJECTS, TELEMETRY_METRICS 
} from '../data/portfolioData';
import { Tag } from '../components/Tag';
import { ProjectModal } from '../components/ProjectModal';
import { Project } from '../types';

interface HomePageProps {
  onOpenCvModal: () => void;
}

export const HomePage: React.FC<HomePageProps> = ({ onOpenCvModal }) => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [activeCapabilityFilter, setActiveCapabilityFilter] = useState<'all' | 'commercial' | 'security' | 'builds'>('all');
  const [activeProjectFilter, setActiveProjectFilter] = useState<'all' | 'live' | 'initiatives'>('all');
  const [copiedEmail, setCopiedEmail] = useState(false);

  // Photo management
  const [photoSource, setPhotoSource] = useState<string>(() => {
    return localStorage.getItem('anushka_profile_photo') || '';
  });
  const [photoError, setPhotoError] = useState(false);
  const [isDragging, setIsDragging] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleFileUpload = (file: File) => {
    if (!file) return;
    const reader = new FileReader();
    reader.onload = (e) => {
      const result = e.target?.result as string;
      if (result) {
        setPhotoSource(result);
        setPhotoError(false);
        try {
          localStorage.setItem('anushka_profile_photo', result);
        } catch (err) {
          console.warn('Unable to cache photo in localStorage', err);
        }
      }
    };
    reader.readAsDataURL(file);
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(false);
    if (e.dataTransfer.files && e.dataTransfer.files.length > 0) {
      const file = e.dataTransfer.files[0];
      if (file.type.startsWith('image/')) {
        handleFileUpload(file);
      }
    }
  };

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(true);
  };

  const handleDragLeave = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(false);
  };

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(PERSONAL_INFO.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  // Filtered Capabilities
  const capabilitiesList = [
    {
      id: 'commercial',
      title: 'Commercial Strategy & Enterprise RFPs',
      category: 'commercial' as const,
      summary: 'Pitched, scoped, and closed enterprise cybersecurity deals with CERT-In and BFSI institutions. Structured technical proposal qualification and partner sales alignment.',
      metricBadge: '₹3 Cr Portfolio Managed',
      icon: Target,
    },
    {
      id: 'security',
      title: 'Cybersecurity Assurance & Audit Operations',
      category: 'security' as const,
      summary: 'End-to-end management of VAPT, architecture reviews, SOC 1/2, and ISAE 3000/3402 audits, translating technical risk into board-ready assurance.',
      metricBadge: '65+ Global Engagements Led',
      icon: ShieldCheck,
    },
    {
      id: 'workflows',
      title: 'Cross-Functional Delivery Architecture',
      category: 'commercial' as const,
      summary: 'Built real-time capacity and tracking dashboards from scratch, aligning partners, technical auditors, and clients to coordinate multi-stakeholder delivery.',
      metricBadge: '15+ Technical Auditors Coordinated',
      icon: Zap,
    },
    {
      id: 'builds',
      title: '0-to-1 Application Building & AI Workflows',
      category: 'builds' as const,
      summary: 'Ideated, architected, and launched live AI-assisted software applications, conducting user research, interface design, and functional iteration.',
      metricBadge: '3 Live Apps Shipped',
      icon: Layers,
    },
  ];

  const filteredCapabilities = capabilitiesList.filter(c => {
    if (activeCapabilityFilter === 'all') return true;
    return c.category === activeCapabilityFilter;
  });

  // Filtered Projects
  const filteredProjects = PROJECTS.filter(p => {
    if (activeProjectFilter === 'live') return p.status === 'live' && p.liveUrl && p.liveUrl !== '#';
    if (activeProjectFilter === 'initiatives') return p.status === 'initiative';
    return true;
  });

  return (
    <div className="space-y-20 sm:space-y-28 pb-20">
      {/* 01 // HERO SECTION */}
      <section className="pt-6 sm:pt-12">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="flex flex-col-reverse lg:flex-row items-center justify-between gap-10 lg:gap-14">
            
            {/* Left Column: Focused Pitch */}
            <div className="flex-1 space-y-6 max-w-2xl">
              {/* Title & One-Liner */}
              <div className="space-y-3">
                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white leading-tight">
                  {PERSONAL_INFO.name}
                </h1>
                <p className="text-xl sm:text-2xl text-[#3ECF8E] font-medium leading-snug">
                  Commercial Strategy, Cybersecurity Assurance & Technology Operations.
                </p>
              </div>

              {/* Short Background Summary */}
              <p className="text-sm sm:text-base text-[#94A3B8] leading-relaxed">
                Managed a ₹3 Cr global cybersecurity assurance portfolio across 65+ enterprise engagements at Crowe Advisory. Currently pursuing PGP in Technology & Business Management at Masters' Union.
              </p>

              {/* Action Buttons */}
              <div className="flex flex-wrap items-center gap-3 pt-2">
                <a
                  href="#projects"
                  id="hero-explore-projects-btn"
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-[#3ECF8E] hover:bg-[#34B87C] text-[#0B0F10] text-xs font-semibold transition-all shadow-sm"
                >
                  <span>Explore Work</span>
                  <ArrowRight className="w-4 h-4" />
                </a>

                <a
                  href="#experience"
                  className="inline-flex items-center gap-1.5 px-4 py-2.5 rounded-lg bg-[#141C22] hover:bg-[#1B2630] text-[#CBD5E1] hover:text-white text-xs border border-[#222E3A] transition-colors"
                >
                  <span>Track Record</span>
                </a>

                <button
                  type="button"
                  id="hero-download-cv-btn"
                  onClick={onOpenCvModal}
                  className="inline-flex items-center gap-1.5 px-4 py-2.5 rounded-lg bg-[#141C22] hover:bg-[#1B2630] text-[#CBD5E1] hover:text-white text-xs border border-[#222E3A] transition-colors"
                >
                  <FileDown className="w-3.5 h-3.5 text-[#3ECF8E]" />
                  <span>Resume</span>
                </button>
              </div>
            </div>

            {/* Right Column: Clean Portrait Container */}
            <div className="w-full sm:w-80 lg:w-96 shrink-0">
              <div 
                className={`relative rounded-2xl p-1 bg-[#121921] border transition-all ${
                  isDragging 
                    ? 'border-[#3ECF8E] ring-2 ring-[#3ECF8E]/30 scale-[1.02]' 
                    : 'border-[#1C2834]'
                }`}
                onDrop={handleDrop}
                onDragOver={handleDragOver}
                onDragLeave={handleDragLeave}
              >
                <input
                  type="file"
                  ref={fileInputRef}
                  onChange={(e) => {
                    if (e.target.files && e.target.files[0]) {
                      handleFileUpload(e.target.files[0]);
                    }
                  }}
                  accept="image/jpeg,image/png,image/webp,image/jpg"
                  className="hidden"
                />

                <div className="relative rounded-xl overflow-hidden bg-[#0A0E13] border border-[#18232F]">
                  <div className="relative w-full aspect-[4/5] overflow-hidden group">
                    {photoSource && !photoError ? (
                      <>
                        <img
                          src={photoSource}
                          alt="Anushka Nath"
                          className="w-full h-full object-cover object-center"
                          referrerPolicy="no-referrer"
                          onError={() => setPhotoError(true)}
                        />
                        <div className="absolute top-2.5 right-2.5 flex items-center gap-1.5 opacity-0 group-hover:opacity-100 transition-opacity">
                          <button
                            type="button"
                            onClick={() => fileInputRef.current?.click()}
                            title="Update photo"
                            className="inline-flex items-center gap-1 px-2.5 py-1 rounded-md bg-[#0B0F10]/90 hover:bg-[#0B0F10] text-[#CBD5E1] hover:text-white text-[10px] font-medium backdrop-blur-sm border border-[#2A3746] transition-colors"
                          >
                            <Camera className="w-3 h-3 text-[#3ECF8E]" />
                            <span>Change Photo</span>
                          </button>
                        </div>
                      </>
                    ) : (
                      <div 
                        onClick={() => fileInputRef.current?.click()}
                        className="w-full h-full flex flex-col items-center justify-center p-6 text-center bg-[#101720] text-[#94A3B8] space-y-4 cursor-pointer hover:bg-[#131C27] transition-colors"
                      >
                        <div className="w-20 h-20 rounded-full bg-[#16212D] border-2 border-[#3ECF8E]/40 flex items-center justify-center text-[#3ECF8E] shadow-lg">
                          <span className="text-2xl font-bold font-mono tracking-wider">AN</span>
                        </div>
                        <div className="space-y-1">
                          <span className="font-bold text-white text-base block">
                            Anushka Nath
                          </span>
                          <span className="text-xs text-[#3ECF8E] block font-medium">
                            Commercial Strategy & Cybersecurity Assurance
                          </span>
                        </div>
                        <button
                          type="button"
                          onClick={(e) => {
                            e.stopPropagation();
                            fileInputRef.current?.click();
                          }}
                          className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-[#18232F] hover:bg-[#202E3D] text-[#CBD5E1] hover:text-white text-xs border border-[#28394A] transition-colors mt-2"
                        >
                          <Camera className="w-3.5 h-3.5 text-[#3ECF8E]" />
                          <span>Upload Photo</span>
                        </button>
                      </div>
                    )}
                  </div>

                  {/* Profile Card Label */}
                  <div className="p-3.5 bg-[#0C1217] border-t border-[#18232E] space-y-1">
                    <div className="flex items-center justify-between text-xs">
                      <span className="text-white font-bold">{PERSONAL_INFO.name}</span>
                      <span className="text-[11px] text-[#3ECF8E] font-medium flex items-center gap-1">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#3ECF8E]" />
                        Masters' Union
                      </span>
                    </div>
                    <div className="text-[11px] text-[#8598A8]">
                      Commercial Strategy &middot; Cybersecurity Assurance
                    </div>
                  </div>
                </div>
              </div>
            </div>

          </div>

          {/* 4 Outcome Metrics */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-3.5 sm:gap-4 pt-12 sm:pt-16">
            <div className="p-4 sm:p-5 rounded-xl bg-[#0E151B] border border-[#1A2530] hover:border-[#3ECF8E]/30 transition-colors">
              <div className="text-2xl sm:text-3xl font-bold text-white tracking-tight">₹3 Cr</div>
              <div className="text-xs font-medium text-[#CBD5E1] mt-1">Annual Portfolio</div>
              <div className="text-[11px] text-[#64748B] mt-0.5">Crowe Advisory &middot; Global Scope</div>
            </div>

            <div className="p-4 sm:p-5 rounded-xl bg-[#0E151B] border border-[#1A2530] hover:border-[#3ECF8E]/30 transition-colors">
              <div className="text-2xl sm:text-3xl font-bold text-[#3ECF8E] tracking-tight">65+</div>
              <div className="text-xs font-medium text-[#CBD5E1] mt-1">Audit Engagements</div>
              <div className="text-[11px] text-[#64748B] mt-0.5">VAPT, SOC 1/2, ISAE 3000/3402</div>
            </div>

            <div className="p-4 sm:p-5 rounded-xl bg-[#0E151B] border border-[#1A2530] hover:border-[#3ECF8E]/30 transition-colors">
              <div className="text-2xl sm:text-3xl font-bold text-white tracking-tight">3 Live</div>
              <div className="text-xs font-medium text-[#CBD5E1] mt-1">Shipped Applications</div>
              <div className="text-[11px] text-[#64748B] mt-0.5">HomeBody, Scribbleverse, Vestelle</div>
            </div>

            <div className="p-4 sm:p-5 rounded-xl bg-[#0E151B] border border-[#1A2530] hover:border-[#3ECF8E]/30 transition-colors">
              <div className="text-2xl sm:text-3xl font-bold text-[#3ECF8E] tracking-tight">15+</div>
              <div className="text-xs font-medium text-[#CBD5E1] mt-1">Technical Auditors</div>
              <div className="text-[11px] text-[#64748B] mt-0.5">Coordinated Across EMEA & APAC</div>
            </div>
          </div>

        </div>
      </section>

      {/* 02 // WHAT I ACTUALLY DO (Chapter 1) */}
      <section id="capabilities" className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="space-y-6">
          <div className="border-b border-[#18232F] pb-5 flex flex-col sm:flex-row sm:items-end justify-between gap-4">
            <div>
              <span className="text-xs font-mono text-[#3ECF8E] uppercase tracking-wider block">
                Chapter 01 // CAPABILITIES
              </span>
              <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight pt-1">
                What I actually do
              </h2>
              <p className="text-xs sm:text-sm text-[#8598A8] mt-1">
                Core competencies built through enterprise advisory engagements and 0-to-1 execution.
              </p>
            </div>

            {/* Filter Pills */}
            <div className="flex flex-wrap items-center gap-1.5 bg-[#0E151B] border border-[#1A2530] p-1 rounded-lg text-xs">
              <button
                type="button"
                onClick={() => setActiveCapabilityFilter('all')}
                className={`px-3 py-1 rounded-md transition-colors ${
                  activeCapabilityFilter === 'all'
                    ? 'bg-[#3ECF8E] text-[#0B0F10] font-semibold shadow-sm'
                    : 'text-[#94A3B8] hover:text-white'
                }`}
              >
                All
              </button>
              <button
                type="button"
                onClick={() => setActiveCapabilityFilter('commercial')}
                className={`px-3 py-1 rounded-md transition-colors ${
                  activeCapabilityFilter === 'commercial'
                    ? 'bg-[#3ECF8E] text-[#0B0F10] font-semibold shadow-sm'
                    : 'text-[#94A3B8] hover:text-white'
                }`}
              >
                Commercial Strategy
              </button>
              <button
                type="button"
                onClick={() => setActiveCapabilityFilter('security')}
                className={`px-3 py-1 rounded-md transition-colors ${
                  activeCapabilityFilter === 'security'
                    ? 'bg-[#3ECF8E] text-[#0B0F10] font-semibold shadow-sm'
                    : 'text-[#94A3B8] hover:text-white'
                }`}
              >
                Cybersecurity Assurance
              </button>
              <button
                type="button"
                onClick={() => setActiveCapabilityFilter('builds')}
                className={`px-3 py-1 rounded-md transition-colors ${
                  activeCapabilityFilter === 'builds'
                    ? 'bg-[#3ECF8E] text-[#0B0F10] font-semibold shadow-sm'
                    : 'text-[#94A3B8] hover:text-white'
                }`}
              >
                0-to-1 Builds
              </button>
            </div>
          </div>

          {/* Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-5">
            {filteredCapabilities.map((cap) => {
              const Icon = cap.icon;
              return (
                <div
                  key={cap.id}
                  className="p-5 sm:p-6 rounded-xl bg-[#0E151B] border border-[#1A2530] hover:border-[#3ECF8E]/40 transition-all space-y-4 group flex flex-col justify-between"
                >
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <div className="w-10 h-10 rounded-lg bg-[#141C23] border border-[#202D3A] flex items-center justify-center group-hover:border-[#3ECF8E]/40 transition-colors">
                        <Icon className="w-5 h-5 text-[#3ECF8E]" />
                      </div>
                      <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-[11px] font-medium bg-[#141D26] text-[#3ECF8E] border border-[#202E3C]">
                        {cap.metricBadge}
                      </span>
                    </div>

                    <h3 className="text-base sm:text-lg font-bold text-white group-hover:text-[#3ECF8E] transition-colors">
                      {cap.title}
                    </h3>

                    <p className="text-xs sm:text-sm text-[#94A3B8] leading-relaxed">
                      {cap.summary}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 03 // WHERE THOSE SKILLS SHIPPED (Chapter 2 - Projects) */}
      <section id="projects" className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="space-y-6">
          <div className="border-b border-[#18232F] pb-5 flex flex-col sm:flex-row sm:items-end justify-between gap-4">
            <div>
              <span className="text-xs font-mono text-[#3ECF8E] uppercase tracking-wider block">
                Chapter 02 // SHIPPED WORK
              </span>
              <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight pt-1">
                Where those skills shipped
              </h2>
              <p className="text-xs sm:text-sm text-[#8598A8] mt-1">
                Hands-on applications, systems, and social initiatives built and deployed.
              </p>
            </div>

            {/* Filter Pills */}
            <div className="flex items-center gap-1.5 bg-[#0E151B] border border-[#1A2530] p-1 rounded-lg text-xs">
              <button
                type="button"
                onClick={() => setActiveProjectFilter('all')}
                className={`px-3 py-1 rounded-md transition-colors ${
                  activeProjectFilter === 'all'
                    ? 'bg-[#3ECF8E] text-[#0B0F10] font-semibold shadow-sm'
                    : 'text-[#94A3B8] hover:text-white'
                }`}
              >
                All ({PROJECTS.length})
              </button>
              <button
                type="button"
                onClick={() => setActiveProjectFilter('live')}
                className={`px-3 py-1 rounded-md transition-colors ${
                  activeProjectFilter === 'live'
                    ? 'bg-[#3ECF8E] text-[#0B0F10] font-semibold shadow-sm'
                    : 'text-[#94A3B8] hover:text-white'
                }`}
              >
                Live Applications (3)
              </button>
              <button
                type="button"
                onClick={() => setActiveProjectFilter('initiatives')}
                className={`px-3 py-1 rounded-md transition-colors ${
                  activeProjectFilter === 'initiatives'
                    ? 'bg-[#3ECF8E] text-[#0B0F10] font-semibold shadow-sm'
                    : 'text-[#94A3B8] hover:text-white'
                }`}
              >
                Impact Initiatives (2)
              </button>
            </div>
          </div>

          {/* Projects Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {filteredProjects.map((project) => (
              <div
                key={project.id}
                className="p-5 sm:p-6 rounded-xl bg-[#0E151B] border border-[#1A2530] hover:border-[#3ECF8E]/30 transition-all flex flex-col justify-between space-y-4 group"
              >
                <div className="space-y-3">
                  {/* Card Header Status */}
                  <div className="flex items-center justify-between text-xs">
                    <span className="text-[#8598A8] text-[11px] font-medium">
                      {project.role}
                    </span>
                    {project.status === 'live' ? (
                      <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-[10px] bg-[#3ECF8E]/10 text-[#3ECF8E] border border-[#3ECF8E]/30 font-medium">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#3ECF8E]" />
                        Live Application
                      </span>
                    ) : (
                      <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-[10px] bg-[#141D26] text-[#CBD5E1] border border-[#202E3C] font-medium">
                        Community Initiative
                      </span>
                    )}
                  </div>

                  {/* Project Title & Tagline */}
                  <div>
                    <h3 className="text-lg sm:text-xl font-bold text-white group-hover:text-[#3ECF8E] transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-[#CBD5E1] mt-1 leading-relaxed">
                      {project.tagline}
                    </p>
                  </div>

                  {/* Solution Summary */}
                  <p className="text-xs text-[#94A3B8] leading-relaxed line-clamp-2">
                    {project.solution}
                  </p>
                </div>

                {/* Card Footer Actions (Strictly NO "Project Intel"!) */}
                <div className="pt-3 border-t border-[#16212B] space-y-3">
                  <div className="flex flex-wrap gap-1.5">
                    {project.tags.slice(0, 3).map((t) => (
                      <span key={t} className="px-2 py-0.5 rounded text-[10px] bg-[#121921] text-[#8598A8] border border-[#1C2733]">
                        #{t}
                      </span>
                    ))}
                  </div>

                  <div className="flex flex-wrap items-center justify-between gap-2 pt-1">
                    {/* For Book The Gap, render both website and youtube links */}
                    {project.id === 'book-the-gap' ? (
                      <div className="flex items-center gap-2 w-full justify-between">
                        <a
                          href="https://bookthegap.weebly.com/"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1 px-3 py-1.5 rounded-md bg-[#141C22] hover:bg-[#1B2630] text-[#CBD5E1] hover:text-white text-xs font-medium border border-[#202C38] transition-colors"
                        >
                          <Globe className="w-3 h-3 text-[#3ECF8E]" />
                          <span>Initiative Site</span>
                        </a>
                        <a
                          href="https://www.youtube.com/watch?v=yPln43BsJro"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1 px-3 py-1.5 rounded-md bg-[#3ECF8E]/10 hover:bg-[#3ECF8E]/20 text-[#3ECF8E] border border-[#3ECF8E]/30 text-xs font-semibold transition-colors"
                        >
                          <Video className="w-3 h-3" />
                          <span>Watch Documentary</span>
                        </a>
                      </div>
                    ) : project.id === 'sinchan-kurumutu' ? (
                      <div className="text-xs text-[#8598A8] italic">
                        On-ground community literacy initiative (No app)
                      </div>
                    ) : project.liveUrl && project.liveUrl !== '#' ? (
                      <div className="flex items-center justify-between w-full">
                        <span className="text-xs text-[#8598A8]">Production deployment</span>
                        <a
                          href={project.liveUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-md bg-[#3ECF8E] hover:bg-[#34B87C] text-[#0B0F10] text-xs font-semibold transition-colors shadow-sm"
                        >
                          <span>Launch App</span>
                          <ExternalLink className="w-3 h-3" />
                        </a>
                      </div>
                    ) : (
                      <button
                        type="button"
                        onClick={() => setSelectedProject(project)}
                        className="inline-flex items-center gap-1 px-3 py-1.5 rounded-md bg-[#141C22] hover:bg-[#1B2630] text-[#CBD5E1] border border-[#202C38] text-xs font-medium transition-colors"
                      >
                        <span>View Details</span>
                      </button>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 04 // THE FULL STORY, ROLE BY ROLE (Chapter 3 - Experience) */}
      <section id="experience" className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="space-y-6">
          <div className="border-b border-[#18232F] pb-5 flex flex-col sm:flex-row sm:items-end justify-between gap-4">
            <div>
              <span className="text-xs font-mono text-[#3ECF8E] uppercase tracking-wider block">
                Chapter 03 // TRACK RECORD
              </span>
              <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight pt-1">
                The full story, role by role
              </h2>
              <p className="text-xs sm:text-sm text-[#8598A8] mt-1">
                Milestones across cybersecurity advisory, technology operations, and venture building.
              </p>
            </div>

            <button
              type="button"
              onClick={onOpenCvModal}
              className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg bg-[#141C22] hover:bg-[#1B2630] text-[#CBD5E1] text-xs border border-[#222E3A] transition-colors self-start sm:self-auto"
            >
              <FileDown className="w-3.5 h-3.5 text-[#3ECF8E]" />
              <span>Full Curriculum Vitae</span>
            </button>
          </div>

          {/* Timeline Cards */}
          <div className="space-y-4">
            {/* Role 1: Crowe */}
            <div className="p-5 sm:p-6 rounded-xl bg-[#0E151B] border border-[#1A2530] hover:border-[#3ECF8E]/30 transition-all space-y-3.5">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1 text-xs">
                <div className="flex items-center gap-2">
                  <span className="text-white font-bold text-base sm:text-lg">Crowe Advisory Services</span>
                  <span className="px-2 py-0.5 rounded text-[10px] bg-[#141D26] text-[#3ECF8E] border border-[#202E3C] font-mono">
                    ₹3 Cr Practice
                  </span>
                </div>
                <span className="text-[#8598A8] font-mono text-[11px]">2022 &ndash; 2024 &middot; Bengaluru & Gurgaon</span>
              </div>
              <div className="text-xs font-medium text-[#3ECF8E]">
                Project Coordinator (Customer Lifecycle Manager) &middot; Cybersecurity Assurance
              </div>
              <ul className="space-y-2 text-xs sm:text-sm text-[#CBD5E1] leading-relaxed">
                <li className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#3ECF8E] mt-1.5 shrink-0" />
                  <span>Managed execution of a ₹3 Cr audit & advisory portfolio across 65+ enterprise cybersecurity assurance, VAPT, and SOC 1/2 engagements in EMEA, APAC, and the Americas.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#3ECF8E] mt-1.5 shrink-0" />
                  <span>Architected multi-stakeholder delivery workflows connecting 15+ technical auditors with partners and clients across global jurisdictions.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#3ECF8E] mt-1.5 shrink-0" />
                  <span>Spearheaded commercial strategy and proposal solutioning for enterprise RFPs with CERT-In and federal BFSI institutions.</span>
                </li>
              </ul>
            </div>

            {/* Role 2: Masters' Union */}
            <div className="p-5 sm:p-6 rounded-xl bg-[#0E151B] border border-[#1A2530] hover:border-[#3ECF8E]/30 transition-all space-y-3.5">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1 text-xs">
                <div className="flex items-center gap-2">
                  <span className="text-white font-bold text-base sm:text-lg">Masters' Union</span>
                  <span className="px-2 py-0.5 rounded text-[10px] bg-[#141D26] text-[#3ECF8E] border border-[#202E3C] font-mono">
                    PGP TBM
                  </span>
                </div>
                <span className="text-[#8598A8] font-mono text-[11px]">2024 &ndash; 2026 &middot; Gurgaon</span>
              </div>
              <div className="text-xs font-medium text-[#3ECF8E]">
                PGP in Technology & Business Management
              </div>
              <ul className="space-y-2 text-xs sm:text-sm text-[#CBD5E1] leading-relaxed">
                <li className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#3ECF8E] mt-1.5 shrink-0" />
                  <span>Focusing on rapid tech prototyping, scalable commercial operations, and technology strategy under veteran mentors.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#3ECF8E] mt-1.5 shrink-0" />
                  <span>Leading technology initiatives and collaborative projects within the student and venture ecosystem.</span>
                </li>
              </ul>
            </div>

            {/* Role 3: 0-to-1 Builder */}
            <div className="p-5 sm:p-6 rounded-xl bg-[#0E151B] border border-[#1A2530] hover:border-[#3ECF8E]/30 transition-all space-y-3.5">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1 text-xs">
                <div className="flex items-center gap-2">
                  <span className="text-white font-bold text-base sm:text-lg">Independent Builder & Technical Advisor</span>
                  <span className="px-2 py-0.5 rounded text-[10px] bg-[#141D26] text-[#3ECF8E] border border-[#202E3C] font-mono">
                    3 Live Apps
                  </span>
                </div>
                <span className="text-[#8598A8] font-mono text-[11px]">2024 &ndash; Present</span>
              </div>
              <div className="text-xs font-medium text-[#3ECF8E]">
                Application Prototyping & Operational Advisory
              </div>
              <ul className="space-y-2 text-xs sm:text-sm text-[#CBD5E1] leading-relaxed">
                <li className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#3ECF8E] mt-1.5 shrink-0" />
                  <span>Designed, built, and launched 3 live AI applications (HomeBody, Scribbleverse, Vestelle) from zero to production.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#3ECF8E] mt-1.5 shrink-0" />
                  <span>Advising teams on workflow optimization, technical discovery, and customer delivery cadence.</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* 05 // READY TO CONNECT? (Chapter 4 - Contact CTA) */}
      <section id="contact" className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="p-6 sm:p-8 rounded-2xl bg-[#0E151B] border border-[#1C2732] space-y-6 relative overflow-hidden">
          <div className="space-y-2 max-w-2xl">
            <span className="text-xs font-mono text-[#3ECF8E] uppercase tracking-wider block">
              Chapter 04 // NEXT STEPS
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
              Ready to connect?
            </h2>
            <p className="text-xs sm:text-sm text-[#94A3B8] leading-relaxed">
              Open to discussions regarding commercial strategy, cybersecurity assurance, and technology operations.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-3 pt-1">
            <a
              href={`mailto:${PERSONAL_INFO.email}?subject=Opportunity%20-%20Anushka%20Nath`}
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-[#3ECF8E] hover:bg-[#34B87C] text-[#0B0F10] text-xs font-semibold transition-colors shadow-sm"
            >
              <Mail className="w-4 h-4" />
              <span>Email Anushka</span>
            </a>

            <button
              type="button"
              onClick={handleCopyEmail}
              className="inline-flex items-center gap-1.5 px-4 py-2.5 rounded-lg bg-[#141C22] hover:bg-[#1B2630] text-[#CBD5E1] hover:text-white text-xs border border-[#222E3A] transition-colors"
            >
              {copiedEmail ? (
                <>
                  <Check className="w-3.5 h-3.5 text-[#3ECF8E]" />
                  <span className="text-[#3ECF8E]">Copied to Clipboard!</span>
                </>
              ) : (
                <>
                  <Copy className="w-3.5 h-3.5 text-[#8598A8]" />
                  <span>Copy Email</span>
                </>
              )}
            </button>

            <a
              href={PERSONAL_INFO.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-4 py-2.5 rounded-lg bg-[#141C22] hover:bg-[#1B2630] text-[#CBD5E1] hover:text-white text-xs border border-[#222E3A] transition-colors"
            >
              <span>LinkedIn</span>
              <ArrowUpRight className="w-3.5 h-3.5 text-[#3ECF8E]" />
            </a>

            <button
              type="button"
              onClick={onOpenCvModal}
              className="inline-flex items-center gap-1.5 px-4 py-2.5 rounded-lg bg-[#141C22] hover:bg-[#1B2630] text-[#CBD5E1] hover:text-white text-xs border border-[#222E3A] transition-colors"
            >
              <FileDown className="w-3.5 h-3.5 text-[#3ECF8E]" />
              <span>Resume</span>
            </button>
          </div>
        </div>
      </section>

      {/* Project Detail Modal */}
      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </div>
  );
};
