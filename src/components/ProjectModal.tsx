import React from 'react';
import { X, ExternalLink, ArrowRight, ShieldCheck, CheckCircle2, Layers, Sparkles, Globe, Video } from 'lucide-react';
import { Project } from '../types';

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose }) => {
  if (!project) return null;

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md animate-in fade-in duration-200"
      onClick={onClose}
    >
      <div 
        className="relative w-full max-w-2xl max-h-[90vh] overflow-y-auto bg-[#0E151B] border border-[#1E2B38] rounded-xl shadow-2xl p-6 sm:p-8 space-y-6 text-[#F1F5F9]"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Header */}
        <div className="flex items-start justify-between border-b border-[#18232F] pb-4">
          <div>
            <div className="flex items-center gap-2 font-mono text-xs text-[#3ECF8E]">
              <span className="w-1.5 h-1.5 rounded-full bg-[#3ECF8E]" />
              <span>// OVERVIEW // {project.slug.toUpperCase()}</span>
            </div>
            <h3 className="text-2xl font-bold text-white pt-1.5 flex items-center gap-2">
              {project.title}
              {project.status === 'live' && (
                <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-[10px] bg-[#3ECF8E]/10 text-[#3ECF8E] border border-[#3ECF8E]/30 font-medium">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#3ECF8E]" />
                  Live App
                </span>
              )}
            </h3>
            <p className="text-xs text-[#94A3B8] mt-1">
              Role: <span className="text-white">{project.role}</span> &middot; Stack: {project.stack?.join(', ')}
            </p>
          </div>

          <button
            type="button"
            onClick={onClose}
            className="p-1.5 rounded-lg bg-[#141C22] text-[#94A3B8] hover:text-white hover:bg-[#1B2630] border border-[#222E3A] transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Tagline / Pitch */}
        <div className="p-4 rounded-lg bg-[#111820] border border-[#1A2530] space-y-1">
          <p className="text-xs font-semibold text-[#3ECF8E] uppercase tracking-wider">
            Core Proposition
          </p>
          <p className="text-sm text-[#CBD5E1] leading-relaxed">
            {project.oneLiner}
          </p>
        </div>

        {/* Problem vs Solution Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="p-4 rounded-lg bg-[#111820] border border-[#1A2530] space-y-2">
            <div className="flex items-center gap-2 text-xs text-[#F87171] font-medium">
              <span className="w-1.5 h-1.5 rounded-full bg-[#F87171]" />
              <span>01 // THE CHALLENGE</span>
            </div>
            <p className="text-xs text-[#94A3B8] leading-relaxed">
              {project.problem}
            </p>
          </div>

          <div className="p-4 rounded-lg bg-[#111820] border border-[#1A2530] space-y-2">
            <div className="flex items-center gap-2 text-xs text-[#3ECF8E] font-medium">
              <span className="w-1.5 h-1.5 rounded-full bg-[#3ECF8E]" />
              <span>02 // THE EXECUTION</span>
            </div>
            <p className="text-xs text-[#94A3B8] leading-relaxed">
              {project.solution}
            </p>
          </div>
        </div>

        {/* Highlights */}
        {project.highlights && (
          <div className="space-y-3">
            <p className="text-xs text-[#8598A8] uppercase tracking-wider font-semibold">
              Execution Highlights
            </p>
            <ul className="space-y-2 text-xs text-[#CBD5E1]">
              {project.highlights.map((item, idx) => (
                <li key={idx} className="flex items-start gap-2.5 p-2.5 rounded bg-[#111820] border border-[#1A2530]">
                  <CheckCircle2 className="w-4 h-4 text-[#3ECF8E] shrink-0 mt-0.5" />
                  <span className="leading-relaxed">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        )}

        {/* Actions */}
        <div className="flex flex-wrap items-center justify-between gap-3 pt-4 border-t border-[#18232F]">
          <div className="flex flex-wrap gap-1.5">
            {project.tags.map((t) => (
              <span key={t} className="px-2 py-0.5 rounded text-[10px] bg-[#141C22] text-[#8598A8] border border-[#202C38]">
                #{t}
              </span>
            ))}
          </div>

          <div className="flex flex-wrap items-center gap-2">
            {project.websiteUrl && (
              <a
                href={project.websiteUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg bg-[#141C22] hover:bg-[#1B2630] text-[#CBD5E1] hover:text-white text-xs border border-[#222E3A] transition-colors"
              >
                <Globe className="w-3.5 h-3.5 text-[#3ECF8E]" />
                <span>Website</span>
              </a>
            )}

            {project.videoUrl && (
              <a
                href={project.videoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg bg-[#3ECF8E]/10 hover:bg-[#3ECF8E]/20 text-[#3ECF8E] text-xs font-semibold border border-[#3ECF8E]/30 transition-colors"
              >
                <Video className="w-3.5 h-3.5" />
                <span>Documentary</span>
              </a>
            )}

            {project.liveUrl && project.liveUrl !== '#' && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-4 py-2 rounded-lg bg-[#3ECF8E] hover:bg-[#34B87C] text-[#0B0F10] text-xs font-semibold transition-colors shadow-sm"
              >
                <span>Launch App</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            )}

            <button
              type="button"
              onClick={onClose}
              className="px-4 py-2 rounded-lg bg-[#141C22] hover:bg-[#1B2630] text-[#CBD5E1] hover:text-white text-xs border border-[#222E3A] transition-colors"
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
