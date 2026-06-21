'use client';

import Link from 'next/link';

export default function Header() {
  return (
    <div className="sticky top-0 z-50 bg-background-light/90 dark:bg-background-dark/90 backdrop-blur-md border-b border-[#f0f4f3] dark:border-white/10">
      <div className="max-w-[1280px] mx-auto px-6 lg:px-10">
        <header className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3">
            <img src="/logo-old-t.png" alt="Impulse Group logo" className="h-8 w-8 object-contain" />
            <h2 className="text-xl font-extrabold tracking-tight">Impulse Group</h2>
          </Link>

          {/* Navigation */}
          <nav className="hidden lg:flex items-center gap-8">
            <Link className="text-sm font-semibold hover:text-primary transition-colors" href="/about">
              About Us
            </Link>
            <Link className="text-sm font-semibold hover:text-primary transition-colors" href="/brands">
              Brands
            </Link>
            <Link className="text-sm font-semibold hover:text-primary transition-colors" href="/products">
              Products
            </Link>
            <Link className="text-sm font-semibold hover:text-primary transition-colors" href="/gallery">
              Gallery
            </Link>
            <Link className="text-sm font-semibold hover:text-primary transition-colors" href="/football-team">
              Football Team
            </Link>
          </nav>

          {/* Right Actions */}
          <div className="flex items-center gap-4">
            <button className="bg-primary hover:bg-primary/90 text-white px-6 py-2.5 rounded-lg text-sm font-bold transition-all shadow-lg shadow-primary/20">
              <Link className="text-sm font-semibold hover:font-bold transition-colors" href="/contact">
                Contact Us
              </Link>
            </button>
            {/* <div
              className="bg-center bg-cover rounded-full size-10 border-2 border-primary/20"
              style={{
                backgroundImage:
                  'url("https://lh3.googleusercontent.com/aida-public/AB6AXuA-CUKhDOAFjxcPL1TZExYCBGs0-n1L8oS2v8NcBlIKAPrFwuv-GqE0d5b7j4a4_mlq-hEMPhEXNpnjtw32HmqkSbqBTPPUOzWYzrCPlI8AtNtyqgBUXn-l2E8ReIai_5r3qyhjcLuLLtqJAHnA0kZYLplEj3OEzTHnoS8EM28_cgsUUsiDP_RCgAJqeTW-PWcjCGt4iwLLPJndG7ZZ7SorGUXhfCi34jbAHmlTOS97HPt-f6CbRno2x1omKBR5IdOZzqmqck9FDOk")',
              }}
              title="Corporate professional headshot"
            /> */}
          </div>
        </header>
      </div>
    </div>
  );
}
