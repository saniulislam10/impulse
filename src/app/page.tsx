import Header from '@/components/Header';
import Footer from '@/components/Footer';
import StatCard from '@/components/StatCard';
import BrandCard from '@/components/BrandCard';
import SectionHeader from '@/components/SectionHeader';
import Link from 'next/link';

export default function Home() {
  return (
    <>
      <Header />
      <main>
        {/* Hero Section */}
        <section className="relative overflow-hidden pt-12 pb-24 lg:py-24">
          <div className="max-w-[1280px] mx-auto px-6 lg:px-10">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="order-2 lg:order-1 flex flex-col gap-8">
                <div className="space-y-4">
                  <span className="inline-block px-3 py-1 bg-primary/10 text-primary text-xs font-bold uppercase tracking-widest rounded">
                    Multi-Brand Excellence
                  </span>
                  <h1 className="text-5xl lg:text-7xl font-extrabold leading-[1.1] tracking-tight text-[#121716] dark:text-white">
                    Nurturing Growth, <br />
                    <span className="text-primary">Delivering Excellence.</span>
                  </h1>
                  <p className="text-lg text-gray-600 dark:text-gray-400 max-w-xl leading-relaxed">
                    Impulse Group is a multi-brand conglomerate dedicated to excellence across Just Natural,
                    Impulse Solutions, and KKS. We bridge industries with innovation and integrity.
                  </p>
                </div>
                <div className="flex flex-wrap gap-4">
                  <Link
                    href="/brands"
                    className="bg-primary text-white px-8 py-4 rounded-lg font-bold text-lg hover:translate-y-[-2px] transition-all shadow-xl shadow-primary/20"
                  >
                    Explore Brands
                  </Link>
                  <Link
                    href="/products"
                    className="border border-[#dce5e3] dark:border-white/10 px-8 py-4 rounded-lg font-bold text-lg hover:bg-gray-50 dark:hover:bg-white/5 transition-all"
                  >
                    Our Products
                  </Link>
                </div>
              </div>
              <div className="order-1 lg:order-2">
                <div className="relative group">
                  <div className="absolute -inset-4 bg-primary/5 rounded-2xl transform rotate-2 transition-transform group-hover:rotate-1" />
                  <div
                    className="relative aspect-square lg:aspect-[4/5] bg-center bg-cover rounded-xl shadow-2xl overflow-hidden"
                    style={{
                      backgroundImage: `url("https://lh3.googleusercontent.com/aida-public/AB6AXuB98eWRU6D0nmpAyYkQ0vGNenXkgiKJfWT77PlSshqxThwYGa3StIC42NC5VsOmS2JBCfyHr0EMTq0hOKkdriukSl2qq_C8EVzVSq4ugFkkDErsRXHcx13v42mBUT3DIKuFAINCU1AQHwec3_flhuxhcuPMd_Vc5xpNqI-ohGTjoqMT0i3lgYVJsOdMEugdrovzXhYsGMLXU819o0rjmii0tv0jMVRLj9pKtDI-FpknUgyWyZPLoC5bbUruNEcdB9KhvDp_HEESpTo")`,
                    }}
                    role="img"
                    aria-label="High quality photography of Just Natural organic food products"
                  >
                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                    <div className="absolute bottom-8 left-8">
                      <div className="bg-white/90 backdrop-blur px-4 py-2 rounded-lg inline-flex items-center gap-2">
                        <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
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
        <section className="bg-surface-light dark:bg-surface-dark py-20 border-y border-[#f0f4f3] dark:border-white/5">
          <div className="max-w-[1280px] mx-auto px-6 lg:px-10">
            <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-8 mb-12">
              <SectionHeader
                title="By the Numbers"
                showUnderline
              />
              <p className="max-w-md text-gray-500 dark:text-gray-400">
                Our trajectory of growth is defined by stability and a commitment to long-term value creation for our
                global partners.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <StatCard
                label="Years of Excellence"
                value="25+"
                description="Founded on principles of sustainability and ethical growth."
                trend="+5% YoY"
              />
              <StatCard
                label="Global Partners"
                value="50+"
                description="Strengthening distribution networks across four continents."
                trend="+12%"
              />
              <StatCard
                label="Core Verticals"
                value="3"
                description="Strategic focus on Natural Products, Solutions, and KKS."
                trendLabel="Stable"
              />
            </div>
          </div>
        </section>

        {/* Brand Cards */}
        <section className="py-24">
          <div className="max-w-[1280px] mx-auto px-6 lg:px-10">
            <SectionHeader
              title="Diverse Portfolios"
              description="Explore our specialized entities, each a leader in its respective domain, united under the Impulse vision."
              centered
            />
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <BrandCard
                title="Just Natural"
                description="Sustainable organic products for a healthier lifestyle, ethically sourced and distributed globally."
                imageUrl="https://lh3.googleusercontent.com/aida-public/AB6AXuD_oUNELye5PqitaZCRsGI3W_6K_FCqOOc9veQSMaW_sChcHlUpUFgbQ-6w2H4dO4JWPDCHc_SBK41s4zVwHf0gzzL_ZXTzCpPC-HiLXR03bNnK8bzHk0zmX5ubtt74yQxVpNbxzkwXWQEDr5z6Y-w6SIQ706kK2MHBMl9QMJk3lS-zuEs2LAcHoz5VjCfMkmVTYqH5i63hApbkOo0qa7gFhj8ONdil0_3vq_hdrfiofShVeFQyCM82ALsxHvEOkPDmXctT20QZQM0"
                imageAlt="Just Natural brand aesthetic"
                href="/brands"
              />
              <BrandCard
                title="Impulse Solutions"
                description="Strategic corporate consulting and integrated business solutions for modern enterprises."
                imageUrl="https://lh3.googleusercontent.com/aida-public/AB6AXuACIg6FSa4EnTw1GKxa4Mq7nQIlcQUbjq3aHdo4dBRezskeKDvB6iZPQ6RuVmrL7iQHrZmVRP5mfIZS9LcwdnD7GJfGnscqdQvzPcg9ZXv5E95IwPIHfbnuWSpzBfisM2M-teovZPlV650NpUEtf1qaWTjtOBm9tLaoWxlgKQ_QWHyWy0j5IUJFF7k9Zp54w8KOT5YuznBTrFT4pymDYKHNEv6wtUlN_yIHT6KsMjjA6h2Gf8SfYU24zqRSC8oXqlSD_fQmQUrQdjs"
                imageAlt="Impulse Solutions corporate office"
                overlayColor="gold"
                href="/brands"
              />
              <BrandCard
                title="KKS"
                description="Advanced manufacturing and logistical infrastructure powering international trade lanes."
                imageUrl="https://lh3.googleusercontent.com/aida-public/AB6AXuCpR-XTKGy_iEDeo_sUZcdy6WCgrcEL56sIgW74VzauFN3mHt5QEbr-LA9TRADZKgnC_PFdRGeNGAsnXM7IkKne17Tv9qTcqMWHovhcULFm4L-pMftzxHFqV-R62oPhG9msFJ1IhkvLDO88n7255GneZ7HWsKQely4zD9Zre3zgVnbL7jBa_pLmxhPTD6zm4yybWILhKmZgVqKcYo9yN02XpKzkYy7TQH6k_JvEy_90scbRbTDil1gi3dhJbeUxYB91eBK7T99aiiw"
                imageAlt="KKS industrial facility"
                overlayColor="dark"
                href="/brands"
              />
            </div>
          </div>
        </section>

        {/* Logo Marquee */}
        <section className="py-16 border-t border-[#f0f4f3] dark:border-white/5 overflow-hidden">
          <h3 className="text-center text-sm font-bold text-gray-400 uppercase tracking-[0.2em] mb-12">
            Our Prestigious Clients
          </h3>
          <div className="logo-marquee">
            <div className="logo-track">
              {[1, 2, 3, 4, 5, 6].map((i) => (
                <img
                  key={i}
                  alt={`Client Logo ${i}`}
                  className="opacity-40 hover:opacity-100 transition-opacity grayscale hover:grayscale-0"
                  src={`https://lh3.googleusercontent.com/aida-public/AB6AXuA${i === 1 ? 'ele9TFfTyrenqQg2qlrmDykNkffDTuPCDQuChoCt2FVo-yPSLLg-xwPC3SYm2ENG80ygaa1ShIFgCYxObOzNLKJffEY6swBIHPauWXA3frYiEjt35OteRKuBBVlQwhnJFLWszSLYIy1aWFsrtAnlMiFxoUoyhnGHAmN-MRopkBeqazGip7fMW6GEev1PkuJKLK55bVXY8ZiuX2ZYVry9q1qgjPS9QZQWEHINyPD3nRe7NR8qgMBhsYYfrTuApCcieYYx-Tr8JxL8' : `example${i}`}`}
                />
              ))}
            </div>
            <div className="logo-track">
              {[1, 2, 3, 4, 5, 6].map((i) => (
                <img
                  key={`repeat-${i}`}
                  alt={`Client Logo ${i}`}
                  className="opacity-40 hover:opacity-100 transition-opacity grayscale hover:grayscale-0"
                  src={`https://lh3.googleusercontent.com/aida-public/AB6AXuA${i === 1 ? 'ele9TFfTyrenqQg2qlrmDykNkffDTuPCDQuChoCt2FVo-yPSLLg-xwPC3SYm2ENG80ygaa1ShIFgCYxObOzNLKJffEY6swBIHPauWXA3frYiEjt35OteRKuBBVlQwhnJFLWszSLYIy1aWFsrtAnlMiFxoUoyhnGHAmN-MRopkBeqazGip7fMW6GEev1PkuJKLK55bVXY8ZiuX2ZYVry9q1qgjPS9QZQWEHINyPD3nRe7NR8qgMBhsYYfrTuApCcieYYx-Tr8JxL8' : `example${i}`}`}
                />
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
