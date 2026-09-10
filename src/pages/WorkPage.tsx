import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Filter, ExternalLink, ChevronRight, Globe, Video } from 'lucide-react';
import { PROJECTS } from '../data/portfolioData';
import { Tag } from '../components/Tag';
import { ProjectModal } from '../components/ProjectModal';
import { Project } from '../types';

export const WorkPage: React.FC = () => {
  const [selectedTag, setSelectedTag] = useState<string>('all');
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const allTags = ['all', 'applications', 'marketplace', 'ai-assisted', 'game design', 'impact', 'education'];

  const filteredProjects = selectedTag === 'all' 
    ? PROJECTS 
    : PROJECTS.filter(p => p.tags.includes(selectedTag));

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 pt-10 pb-24 space-y-10">
      {/* Page Header */}
      <div className="space-y-3 max-w-3xl border-b border-[#18232F] pb-6">
        <span className="text-xs font-medium text-[#3ECF8E] uppercase tracking-wider">
          Portfolio & Case Studies
        </span>
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white">
          Proof of Work & Shipped Systems
        </h1>
        <p className="text-sm sm:text-base text-[#94A3B8] leading-relaxed">
          From two-sided market architectures and real-time game state loops to computer vision aesthetic inference and non-profit literacy initiatives.
        </p>

        {/* Tag Filters */}
        <div className="pt-2 flex flex-wrap items-center gap-2">
          <div className="flex items-center gap-1 text-xs text-[#64748B] mr-2">
            <Filter className="w-3.5 h-3.5 text-[#3ECF8E]" />
            <span>Filter:</span>
          </div>
          {allTags.map((tag) => (
            <button
              key={tag}
              type="button"
              id={`filter-tag-${tag}`}
              onClick={() => setSelectedTag(tag)}
              className={`px-3 py-1 rounded-md text-xs transition-colors ${
                selectedTag === tag
                  ? 'bg-[#3ECF8E] text-[#0B0F10] font-semibold shadow-sm'
                  : 'bg-[#10161E] text-[#94A3B8] hover:text-white border border-[#1E2B38]'
              }`}
            >
              {tag === 'all' ? 'All Projects' : tag}
            </button>
          ))}
        </div>
      </div>

      {/* Projects Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {filteredProjects.map((project) => (
          <div
            key={project.id}
            id={`work-grid-card-${project.slug}`}
            className="group flex flex-col justify-between bg-[#0E151B] border border-[#1A2530] hover:border-[#3ECF8E]/30 rounded-xl p-5 transition-all space-y-4"
          >
            <div className="space-y-3">
              {/* Metadata tags */}
              <div className="flex items-center justify-between text-xs">
                <span className="text-[11px] text-[#8598A8] font-medium">
                  Role: {project.role}
                </span>
                {project.status === 'live' ? (
                  <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-[10px] bg-[#3ECF8E]/10 text-[#3ECF8E] border border-[#3ECF8E]/30 font-medium">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#3ECF8E]" />
                    Live App
                  </span>
                ) : (
                  <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-[10px] bg-[#141D26] text-[#CBD5E1] border border-[#202E3C] font-medium">
                    Initiative
                  </span>
                )}
              </div>

              {/* Title & Tagline */}
              <div>
                <h2 className="text-lg font-bold text-white flex items-center gap-1.5 group-hover:text-[#3ECF8E] transition-colors">
                  <span>{project.title}</span>
                </h2>
                <p className="text-xs text-[#CBD5E1] mt-1 leading-snug">
                  {project.tagline}
                </p>
              </div>

              {/* Problem snippet */}
              <div className="p-3 rounded-lg bg-[#111820] border border-[#18232E] space-y-1">
                <span className="text-[10px] text-[#3ECF8E] font-medium block">
                  Problem Context:
                </span>
                <p className="text-xs text-[#94A3B8] leading-relaxed line-clamp-3">
                  {project.problem}
                </p>
              </div>

              {/* Solution snippet */}
              <p className="text-xs text-[#CBD5E1] leading-relaxed line-clamp-3">
                {project.solution}
              </p>
            </div>

            {/* Bottom Actions */}
            <div className="pt-3 border-t border-[#16212B] space-y-3">
              <div className="flex flex-wrap gap-1.5">
                {project.tags.map((t) => (
                  <span key={t} className="px-2 py-0.5 rounded text-[10px] bg-[#121921] text-[#94A3B8] border border-[#1C2733]">
                    #{t}
                  </span>
                ))}
              </div>

              <div className="flex flex-wrap items-center justify-between gap-2 pt-1">
                {project.id === 'book-the-gap' ? (
                  <div className="flex items-center gap-2 w-full justify-between">
                    <a
                      href="https://bookthegap.weebly.com/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 px-2.5 py-1.5 rounded-md bg-[#141C22] hover:bg-[#1B2630] text-[#CBD5E1] hover:text-white text-xs font-medium border border-[#202C38] transition-colors"
                    >
                      <Globe className="w-3 h-3 text-[#3ECF8E]" />
                      <span>Website</span>
                    </a>
                    <a
                      href="https://www.youtube.com/watch?v=yPln43BsJro"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 px-2.5 py-1.5 rounded-md bg-[#3ECF8E]/10 hover:bg-[#3ECF8E]/20 text-[#3ECF8E] border border-[#3ECF8E]/30 text-xs font-semibold transition-colors"
                    >
                      <Video className="w-3 h-3" />
                      <span>Documentary</span>
                    </a>
                  </div>
                ) : project.id === 'sinchan-kurumutu' ? (
                  <div className="text-xs text-[#8598A8] italic">
                    On-ground community program (No app)
                  </div>
                ) : (
                  <>
                    <button
                      type="button"
                      onClick={() => setSelectedProject(project)}
                      className="text-xs text-[#CBD5E1] hover:text-white flex items-center gap-1 transition-colors font-medium"
                    >
                      <span>View Overview</span>
                      <ChevronRight className="w-3.5 h-3.5 text-[#3ECF8E]" />
                    </button>

                    {project.liveUrl && project.liveUrl !== '#' && (
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1 px-3 py-1.5 rounded-md bg-[#3ECF8E]/10 hover:bg-[#3ECF8E]/20 text-[#3ECF8E] border border-[#3ECF8E]/30 text-xs font-medium transition-colors"
                      >
                        <span>Launch</span>
                        <ExternalLink className="w-3 h-3" />
                      </a>
                    )}
                  </>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Project Detail Modal */}
      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </div>
  );
};
