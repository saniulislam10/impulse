import Header from '@/components/Header';
import Footer from '@/components/Footer';
import BrandCard from '@/components/BrandCard';
import SectionHeader from '@/components/SectionHeader';

export const metadata = {
  title: 'Our Brands | Impulse Group',
  description: 'Explore our diverse portfolio of industry-leading brands and enterprises.',
};

const brands = [
  {
    title: 'Just Natural',
    description: 'Sustainable organic products for a healthier lifestyle, ethically sourced and distributed globally.',
    imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuD_oUNELye5PqitaZCRsGI3W_6K_FCqOOc9veQSMaW_sChcHlUpUFgbQ-6w2H4dO4JWPDCHc_SBK41s4zVwHf0gzzL_ZXTzCpPC-HiLXR03bNnK8bzHk0zmX5ubtt74yQxVpNbxzkwXWQEDr5z6Y-w6SIQ706kK2MHBMl9QMJk3lS-zuEs2LAcHoz5VjCfMkmVTYqH5i63hApbkOo0qa7gFhj8ONdil0_3vq_hdrfiofShVeFQyCM82ALsxHvEOkPDmXctT20QZQM0',
    imageAlt: 'Just Natural brand aesthetic',
    href: '#',
  },
  {
    title: 'Impulse Solutions',
    description: 'Strategic corporate consulting and integrated business solutions for modern enterprises.',
    imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuACIg6FSa4EnTw1GKxa4Mq7nQIlcQUbjq3aHdo4dBRezskeKDvB6iZPQ6RuVmrL7iQHrZmVRP5mfIZS9LcwdnD7GJfGnscqdQvzPcg9ZXv5E95IwPIHfbnuWSpzBfisM2M-teovZPlV650NpUEtf1qaWTjtOBm9tLaoWxlgKQ_QWHyWy0j5IUJFF7k9Zp54w8KOT5YuznBTrFT4pymDYKHNEv6wtUlN_yIHT6KsMjjA6h2Gf8SfYU24zqRSC8oXqlSD_fQmQUrQdjs',
    imageAlt: 'Impulse Solutions corporate office',
    overlayColor: 'gold' as const,
    href: '#',
  },
  {
    title: 'KKS Infrastructure',
    description: 'Advanced manufacturing and logistical infrastructure powering international trade lanes.',
    imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCpR-XTKGy_iEDeo_sUZcdy6WCgrcEL56sIgW74VzauFN3mHt5QEbr-LA9TRADZKgnC_PFdRGeNGAsnXM7IkKne17Tv9qTcqMWHovhcULFm4L-pMftzxHFqV-R62oPhG9msFJ1IhkvLDO88n7255GneZ7HWsKQely4zD9Zre3zgVnbL7jBa_pLmxhPTD6zm4yybWILhKmZgVqKcYo9yN02XpKzkYy7TQH6k_JvEy_90scbRbTDil1gi3dhJbeUxYB91eBK7T99aiiw',
    imageAlt: 'KKS industrial facility',
    overlayColor: 'dark' as const,
    href: '#',
  },
  {
    title: 'Global Logistics',
    description: 'Comprehensive supply chain and logistics solutions connecting markets worldwide.',
    imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCpR-XTKGy_iEDeo_sUZcdy6WCgrcEL56sIgW74VzauFN3mHt5QEbr-LA9TRADZKgnC_PFdRGeNGAsnXM7IkKne17Tv9qTcqMWHovhcULFm4L-pMftzxHFqV-R62oPhG9msFJ1IhkvLDO88n7255GneZ7HWsKQely4zD9Zre3zgVnbL7jBa_pLmxhPTD6zm4yybWILhKmZgVqKcYo9yN02XpKzkYy7TQH6k_JvEy_90scbRbTDil1gi3dhJbeUxYB91eBK7T99aiiw',
    imageAlt: 'Global logistics network',
    overlayColor: 'primary' as const,
    href: '#',
  },
];

export default function Brands() {
  return (
    <>
      <Header />
      <main>
        {/* Hero Section */}
        <section className="relative pt-20 pb-16 lg:py-32">
          <div className="max-w-[1280px] mx-auto px-6 lg:px-10">
            <div className="max-w-3xl">
              <span className="inline-block px-3 py-1 bg-primary/10 text-primary text-xs font-bold uppercase tracking-widest rounded mb-4">
                Our Brands
              </span>
              <h1 className="text-5xl lg:text-6xl font-extrabold leading-tight mb-6">
                Diverse Portfolios for a Global Market
              </h1>
              <p className="text-xl text-gray-600 dark:text-gray-400 leading-relaxed">
                Each brand represents a distinct sector of expertise, united by our commitment to excellence
                and innovation.
              </p>
            </div>
          </div>
        </section>

        {/* Brands Grid */}
        <section className="py-24">
          <div className="max-w-[1280px] mx-auto px-6 lg:px-10">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {brands.map((brand, i) => (
                <BrandCard
                  key={i}
                  title={brand.title}
                  description={brand.description}
                  imageUrl={brand.imageUrl}
                  imageAlt={brand.imageAlt}
                  overlayColor={brand.overlayColor}
                  href={brand.href}
                />
              ))}
            </div>
          </div>
        </section>

        {/* Brand Details */}
        <section className="py-20 bg-surface-light dark:bg-surface-dark border-y border-[#f0f4f3] dark:border-white/5">
          <div className="max-w-[1280px] mx-auto px-6 lg:px-10">
            <SectionHeader
              title="Why Our Brands Stand Out"
              description="Committed to leadership and innovation across every sector"
              centered
            />
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  title: 'Industry Leadership',
                  description: 'Each brand is recognized as a market leader in its respective domain.',
                },
                {
                  title: 'Ethical Practices',
                  description: 'We&apos;re committed to sustainable and responsible business operations.',
                },
                {
                  title: 'Global Reach',
                  description: 'Operating across continents with trusted partnerships worldwide.',
                },
              ].map((item, i) => (
                <div
                  key={i}
                  className="bg-background-light dark:bg-background-dark p-8 rounded-xl border border-[#dce5e3] dark:border-white/10"
                >
                  <h3 className="text-xl font-bold mb-3">{item.title}</h3>
                  <p className="text-gray-500 text-sm leading-relaxed">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
