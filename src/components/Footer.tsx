import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-background-light dark:bg-background-dark border-t border-[#f0f4f3] dark:border-white/10 pt-20 pb-10">
      <div className="max-w-[1280px] mx-auto px-6 lg:px-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Brand Info */}
          <div className="space-y-6">
            <div className="flex items-center gap-3">
              <div className="text-primary">
                <svg className="size-6" fill="currentColor" viewBox="0 0 48 48">
                  <path d="M8.57829 8.57829C5.52816 11.6284 3.451 15.5145 2.60947 19.7452C1.76794 23.9758 2.19984 28.361 3.85056 32.3462C5.50128 36.3314 8.29667 39.7376 11.8832 42.134C15.4698 44.5305 19.6865 45.8096 24 45.8096C28.3135 45.8096 32.5302 44.5305 36.1168 42.134C39.7033 39.7375 42.4987 36.3314 44.1494 32.3462C45.8002 28.361 46.2321 23.9758 45.3905 19.7452C44.549 15.5145 42.4718 11.6284 39.4217 8.57829L24 24L8.57829 8.57829Z" />
                </svg>
              </div>
              <h2 className="text-xl font-extrabold tracking-tight">Impulse Group</h2>
            </div>
            <p className="text-gray-500 text-sm leading-relaxed">
              A leader in diversified business sectors, driving growth through ethical practices and
              sustainable development across our global verticals.
            </p>
            <div className="flex gap-4">
              <a
                className="size-10 rounded-full border border-[#dce5e3] dark:border-white/10 flex items-center justify-center hover:bg-primary hover:text-white transition-colors"
                href="#"
                aria-label="Share"
              >
                <span className="material-symbols-outlined text-xl">share</span>
              </a>
              <a
                className="size-10 rounded-full border border-[#dce5e3] dark:border-white/10 flex items-center justify-center hover:bg-primary hover:text-white transition-colors"
                href="#"
                aria-label="Website"
              >
                <span className="material-symbols-outlined text-xl">public</span>
              </a>
              <a
                className="size-10 rounded-full border border-[#dce5e3] dark:border-white/10 flex items-center justify-center hover:bg-primary hover:text-white transition-colors"
                href="#"
                aria-label="Link"
              >
                <span className="material-symbols-outlined text-xl">link</span>
              </a>
            </div>
          </div>

          {/* Our Brands */}
          <div className="space-y-6">
            <h4 className="font-bold">Our Brands</h4>
            <ul className="space-y-4 text-sm text-gray-500">
              <li>
                <Link className="hover:text-primary transition-colors" href="/brands">
                  Just Natural
                </Link>
              </li>
              <li>
                <Link className="hover:text-primary transition-colors" href="/brands">
                  Impulse Solutions
                </Link>
              </li>
              <li>
                <Link className="hover:text-primary transition-colors" href="/brands">
                  KKS Infrastructure
                </Link>
              </li>
              <li>
                <Link className="hover:text-primary transition-colors" href="/brands">
                  Global Logistics
                </Link>
              </li>
            </ul>
          </div>

          {/* Quick Links */}
          <div className="space-y-6">
            <h4 className="font-bold">Quick Links</h4>
            <ul className="space-y-4 text-sm text-gray-500">
              <li>
                <Link className="hover:text-primary transition-colors" href="/about">
                  About Us
                </Link>
              </li>
              <li>
                <Link className="hover:text-primary transition-colors" href="/football-team">
                  Football Team
                </Link>
              </li>
              <li>
                <a className="hover:text-primary transition-colors" href="#">
                  Annual Report
                </a>
              </li>
              <li>
                <a className="hover:text-primary transition-colors" href="#">
                  Careers
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-6">
            <h4 className="font-bold">Contact Us</h4>
            <div className="space-y-4 text-sm text-gray-500">
              <p className="flex items-start gap-3">
                <span className="material-symbols-outlined text-primary">location_on</span>
                123 Business Avenue, Suite 500
                <br />
                Corporate Hub, Metropolis
              </p>
              <p className="flex items-center gap-3">
                <span className="material-symbols-outlined text-primary">phone</span>
                +1 (555) 000-1234
              </p>
              <p className="flex items-center gap-3">
                <span className="material-symbols-outlined text-primary">mail</span>
                hello@imperialgroup.com
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="pt-10 border-t border-[#f0f4f3] dark:border-white/10 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-gray-400">
          <p>© 2024 Impulse Group. All Rights Reserved.</p>
          <div className="flex gap-8">
            <a className="hover:text-primary transition-colors" href="#">
              Privacy Policy
            </a>
            <a className="hover:text-primary transition-colors" href="#">
              Terms of Service
            </a>
            <a className="hover:text-primary transition-colors" href="#">
              Cookie Settings
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
