import Header from '@/components/Header';
import Footer from '@/components/Footer';

export const metadata = {
  title: 'Impulse Group | Nurturing Growth, Delivering Excellence',
  description: 'Impulse Group is a multi-brand conglomerate dedicated to excellence across Just Natural, Impulse Solutions, and KKS.',
};

export default function Home() {
  return (
    <div className="bg-white dark:bg-[#1a1a1a] font-[Manrope] text-[#121716] dark:text-white transition-colors duration-300">
      <Header />
      <main>
        {/* Hero Section */}
        <section className="relative overflow-hidden pt-12 pb-24 lg:py-24">
          <div className="max-w-[1280px] mx-auto px-6 lg:px-10">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="order-2 lg:order-1 flex flex-col gap-8">
                <div className="space-y-4">
                  <span className="inline-block px-3 py-1 bg-[#1b9883]/10 text-[#1b9883] text-xs font-bold uppercase tracking-widest rounded">
                    Multi-Brand Excellence
                  </span>
                  <h1 className="text-5xl lg:text-7xl font-extrabold leading-[1.1] tracking-tight text-[#121716] dark:text-white">
                    Nurturing Growth, <br />
                    <span className="text-[#1b9883]">Delivering Excellence.</span>
                  </h1>
                  <p className="text-lg text-gray-600 dark:text-gray-400 max-w-xl leading-relaxed">
                    Impulse Group is a multi-brand conglomerate dedicated to excellence across Just Natural, Impulse Solutions, and KKS. We bridge industries with innovation and integrity.
                  </p>
                </div>
                <div className="flex flex-wrap gap-4">
                  <button className="bg-[#1b9883] text-white px-8 py-4 rounded-lg font-bold text-lg hover:translate-y-[-2px] transition-all shadow-xl shadow-[#1b9883]/20">
                    Explore Brands
                  </button>
                  <button className="border border-[#dce5e3] dark:border-white/10 px-8 py-4 rounded-lg font-bold text-lg hover:bg-gray-50 dark:hover:bg-white/5 transition-all">
                    Our Products
                  </button>
                </div>
              </div>
              <div className="order-1 lg:order-2">
                <div className="relative group">
                  <div className="absolute -inset-4 bg-[#1b9883]/5 rounded-2xl transform rotate-2 transition-transform group-hover:rotate-1"></div>
                  <div
                    className="relative aspect-square lg:aspect-[4/5] bg-center bg-cover rounded-xl shadow-2xl overflow-hidden"
                    style={{
                      backgroundImage: `url("https://lh3.googleusercontent.com/aida-public/AB6AXuB98eWRU6D0nmpAyYkQ0vGNenXkgiKJfWT77PlSshqxThwYGa3StIC42NC5VsOmS2JBCfyHr0EMTq0hOKkdriukSl2qq_C8EVzVSq4ugFkkDErsRXHcx13v42mBUT3DIKuFAINCU1AQHwec3_flhuxhcuPMd_Vc5xpNqI-ohGTjoqMT0i3lgYVJsOdMEugdrovzXhYsGMLXU819o0rjmii0tv0jMVRLj9pKtDI-FpknUgyWyZPLoC5bbUruNEcdB9KhvDp_HEESpTo")`
                    }}
                  >
                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
                    <div className="absolute bottom-8 left-8">
                      <div className="bg-white/90 backdrop-blur px-4 py-2 rounded-lg inline-flex items-center gap-2">
                        <span className="w-2 h-2 rounded-full bg-[#1b9883] animate-pulse"></span>
                        <span className="text-sm font-bold text-[#121716]">Just Natural Organic Range</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="bg-[#f8f8f8] dark:bg-[#262626] py-20 border-y border-[#f0f4f3] dark:border-white/5">
          <div className="max-w-[1280px] mx-auto px-6 lg:px-10">
            <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-8 mb-12">
              <div className="space-y-2">
                <h2 className="text-3xl font-extrabold tracking-tight">By the Numbers</h2>
                <div className="h-1 w-20 bg-[#D1BC94] rounded"></div>
              </div>
              <p className="max-w-md text-gray-500 dark:text-gray-400">
                Our trajectory of growth is defined by stability and a commitment to long-term value creation for our global partners.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-white dark:bg-[#1a1a1a] p-8 rounded-xl border border-[#dce5e3] dark:border-white/10 hover:shadow-xl transition-shadow group">
                <div className="flex justify-between items-start mb-4">
                  <p className="text-sm font-bold text-gray-500 uppercase tracking-wider">Years of Excellence</p>
                  <span className="text-[#1b9883] font-bold text-sm bg-[#1b9883]/10 px-2 py-1 rounded">+5% YoY</span>
                </div>
                <p className="text-5xl font-black text-[#121716] dark:text-white mb-2">25+</p>
                <p className="text-gray-500 text-sm">Founded on principles of sustainability and ethical growth.</p>
              </div>
              <div className="bg-white dark:bg-[#1a1a1a] p-8 rounded-xl border border-[#dce5e3] dark:border-white/10 hover:shadow-xl transition-shadow group">
                <div className="flex justify-between items-start mb-4">
                  <p className="text-sm font-bold text-gray-500 uppercase tracking-wider">Global Partners</p>
                  <span className="text-[#1b9883] font-bold text-sm bg-[#1b9883]/10 px-2 py-1 rounded">+12%</span>
                </div>
                <p className="text-5xl font-black text-[#121716] dark:text-white mb-2">50+</p>
                <p className="text-gray-500 text-sm">Strengthening distribution networks across four continents.</p>
              </div>
              <div className="bg-white dark:bg-[#1a1a1a] p-8 rounded-xl border border-[#dce5e3] dark:border-white/10 hover:shadow-xl transition-shadow group">
                <div className="flex justify-between items-start mb-4">
                  <p className="text-sm font-bold text-gray-500 uppercase tracking-wider">Core Verticals</p>
                  <span className="text-gray-400 font-bold text-sm bg-gray-100 dark:bg-white/5 px-2 py-1 rounded">Stable</span>
                </div>
                <p className="text-5xl font-black text-[#121716] dark:text-white mb-2">3</p>
                <p className="text-gray-500 text-sm">Strategic focus on Natural Products, Solutions, and KKS.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Brand Cards */}
        <section className="py-24">
          <div className="max-w-[1280px] mx-auto px-6 lg:px-10">
            <div className="text-center mb-16 space-y-4">
              <h2 className="text-4xl font-extrabold tracking-tight">Diverse Portfolios</h2>
              <p className="text-gray-500 max-w-2xl mx-auto">Explore our specialized entities, each a leader in its respective domain, united under the Impulse vision.</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* Brand 1 */}
              <div className="brand-card group cursor-pointer">
                <div className="relative h-64 overflow-hidden rounded-xl mb-6">
                  <div
                    className="brand-image absolute inset-0 bg-cover bg-center transition-transform duration-500"
                    style={{
                      backgroundImage: `url('https://lh3.googleusercontent.com/aida-public/AB6AXuD_oUNELye5PqitaZCRsGI3W_6K_FCqOOc9veQSMaW_sChcHlUpUFgbQ-6w2H4dO4JWPDCHc_SBK41s4zVwHf0gzzL_ZXTzCpPC-HiLXR03bNnK8bzHk0zmX5ubtt74yQxVpNbxzkwXWQEDr5z6Y-w6SIQ706kK2MHBMl9QMJk3lS-zuEs2LAcHoz5VjCfMkmVTYqH5i63hApbkOo0qa7gFhj8ONdil0_3vq_hdrfiofShVeFQyCM82ALsxHvEOkPDmXctT20QZQM0')`
                    }}
                  ></div>
                  <div className="absolute inset-0 bg-[#1b9883]/20 group-hover:bg-[#1b9883]/10 transition-colors"></div>
                </div>
                <h3 className="text-2xl font-bold mb-2">Just Natural</h3>
                <p className="text-gray-500 text-sm mb-4 leading-relaxed">Sustainable organic products for a healthier lifestyle, ethically sourced and distributed globally.</p>
                <a className="text-[#1b9883] font-bold flex items-center gap-2 group-hover:gap-3 transition-all" href="#">
                  Learn More <span className="material-symbols-outlined">arrow_forward</span>
                </a>
              </div>
              {/* Brand 2 */}
              <div className="brand-card group cursor-pointer">
                <div className="relative h-64 overflow-hidden rounded-xl mb-6 border-t-4 border-[#D1BC94]">
                  <div
                    className="brand-image absolute inset-0 bg-cover bg-center transition-transform duration-500"
                    style={{
                      backgroundImage: `url('https://lh3.googleusercontent.com/aida-public/AB6AXuACIg6FSa4EnTw1GKxa4Mq7nQIlcQUbjq3aHdo4dBRezskeKDvB6iZPQ6RuVmrL7iQHrZmVRP5mfIZS9LcwdnD7GJfGnscqdQvzPcg9ZXv5E95IwPIHfbnuWSpzBfisM2M-teovZPlV650NpUEtf1qaWTjtOBm9tLaoWxlgKQ_QWHyWy0j5IUJFF7k9Zp54w8KOT5YuznBTrFT4pymDYKHNEv6wtUlN_yIHT6KsMjjA6h2Gf8SfYU24zqRSC8oXqlSD_fQmQUrQdjs')`
                    }}
                  ></div>
                  <div className="absolute inset-0 bg-black/40 group-hover:bg-black/30 transition-colors"></div>
                </div>
                <h3 className="text-2xl font-bold mb-2">Impulse Solutions</h3>
                <p className="text-gray-500 text-sm mb-4 leading-relaxed">Strategic corporate consulting and integrated business solutions for modern enterprises.</p>
                <a className="text-[#1b9883] font-bold flex items-center gap-2 group-hover:gap-3 transition-all" href="#">
                  Learn More <span className="material-symbols-outlined">arrow_forward</span>
                </a>
              </div>
              {/* Brand 3 */}
              <div className="brand-card group cursor-pointer">
                <div className="relative h-64 overflow-hidden rounded-xl mb-6">
                  <div
                    className="brand-image absolute inset-0 bg-cover bg-center transition-transform duration-500"
                    style={{
                      backgroundImage: `url('https://lh3.googleusercontent.com/aida-public/AB6AXuCpR-XTKGy_iEDeo_sUZcdy6WCgrcEL56sIgW74VzauFN3mHt5QEbr-LA9TRADZKgnC_PFdRGeNGAsnXM7IkKne17Tv9qTcqMWHovhcULFm4L-pMftzxHFqV-R62oPhG9msFJ1IhkvLDO88n7255GneZ7HWsKQely4zD9Zre3zgVnbL7jBa_pLmxhPTD6zm4yybWILhKmZgVqKcYo9yN02XpKzkYy7TQH6k_JvEy_90scbRbTDil1gi3dhJbeUxYB91eBK7T99aiiw')`
                    }}
                  ></div>
                  <div className="absolute inset-0 bg-gray-800/40 group-hover:bg-gray-800/20 transition-colors"></div>
                </div>
                <h3 className="text-2xl font-bold mb-2">KKS</h3>
                <p className="text-gray-500 text-sm mb-4 leading-relaxed">Advanced manufacturing and logistical infrastructure powering international trade lanes.</p>
                <a className="text-[#1b9883] font-bold flex items-center gap-2 group-hover:gap-3 transition-all" href="#">
                  Learn More <span className="material-symbols-outlined">arrow_forward</span>
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Logo Marquee */}
        <section className="py-16 border-t border-[#f0f4f3] dark:border-white/5 overflow-hidden">
          <h3 className="text-center text-sm font-bold text-gray-400 uppercase tracking-[0.2em] mb-12">Our Prestigious Clients</h3>
          <div className="logo-marquee">
            <div className="logo-track">
              <img alt="Client Logo 1" className="opacity-40 hover:opacity-100 transition-opacity grayscale hover:grayscale-0" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAele9TFfTyrenqQg2qlrmDykNkffDTuPCDQuChoCt2FVo-yPSLLg-xwPC3SYm2ENG80ygaa1ShIFgCYxObOzNLKJffEY6swBIHPauWXA3frYiEjt35OteRKuBBVlQwhnJFLWszSLYIy1aWFsrtAnlMiFxoUoyhnGHAmN-MRopkBeqazGip7fMW6GEev1PkuJKLK55bVXY8ZiuX2ZYVry9q1qgjPS9QZQWEHINyPD3nRe7NR8qgMBhsYYfrTuApCcieYYx-Tr8JxL8" />
              <img alt="Client Logo 2" className="opacity-40 hover:opacity-100 transition-opacity grayscale hover:grayscale-0" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAWlB7Quq4t6Askq55gjTxBLzcrqa45PCL1fCuHTZb6ssA4UACJl_oEVWKnQyjMHxW6UV4ZOoPlfit4NSWqVKYU23bCAcgakd5vvFnfneMGRJFxfat92BasOh4cei7CXEPm-bJUXsh-sC1dpYd92Chg9YlIEQWtvOJLnCRQp6S-_dyH2MngJy2P_6yIUpkm_mMqOsKO2Fb5X1xQa0RbxEVRSqxHZv4PteFd6pEQnIL0lJ-aDnOK6bKAYP_FOpqbKoSznEWKg" />
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
