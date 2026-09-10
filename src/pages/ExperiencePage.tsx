import React from 'react';
import { Briefcase, GraduationCap, Award, FileDown, ShieldCheck, CheckCircle2 } from 'lucide-react';
import { PERSONAL_INFO, EXPERIENCES, CERTIFICATIONS, CROWE_SECTIONS } from '../data/portfolioData';

interface ExperiencePageProps {
  onOpenCvModal: () => void;
}

export const ExperiencePage: React.FC<ExperiencePageProps> = ({ onOpenCvModal }) => {
  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 pt-10 pb-24 space-y-12">
      
      {/* Intro / Positioning Bio */}
      <section className="space-y-5 border-b border-[#18232F] pb-8">
        <span className="text-xs font-medium text-[#3ECF8E] uppercase tracking-wider">
          Experience & Track Record
        </span>

        <div className="space-y-2">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white">
            Operational Track Record
          </h1>
          <p className="text-base text-[#3ECF8E] font-medium">
            Commercial rigor &middot; Technical governance &middot; 0-to-1 product execution
          </p>
        </div>

        {/* Executive summary block */}
        <div className="p-6 sm:p-8 rounded-2xl bg-[#0E151B] border border-[#1C2732] space-y-4">
          <p className="text-sm sm:text-base text-[#CBD5E1] leading-relaxed">
            {PERSONAL_INFO.bio}
          </p>

          <div className="p-4 rounded-xl bg-[#111820] border border-[#18232E] space-y-1">
            <span className="text-xs text-[#3ECF8E] font-medium block">
              Core Highlight:
            </span>
            <p className="text-xs text-[#94A3B8] italic leading-relaxed">
              "{PERSONAL_INFO.superHighlight}"
            </p>
          </div>

          <div className="pt-2 flex flex-wrap items-center justify-between gap-4">
            <button
              type="button"
              onClick={onOpenCvModal}
              className="inline-flex items-center gap-2 px-4 py-2.5 rounded-lg bg-[#3ECF8E] hover:bg-[#34B87C] text-[#0B0F10] text-xs font-semibold transition-colors shadow-sm"
            >
              <FileDown className="w-4 h-4" />
              <span>Download Executive Resume</span>
            </button>

            <span className="text-xs text-[#64748B]">
              65+ Audits Managed &middot; ₹3 Cr Portfolio Scaled
            </span>
          </div>
        </div>
      </section>

      {/* Crowe Advisory Services Comprehensive Breakdown */}
      <section className="space-y-6">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-[#18232F] pb-3">
          <div className="flex items-center gap-2.5">
            <Briefcase className="w-5 h-5 text-[#3ECF8E]" />
            <h2 className="text-2xl font-bold text-white">Crowe Advisory Services (India) LLP</h2>
          </div>
          <span className="text-xs text-[#94A3B8]">Jul'24 – Jun'26 &middot; Kochi, India</span>
        </div>

        <div className="p-6 sm:p-8 rounded-2xl bg-[#0E151B] border border-[#1C2732] space-y-6">
          <div className="space-y-1">
            <span className="text-xs text-[#3ECF8E] uppercase font-semibold block">
              Role: Project Coordinator (Customer Lifecycle Manager)
            </span>
            <p className="text-sm text-[#94A3B8] leading-relaxed">
              Scaled IT assurance and cybersecurity practice 3x across ₹3 Cr portfolio. Sole SPOC coordinating cross-functional alignment among partners, managers, delivery teams, and external contractors.
            </p>
          </div>

          {/* Crowe 3-pillar breakdown */}
          <div className="space-y-4 pt-1">
            {CROWE_SECTIONS.map((sec) => (
              <div key={sec.id} className="p-5 rounded-xl bg-[#111820] border border-[#18232E] space-y-3">
                <div className="flex items-center gap-2 text-xs font-semibold text-white uppercase tracking-wider">
                  <span className="w-2 h-2 rounded-full bg-[#3ECF8E]" />
                  <span>{sec.category}</span>
                </div>
                <ul className="space-y-2 text-xs sm:text-sm text-[#CBD5E1]">
                  {sec.bullets.map((b, idx) => (
                    <li key={idx} className="flex items-start gap-2.5">
                      <CheckCircle2 className="w-4 h-4 text-[#3ECF8E] mt-0.5 shrink-0" />
                      <span className="leading-relaxed">{b}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Startup Internships */}
      <section className="space-y-5">
        <div className="border-b border-[#18232F] pb-3">
          <h3 className="text-xl font-bold text-white">Startup Experience</h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          <div className="p-5 sm:p-6 rounded-xl bg-[#0E151B] border border-[#1A2530] space-y-3">
            <div className="flex items-center justify-between text-xs">
              <span className="text-[#3ECF8E] font-medium">MediGrow</span>
              <span className="text-[#64748B]">Feb'24 – Mar'24</span>
            </div>
            <h4 className="text-base sm:text-lg font-bold text-white">
              Business Development Intern
            </h4>
            <p className="text-xs text-[#8598A8]">Dubai, UAE (Remote)</p>
            <ul className="space-y-2 text-xs text-[#CBD5E1] pt-1">
              {(EXPERIENCES.find(e => e.id === 'medigrow')?.bullets || []).map((b, idx) => (
                <li key={idx} className="flex items-start gap-2">
                  <span className="text-[#3ECF8E]">&bull;</span>
                  <span>{b}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="p-5 sm:p-6 rounded-xl bg-[#0E151B] border border-[#1A2530] space-y-3">
            <div className="flex items-center justify-between text-xs">
              <span className="text-[#3ECF8E] font-medium">KloudMate</span>
              <span className="text-[#64748B]">Jan'23 – Dec'23</span>
            </div>
            <h4 className="text-base sm:text-lg font-bold text-white">
              Sales & Marketing Intern
            </h4>
            <p className="text-xs text-[#8598A8]">Bengaluru, Karnataka</p>
            <ul className="space-y-2 text-xs text-[#CBD5E1] pt-1">
              {(EXPERIENCES.find(e => e.id === 'kloudmate')?.bullets || []).map((b, idx) => (
                <li key={idx} className="flex items-start gap-2">
                  <span className="text-[#3ECF8E]">&bull;</span>
                  <span>{b}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Education & Academic Honors */}
      <section className="space-y-5">
        <div className="flex items-center justify-between border-b border-[#18232F] pb-3">
          <div className="flex items-center gap-2.5">
            <GraduationCap className="w-5 h-5 text-[#3ECF8E]" />
            <h2 className="text-2xl font-bold text-white">Education & Honors</h2>
          </div>
          <span className="text-xs text-[#64748B]">Academic Rigor</span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          <div className="p-5 rounded-xl bg-[#0E151B] border border-[#1A2530] space-y-2">
            <span className="text-xs text-[#3ECF8E] font-semibold block">2026 – Present</span>
            <h4 className="text-base font-bold text-white">Masters' Union</h4>
            <p className="text-xs text-[#CBD5E1]">PGP in Technology & Business Management</p>
            <p className="text-[11px] text-[#94A3B8] pt-1">Gurgaon, India</p>
          </div>

          <div className="p-5 rounded-xl bg-[#0E151B] border border-[#1A2530] space-y-2">
            <span className="text-xs text-[#3ECF8E] font-semibold block">2021 – 2024 &middot; CGPA: 8.89</span>
            <h4 className="text-base font-bold text-white">St. Joseph's University</h4>
            <p className="text-xs text-[#CBD5E1]">B.A. Economics & Industrial Relations</p>
            <p className="text-[11px] text-[#3ECF8E] font-medium">College Gold Medalist in German</p>
          </div>

          <div className="p-5 rounded-xl bg-[#0E151B] border border-[#1A2530] space-y-2">
            <span className="text-xs text-[#38BDF8] font-semibold block">2019 – 2021</span>
            <h4 className="text-base font-bold text-white">Primus Public School</h4>
            <p className="text-xs text-[#CBD5E1]">IGCSE Class 10 (90.63%ile) & Class 11-12 (89.50%ile)</p>
            <p className="text-[11px] text-[#94A3B8] pt-1">Diwali dance winner (4 consecutive years)</p>
          </div>
        </div>
      </section>

      {/* Certifications Row */}
      <section className="space-y-4">
        <div className="flex items-center gap-2">
          <Award className="w-4 h-4 text-[#3ECF8E]" />
          <h2 className="text-base font-semibold text-white">Certifications & Programs</h2>
        </div>

        <div className="flex flex-wrap gap-2.5">
          {CERTIFICATIONS.map((cert) => (
            <div
              key={cert.name}
              className="inline-flex items-center gap-2 px-3.5 py-2 rounded-lg bg-[#0E151B] border border-[#1A2530] text-xs text-[#CBD5E1]"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-[#3ECF8E]" />
              <span className="text-white font-medium">{cert.name}</span>
              <span className="text-[#64748B]">({cert.issuer})</span>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};
