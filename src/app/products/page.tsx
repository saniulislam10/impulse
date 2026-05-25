import Header from '@/components/Header';
import Footer from '@/components/Footer';
import SectionHeader from '@/components/SectionHeader';

export const metadata = {
  title: 'Products | Impulse Group',
  description: 'Explore our diverse range of products and solutions.',
};

export default function Products() {
  return (
    <>
      <Header />
      <main>
        <section className="relative pt-20 pb-16 lg:py-32">
          <div className="max-w-[1280px] mx-auto px-6 lg:px-10">
            <h1 className="text-5xl lg:text-6xl font-extrabold leading-tight mb-6">
              Our Products
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-400 leading-relaxed max-w-2xl">
              Discover our comprehensive range of products and solutions designed to meet global market demands.
            </p>
          </div>
        </section>

        <section className="py-24">
          <div className="max-w-[1280px] mx-auto px-6 lg:px-10">
            <SectionHeader
              title="Product Categories"
              centered
            />
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                { category: 'Organic Foods', desc: 'Sustainable and ethically sourced food products' },
                { category: 'Solutions', desc: 'Business consulting and strategic services' },
                { category: 'Logistics', desc: 'Supply chain and logistics infrastructure' },
              ].map((item, i) => (
                <div
                  key={i}
                  className="bg-surface-light dark:bg-surface-dark p-8 rounded-xl border border-[#dce5e3] dark:border-white/10 hover:shadow-lg transition-shadow"
                >
                  <h3 className="text-2xl font-bold mb-3 text-primary">{item.category}</h3>
                  <p className="text-gray-600 dark:text-gray-400">{item.desc}</p>
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
