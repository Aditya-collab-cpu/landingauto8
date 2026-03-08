import { ArrowRight, Zap } from "lucide-react";

export default function CTASection() {
  return (
    <section className="section-dark py-24 relative overflow-hidden" id="demo">
      {/* Background gradient */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-br from-[#3DCBD2]/10 via-transparent to-indigo-500/10" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#3DCBD2]/10 rounded-full blur-[100px]" />
        {/* Grid */}
        <div
          className="absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(61,203,210,0.8) 1px, transparent 1px), linear-gradient(90deg, rgba(61,203,210,0.8) 1px, transparent 1px)",
            backgroundSize: "48px 48px",
          }}
        />
      </div>

      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Icon */}
        <div className="w-16 h-16 rounded-2xl bg-[#3DCBD2]/20 border border-[#3DCBD2]/40 flex items-center justify-center mx-auto mb-8 animate-pulse-glow">
          <Zap className="w-8 h-8 text-[#3DCBD2]" strokeWidth={2} />
        </div>

        <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6 tracking-tight leading-tight">
          Turn Every Lead Into{" "}
          <span className="gradient-text">an Opportunity</span>
        </h2>

        <p className="text-white/60 text-lg max-w-xl mx-auto mb-10 leading-relaxed">
          See how AI can automate your lead response and start converting more
          prospects today — without hiring more staff.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href="mailto:hello@moreleadz.ai"
            className="btn-primary flex items-center gap-2 text-base px-8 py-4"
          >
            Book a Demo
            <ArrowRight className="w-5 h-5" />
          </a>
          <a
            href="#video-demo"
            className="btn-secondary flex items-center gap-2 text-base px-8 py-4"
          >
            Watch Demo First
          </a>
        </div>

        <p className="text-white/30 text-sm mt-6">
          No credit card required · Free consultation · Setup in minutes
        </p>

        {/* Trust badges */}
        <div className="flex flex-wrap items-center justify-center gap-6 mt-12">
          {[
            "Instant Setup",
            "No Code Required",
            "Works 24/7",
            "GDPR Compliant",
          ].map((badge) => (
            <div
              key={badge}
              className="flex items-center gap-2 text-white/40 text-sm"
            >
              <div className="w-1.5 h-1.5 rounded-full bg-[#3DCBD2]" />
              {badge}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
