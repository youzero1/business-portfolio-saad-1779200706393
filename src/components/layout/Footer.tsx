import { Link } from 'react-router-dom';
import { Github, Linkedin, Twitter, Mail } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-slate-950 text-slate-400">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="md:col-span-2">
            <div className="flex items-center gap-2 mb-3">
              <div className="w-8 h-8 rounded-lg bg-blue-600 flex items-center justify-center">
                <span className="text-white font-bold">K</span>
              </div>
              <span className="text-white font-bold text-lg">Kotla</span>
            </div>
            <p className="text-sm leading-relaxed max-w-xs">
              Premium custom software development for businesses that want to move faster and scale smarter.
            </p>
            <div className="flex gap-3 mt-4">
              {[
                { icon: Github, href: '#' },
                { icon: Linkedin, href: '#' },
                { icon: Twitter, href: '#' },
                { icon: Mail, href: '/contact' },
              ].map(({ icon: Icon, href }, i) => (
                <a
                  key={i}
                  href={href}
                  className="w-8 h-8 rounded-lg bg-white/10 hover:bg-blue-600 flex items-center justify-center transition-all"
                >
                  <Icon size={15} className="text-white" />
                </a>
              ))}
            </div>
          </div>

          {/* Links */}
          <div>
            <h4 className="text-white font-semibold mb-3 text-sm">Company</h4>
            <ul className="space-y-2 text-sm">
              {[
                { label: 'About', href: '/about' },
                { label: 'Services', href: '/services' },
                { label: 'Contact', href: '/contact' },
              ].map((l) => (
                <li key={l.href}>
                  <Link to={l.href} className="hover:text-white transition-colors">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Client */}
          <div>
            <h4 className="text-white font-semibold mb-3 text-sm">Clients</h4>
            <ul className="space-y-2 text-sm">
              {[
                { label: 'Client Portal', href: '/portal' },
                { label: 'View Pricing', href: '/portal' },
                { label: 'Get a Proposal', href: '/contact' },
              ].map((l) => (
                <li key={l.label}>
                  <Link to={l.href} className="hover:text-white transition-colors">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 mt-10 pt-6 flex flex-col sm:flex-row items-center justify-between gap-2 text-xs">
          <p>© {new Date().getFullYear()} Kotla Software. All rights reserved.</p>
          <p>Built with ❤️ to attract world-class partners</p>
        </div>
      </div>
    </footer>
  );
}
