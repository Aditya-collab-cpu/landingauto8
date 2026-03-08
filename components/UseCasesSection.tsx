import { Home, BarChart2, Sun, Briefcase, GraduationCap, Wrench } from "lucide-react";

const useCases = [
  {
    icon: Home,
    title: "Real Estate Agencies",
    description:
      "Instantly follow up with property enquiries, qualify buyers and sellers, and book viewings automatically.",
    tag: "Popular",
    tagColor: "bg-[#3DCBD2]/10 text-[#3DCBD2] border-[#3DCBD2]/20",
  },
  {
    icon: BarChart2,
    title: "Digital Marketing Agencies",
    description:
      "Convert inbound leads from ad campaigns into booked discovery calls without manual outreach.",
    tag: "High ROI",
    tagColor: "bg-purple-500/10 text-purple-400 border-purple-500/20",
  },
  {
    icon: Sun,
    title: "Solar Companies",
    description:
      "Respond to solar quote requests instantly, capturing hot leads before competitors do.",
    tag: "Fast-close",
    tagColor: "bg-yellow-500/10 text-yellow-400 border-yellow-500/20",
  },
  {
    icon: Briefcase,
    title: "Consultants",
    description:
      "Let AI handle initial prospect outreach so you can focus on delivering value instead of chasing leads.",
    tag: "Time-saving",
    tagColor: "bg-blue-500/10 text-blue-400 border-blue-500/20",
  },
  {
    icon: GraduationCap,
    title: "Education & Immigration",
    description:
      "Automatically respond to course enquiries and visa consultation requests from prospective students and clients.",
    tag: "High volume",
    tagColor: "bg-emerald-500/10 text-emerald-400 border-emerald-500/20",
  },
  {
    icon: Wrench,
    title: "Service Businesses",
    description:
      "Plumbers, electricians, cleaners — never miss a service request again. AI responds and books instantly.",
    tag: "Always-on",
    tagColor: "bg-orange-500/10 text-orange-400 border-orange-500/20",
  },
];

export default function UseCasesSection() {
  return (
    <section className="section-light py-24" id="use-cases">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-[#0d1424]/5 border border-[#0d1424]/10 rounded-full px-4 py-1.5 mb-6">
            <span className="text-[#0d1424]/60 text-sm font-medium">
              Use Cases
            </span>
          </div>
          <h2 className="text-4xl sm:text-5xl font-bold text-[#0d1424] mb-4 tracking-tight">
            Built for{" "}
            <span className="text-[#3DCBD2]">Lead-Driven</span>{" "}
            Businesses
          </h2>
          <p className="text-[#0d1424]/60 text-lg max-w-2xl mx-auto">
            Whether you get 10 or 10,000 leads a month, moreleadz ensures every single one gets an instant, personalized response.
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {useCases.map((useCase) => {
            const Icon = useCase.icon;
            return (
              <div
                key={useCase.title}
                className="bg-white rounded-2xl p-7 border border-gray-100 shadow-sm hover:shadow-xl hover:border-[#3DCBD2]/30 transition-all duration-300 group hover:-translate-y-1"
              >
                <div className="flex items-start justify-between mb-5">
                  <div className="w-11 h-11 rounded-xl bg-[#3DCBD2]/10 border border-[#3DCBD2]/20 flex items-center justify-center group-hover:bg-[#3DCBD2]/20 transition-colors">
                    <Icon className="w-5 h-5 text-[#3DCBD2]" strokeWidth={1.5} />
                  </div>
                  <span
                    className={`text-xs font-medium px-2.5 py-1 rounded-full border ${useCase.tagColor}`}
                  >
                    {useCase.tag}
                  </span>
                </div>
                <h3 className="text-[#0d1424] font-semibold text-lg mb-2">
                  {useCase.title}
                </h3>
                <p className="text-[#0d1424]/60 text-sm leading-relaxed">
                  {useCase.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
