import React, { useState } from 'react';
import { X, FileDown, Check, Copy, Printer, ExternalLink, ShieldCheck, Mail, Phone, MapPin, Award, GraduationCap, Briefcase } from 'lucide-react';
import { PERSONAL_INFO, EXPERIENCES, CERTIFICATIONS, CROWE_SECTIONS, EXTRA_CURRICULAR, SKILLS_MATRIX } from '../data/portfolioData';

interface CvModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const CvModal: React.FC<CvModalProps> = ({ isOpen, onClose }) => {
  const [copied, setCopied] = useState(false);
  const [activeTab, setActiveTab] = useState<'view' | 'markdown'>('view');

  if (!isOpen) return null;

  const generateMarkdown = () => {
    return `# ${PERSONAL_INFO.name}
**${PERSONAL_INFO.tagline}**
Email: ${PERSONAL_INFO.email} | Alternate: ${PERSONAL_INFO.secondaryEmail}
Phone: ${PERSONAL_INFO.phone} | LinkedIn: ${PERSONAL_INFO.linkedin}
Location: ${PERSONAL_INFO.location}

---

## Professional Summary
${PERSONAL_INFO.summary}

## Super Highlight
${PERSONAL_INFO.superHighlight}

---

## Professional Experience

### Crowe Advisory Services (India) LLP — Kochi, Kerala
**Project Coordinator (Customer Lifecycle Manager)** | Jul'24 – Jun'26

#### Commercial & Growth
${CROWE_SECTIONS[0].bullets.map(b => `- ${b}`).join('\n')}

#### Operations & Scale
${CROWE_SECTIONS[1].bullets.map(b => `- ${b}`).join('\n')}

#### Stakeholder & Partner Management
${CROWE_SECTIONS[2].bullets.map(b => `- ${b}`).join('\n')}

### MediGrow — Dubai, UAE (Remote)
**Business Development Intern** | Feb'24 – Mar'24
${(EXPERIENCES.find(e => e.id === 'medigrow')?.bullets || []).map(b => `- ${b}`).join('\n')}

### KloudMate — Bengaluru, Karnataka
**Sales & Marketing Intern** | Jan'23 – Dec'23
${(EXPERIENCES.find(e => e.id === 'kloudmate')?.bullets || []).map(b => `- ${b}`).join('\n')}

---

## Education

### Masters' Union — Gurgaon, India
**PGP in Technology & Business Management** | 2026 – Present

### St. Joseph's University — Bengaluru, Karnataka
**B.A. Economics & Industrial Relations** | 2021 – 2024
- CGPA: 8.89
- College Gold Medalist in German
- Editor, School of Humanities & Social Sciences Newsletter (Aatmasaat Vol. 4)

### Primus Public School — Bengaluru, Karnataka
**IGCSE (PCMB / PCM)** | 2019 – 2021
- Class 10: 90.63%ile | Class 11 & 12: 89.50%ile
- 4-year Diwali dance competition winner

---

## Certifications
${CERTIFICATIONS.map(c => `- ${c.name} — ${c.issuer} (${c.year})`).join('\n')}

---

## Extra-Curricular & Leadership
${EXTRA_CURRICULAR.map(e => `- **${e.title}**: ${e.detail}`).join('\n')}

---

## Skills Matrix
- **Business**: ${SKILLS_MATRIX.business.join(', ')}
- **Technical & Tools**: ${SKILLS_MATRIX.technical.join(', ')}
`;
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(generateMarkdown());
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleDownload = () => {
    const md = generateMarkdown();
    const blob = new Blob([md], { type: 'text/markdown;charset=utf-8;' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.setAttribute('download', `Anushka_Nath_Resume.md`);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const handlePrint = () => {
    window.print();
  };

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/85 backdrop-blur-md animate-in fade-in duration-200"
      onClick={onClose}
    >
      <div 
        className="relative w-full max-w-3xl max-h-[90vh] flex flex-col bg-[#0D1216] border border-[#21303E] rounded-xl shadow-2xl overflow-hidden text-[#F1F5F9]"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Top Control Bar */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-[#1A2632] bg-[#11171E]">
          <div className="flex items-center gap-3">
            <div className="w-7 h-7 rounded bg-[#FA582D]/10 border border-[#FA582D]/30 flex items-center justify-center text-[#FA582D]">
              <ShieldCheck className="w-4 h-4" />
            </div>
            <div>
              <span className="font-mono text-xs text-[#FA582D] block">
                // EXECUTIVE_DOSSIER // CONFIDENTIAL_BRIEF
              </span>
              <h3 className="text-base font-semibold text-[#F1F5F9] leading-tight">
                {PERSONAL_INFO.name} &middot; Resume & Experience Log
              </h3>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={handlePrint}
              title="Print Resume"
              className="p-2 rounded-lg bg-[#162029] hover:bg-[#1E2C38] text-[#94A3B8] hover:text-[#F1F5F9] border border-[#243444] transition-colors"
            >
              <Printer className="w-4 h-4" />
            </button>
            <button
              type="button"
              onClick={handleDownload}
              title="Download Markdown"
              className="p-2 rounded-lg bg-[#162029] hover:bg-[#1E2C38] text-[#94A3B8] hover:text-[#F1F5F9] border border-[#243444] transition-colors"
            >
              <FileDown className="w-4 h-4" />
            </button>
            <button
              type="button"
              onClick={onClose}
              className="p-2 rounded-lg bg-[#162029] hover:bg-[#1E2C38] text-[#94A3B8] hover:text-[#F1F5F9] border border-[#243444] transition-colors"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Tab Selector */}
        <div className="flex items-center justify-between px-6 py-2.5 bg-[#0F151B] border-b border-[#1A2632] text-xs font-mono">
          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={() => setActiveTab('view')}
              className={`px-3 py-1 rounded transition-colors ${
                activeTab === 'view'
                  ? 'bg-[#FA582D]/15 text-[#FA582D] border border-[#FA582D]/40 font-semibold'
                  : 'text-[#94A3B8] hover:text-[#F1F5F9]'
              }`}
            >
              Formatted Dossier
            </button>
            <button
              type="button"
              onClick={() => setActiveTab('markdown')}
              className={`px-3 py-1 rounded transition-colors ${
                activeTab === 'markdown'
                  ? 'bg-[#FA582D]/15 text-[#FA582D] border border-[#FA582D]/40 font-semibold'
                  : 'text-[#94A3B8] hover:text-[#F1F5F9]'
              }`}
            >
              Markdown Source
            </button>
          </div>

          <button
            type="button"
            onClick={handleCopy}
            className="inline-flex items-center gap-1.5 px-3 py-1 rounded bg-[#162029] hover:bg-[#1E2C38] text-[#94A3B8] hover:text-[#FA582D] border border-[#243444] transition-colors"
          >
            {copied ? <Check className="w-3.5 h-3.5 text-[#10B981]" /> : <Copy className="w-3.5 h-3.5" />}
            <span>{copied ? 'Copied' : 'Copy All'}</span>
          </button>
        </div>

        {/* Modal Scrollable Body */}
        <div className="flex-1 overflow-y-auto p-6 sm:p-8 space-y-8">
          {activeTab === 'markdown' ? (
            <pre className="text-xs font-mono text-[#CBD5E1] bg-[#090D10] p-4 rounded-lg border border-[#1A2632] overflow-x-auto whitespace-pre-wrap">
              {generateMarkdown()}
            </pre>
          ) : (
            <div className="space-y-8 text-sm">
              {/* Profile Card */}
              <div className="p-5 rounded-xl bg-[#121820] border border-[#1F2C38] space-y-3">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-[#1E2B38] pb-3">
                  <div>
                    <h2 className="text-2xl font-bold text-white tracking-tight">
                      {PERSONAL_INFO.name}
                    </h2>
                    <p className="text-xs font-mono text-[#FA582D] mt-0.5">
                      {PERSONAL_INFO.tagline}
                    </p>
                  </div>
                  <div className="text-xs font-mono text-[#94A3B8] space-y-1 sm:text-right">
                    <p className="flex items-center sm:justify-end gap-1.5">
                      <Mail className="w-3.5 h-3.5 text-[#FA582D]" />
                      <span>{PERSONAL_INFO.email}</span>
                    </p>
                    <p className="flex items-center sm:justify-end gap-1.5">
                      <Phone className="w-3.5 h-3.5 text-[#10B981]" />
                      <span>{PERSONAL_INFO.phone}</span>
                    </p>
                    <p className="flex items-center sm:justify-end gap-1.5">
                      <MapPin className="w-3.5 h-3.5 text-[#38BDF8]" />
                      <span>{PERSONAL_INFO.location}</span>
                    </p>
                  </div>
                </div>

                <div className="space-y-2 pt-1">
                  <p className="text-xs font-mono text-[#94A3B8] uppercase tracking-wider">
                    Executive Summary:
                  </p>
                  <p className="text-xs text-[#CBD5E1] leading-relaxed">
                    {PERSONAL_INFO.summary}
                  </p>
                </div>

                <div className="p-3 rounded-lg bg-[#0C1116] border border-[#1A2632] space-y-1">
                  <span className="text-[11px] font-mono text-[#FA582D] block">
                    &gt; Super Highlight
                  </span>
                  <p className="text-xs text-[#94A3B8] italic leading-relaxed">
                    "{PERSONAL_INFO.superHighlight}"
                  </p>
                </div>
              </div>

              {/* Work Experience */}
              <div className="space-y-4">
                <div className="flex items-center gap-2 border-b border-[#1E2B38] pb-2">
                  <Briefcase className="w-4 h-4 text-[#FA582D]" />
                  <h4 className="text-sm font-bold font-mono tracking-wider text-white uppercase">
                    Professional Experience
                  </h4>
                </div>

                {/* Crowe Advisory */}
                <div className="p-5 rounded-xl bg-[#11171F] border border-[#1E2B38] space-y-4">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1">
                    <div>
                      <h5 className="text-base font-semibold text-white">
                        Crowe Advisory Services (India) LLP
                      </h5>
                      <p className="text-xs font-mono text-[#FA582D]">
                        Project Coordinator (Customer Lifecycle Manager)
                      </p>
                    </div>
                    <span className="text-xs font-mono text-[#94A3B8]">
                      Jul'24 – Jun'26 &middot; Kochi, India
                    </span>
                  </div>

                  {CROWE_SECTIONS.map((sec) => (
                    <div key={sec.id} className="space-y-1.5 pt-2 border-t border-[#18232E]">
                      <span className="text-xs font-mono font-semibold text-[#CBD5E1] block">
                        &bull; {sec.category}
                      </span>
                      <ul className="space-y-1 text-xs text-[#94A3B8] pl-3 list-disc marker:text-[#FA582D]">
                        {sec.bullets.map((b, idx) => (
                          <li key={idx} className="leading-relaxed">
                            {b}
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>

                {/* MediGrow & KloudMate */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="p-4 rounded-xl bg-[#11171F] border border-[#1E2B38] space-y-2">
                    <div className="flex items-center justify-between">
                      <h5 className="font-semibold text-white text-xs">MediGrow</h5>
                      <span className="text-[11px] font-mono text-[#94A3B8]">Feb'24 – Mar'24</span>
                    </div>
                    <p className="text-[11px] font-mono text-[#FA582D]">Business Development Intern (Dubai, Remote)</p>
                    <ul className="space-y-1 text-xs text-[#94A3B8] list-disc pl-3 marker:text-[#FA582D]">
                      {(EXPERIENCES.find(e => e.id === 'medigrow')?.bullets || []).map((b, i) => (
                        <li key={i}>{b}</li>
                      ))}
                    </ul>
                  </div>

                  <div className="p-4 rounded-xl bg-[#11171F] border border-[#1E2B38] space-y-2">
                    <div className="flex items-center justify-between">
                      <h5 className="font-semibold text-white text-xs">KloudMate</h5>
                      <span className="text-[11px] font-mono text-[#94A3B8]">Jan'23 – Dec'23</span>
                    </div>
                    <p className="text-[11px] font-mono text-[#FA582D]">Sales & Marketing Intern (Bengaluru)</p>
                    <ul className="space-y-1 text-xs text-[#94A3B8] list-disc pl-3 marker:text-[#FA582D]">
                      {(EXPERIENCES.find(e => e.id === 'kloudmate')?.bullets || []).map((b, i) => (
                        <li key={i}>{b}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>

              {/* Education */}
              <div className="space-y-4">
                <div className="flex items-center gap-2 border-b border-[#1E2B38] pb-2">
                  <GraduationCap className="w-4 h-4 text-[#FA582D]" />
                  <h4 className="text-sm font-bold font-mono tracking-wider text-white uppercase">
                    Education & Academic Honors
                  </h4>
                </div>

                <div className="space-y-3">
                  <div className="p-4 rounded-xl bg-[#11171F] border border-[#1E2B38] flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                    <div>
                      <h5 className="font-semibold text-white text-xs">Masters' Union, Gurgaon</h5>
                      <p className="text-xs text-[#CBD5E1]">PGP in Technology & Business Management</p>
                    </div>
                    <span className="text-xs font-mono text-[#FA582D]">2026 – Present</span>
                  </div>

                  <div className="p-4 rounded-xl bg-[#11171F] border border-[#1E2B38] space-y-1">
                    <div className="flex items-center justify-between">
                      <h5 className="font-semibold text-white text-xs">St. Joseph's University, Bengaluru</h5>
                      <span className="text-xs font-mono text-[#94A3B8]">2021 – 2024</span>
                    </div>
                    <p className="text-xs text-[#CBD5E1]">B.A. Economics & Industrial Relations &middot; CGPA: 8.89</p>
                    <p className="text-xs font-mono text-[#10B981]">
                      &starf; College Gold Medalist in German &middot; Editor, School Newsletter (Aatmasaat Vol. 4)
                    </p>
                  </div>

                  <div className="p-4 rounded-xl bg-[#11171F] border border-[#1E2B38] space-y-1">
                    <div className="flex items-center justify-between">
                      <h5 className="font-semibold text-white text-xs">Primus Public School, Bengaluru</h5>
                      <span className="text-xs font-mono text-[#94A3B8]">2019 – 2021</span>
                    </div>
                    <p className="text-xs text-[#CBD5E1]">IGCSE Class 10 (PCMB: 90.63%ile) & Class 11-12 (PCM: 89.50%ile)</p>
                    <p className="text-xs font-mono text-[#94A3B8]">
                      Four-year consecutive Diwali dance competition winner
                    </p>
                  </div>
                </div>
              </div>

              {/* Certifications & Skills */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="p-4 rounded-xl bg-[#11171F] border border-[#1E2B38] space-y-3">
                  <div className="flex items-center gap-2 border-b border-[#1E2B38] pb-2">
                    <Award className="w-4 h-4 text-[#FA582D]" />
                    <span className="text-xs font-mono font-bold text-white uppercase tracking-wider">
                      Key Certifications
                    </span>
                  </div>
                  <ul className="space-y-1.5 text-xs text-[#CBD5E1]">
                    {CERTIFICATIONS.map((c, i) => (
                      <li key={i} className="flex items-center justify-between">
                        <span>{c.name}</span>
                        <span className="font-mono text-[#94A3B8] text-[11px]">{c.issuer}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="p-4 rounded-xl bg-[#11171F] border border-[#1E2B38] space-y-3">
                  <span className="text-xs font-mono font-bold text-white uppercase tracking-wider block border-b border-[#1E2B38] pb-2">
                    Extra-Curricular Highlights
                  </span>
                  <div className="space-y-2 text-xs">
                    {EXTRA_CURRICULAR.map((e, idx) => (
                      <div key={idx}>
                        <p className="font-semibold text-[#FA582D] text-[11px]">{e.title}</p>
                        <p className="text-[#94A3B8] text-[11px] leading-relaxed">{e.detail}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Bottom Actions */}
        <div className="px-6 py-4 border-t border-[#1A2632] bg-[#11171E] flex items-center justify-between">
          <span className="text-xs font-mono text-[#64748B]">
            ANUSHKA_NATH_DOSSIER_2026.MD
          </span>
          <div className="flex items-center gap-3">
            <button
              type="button"
              onClick={handleDownload}
              className="inline-flex items-center gap-1.5 px-4 py-2 rounded-lg bg-[#FA582D] hover:bg-[#E04B22] text-white font-mono text-xs font-semibold transition-colors"
            >
              <FileDown className="w-4 h-4" />
              <span>Download CV (.md)</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
