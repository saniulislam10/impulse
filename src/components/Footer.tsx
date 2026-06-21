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
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" stroke="currentColor" strokeWidth="2">
                  <path d="M4 12v8a2 2 0 002 2h12a2 2 0 002-2v-8M16 6l-4-4-4 4M12 2v13" />
                </svg>
              </a>
              <a
                className="size-10 rounded-full border border-[#dce5e3] dark:border-white/10 flex items-center justify-center hover:bg-primary hover:text-white transition-colors"
                href="#"
                aria-label="Website"
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" />
                </svg>
              </a>
              <a
                className="size-10 rounded-full border border-[#dce5e3] dark:border-white/10 flex items-center justify-center hover:bg-primary hover:text-white transition-colors"
                href="#"
                aria-label="Link"
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" stroke="currentColor" strokeWidth="2">
                  <path d="M10 13a5 5 0 0073.46-2.46l3.89-3.89a5 5 0 00-7.07-7.07l-1.93 1.93M14 11a5 5 0 00-7.34 2.46l-3.89 3.89a5 5 0 007.07 7.07l1.93-1.93" />
                </svg>
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
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg" className="text-primary flex-shrink-0">
                  <path d="M12 2C6.48 2 2 6.48 2 12c0 8 10 18 10 18s10-10 10-18c0-5.52-4.48-10-10-10zm0 15c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5z" />
                </svg>
                185 Rose view plaza, Room No - 504
                <br />
                Bir Uttam C R Dutta Road, Hatirpool, Dhaka
              </p>
              <p className="flex items-center gap-3">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg" className="text-primary flex-shrink-0">
                  <path d="M17 10.5V7c0-.55-.45-1-1-1H4c-.55 0-1 .45-1 1v10c0 .55.45 1 1 1h12c.55 0 1-.45 1-1v-3.5l4 4v-11l-4 4z" />
                </svg>
                +880 1643 959 399
              </p>
              <p className="flex items-center gap-3">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" stroke="currentColor" strokeWidth="2" className="text-primary flex-shrink-0">
                  <path d="M3 8l9 6 9-6M3 8v10a2 2 0 002 2h14a2 2 0 002-2V8" />
                </svg>
                info@imperialgroup.com
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="pt-10 border-t border-[#f0f4f3] dark:border-white/10 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-gray-400">
          <p>© {new Date().getFullYear()} Impulse Group. All Rights Reserved.</p>
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
