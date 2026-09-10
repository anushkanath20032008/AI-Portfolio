import React, { useState } from 'react';
import { Mail, Phone, MapPin, ArrowUpRight, Copy, Check, ShieldCheck, FileDown, ExternalLink } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

interface FooterProps {
  onOpenCvModal: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenCvModal }) => {
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [copiedPhone, setCopiedPhone] = useState(false);

  const handleCopyEmail = (email: string) => {
    navigator.clipboard.writeText(email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  const handleCopyPhone = () => {
    navigator.clipboard.writeText(PERSONAL_INFO.phone);
    setCopiedPhone(true);
    setTimeout(() => setCopiedPhone(false), 2000);
  };

  return (
    <footer id="contact" className="border-t border-[#18232F] bg-[#070A0D] text-[#F1F5F9] pt-14 pb-12">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 space-y-10">
        {/* Top Direct Line Callout Card */}
        <div className="p-6 sm:p-8 rounded-2xl bg-[#0E151B] border border-[#1C2732] relative overflow-hidden">
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6">
            <div className="space-y-2.5 max-w-xl">
              <div className="inline-flex items-center gap-2 px-2.5 py-0.5 rounded-full bg-[#3ECF8E]/10 border border-[#3ECF8E]/20 text-[#3ECF8E] text-xs">
                <span className="w-1.5 h-1.5 rounded-full bg-[#3ECF8E]" />
                <span className="font-medium">Direct Line &middot; Available for Opportunities</span>
              </div>
              <h3 className="text-2xl sm:text-3xl font-bold tracking-tight text-white">
                Looking for a 0-to-1 operator or Chief of Staff?
              </h3>
              <p className="text-sm text-[#94A3B8] leading-relaxed">
                Whether you need someone to turn technical ambiguity into operational cadence, navigate multi-stakeholder governance, or build and ship digital products from scratch — let's talk.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
              <a
                href={`mailto:${PERSONAL_INFO.email}?subject=Founder's%20Office%20Opportunity%20-%20Anushka%20Nath`}
                className="inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-lg bg-[#3ECF8E] hover:bg-[#34B87C] text-[#0B0F10] text-xs font-semibold transition-colors shadow-sm"
              >
                <Mail className="w-4 h-4" />
                <span>Send an Email</span>
              </a>

              <button
                type="button"
                onClick={onOpenCvModal}
                className="inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-lg bg-[#141C22] hover:bg-[#1A2530] text-[#CBD5E1] text-xs border border-[#222E3A] hover:border-[#3ECF8E]/40 transition-colors"
              >
                <FileDown className="w-4 h-4 text-[#3ECF8E]" />
                <span>View Full CV</span>
              </button>
            </div>
          </div>
        </div>

        {/* Contact Matrix */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {/* Email Channels */}
          <div className="p-5 rounded-xl bg-[#0C1116] border border-[#1A2530] space-y-3">
            <div className="flex items-center gap-2 text-xs font-semibold text-white">
              <Mail className="w-4 h-4 text-[#3ECF8E]" />
              <span>Email Addresses</span>
            </div>
            <div className="space-y-2 text-xs">
              <div className="flex items-center justify-between p-2.5 rounded-lg bg-[#10171F] border border-[#18232E]">
                <div className="truncate pr-2">
                  <span className="text-[10px] text-[#64748B] block">Masters' Union</span>
                  <a href={`mailto:${PERSONAL_INFO.email}`} className="text-white hover:text-[#3ECF8E] transition-colors truncate block font-medium">
                    {PERSONAL_INFO.email}
                  </a>
                </div>
                <button
                  type="button"
                  onClick={() => handleCopyEmail(PERSONAL_INFO.email)}
                  title="Copy email"
                  className="p-1.5 rounded-md bg-[#16212B] hover:bg-[#1E2D3B] text-[#94A3B8] transition-colors"
                >
                  {copiedEmail ? <Check className="w-3.5 h-3.5 text-[#10B981]" /> : <Copy className="w-3.5 h-3.5" />}
                </button>
              </div>

              <div className="flex items-center justify-between p-2.5 rounded-lg bg-[#10171F] border border-[#18232E]">
                <div className="truncate pr-2">
                  <span className="text-[10px] text-[#64748B] block">Personal</span>
                  <a href={`mailto:${PERSONAL_INFO.secondaryEmail}`} className="text-[#CBD5E1] hover:text-[#3ECF8E] transition-colors truncate block">
                    {PERSONAL_INFO.secondaryEmail}
                  </a>
                </div>
                <button
                  type="button"
                  onClick={() => handleCopyEmail(PERSONAL_INFO.secondaryEmail)}
                  title="Copy secondary email"
                  className="p-1.5 rounded-md bg-[#16212B] hover:bg-[#1E2D3B] text-[#94A3B8] transition-colors"
                >
                  <Copy className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          </div>

          {/* Direct Line & Social */}
          <div className="p-5 rounded-xl bg-[#0C1116] border border-[#1A2530] space-y-3">
            <div className="flex items-center gap-2 text-xs font-semibold text-white">
              <Phone className="w-4 h-4 text-[#3ECF8E]" />
              <span>Phone & LinkedIn</span>
            </div>
            <div className="space-y-2 text-xs">
              <div className="flex items-center justify-between p-2.5 rounded-lg bg-[#10171F] border border-[#18232E]">
                <div>
                  <span className="text-[10px] text-[#64748B] block">Phone / WhatsApp</span>
                  <a href={`tel:${PERSONAL_INFO.phone}`} className="text-white hover:text-[#3ECF8E] transition-colors font-medium">
                    {PERSONAL_INFO.phone}
                  </a>
                </div>
                <button
                  type="button"
                  onClick={handleCopyPhone}
                  title="Copy phone"
                  className="p-1.5 rounded-md bg-[#16212B] hover:bg-[#1E2D3B] text-[#94A3B8] transition-colors"
                >
                  {copiedPhone ? <Check className="w-3.5 h-3.5 text-[#10B981]" /> : <Copy className="w-3.5 h-3.5" />}
                </button>
              </div>

              <a
                href={PERSONAL_INFO.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between p-2.5 rounded-lg bg-[#10171F] border border-[#18232E] hover:border-[#3ECF8E]/40 text-[#CBD5E1] hover:text-white transition-colors"
              >
                <div>
                  <span className="text-[10px] text-[#64748B] block">LinkedIn Profile</span>
                  <span className="text-xs text-white">/in/anushkanath</span>
                </div>
                <ArrowUpRight className="w-4 h-4 text-[#94A3B8]" />
              </a>
            </div>
          </div>

          {/* Location & Nodes */}
          <div className="p-5 rounded-xl bg-[#0C1116] border border-[#1A2530] space-y-3">
            <div className="flex items-center gap-2 text-xs font-semibold text-white">
              <MapPin className="w-4 h-4 text-[#38BDF8]" />
              <span>Locations & Hubs</span>
            </div>
            <div className="space-y-2 text-xs text-[#CBD5E1]">
              <div className="p-2.5 rounded-lg bg-[#10171F] border border-[#18232E] flex items-center justify-between">
                <span>Gurgaon (Masters' Union)</span>
                <span className="text-[11px] text-[#3ECF8E] font-medium">Current</span>
              </div>
              <div className="p-2.5 rounded-lg bg-[#10171F] border border-[#18232E] flex items-center justify-between">
                <span>Bengaluru</span>
                <span className="text-[11px] text-[#94A3B8]">Home Base</span>
              </div>
              <div className="p-2.5 rounded-lg bg-[#10171F] border border-[#18232E] flex items-center justify-between">
                <span>Kochi (ex-Crowe Advisory)</span>
                <span className="text-[11px] text-[#94A3B8]">Prior Hub</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Legal */}
        <div className="pt-6 border-t border-[#151F2A] flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#64748B]">
          <div>
            &copy; {new Date().getFullYear()} {PERSONAL_INFO.name} &middot; Founder's Office Portfolio
          </div>
          <div>
            Masters' Union &times; ex-Crowe Advisory
          </div>
        </div>
      </div>
    </footer>
  );
};
