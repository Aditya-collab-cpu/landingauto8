import { Timer, TrendingUp, Clock, ShieldCheck } from "lucide-react";

const benefits = [
  {
    icon: Timer,
    metric: "< 10s",
    label: "Response Time",
    description:
      "Every lead receives a personalized email in under 10 seconds — faster than any human team could manage.",
    color: "text-[#3DCBD2]",
    bg: "bg-[#3DCBD2]/10",
    border: "border-[#3DCBD2]/20",
    glow: "shadow-[#3DCBD2]/20",
  },
  {
    icon: TrendingUp,
    metric: "3x",
    label: "Conversion Boost",
    description:
      "Studies show businesses that respond within 5 minutes convert 21x more leads. moreleadz gets you there in 10 seconds.",
    color: "text-emerald-400",
    bg: "bg-emerald-400/10",
    border: "border-emerald-400/20",
    glow: "shadow-emerald-400/20",
  },
  {
    icon: Clock,
    metric: "10h+",
    label: "Saved Per Week",
    description:
      "Eliminate manual follow-up emails, data entry, and lead tracking. Your team focuses on closing, not admin.",
    color: "text-blue-400",
    bg: "bg-blue-400/10",
    border: "border-blue-400/20",
    glow: "shadow-blue-400/20",
  },
  {
    icon: ShieldCheck,
    metric: "0",
    label: "Leads Lost",
    description:
      "Every lead is captured, responded to, and stored. Duplicate detection ensures clean data and no missed opportunities.",
    color: "text-purple-400",
    bg: "bg-purple-400/10",
    border: "border-purple-400/20",
    glow: "shadow-purple-400/20",
  },
];

export default function BenefitsSection() {
  return (
    <section className="section-dark-2 py-24 relative overflow-hidden" id="benefits">
      {/* Background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-[#3DCBD2]/5 rounded-full blur-[120px]" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16" data-animate>
          <div className="inline-flex items-center gap-2 bg-[#3DCBD2]/10 border border-[#3DCBD2]/30 rounded-full px-4 py-1.5 mb-6">
            <TrendingUp className="w-4 h-4 text-[#3DCBD2]" />
            <span className="text-[#3DCBD2] text-sm font-medium">
              Business Impact
            </span>
          </div>
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4 tracking-tight">
            What This Means For{" "}
            <span className="gradient-text">Your Business</span>
          </h2>
          <p className="text-white/60 text-lg max-w-2xl mx-auto">
            Real, measurable results from the moment moreleadz is connected to your
            lead sources.
          </p>
        </div>

        {/* Benefits Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {benefits.map((benefit, index) => {
            const Icon = benefit.icon;
            return (
              <div
                key={benefit.label}
                data-animate
                data-delay={`${index * 100}`}
                className={`glass-card rounded-2xl p-7 border ${benefit.border} card-hover group text-center`}
              >
                <div
                  className={`w-12 h-12 rounded-xl ${benefit.bg} border ${benefit.border} flex items-center justify-center mx-auto mb-5 group-hover:scale-110 transition-transform duration-300`}
                >
                  <Icon className={`w-6 h-6 ${benefit.color}`} strokeWidth={1.5} />
                </div>

                <div className={`text-5xl font-black ${benefit.color} mb-1 tracking-tight`}>
                  {benefit.metric}
                </div>
                <div className="text-white font-semibold text-lg mb-3">
                  {benefit.label}
                </div>
                <p className="text-white/50 text-sm leading-relaxed">
                  {benefit.description}
                </p>
              </div>
            );
          })}
        </div>

        {/* Bottom quote */}
        <div className="mt-16 max-w-3xl mx-auto text-center" data-animate data-delay="150">
          <div className="glass-card rounded-2xl p-8 border border-white/10">
            <p className="text-white/80 text-lg italic leading-relaxed mb-4">
              "The speed of your initial response is the single biggest factor in
              whether a lead converts. moreleadz removes that bottleneck entirely."
            </p>
            <div className="flex items-center justify-center gap-3">
              <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#3DCBD2]/30 to-[#3DCBD2]/10 border border-[#3DCBD2]/30 flex items-center justify-center">
                <span className="text-[#3DCBD2] font-bold text-sm">ML</span>
              </div>
              <div className="text-left">
                <div className="text-white text-sm font-medium">moreleadz Team</div>
                <div className="text-white/40 text-xs">AI Lead Automation Experts</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
