import { Play, CheckCircle2 } from "lucide-react";

const highlights = [
  "Lead submits form in real-time",
  "AI generates personalized email in seconds",
  "Email delivered before lead leaves the page",
  "Lead stored with zero manual input",
];

export default function DemoVideoSection() {
  return (
    <section className="section-light py-24" id="video-demo">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left: Text */}
          <div data-animate>
            <div className="inline-flex items-center gap-2 bg-[#3DCBD2]/10 border border-[#3DCBD2]/30 rounded-full px-4 py-1.5 mb-6">
              <Play className="w-4 h-4 text-[#3DCBD2]" fill="currentColor" />
              <span className="text-[#3DCBD2] text-sm font-medium">
                Live Demo
              </span>
            </div>

            <h2 className="text-4xl sm:text-5xl font-bold text-[#0d1424] mb-5 tracking-tight leading-tight">
              See the Automation{" "}
              <span className="text-[#3DCBD2]">in Action</span>
            </h2>

            <p className="text-[#0d1424]/60 text-lg leading-relaxed mb-8">
              Watch how a lead is captured, processed by AI, and responded to
              automatically in seconds — no human involved.
            </p>

            <div className="flex flex-col gap-3">
              {highlights.map((item) => (
                <div key={item} className="flex items-start gap-3">
                  <CheckCircle2
                    className="w-5 h-5 text-[#3DCBD2] flex-shrink-0 mt-0.5"
                    strokeWidth={2}
                  />
                  <span className="text-[#0d1424]/70 text-sm">{item}</span>
                </div>
              ))}
            </div>

            <div className="mt-10">
              <a href="#demo" className="btn-primary inline-flex items-center gap-2 text-sm">
                Book Your Free Demo
                <span className="text-[#080d1a]/60">→</span>
              </a>
            </div>
          </div>

          {/* Right: Video */}
          <div className="relative" data-animate data-delay="150">
            <div className="relative rounded-2xl overflow-hidden border border-gray-200 shadow-2xl shadow-gray-200/80 bg-[#0d1424]">
              {/* Video placeholder */}
              <div className="aspect-video relative flex items-center justify-center bg-gradient-to-br from-[#0d1424] to-[#080d1a]">
                {/* Grid background */}
                <div
                  className="absolute inset-0 opacity-[0.05]"
                  style={{
                    backgroundImage:
                      "linear-gradient(rgba(61,203,210,0.8) 1px, transparent 1px), linear-gradient(90deg, rgba(61,203,210,0.8) 1px, transparent 1px)",
                    backgroundSize: "40px 40px",
                  }}
                />

                {/* Play button */}
                <div className="relative text-center z-10">
                  <button className="w-20 h-20 rounded-full bg-[#3DCBD2] flex items-center justify-center mx-auto mb-4 shadow-xl shadow-[#3DCBD2]/40 hover:scale-110 hover:shadow-[#3DCBD2]/60 transition-all duration-300 group">
                    <Play
                      className="w-8 h-8 text-[#080d1a] ml-1"
                      fill="currentColor"
                    />
                  </button>
                  <p className="text-white/50 text-sm">Click to play demo</p>
                </div>

                {/* Duration badge */}
                <div className="absolute bottom-4 right-4 bg-black/60 backdrop-blur-sm rounded-lg px-3 py-1.5 flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-red-400 animate-pulse" />
                  <span className="text-white text-xs font-medium">2:34</span>
                </div>
              </div>

              {/* Bottom bar */}
              <div className="bg-[#111827] px-4 py-3 flex items-center gap-3 border-t border-white/5">
                <div className="flex-1 h-1.5 rounded-full bg-white/10 overflow-hidden">
                  <div className="w-0 h-full bg-[#3DCBD2] rounded-full" />
                </div>
                <span className="text-white/30 text-xs">0:00 / 2:34</span>
              </div>
            </div>

            {/* Floating badge */}
            <div className="absolute -top-4 -right-4 bg-[#3DCBD2] text-[#080d1a] text-xs font-bold px-3 py-2 rounded-xl shadow-lg rotate-3">
              Live Demo
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
