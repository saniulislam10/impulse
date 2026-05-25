import Header from '@/components/Header';
import Footer from '@/components/Footer';

export const metadata = {
  title: 'Products Catalog | Impulse Group',
  description: 'Explore our diverse range of products and solutions across all brands.',
};

export default function Products() {
  return (
    <div className="bg-white dark:bg-[#1a1a1a] font-[Manrope] text-[#121716] dark:text-gray-100 antialiased">
      <Header />
      <main className="flex flex-col lg:flex-row max-w-[1440px] mx-auto w-full px-6 lg:px-20 py-8 gap-10">
        {/* Sidebar Filter */}
        <aside className="w-full lg:w-72 flex-shrink-0">
          <div className="sticky top-28 space-y-8">
            <div>
              <h3 className="text-sm font-bold uppercase tracking-wider text-[#658680] mb-4">Brands</h3>
              <div className="space-y-2">
                <label className="flex items-center justify-between p-3 rounded-xl bg-[#1b9883]/10 border border-[#1b9883]/20 cursor-pointer group">
                  <div className="flex items-center gap-3">
                    <span className="material-symbols-outlined text-[#1b9883]">eco</span>
                    <span className="text-sm font-semibold">Just Natural</span>
                  </div>
                  <span className="text-xs font-bold text-[#1b9883]">24</span>
                </label>
                <label className="flex items-center justify-between p-3 rounded-xl hover:bg-[#f8f8f8] dark:hover:bg-white/5 cursor-pointer group transition-colors">
                  <div className="flex items-center gap-3">
                    <span className="material-symbols-outlined text-[#658680]">cloud_done</span>
                    <span className="text-sm font-medium">Impulse Solutions</span>
                  </div>
                  <span className="text-xs font-medium text-[#658680]">18</span>
                </label>
                <label className="flex items-center justify-between p-3 rounded-xl hover:bg-[#f8f8f8] dark:hover:bg-white/5 cursor-pointer group transition-colors">
                  <div className="flex items-center gap-3">
                    <span className="material-symbols-outlined text-[#658680]">precision_manufacturing</span>
                    <span className="text-sm font-medium">KKS Industrial</span>
                  </div>
                  <span className="text-xs font-medium text-[#658680]">12</span>
                </label>
              </div>
            </div>
            <div>
              <h3 className="text-sm font-bold uppercase tracking-wider text-[#658680] mb-4">Product Type</h3>
              <div className="space-y-3">
                <label className="flex items-center gap-3 cursor-pointer">
                  <input defaultChecked className="rounded text-[#1b9883] focus:ring-[#1b9883]/30 size-5 border-[#f0f4f3]" type="checkbox" />
                  <span className="text-sm">Organic Foods</span>
                </label>
                <label className="flex items-center gap-3 cursor-pointer">
                  <input className="rounded text-[#1b9883] focus:ring-[#1b9883]/30 size-5 border-[#f0f4f3]" type="checkbox" />
                  <span className="text-sm">Cloud Architecture</span>
                </label>
                <label className="flex items-center gap-3 cursor-pointer">
                  <input className="rounded text-[#1b9883] focus:ring-[#1b9883]/30 size-5 border-[#f0f4f3]" type="checkbox" />
                  <span className="text-sm">Industrial Precision Tools</span>
                </label>
                <label className="flex items-center gap-3 cursor-pointer">
                  <input className="rounded text-[#1b9883] focus:ring-[#1b9883]/30 size-5 border-[#f0f4f3]" type="checkbox" />
                  <span className="text-sm">Sustainability Consulting</span>
                </label>
              </div>
            </div>
            <button className="w-full flex items-center justify-center gap-2 py-3 border-2 border-[#f0f4f3] dark:border-white/10 text-sm font-bold rounded-xl hover:bg-[#f8f8f8] dark:hover:bg-white/5 transition-colors">
              <span className="material-symbols-outlined text-lg">filter_alt_off</span>
              Clear Filters
            </button>
          </div>
        </aside>
        {/* Content Area */}
        <div className="flex-1 space-y-6">
          {/* Breadcrumbs & Heading */}
          <div className="space-y-4">
            <nav className="flex items-center gap-2 text-sm font-medium text-[#658680]">
              <a className="hover:text-[#1b9883]" href="/">Home</a>
              <span className="material-symbols-outlined text-base">chevron_right</span>
              <span className="text-[#121716] dark:text-white">Product Catalog</span>
            </nav>
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
              <div>
                <h1 className="text-4xl font-black tracking-tight mb-2">Portfolio Explorer</h1>
                <p className="text-[#658680]">Discover excellence across our multi-brand conglomerate.</p>
              </div>
              <button className="flex items-center gap-2 px-5 py-2.5 bg-[#f8f8f8] dark:bg-white/5 text-[#121716] dark:text-white text-sm font-bold rounded-lg border border-[#f0f4f3] dark:border-white/10 hover:border-[#1b9883]/50 transition-all">
                <span className="material-symbols-outlined text-lg">download</span>
                Full Catalog (PDF)
              </button>
            </div>
          </div>
          {/* Active Chips */}
          <div className="flex flex-wrap gap-2 py-2">
            <div className="flex items-center gap-2 bg-[#1b9883]/10 text-[#1b9883] px-3 py-1.5 rounded-full text-xs font-bold border border-[#1b9883]/20">
              Brand: Just Natural
              <span className="material-symbols-outlined text-sm cursor-pointer">close</span>
            </div>
            <div className="flex items-center gap-2 bg-[#f8f8f8] dark:bg-white/5 text-[#658680] px-3 py-1.5 rounded-full text-xs font-bold border border-[#f0f4f3]">
              Category: Organic Food
              <span className="material-symbols-outlined text-sm cursor-pointer">close</span>
            </div>
          </div>
          {/* Product Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-8">
            {[
              { title: 'Cold-Pressed Extra Virgin Olive Oil', brand: 'Just Natural', desc: 'Premium organic olives harvested from our sustainable groves, offering a rich, peppery finish.', img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBRyLNKgcaXPYHX-kibQ4BWyMDoJk9RoJm7eLhDnk74BAMAj0UWw94TrSoO63QM4Ewt75eq5A6y6nhK2lTTqHXYGgQ_5R0dEGlYvi9-K5wRA-UFKAxDwxKM8-6kJ57ohzOewChyoME8piT3704fuDOSJTH8X40Ect42Z3b_10Cblw4EA7wRR7lzpghUVq4y7vM4ugNNhuXc-ncXWDnU0C9ScIR_SrllKQGellrtNdtN8_0nnXXFgf6OTQo9vOjhgywsfkf0UAElZiQ', icon: 'eco', color: '#1b9883' },
              { title: 'Enterprise Cloud Architecture', brand: 'Impulse Solutions', desc: 'Scalable, secure, and future-proof cloud infrastructures tailored for multinational operations.', img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAVSX_wT9RmXRoDFYrD9KvYUt5mmWfUafdGlNkr7dCriuVJyn_K4LNCNGokt0VIT_OoPIBQ2v9LjqxhIPeqWihk-DE_KzUNggh527NUnQcRD56euVQP2fMZbBhb5p_ubw9FGb1oQ3AQsHE_5ZM4Sgyh04ISjBNr_Ciw8tjLL1Uhe5L8_1k4ZQgn0bp5gPT0Uyy0AfIRknn8IOzJBT0k1PX8nwfHkQ5KP9CPYUQ_BjnVH5k8NC-KO5FOs1LzG0U_D9R_H1TaLsl9CZo', icon: 'cloud_done', color: '#3b82f6', badge: 'Premium' },
              { title: 'Precision Steel Calipers', brand: 'KKS Industrial', desc: 'High-accuracy measurement tools designed for aerospace-grade engineering and heavy industry.', img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAUuJcZqP8VTH0potv0J59V5mfrpCzxbEThRecxswr34fLhIk1-2HKHJy5BlklpcBYa8ypo7SEMGqRZIQgSCRaHCQaVTdt8DC_NTKAzupegajPYVlDzdHZqBnos8KQaMVbyJQESF6NKnAMI_BVwss---CvEPVi5oJHmEveflFuabDFYYQrDkk1iSK_9pVvKdJmPWVJwzXIdK61-CzJTP0OQ29I3g4y_QII1Rt25EJgZf8yE-wVN0aLIlP30ZgAPjfrD8-fRFlxxMS8', icon: 'precision_manufacturing', color: '#64748b' },
            ].map((product, i) => (
              <div key={i} className="group bg-white dark:bg-white/5 rounded-2xl border border-[#f0f4f3] dark:border-white/10 overflow-hidden hover:shadow-2xl hover:shadow-[#1b9883]/5 hover:-translate-y-1 transition-all duration-300">
                <div className="relative aspect-[4/3] overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent z-10"></div>
                  <img alt={product.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" src={product.img} />
                  <span className="absolute top-4 left-4 z-20 bg-white/90 dark:bg-black/80 px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-widest flex items-center gap-1.5 shadow-sm">
                    <span className="w-2 h-2 rounded-full" style={{ backgroundColor: product.color }}></span>
                    {product.brand}
                  </span>
                  {product.badge && (
                    <span className="absolute top-4 right-4 z-20 bg-[#D1BC94] text-white px-2 py-1 rounded text-[10px] font-black uppercase tracking-widest">
                      {product.badge}
                    </span>
                  )}
                </div>
                <div className="p-6 space-y-4">
                  <div className="space-y-2">
                    <h3 className="text-lg font-bold group-hover:text-[#1b9883] transition-colors">{product.title}</h3>
                    <p className="text-sm text-[#658680] line-clamp-2">{product.desc}</p>
                  </div>
                  <button className="w-full flex items-center justify-center gap-2 py-3 bg-[#1b9883] text-white text-sm font-bold rounded-xl hover:brightness-110 active:scale-[0.98] transition-all">
                    View Details
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
