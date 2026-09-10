import React from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import { ArrowLeft, ArrowUpRight, ArrowRight, CheckCircle2, ShieldCheck, Layers, Sparkles, Terminal, ExternalLink } from 'lucide-react';
import { PROJECTS } from '../data/portfolioData';
import { Tag } from '../components/Tag';

export const ProjectDetailPage: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  
  const projectIndex = PROJECTS.findIndex(p => p.slug === slug);
  const project = PROJECTS[projectIndex];

  if (!project) {
    return <Navigate to="/work" replace />;
  }

  const prevProject = projectIndex > 0 ? PROJECTS[projectIndex - 1] : PROJECTS[PROJECTS.length - 1];
  const nextProject = projectIndex < PROJECTS.length - 1 ? PROJECTS[projectIndex + 1] : PROJECTS[0];

  return (
    <article className="max-w-4xl mx-auto px-4 sm:px-6 pt-10 pb-24 space-y-12">
      {/* Top back navigation */}
      <div className="flex items-center justify-between">
        <Link
          to="/work"
          id="back-to-work-link"
          className="inline-flex items-center gap-2 text-xs font-mono text-[#94A3B8] hover:text-[#FA582D] transition-colors group"
        >
          <ArrowLeft className="w-3.5 h-3.5 group-hover:-translate-x-1 transition-transform" />
          <span>&lt; back to proof of work</span>
        </Link>
        <span className="font-mono text-xs text-[#64748B]">SYSTEM_DOSSIER // {project.slug.toUpperCase()}</span>
      </div>

      {/* Project Header Block */}
      <header className="space-y-6 border-b border-[#1A2633] pb-10">
        <div className="flex flex-wrap items-center gap-2.5">
          <span className="px-2 py-0.5 rounded text-xs font-mono bg-[#131B22] text-[#FA582D] border border-[#223140]">
            ROLE: {project.role}
          </span>
          {project.status === 'live' && (
            <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-xs font-mono bg-[#10B981]/15 text-[#10B981] border border-[#10B981]/30">
              <span className="w-1.5 h-1.5 rounded-full bg-[#10B981]" />
              Live Deployment
            </span>
          )}
          {project.tags.map(tag => (
            <span key={tag} className="px-2 py-0.5 text-xs font-mono rounded bg-[#10171F] text-[#94A3B8] border border-[#1C2836]">
              #{tag}
            </span>
          ))}
        </div>

        <div className="space-y-2">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white">
            {project.title}
          </h1>
          <p className="text-base sm:text-lg text-[#FA582D] font-mono">
            {project.tagline}
          </p>
        </div>

        <p className="text-sm sm:text-base text-[#CBD5E1] leading-relaxed max-w-3xl">
          {project.oneLiner}
        </p>

        {/* Live CTA Button */}
        {project.liveUrl && project.liveUrl !== '#' && (
          <div className="pt-2 flex flex-wrap items-center gap-4">
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              id="detail-open-live-app"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-[#FA582D] text-white font-mono text-xs font-bold hover:bg-[#E04B22] transition-colors shadow-md shadow-[#FA582D]/20"
            >
              <span>Launch Live System</span>
              <ExternalLink className="w-4 h-4" />
            </a>

            <div className="text-xs font-mono text-[#64748B] flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-[#10B981]" />
              <span>Target: <span className="text-[#CBD5E1] underline">{project.liveUrl.replace('https://', '')}</span></span>
            </div>
          </div>
        )}
      </header>

      {/* Main Content Blocks: Problem, What I Built/Designed, Outcome */}
      <div className="space-y-8">
        
        {/* The Problem Block */}
        <section className="bg-[#0D1318] border border-[#1E2B38] rounded-xl p-6 sm:p-8 space-y-3">
          <div className="flex items-center gap-2 text-xs font-mono text-[#F87171] uppercase tracking-wider">
            <span className="w-2 h-2 rounded-xs bg-[#F87171]" />
            <span>01 // Market Friction &amp; Operational Void</span>
          </div>
          <h2 className="text-xl sm:text-2xl font-bold text-white">
            What friction or asymmetry needed solving?
          </h2>
          <p className="text-sm sm:text-base text-[#94A3B8] leading-relaxed pt-1">
            {project.problem}
          </p>
        </section>

        {/* What I Built / Designed Block */}
        <section className="bg-[#0D1318] border border-[#1E2B38] rounded-xl p-6 sm:p-8 space-y-4">
          <div className="flex items-center gap-2 text-xs font-mono text-[#FA582D] uppercase tracking-wider">
            <span className="w-2 h-2 rounded-xs bg-[#FA582D]" />
            <span>02 // Architecture, Mechanics &amp; Execution</span>
          </div>
          <h2 className="text-xl sm:text-2xl font-bold text-white">
            The operational logic &amp; user system
          </h2>
          <p className="text-sm sm:text-base text-[#CBD5E1] leading-relaxed">
            {project.solution}
          </p>

          {/* Granular Execution Highlights */}
          {project.highlights && (
            <div className="pt-3 space-y-2.5">
              <div className="text-xs font-mono text-[#64748B] uppercase tracking-wider">
                Key Execution Highlights:
              </div>
              <ul className="space-y-2">
                {project.highlights.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-3 p-3 rounded-lg bg-[#10171F] border border-[#192430] text-xs sm:text-sm text-[#CBD5E1] leading-relaxed">
                    <span className="font-mono text-xs text-[#FA582D] shrink-0 mt-0.5">
                      &gt; [{idx + 1}]
                    </span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </section>

        {/* Outcome / Where It Stands Block */}
        <section className="bg-[#0D1318] border border-[#1E2B38] rounded-xl p-6 sm:p-8 space-y-3">
          <div className="flex items-center gap-2 text-xs font-mono text-[#10B981] uppercase tracking-wider">
            <CheckCircle2 className="w-4 h-4 text-[#10B981]" />
            <span>03 // Outcome &amp; Current Validation Signal</span>
          </div>
          <h2 className="text-xl sm:text-2xl font-bold text-white">
            Where it stands today
          </h2>
          <div className="p-4 rounded-lg bg-[#10171F] border border-[#192430] text-xs sm:text-sm font-mono text-[#CBD5E1] leading-relaxed">
            {project.outcome}
          </div>
        </section>

        {/* Technical stack & tooling */}
        {project.stack && (
          <section className="p-6 rounded-xl bg-[#0B1015] border border-[#1A2633] flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div className="space-y-1">
              <span className="text-xs font-mono text-[#64748B] uppercase tracking-wider">
                Tools &amp; Stack Configured
              </span>
              <div className="flex flex-wrap gap-2 pt-1">
                {project.stack.map(tech => (
                  <span key={tech} className="px-2.5 py-1 text-xs font-mono rounded bg-[#11171F] border border-[#1D2A37] text-white">
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {project.liveUrl && project.liveUrl !== '#' && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs font-mono text-[#FA582D] hover:underline flex items-center gap-1 shrink-0"
              >
                <span>Direct system access</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </a>
            )}
          </section>
        )}
      </div>

      {/* Bottom pagination: Next and Previous projects */}
      <div className="pt-10 border-t border-[#1A2633] flex flex-col sm:flex-row items-center justify-between gap-4">
        <Link
          to={`/work/${prevProject.slug}`}
          className="group flex flex-col items-start p-4 rounded-xl bg-[#0D1318] hover:bg-[#11171F] border border-[#1E2B38] hover:border-[#FA582D]/40 w-full sm:w-1/2 transition-colors"
        >
          <span className="text-[10px] font-mono text-[#64748B] group-hover:text-[#FA582D] flex items-center gap-1">
            &larr; Previous System
          </span>
          <span className="text-sm font-semibold text-white mt-0.5">
            {prevProject.title}
          </span>
        </Link>

        <Link
          to={`/work/${nextProject.slug}`}
          className="group flex flex-col items-end p-4 rounded-xl bg-[#0D1318] hover:bg-[#11171F] border border-[#1E2B38] hover:border-[#FA582D]/40 w-full sm:w-1/2 transition-colors text-right"
        >
          <span className="text-[10px] font-mono text-[#64748B] group-hover:text-[#FA582D] flex items-center gap-1">
            Next System &rarr;
          </span>
          <span className="text-sm font-semibold text-white mt-0.5">
            {nextProject.title}
          </span>
        </Link>
      </div>
    </article>
  );
};
