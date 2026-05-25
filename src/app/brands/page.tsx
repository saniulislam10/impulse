import Header from '@/components/Header';
import Footer from '@/components/Footer';

export const metadata = {
  title: 'Brands Overview | Impulse Group',
  description: 'Explore our diverse portfolio of industry-leading brands and enterprises.',
};

export default function Brands() {
  return (
    <div className="bg-white dark:bg-[#1a1a1a] font-[Manrope] text-[#121716] dark:text-gray-100 antialiased">
      <Header />
      <main>
        {/* Hero Section */}
        <section className="relative pt-20 pb-16 px-6 overflow-hidden">
          <div className="max-w-7xl mx-auto text-center relative z-10">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#1b9883]/10 text-[#1b9883] text-xs font-bold uppercase tracking-widest mb-6">
              <span className="size-1.5 rounded-full bg-[#1b9883] animate-pulse"></span>
              Portfolio Excellence
            </div>
            <h1 className="text-5xl lg:text-7xl font-extrabold tracking-tighter mb-8 max-w-4xl mx-auto leading-[1.1]">
              Powering <span className="text-[#1b9883] italic">Innovation</span> Across Diverse Markets
            </h1>
            <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto leading-relaxed">
              Impulse Group manages a curated portfolio of market leaders, each dedicated to setting new benchmarks in sustainability, technology, and excellence.
            </p>
          </div>
          {/* Abstract background shape */}
          <div className="absolute top-0 right-0 -z-10 w-1/3 h-full bg-gradient-to-l from-[#1b9883]/5 to-transparent blur-3xl"></div>
          <div className="absolute bottom-0 left-0 -z-10 w-1/4 h-1/2 bg-gradient-to-r from-[#D1BC94]/5 to-transparent blur-2xl"></div>
        </section>

        {/* Brands Grid */}
        <section className="py-12 px-6 bg-[#f8fcfb] dark:bg-[#242424]/30">
          <div className="max-w-7xl mx-auto">
            <div className="flex flex-col lg:flex-row justify-between items-end mb-16 gap-6">
              <div>
                <h2 className="text-3xl font-bold mb-4">Our Core Brands</h2>
                <p className="text-gray-500 max-w-md">Each brand within the Impulse family operates with autonomy while sharing our collective commitment to progress.</p>
              </div>
              <div className="flex gap-2">
                <button className="p-3 border border-gray-200 dark:border-gray-700 rounded-full hover:bg-white dark:hover:bg-gray-800 transition-all">
                  <span className="material-symbols-outlined">grid_view</span>
                </button>
                <button className="p-3 border border-gray-200 dark:border-gray-700 rounded-full hover:bg-white dark:hover:bg-gray-800 transition-all">
                  <span className="material-symbols-outlined">view_list</span>
                </button>
              </div>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {/* Brand 1: Just Natural */}
              <div className="brand-card group bg-white dark:bg-[#1a1a1a] border border-gray-100 dark:border-gray-800 rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all flex flex-col">
                <div className="relative h-64 overflow-hidden">
                  <div
                    className="brand-image absolute inset-0 bg-cover bg-center"
                    style={{
                      backgroundImage: `url('https://lh3.googleusercontent.com/aida-public/AB6AXuCxtjoY4REOK4UVBavHPipIcFblxsidQ7ycNfHk95dPXeWOGrdTcxxPE2ECb7ZQPhBO7isNVXXvlh8a9Hesb14JR49xsBL1APp3FHyMatxP7a1e3cFv1RMi3obPYx1yFInRs8jk4HrIl0JjMp8V6_0r09d_n6D_HVClV6dhHPkyTqwUkb7H0s_uV3ta1T0PQ7abXrQhUt3TYzihltxkRYu_OGEjMlmQMtPlA8CxYVVMMLXuzo10SEOwPRHeWyeMRknAgj44wwWiHKE')`
                    }}
                  ></div>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                  <div className="absolute top-6 left-6 bg-white dark:bg-gray-900 px-4 py-2 rounded-lg font-bold text-sm flex items-center gap-2">
                    <span className="material-symbols-outlined text-green-500 text-base">eco</span>
                    Agriculture
                  </div>
                </div>
                <div className="p-8 flex flex-col flex-grow">
                  <div className="flex items-center gap-2 mb-4">
                    <span className="w-10 h-1 bg-[#1b9883] rounded-full"></span>
                    <h3 className="text-2xl font-extrabold">Just Natural</h3>
                  </div>
                  <p className="text-gray-600 dark:text-gray-400 mb-8 flex-grow leading-relaxed">
                    Pioneering the path to organic freshness and agricultural excellence. Just Natural focuses on sustainable farming and farm-to-table logistics.
                  </p>
                  <a
                    className="group/btn inline-flex items-center justify-between w-full px-6 py-4 bg-[#1b9883] text-white font-bold rounded-xl hover:bg-[#1b9883]/90 transition-all"
                    href="#"
                  >
                    <span>Learn More</span>
                    <span className="material-symbols-outlined group-hover/btn:translate-x-1 transition-transform">arrow_forward</span>
                  </a>
                </div>
              </div>

              {/* Brand 2: Impulse Solutions */}
              <div className="brand-card group bg-white dark:bg-[#1a1a1a] border border-gray-100 dark:border-gray-800 rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all flex flex-col">
                <div className="relative h-64 overflow-hidden">
                  <div
                    className="brand-image absolute inset-0 bg-cover bg-center"
                    style={{
                      backgroundImage: `url('https://lh3.googleusercontent.com/aida-public/AB6AXuCEUekzCRilqua74hxYO8nqhKqj_r1VU8GAmKJlrK4zccm85SGx_ToYYJSFNV67PfRG99RVnD_y5-I4WhjiwquKz73Ie-ASt9oJ-ZMJ9K-J3OWPZKHqkza80MTn3UJxDeY4tXzaOLmAmUa3qaR11XdbH60s0OkRkDRRaFW_dvDP3Uol57XivnqS1WmxBvhd_IQSwdlVFnDQV2NNGcMLr-6ZaVhOY4Ta-vzZlPiXWgNh1e_3vgV5oonMDy66wki4isYTBF21b8eEdMg')`
                    }}
                  ></div>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                  <div className="absolute top-6 left-6 bg-white dark:bg-gray-900 px-4 py-2 rounded-lg font-bold text-sm flex items-center gap-2">
                    <span className="material-symbols-outlined text-blue-500 text-base">strategy</span>
                    Consulting
                  </div>
                </div>
                <div className="p-8 flex flex-col flex-grow">
                  <div className="flex items-center gap-2 mb-4">
                    <span className="w-10 h-1 bg-[#1b9883] rounded-full"></span>
                    <h3 className="text-2xl font-extrabold">Impulse Solutions</h3>
                  </div>
                  <p className="text-gray-600 dark:text-gray-400 mb-8 flex-grow leading-relaxed">
                    Strategic corporate consulting and cutting-edge technology solutions designed for the modern enterprise ecosystem.
                  </p>
                  <a
                    className="group/btn inline-flex items-center justify-between w-full px-6 py-4 bg-[#1b9883] text-white font-bold rounded-xl hover:bg-[#1b9883]/90 transition-all"
                    href="#"
                  >
                    <span>Learn More</span>
                    <span className="material-symbols-outlined group-hover/btn:translate-x-1 transition-transform">arrow_forward</span>
                  </a>
                </div>
              </div>

              {/* Brand 3: KKS */}
              <div className="brand-card group bg-white dark:bg-[#1a1a1a] border border-gray-100 dark:border-gray-800 rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all flex flex-col">
                <div className="relative h-64 overflow-hidden">
                  <div
                    className="brand-image absolute inset-0 bg-cover bg-center"
                    style={{
                      backgroundImage: `url('https://lh3.googleusercontent.com/aida-public/AB6AXuBeR9ik68g2YsuP8kqY8F8GPCaIgZJxUVLhY_uo2ob-PSCMUgz4wAVJ4ErxkAgh3Nx5vM9oqz5BNKJmnRU3KlVeGVhdEIkf4b68QvJa-V51VdJdS76TEI6WhPsE_X7HrVXmXsd4oFozdUToINwxTewA2RGT7ebF2gZU7ik1pcRh0eswijYXbqfWIatn_b3Xj9kU52yNSFLyj5WJJAXOMP4zR9UXR_9HFqJd7vzaCSnwZdtQKToEemAJxnLh76CC8osgg4qB1YPpl2g')`
                    }}
                  ></div>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                  <div className="absolute top-6 left-6 bg-white dark:bg-gray-900 px-4 py-2 rounded-lg font-bold text-sm flex items-center gap-2">
                    <span className="material-symbols-outlined text-orange-500 text-base">precision_manufacturing</span>
                    Industrial
                  </div>
                </div>
                <div className="p-8 flex flex-col flex-grow">
                  <div className="flex items-center gap-2 mb-4">
                    <span className="w-10 h-1 bg-[#1b9883] rounded-full"></span>
                    <h3 className="text-2xl font-extrabold">KKS</h3>
                  </div>
                  <p className="text-gray-600 dark:text-gray-400 mb-8 flex-grow leading-relaxed">
                    Specialized industrial manufacturing and precision services delivering high-performance components for global infrastructure.
                  </p>
                  <a
                    className="group/btn inline-flex items-center justify-between w-full px-6 py-4 bg-[#1b9883] text-white font-bold rounded-xl hover:bg-[#1b9883]/90 transition-all"
                    href="#"
                  >
                    <span>Learn More</span>
                    <span className="material-symbols-outlined group-hover/btn:translate-x-1 transition-transform">arrow_forward</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Values Section */}
        <section className="py-24 px-6">
          <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <div className="relative">
              <div className="aspect-square rounded-3xl overflow-hidden shadow-2xl">
                <img
                  alt="Corporate Excellence"
                  className="w-full h-full object-cover"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuCY-JCqnieGZzgJ9XZk7aSKxd6BlMGFieg8yDIBBHC6Viy9v6s2S_7B0sFIVKlUlf4Yh7lyToRWsKy8TyVeCt5GDfvpM5vwLo6fKifm8a2CanLQLmmCjL_ZTZtnSWTF5GHq69Lb_1nMoyJRYB6ZppvzBoe-z59bEgLOYeIET9OaY04GUP0ZCFYtaWvMFiMa7BEgyeRHNI1Bu0HkkydzTPpBCYo4s3VwgmoBMV0CV0Jx4vdlyK7J-tZItqzGL2Q9Jb-ou-QNpPbsXnI"
                />
              </div>
              <div className="absolute -bottom-10 -right-10 bg-[#D1BC94] p-8 rounded-2xl hidden md:block shadow-xl max-w-[280px]">
                <p className="text-sm font-bold text-white mb-2">CORPORATE PHILOSOPHY</p>
                <p className="text-xl font-light text-white italic">{`"Excellence is not an act, but a habit across every brand we build."`}</p>
              </div>
            </div>
            <div className="space-y-12">
              <div className="space-y-4">
                <h2 className="text-4xl font-extrabold">The Impulse Standard</h2>
                <p className="text-gray-600 dark:text-gray-400">
                  Our success is built on three core pillars that unify our diverse portfolio and drive long-term value for our partners and planet.
                </p>
              </div>
              <div className="space-y-8">
                <div className="flex gap-6">
                  <div className="shrink-0 w-14 h-14 bg-[#1b9883]/10 rounded-2xl flex items-center justify-center text-[#1b9883]">
                    <span className="material-symbols-outlined text-3xl">trending_up</span>
                  </div>
                  <div>
                    <h4 className="text-xl font-bold mb-2">Sustainable Growth</h4>
                    <p className="text-gray-500">Long-term vision over short-term gains, ensuring our brands thrive for generations.</p>
                  </div>
                </div>
                <div className="flex gap-6">
                  <div className="shrink-0 w-14 h-14 bg-[#1b9883]/10 rounded-2xl flex items-center justify-center text-[#1b9883]">
                    <span className="material-symbols-outlined text-3xl">lightbulb</span>
                  </div>
                  <div>
                    <h4 className="text-xl font-bold mb-2">Continuous Innovation</h4>
                    <p className="text-gray-500">Investing in R&amp;D to maintain our competitive edge in agriculture, tech, and manufacturing.</p>
                  </div>
                </div>
                <div className="flex gap-6">
                  <div className="shrink-0 w-14 h-14 bg-[#1b9883]/10 rounded-2xl flex items-center justify-center text-[#1b9883]">
                    <span className="material-symbols-outlined text-3xl">verified</span>
                  </div>
                  <div>
                    <h4 className="text-xl font-bold mb-2">Uncompromising Quality</h4>
                    <p className="text-gray-500">Rigorous standards applied across every service and product in the Impulse family.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-6 bg-[#1b9883] dark:bg-[#1b9883]/20">
          <div className="max-w-4xl mx-auto text-center text-white">
            <h2 className="text-4xl font-extrabold mb-6">Ready to Partner with Us?</h2>
            <p className="text-lg opacity-90 mb-10 max-w-2xl mx-auto">
              Discover how the Impulse Group can help your business achieve its next milestone through our strategic brand expertise.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <button className="bg-white text-[#1b9883] px-8 py-4 rounded-xl font-bold hover:bg-gray-100 transition-colors">
                Get Started
              </button>
              <button className="border-2 border-white px-8 py-4 rounded-xl font-bold hover:bg-white/10 transition-colors">
                Learn More
              </button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
