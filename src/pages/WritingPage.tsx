import React, { useState } from 'react';
import { Calendar, Clock, Share2, ArrowLeft, Check, Sparkles, Play, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { ESSAY_DATA, PERSONAL_INFO } from '../data/portfolioData';
import { Tag } from '../components/Tag';

export const WritingPage: React.FC = () => {
  const [copied, setCopied] = useState(false);
  const [activeTab, setActiveTab] = useState<'narrative' | 'timeline'>('narrative');

  const handleShare = () => {
    if (navigator.clipboard) {
      navigator.clipboard.writeText(window.location.href);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  return (
    <article className="max-w-4xl mx-auto px-4 sm:px-6 pt-10 pb-28 space-y-10">
      {/* Top back navigation */}
      <div className="flex items-center justify-between">
        <Link
          to="/"
          className="inline-flex items-center gap-2 text-xs text-[#94A3B8] hover:text-[#3ECF8E] transition-colors group"
        >
          <ArrowLeft className="w-3.5 h-3.5 group-hover:-translate-x-1 transition-transform" />
          <span>&larr; Back to Portfolio Overview</span>
        </Link>

        <span className="text-xs text-[#64748B]">
          Field Notes: The Operator's Working Day
        </span>
      </div>

      {/* Editorial Header */}
      <header className="space-y-6 border-b border-[#1A2633] pb-8">
        <div className="flex flex-wrap items-center gap-2">
          {ESSAY_DATA.tags.map(t => (
            <Tag key={t} label={t} variant="accent" />
          ))}
          <span className="text-xs text-[#64748B]">&middot; Published Analysis</span>
        </div>

        <div className="space-y-2">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white leading-tight">
            {ESSAY_DATA.title}
          </h1>
          <p className="text-lg sm:text-xl text-[#3ECF8E] font-medium">
            {ESSAY_DATA.subtitle}
          </p>
        </div>

        <p className="text-base sm:text-lg text-[#CBD5E1] italic leading-relaxed border-l-2 border-[#3ECF8E] pl-4 py-1">
          {ESSAY_DATA.standfirst}
        </p>

        {/* Metadata bar */}
        <div className="pt-2 flex flex-wrap items-center justify-between gap-4 text-xs text-[#94A3B8]">
          <div className="flex items-center gap-4">
            <span className="text-white font-medium">{PERSONAL_INFO.name}</span>
            <span>&bull;</span>
            <span className="flex items-center gap-1">
              <Calendar className="w-3.5 h-3.5 text-[#3ECF8E]" />
              <span>{ESSAY_DATA.date}</span>
            </span>
            <span>&bull;</span>
            <span className="flex items-center gap-1">
              <Clock className="w-3.5 h-3.5 text-[#38BDF8]" />
              <span>{ESSAY_DATA.readTime}</span>
            </span>
          </div>

          <button
            type="button"
            onClick={handleShare}
            className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-[#11171F] hover:bg-[#18222B] border border-[#21303E] text-[#94A3B8] hover:text-white transition-colors"
          >
            {copied ? (
              <>
                <Check className="w-3.5 h-3.5 text-[#10B981]" />
                <span className="text-[#10B981]">Link copied</span>
              </>
            ) : (
              <>
                <Share2 className="w-3.5 h-3.5" />
                <span>Share essay</span>
              </>
            )}
          </button>
        </div>

        {/* Mode Switcher */}
        <div className="flex items-center gap-2 pt-2 text-xs">
          <button
            type="button"
            onClick={() => setActiveTab('narrative')}
            className={`px-3 py-1.5 rounded-lg transition-colors ${
              activeTab === 'narrative'
                ? 'bg-[#3ECF8E] text-[#0B0F10] font-semibold shadow-sm'
                : 'bg-[#11171F] text-[#94A3B8] hover:text-white border border-[#202E3D]'
            }`}
          >
            Full Essay Narrative
          </button>
          <button
            type="button"
            onClick={() => setActiveTab('timeline')}
            className={`px-3 py-1.5 rounded-lg transition-colors ${
              activeTab === 'timeline'
                ? 'bg-[#3ECF8E] text-[#0B0F10] font-semibold shadow-sm'
                : 'bg-[#11171F] text-[#94A3B8] hover:text-white border border-[#202E3D]'
            }`}
          >
            Hour-by-Hour Timeline
          </button>
        </div>
      </header>

      {/* Body: Narrative View */}
      {activeTab === 'narrative' ? (
        <div className="space-y-8 text-[#CBD5E1] text-base sm:text-lg leading-[1.85]">
          <p className="text-xl sm:text-2xl font-semibold text-white tracking-tight leading-snug">
            The deck is due in twenty minutes.
          </p>

          <p>
            I found out about this deadline four minutes ago. The CEO apparently mentioned it during a call three hours back - I just wasn't in the room when he said it. Now he's pacing, phone in one hand, asking me where the BFSI pitch stands, and I'm doing the math on how much of "stands" I can invent in the next nineteen minutes.
          </p>

          <p>
            Welcome to the Chief of Staff's day. Nobody warns you that half the job is finding out you had a deadline after it's already tight.
          </p>

          {/* Kesha Aside Box */}
          <div className="my-8 p-6 rounded-xl bg-[#0E151C] border border-[#1E2B38] space-y-3">
            <div className="flex items-center gap-2 text-xs text-[#38BDF8]">
              <Play className="w-3.5 h-3.5" />
              <span>(Read the next bit in Kesha's voice, if you must.)</span>
            </div>
            <div className="pl-4 border-l-2 border-[#38BDF8]/60 space-y-1 text-base text-white italic">
              <p>Wake up in the morning like it's already noon</p>
              <p>Calendar's stacked, gotta be in three rooms</p>
              <p>Skip the coffee, chug it black while I read the deck</p>
              <p>'Cause once the founder calls me in, there's no stepping back</p>
            </div>
            <p className="text-xs sm:text-sm text-[#94A3B8] leading-relaxed pt-2">
              Cute. Except the real version doesn't have a chorus - it has a CEO who commits your deadlines on your behalf without checking if you're free, and then gets furious at you when the math doesn't work out. You learn fast that "yes" isn't a personality trait, it's a liability. So now I say things like: here's my week, here's what's already committed, tell me what moves. Not because I like saying no, but because saying yes to everything gets you nowhere except burnt out and unreliable.
            </p>
          </div>

          <p>
            Here's the part that took me longer to understand: you will never have as much authority as you have responsibility. You're accountable for outcomes across functions you don't manage, with people who don't report to you, on timelines you didn't always set. The only currency that works here is rapport - and you don't get rapport by pulling rank, because you have none. You get it by showing up early enough, often enough, useful enough, that people choose to listen to you instead of being told to.
          </p>

          <p>
            And here's the trade nobody mentions: you're the CEO's problem-solver, essentially — the person who absorbs whatever doesn't have an obvious owner yet. But if you're paying attention, you realize the arrangement runs both ways. As long as you can defend your reasoning, you can move the CEO. Push for the hire, kill the initiative that's not working, change how the team operates. You don't have the title, but you have the ear — and that's its own kind of leverage. With great power comes great responsibility, etc. Spiderman said it better than I ever will in a deck.
          </p>

          {/* Core Quote Callout */}
          <div className="my-8 p-6 rounded-xl bg-[#0E151C] border-l-4 border-[#3ECF8E] border-y border-r border-[#1C2836]">
            <p className="text-xs text-[#3ECF8E] uppercase tracking-wider font-semibold mb-1">
              THE LEVERAGE TRADE
            </p>
            <p className="text-lg sm:text-xl text-white italic font-serif leading-relaxed">
              "As long as you can defend your reasoning, you can move the CEO. Push for the hire, kill the initiative that's not working, change how the team operates. You don't have the title, but you have the ear — and that's its own kind of leverage."
            </p>
          </div>

          <p className="font-semibold text-white">
            So - actual day, from the start.
          </p>

          {/* Timeline paragraphs */}
          <div className="space-y-4 pt-2">
            {ESSAY_DATA.timeline.map((item, idx) => (
              <div key={idx} className="p-5 rounded-xl bg-[#0C1116] border border-[#1A2532] space-y-2">
                <div className="flex items-center justify-between text-xs">
                  <span className="text-[#3ECF8E] font-bold">[{item.time}]</span>
                  <span className="text-white font-semibold">{item.title}</span>
                </div>
                <p className="text-sm text-[#CBD5E1] leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))}
          </div>

          {/* Final reflection */}
          <div className="p-6 rounded-xl bg-[#0E151C] border border-[#1C2732] space-y-3 mt-8">
            <span className="text-xs text-[#3ECF8E] uppercase tracking-wider font-semibold block">
              FINAL THOUGHT &middot; THE STEPPING STONE
            </span>
            <p className="text-base sm:text-lg text-white leading-relaxed italic">
              "The thing about a Founder's Office role is that it was never meant to be the destination. It's a stepping stone - and a genuinely useful one, because you can't know what you actually want to specialize in until you've been close enough to every function to feel which ones pull at you and which ones don't. This role puts you in every room. What you do with that access is the only part that's actually up to you."
            </p>
          </div>
        </div>
      ) : (
        /* Timeline Interactive View */
        <div className="space-y-6">
          <div className="text-xs text-[#94A3B8] border-b border-[#1A2633] pb-2">
            Daily Execution Cadence &middot; 4:00 AM Wake-Up to End-of-Day Sync
          </div>

          <div className="relative border-l-2 border-[#3ECF8E]/40 ml-4 pl-6 space-y-8">
            {ESSAY_DATA.timeline.map((step, idx) => (
              <div key={idx} className="relative space-y-2">
                {/* Timeline node */}
                <div className="absolute -left-[31px] top-1 w-3.5 h-3.5 rounded-full bg-[#3ECF8E] border-2 border-[#090D10] shadow-sm" />
                <div className="flex items-center gap-3">
                  <span className="text-xs font-bold text-[#3ECF8E] bg-[#3ECF8E]/10 px-2 py-0.5 rounded border border-[#3ECF8E]/30">
                    {step.time}
                  </span>
                  <h4 className="text-base font-bold text-white">
                    {step.title}
                  </h4>
                </div>
                <p className="text-sm text-[#94A3B8] leading-relaxed p-4 rounded-xl bg-[#0D1318] border border-[#1C2836]">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Author Signoff Card */}
      <div className="pt-8 border-t border-[#1A2633]">
        <div className="p-6 rounded-xl bg-[#0D1318] border border-[#202E3D] flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
          <div className="space-y-1 max-w-md">
            <div className="text-xs text-[#3ECF8E] flex items-center gap-1.5 font-medium">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Anushka Nath &middot; Founder's Office Operator</span>
            </div>
            <p className="text-xs text-[#94A3B8]">
              Drawn to structuring fast-scaling B2B businesses; now looking to lead 0-to-1 initiatives in tech-powered environments.
            </p>
          </div>

          <a
            href={`mailto:${PERSONAL_INFO.email}?subject=Thoughts%20on%20Founder's%20Office%20Essay`}
            className="px-4 py-2.5 rounded-lg bg-[#3ECF8E] hover:bg-[#34B87C] text-xs text-[#0B0F10] font-semibold transition-colors flex items-center gap-2"
          >
            <span>Discuss this essay</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </a>
        </div>
      </div>
    </article>
  );
};
