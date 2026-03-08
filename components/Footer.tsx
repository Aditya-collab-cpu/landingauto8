import { Zap, Mail, ExternalLink } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-[#060a14] border-t border-white/5" id="contact">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main footer */}
        <div className="py-12 grid grid-cols-1 md:grid-cols-4 gap-10">
          {/* Brand */}
          <div className="md:col-span-2">
            <a href="#" className="flex items-center gap-2 mb-4 group w-fit">
              <div className="w-8 h-8 rounded-lg bg-[#3DCBD2] flex items-center justify-center shadow-lg shadow-[#3DCBD2]/20">
                <Zap className="w-4 h-4 text-[#080d1a]" strokeWidth={2.5} />
              </div>
              <span className="text-white font-bold text-xl tracking-tight">
                more<span className="text-[#3DCBD2]">leadz</span>
              </span>
            </a>
            <p className="text-white/45 text-sm leading-relaxed max-w-xs">
              AI-powered lead response automation. Never miss another lead —
              respond in seconds, convert more, work less.
            </p>
            <div className="flex items-center gap-2 mt-5">
              <a
                href="mailto:hello@moreleadz.ai"
                className="flex items-center gap-2 text-white/50 hover:text-[#3DCBD2] text-sm transition-colors group"
              >
                <Mail className="w-4 h-4" />
                hello@moreleadz.ai
              </a>
            </div>
          </div>

          {/* Product links */}
          <div>
            <h4 className="text-white text-sm font-semibold mb-4">Product</h4>
            <ul className="flex flex-col gap-3">
              {[
                { label: "Features", href: "#features" },
                { label: "How It Works", href: "#solution" },
                { label: "Demo", href: "#video-demo" },
                { label: "Use Cases", href: "#use-cases" },
              ].map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-white/45 hover:text-white text-sm transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Company links */}
          <div>
            <h4 className="text-white text-sm font-semibold mb-4">Company</h4>
            <ul className="flex flex-col gap-3">
              {[
                { label: "Book a Demo", href: "#demo" },
                { label: "Contact Us", href: "mailto:hello@moreleadz.ai" },
                { label: "Privacy Policy", href: "#" },
                { label: "Terms of Service", href: "#" },
              ].map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-white/45 hover:text-white text-sm transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-white/5 py-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-white/30 text-xs">
            © {new Date().getFullYear()} moreleadz. All rights reserved.
          </p>
          <div className="flex items-center gap-1 text-white/25 text-xs">
            <span>Built with</span>
            <span className="text-[#3DCBD2]">AI</span>
            <span>for lead-driven businesses</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
