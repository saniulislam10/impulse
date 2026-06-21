import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-background-light dark:bg-background-dark border-t border-[#f0f4f3] dark:border-white/10 pt-20 pb-10">
      <div className="max-w-[1280px] mx-auto px-6 lg:px-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Brand Info */}
          <div className="space-y-6">
            <div className="flex items-center gap-3">
              <img src="/logo-old-t.png" alt="Impulse Group Logo" className="w-10 h-10 object-contain" />
              <h2 className="text-xl font-extrabold tracking-tight">Impulse Group</h2>
            </div>
            <p className="text-gray-500 text-sm leading-relaxed">
              A leader in diversified business sectors, driving growth through ethical practices and
              sustainable development across our global verticals.
            </p>
            <div className="flex gap-4">
              <a
                className="size-10 rounded-full border border-[#dce5e3] dark:border-white/10 flex items-center justify-center hover:bg-primary hover:text-white transition-colors"
                href="https://www.facebook.com/impulsebusinesssolution"
                aria-label="Facebook"
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                  <path d="M22 12.07C22 6.48 17.52 2 11.93 2S2 6.48 2 12.07C2 17.06 5.66 21.24 10.44 22v-7.01H8.08v-2.92h2.36V9.41c0-2.33 1.39-3.61 3.52-3.61 1.02 0 2.09.18 2.09.18v2.3h-1.18c-1.16 0-1.52.72-1.52 1.46v1.75h2.59l-.41 2.92h-2.18V22C18.34 21.24 22 17.06 22 12.07z" />
                </svg>
              </a>
              <a
                className="size-10 rounded-full border border-[#dce5e3] dark:border-white/10 flex items-center justify-center hover:bg-primary hover:text-white transition-colors"
                href="https://www.instagram.com/justnatural4u/"
                aria-label="Instagram"
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.266.07 1.646.07 4.85s-.012 3.584-.07 4.85c-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849s.013-3.583.07-4.849c.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948s.014 3.667.072 4.947c.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072s3.667-.014 4.947-.072c4.358-.2 6.78-2.618 6.98-6.98.059-1.28.073-1.689.073-4.948s-.014-3.667-.072-4.947c-.2-4.358-2.618-6.78-6.98-6.98-1.281-.059-1.69-.073-4.949-.073zM5.838 12a6.162 6.162 0 1 1 12.324 0 6.162 6.162 0 0 1-12.324 0zM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm4.965-10.322a1.44 1.44 0 1 1 2.881.001 1.44 1.44 0 0 1-2.881-.001z" />
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
                  Impulse Business Solution OPC
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
