import {
  Sparkles,
  Zap,
  ShieldCheck,
  Table2,
  Globe,
  MessageSquare,
} from "lucide-react";

const features = [
  {
    icon: Sparkles,
    title: "AI Personalized Emails",
    description:
      "Every email is uniquely crafted by AI using the lead's name, company, and context — not generic templates.",
    color: "text-[#3DCBD2]",
    bg: "bg-[#3DCBD2]/10",
    border: "border-[#3DCBD2]/20",
  },
  {
    icon: Zap,
    title: "Instant Lead Response",
    description:
      "Respond to every lead within 10 seconds of submission, day or night, weekends included — fully automated.",
    color: "text-yellow-400",
    bg: "bg-yellow-400/10",
    border: "border-yellow-400/20",
  },
  {
    icon: ShieldCheck,
    title: "Duplicate Lead Detection",
    description:
      "moreleadz checks every incoming lead against your database to prevent duplicates and avoid contacting the same person twice.",
    color: "text-emerald-400",
    bg: "bg-emerald-400/10",
    border: "border-emerald-400/20",
  },
  {
    icon: Table2,
    title: "Google Sheets / CRM Integration",
    description:
      "Leads are automatically synced to your Google Sheets or CRM. No manual data entry, no copy-pasting, ever.",
    color: "text-blue-400",
    bg: "bg-blue-400/10",
    border: "border-blue-400/20",
  },
  {
    icon: Globe,
    title: "Works with Web Forms",
    description:
      "Integrate with any web form — Webflow, WordPress, Wix, Typeform, or custom HTML forms. Easy setup, no code required.",
    color: "text-purple-400",
    bg: "bg-purple-400/10",
    border: "border-purple-400/20",
  },
  {
    icon: MessageSquare,
    title: "Works with WhatsApp & Email Leads",
    description:
      "Capture leads from WhatsApp messages, email inquiries, and social DMs — all funneled into one automated response system.",
    color: "text-pink-400",
    bg: "bg-pink-400/10",
    border: "border-pink-400/20",
  },
];

export default function FeaturesSection() {
  return (
    <section className="section-dark py-24 relative overflow-hidden" id="features">
      {/* Background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#3DCBD2]/5 rounded-full blur-[100px]" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-indigo-500/5 rounded-full blur-[100px]" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16" data-animate>
          <div className="inline-flex items-center gap-2 bg-[#3DCBD2]/10 border border-[#3DCBD2]/30 rounded-full px-4 py-1.5 mb-6">
            <span className="text-[#3DCBD2] text-sm font-medium">
              Features
            </span>
          </div>
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4 tracking-tight">
            Everything You Need to{" "}
            <span className="gradient-text">Convert Leads</span>
          </h2>
          <p className="text-white/60 text-lg max-w-2xl mx-auto">
            A complete AI automation toolkit that handles your entire lead
            response workflow.
          </p>
        </div>

        {/* Feature Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div
                key={feature.title}
                data-animate
                data-delay={`${(index % 3) * 100}`}
                className={`glass-card rounded-2xl p-7 border ${feature.border} card-hover group`}
              >
                <div
                  className={`w-11 h-11 rounded-xl ${feature.bg} border ${feature.border} flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-300`}
                >
                  <Icon className={`w-5 h-5 ${feature.color}`} strokeWidth={1.5} />
                </div>
                <h3 className="text-white font-semibold text-lg mb-2">
                  {feature.title}
                </h3>
                <p className="text-white/55 text-sm leading-relaxed">
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
