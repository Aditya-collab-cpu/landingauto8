import { FormInput, Sparkles, SendHorizonal, DatabaseZap } from "lucide-react";

const steps = [
  {
    icon: FormInput,
    step: "01",
    title: "Lead Submits Form",
    description:
      "A potential customer fills out your web form, WhatsApp, or any contact channel with their name, email, phone, and company.",
    border: "border-blue-500/30",
    iconColor: "text-blue-400",
    iconBg: "bg-blue-500/10",
  },
  {
    icon: Sparkles,
    step: "02",
    title: "AI Generates Personalized Email",
    description:
      "moreleadz's AI instantly creates a tailored, professional email based on the lead's details, industry, and context — no templates needed.",
    border: "border-[#3DCBD2]/30",
    iconColor: "text-[#3DCBD2]",
    iconBg: "bg-[#3DCBD2]/10",
  },
  {
    icon: SendHorizonal,
    step: "03",
    title: "Email Sent Instantly",
    description:
      "The personalized email is dispatched to the lead within seconds of submission — before they've even left your website.",
    border: "border-purple-500/30",
    iconColor: "text-purple-400",
    iconBg: "bg-purple-500/10",
  },
  {
    icon: DatabaseZap,
    step: "04",
    title: "Lead Saved and Tracked",
    description:
      "Every lead is stored with full details, duplicate-checked, and synced to your Google Sheets or CRM automatically — nothing lost.",
    border: "border-emerald-500/30",
    iconColor: "text-emerald-400",
    iconBg: "bg-emerald-500/10",
  },
];

export default function SolutionSection() {
  return (
    <section className="section-dark-2 py-24 relative overflow-hidden" id="solution">
      {/* Background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#3DCBD2]/5 rounded-full blur-[100px]" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16" data-animate>
          <div className="inline-flex items-center gap-2 bg-[#3DCBD2]/10 border border-[#3DCBD2]/30 rounded-full px-4 py-1.5 mb-6">
            <Sparkles className="w-4 h-4 text-[#3DCBD2]" />
            <span className="text-[#3DCBD2] text-sm font-medium">
              How It Works
            </span>
          </div>
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4 tracking-tight">
            AI Handles Your Lead Response{" "}
            <span className="gradient-text">Instantly</span>
          </h2>
          <p className="text-white/60 text-lg max-w-2xl mx-auto">
            A fully automated pipeline that captures, responds to, and tracks
            every lead without any manual work.
          </p>
        </div>

        {/* Steps */}
        <div className="relative">
          {/* Connecting line — desktop only */}
          <div className="hidden lg:block absolute top-16 left-[12.5%] right-[12.5%] h-px bg-gradient-to-r from-transparent via-[#3DCBD2]/30 to-transparent" />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {steps.map((step, index) => {
              const Icon = step.icon;
              return (
                <div key={step.step} data-animate data-delay={`${index * 100}`}>
                  {/* Card */}
                  <div
                    className={`glass-card rounded-2xl p-6 border ${step.border} card-hover`}
                  >
                    <div className="flex items-center justify-between mb-5">
                      <div
                        className={`w-11 h-11 rounded-xl ${step.iconBg} border ${step.border} flex items-center justify-center`}
                      >
                        <Icon
                          className={`w-5 h-5 ${step.iconColor}`}
                          strokeWidth={1.5}
                        />
                      </div>
                      <span className="text-4xl font-black text-white/5 select-none">
                        {step.step}
                      </span>
                    </div>
                    <h3 className="text-lg font-semibold text-white mb-2">
                      {step.title}
                    </h3>
                    <p className="text-white/55 text-sm leading-relaxed">
                      {step.description}
                    </p>
                  </div>

                  {/* Connector arrow — mobile only, placed AFTER card */}
                  {index < steps.length - 1 && (
                    <div className="sm:hidden flex justify-center mt-3">
                      <div className="w-px h-8 bg-gradient-to-b from-[#3DCBD2]/40 to-transparent" />
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>

        {/* Bottom callout */}
        <div className="mt-12 text-center" data-animate data-delay="200">
          <div className="inline-flex items-center gap-3 glass-card border border-[#3DCBD2]/20 rounded-2xl px-6 py-4">
            <div className="w-2 h-2 rounded-full bg-[#3DCBD2] animate-pulse" />
            <span className="text-white/70 text-sm">
              The entire flow completes in{" "}
              <span className="text-[#3DCBD2] font-semibold">
                under 10 seconds
              </span>{" "}
              from form submission to email delivered
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
