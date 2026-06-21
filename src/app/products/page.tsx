import Header from '@/components/Header';
import Footer from '@/components/Footer';

export const metadata = {
  title: 'Products Catalog | Impulse Group',
  description: 'Explore our diverse range of products and solutions across all brands.',
};
const products = [
  {
    title: 'Cashew Nuts',
    brand: 'Just Natural',
    desc: 'Cashew nuts are creamy, mildly sweet, and nutrient-rich tree nuts known for their soft texture and delicious taste. They are a good source of healthy fats, protein, vitamins, and minerals, making them a popular choice for healthy snacks, desserts, and savory dishes. Cashews are enjoyed worldwide for both their flavor and nutritional benefits.', img: '/cashew-nuts.png',
    icon: 'eco',
    color: '#1b9883'
  },
  {
    title: 'Red Apricot',
    brand: 'Just Natural',
    desc: 'Red Apricot is a delicious and nutritious dried fruit known for its naturally sweet taste, vibrant color, and soft texture. Rich in fiber, vitamins, and antioxidants, it makes a healthy snack for any time of the day. Enjoy its delightful flavor on its own or add it to cereals, desserts, and trail mixes for an extra burst of natural goodness.',
    img: '/red-apricot.png',
    icon: 'cloud_done',
    color: '#3b82f6',
    badge: 'Premium'
  },
  {
    title: 'Chia Seeds',
    brand: 'Just Natural',
    desc: 'Chia Seeds are tiny nutrient-rich seeds packed with fiber, plant-based protein, omega-3 fatty acids, and essential minerals. Known for their mild flavor and versatility, they can be easily added to smoothies, yogurt, cereals, baked goods, and desserts. Chia Seeds are a natural choice for supporting a healthy and balanced lifestyle while adding a nutritious boost to your daily diet.',
    img: '/chia-seeds.jpeg',
    icon: 'precision_manufacturing',
    color: '#64748b'
  },
]
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
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg" className="text-[#1b9883]">
                      <path d="M12 2c0 0-5 4.99-5 9 0 2.15.82 4.14 2.18 5.67.99 1.13 2.16 2.02 3.48 2.58-.41.59-.99 1.1-1.66 1.46-.5.26-1.04.49-1.6.68 1.57.42 3.29.64 5.08.64 6.08 0 11-4.92 11-11C22 7.01 17 2 12 2z" />
                    </svg>
                    <span className="text-sm font-semibold">Just Natural</span>
                  </div>
                  <span className="text-xs font-bold text-[#1b9883]">24</span>
                </label>
                <label className="flex items-center justify-between p-3 rounded-xl hover:bg-[#f8f8f8] dark:hover:bg-white/5 cursor-pointer group transition-colors">
                  <div className="flex items-center gap-3">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" stroke="currentColor" strokeWidth="2" className="text-[#658680]">
                      <path d="M6 19h12a3 3 0 003-3V7a3 3 0 00-3-3H6a3 3 0 00-3 3v9a3 3 0 003 3z" />
                    </svg>
                    <span className="text-sm font-medium">Impulse Solutions</span>
                  </div>
                  <span className="text-xs font-medium text-[#658680]">18</span>
                </label>
                <label className="flex items-center justify-between p-3 rounded-xl hover:bg-[#f8f8f8] dark:hover:bg-white/5 cursor-pointer group transition-colors">
                  <div className="flex items-center gap-3">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" stroke="currentColor" strokeWidth="2" className="text-[#658680]">
                      <path d="M3 3h7v7H3V3zm11 0h7v7h-7V3zM3 14h7v7H3v-7zm11 0h7v7h-7v-7z" />
                    </svg>
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
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" stroke="currentColor" strokeWidth="2">
                <path d="M3 6h18M6 12h12M9 18h6" />
              </svg>
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
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" stroke="currentColor" strokeWidth="2">
                <path d="M9 6l6 6-6 6" />
              </svg>
              <span className="text-[#121716] dark:text-white">Product Catalog</span>
            </nav>
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
              <div>
                <h1 className="text-4xl font-black tracking-tight mb-2">Portfolio Explorer</h1>
                <p className="text-[#658680]">Discover excellence across our multi-brand conglomerate.</p>
              </div>
              <a href="/Just-Natural-Export-Profile.pdf" download className="flex items-center gap-2 px-5 py-2.5 bg-[#f8f8f8] dark:bg-white/5 text-[#121716] dark:text-white text-sm font-bold rounded-lg border border-[#f0f4f3] dark:border-white/10 hover:border-[#1b9883]/50 transition-all">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" stroke="currentColor" strokeWidth="2">
                  <path d="M12 2v12M5 10l7 7 7-7" />
                </svg>
                Full Catalog (PDF)
              </a>
            </div>
          </div>
          {/* Active Chips */}
          <div className="flex flex-wrap gap-2 py-2">
            <div className="flex items-center gap-2 bg-[#1b9883]/10 text-[#1b9883] px-3 py-1.5 rounded-full text-xs font-bold border border-[#1b9883]/20">
              Brand: Just Natural
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" stroke="currentColor" strokeWidth="2" className="cursor-pointer">
                <path d="M18 6L6 18M6 6l12 12" />
              </svg>
            </div>
            <div className="flex items-center gap-2 bg-[#f8f8f8] dark:bg-white/5 text-[#658680] px-3 py-1.5 rounded-full text-xs font-bold border border-[#f0f4f3]">
              Category: Organic Food
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" stroke="currentColor" strokeWidth="2" className="cursor-pointer">
                <path d="M18 6L6 18M6 6l12 12" />
              </svg>
            </div>
          </div>
          {/* Product Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-8">
            {products.map((product, i) => (
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
