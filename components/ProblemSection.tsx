import { Clock, ClipboardList, AlertTriangle } from "lucide-react";

const problems = [
  {
    icon: Clock,
    title: "Leads Go Cold",
    description:
      "When your team takes hours to reply, prospects lose interest and move on to competitors who respond faster. Speed is everything in lead conversion.",
    stat: "78% of buyers",
    statLabel: "choose the first responder",
  },
  {
    icon: ClipboardList,
    title: "Manual Follow-ups Waste Time",
    description:
      "Your team spends hours crafting individual responses, copying data into spreadsheets, and tracking who's been contacted — time that should go into closing deals.",
    stat: "3+ hours",
    statLabel: "lost to manual work daily",
  },
  {
    icon: AlertTriangle,
    title: "Leads Get Lost or Duplicated",
    description:
      "Without a proper system, leads slip through the cracks. Duplicate entries create confusion, and some prospects never get a response at all.",
    stat: "35% of leads",
    statLabel: "never receive a response",
  },
];

export default function ProblemSection() {
  return (
    <section className="section-light py-24" id="problem">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-red-50 border border-red-200 rounded-full px-4 py-1.5 mb-6">
            <span className="w-2 h-2 rounded-full bg-red-400 animate-pulse" />
            <span className="text-red-600 text-sm font-medium">
              The Real Problem
            </span>
          </div>
          <h2 className="text-4xl sm:text-5xl font-bold text-[#0d1424] mb-4 tracking-tight">
            Most Businesses{" "}
            <span className="text-red-500">Lose Leads</span>
          </h2>
          <p className="text-[#0d1424]/60 text-lg max-w-2xl mx-auto">
            Slow responses and manual processes are costing you customers every single day.
          </p>
        </div>

        {/* Problem Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {problems.map((problem) => {
            const Icon = problem.icon;
            return (
              <div
                key={problem.title}
                className="bg-white rounded-2xl p-8 border border-gray-100 shadow-sm hover:shadow-xl hover:border-red-100 transition-all duration-300 group hover:-translate-y-1"
              >
                <div className="w-12 h-12 rounded-xl bg-red-50 border border-red-100 flex items-center justify-center mb-6 group-hover:bg-red-100 transition-colors">
                  <Icon className="w-6 h-6 text-red-500" strokeWidth={1.5} />
                </div>

                <h3 className="text-xl font-semibold text-[#0d1424] mb-3">
                  {problem.title}
                </h3>
                <p className="text-[#0d1424]/60 text-sm leading-relaxed mb-6">
                  {problem.description}
                </p>

                <div className="border-t border-gray-100 pt-5">
                  <div className="text-2xl font-bold text-red-500">
                    {problem.stat}
                  </div>
                  <div className="text-[#0d1424]/50 text-xs mt-0.5">
                    {problem.statLabel}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
