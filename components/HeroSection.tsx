import { ArrowRight, Play, Sparkles } from "lucide-react";

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden section-dark pt-16">
      {/* Background gradients */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[600px] bg-[#3DCBD2]/10 rounded-full blur-[120px]" />
        <div className="absolute top-1/4 left-1/4 w-[400px] h-[400px] bg-[#3DCBD2]/5 rounded-full blur-[80px]" />
        <div className="absolute bottom-1/4 right-1/4 w-[300px] h-[300px] bg-indigo-500/5 rounded-full blur-[80px]" />
        {/* Grid pattern */}
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)",
            backgroundSize: "64px 64px",
          }}
        />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 text-center">
        {/* Badge */}
        <div className="animate-fade-in-up inline-flex items-center gap-2 bg-[#3DCBD2]/10 border border-[#3DCBD2]/30 rounded-full px-4 py-2 mb-8">
          <Sparkles className="w-4 h-4 text-[#3DCBD2]" />
          <span className="text-[#3DCBD2] text-sm font-medium">
            AI-Powered Lead Automation
          </span>
        </div>

        {/* Headline */}
        <h1 className="animate-fade-in-up delay-100 text-5xl sm:text-6xl lg:text-7xl font-bold text-white leading-[1.1] mb-6 tracking-tight">
          Never Miss{" "}
          <span className="gradient-text">Another Lead</span>
        </h1>

        {/* Subheadline */}
        <p className="animate-fade-in-up delay-200 text-lg sm:text-xl text-white/60 max-w-2xl mx-auto mb-10 leading-relaxed">
          AI automatically responds to every lead in seconds with personalized
          emails, helping your business convert more prospects without manual
          work.
        </p>

        {/* CTA Buttons */}
        <div className="animate-fade-in-up delay-300 flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
          <a
            href="#demo"
            className="btn-primary flex items-center gap-2 text-base px-8 py-3.5"
          >
            Book a Demo
            <ArrowRight className="w-4 h-4" />
          </a>
          <a
            href="#video-demo"
            className="btn-secondary flex items-center gap-2 text-base px-8 py-3.5"
          >
            <Play className="w-4 h-4 text-[#3DCBD2]" />
            Watch Demo
          </a>
        </div>

        {/* Video Placeholder */}
        <div className="animate-fade-in-up delay-400 relative max-w-4xl mx-auto">
          <div className="relative rounded-2xl overflow-hidden border border-white/10 shadow-2xl shadow-black/50">
            {/* Glow effect */}
            <div className="absolute -inset-1 bg-gradient-to-r from-[#3DCBD2]/20 via-transparent to-[#3DCBD2]/10 rounded-2xl blur-xl" />

            {/* Video container */}
            <div className="relative bg-[#0d1424] aspect-video flex items-center justify-center">
              {/* Fake video UI */}
              <div className="absolute inset-0 bg-gradient-to-br from-[#0d1424] to-[#080d1a]" />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center">
                  <div className="w-20 h-20 rounded-full bg-[#3DCBD2]/20 border border-[#3DCBD2]/50 flex items-center justify-center mx-auto mb-4 animate-pulse-glow cursor-pointer hover:bg-[#3DCBD2]/30 transition-colors group">
                    <Play
                      className="w-8 h-8 text-[#3DCBD2] ml-1 group-hover:scale-110 transition-transform"
                      fill="currentColor"
                    />
                  </div>
                  <p className="text-white/40 text-sm font-medium">
                    Demo Video Preview
                  </p>
                  <p className="text-white/25 text-xs mt-1">
                    See moreleadz respond to a lead in real-time
                  </p>
                </div>
              </div>

              {/* Top bar */}
              <div className="absolute top-0 left-0 right-0 h-10 bg-[#111827]/80 border-b border-white/5 flex items-center px-4 gap-2">
                <div className="flex gap-1.5">
                  <div className="w-3 h-3 rounded-full bg-red-500/60" />
                  <div className="w-3 h-3 rounded-full bg-yellow-500/60" />
                  <div className="w-3 h-3 rounded-full bg-green-500/60" />
                </div>
                <div className="flex-1 flex justify-center">
                  <div className="bg-white/5 rounded-md px-3 py-1 text-white/30 text-xs">
                    moreleadz.ai — Lead Response Demo
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Stats row below video */}
          <div className="grid grid-cols-3 gap-4 mt-6">
            {[
              { value: "< 10s", label: "Response time" },
              { value: "3x", label: "More conversions" },
              { value: "100%", label: "Leads captured" },
            ].map((stat) => (
              <div
                key={stat.label}
                className="glass-card rounded-xl px-4 py-3 text-center"
              >
                <div className="text-[#3DCBD2] font-bold text-xl">
                  {stat.value}
                </div>
                <div className="text-white/50 text-xs mt-0.5">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
