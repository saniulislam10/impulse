import Header from '@/components/Header';
import Footer from '@/components/Footer';
import SectionHeader from '@/components/SectionHeader';

export const metadata = {
  title: 'About Us | Impulse Group',
  description: 'Learn about Impulse Group\'s mission, values, and commitment to excellence.',
};

export default function About() {
  return (
    <>
      <Header />
      <main>
        {/* Hero Section */}
        <section className="relative pt-20 pb-16 lg:py-32">
          <div className="max-w-[1280px] mx-auto px-6 lg:px-10">
            <div className="max-w-3xl">
              <h1 className="text-5xl lg:text-6xl font-extrabold leading-tight mb-6">
                About Impulse Group
              </h1>
              <p className="text-xl text-gray-600 dark:text-gray-400 leading-relaxed">
                We&apos;re a diversified conglomerate dedicated to driving growth and delivering excellence across multiple
                industries. Founded on principles of integrity, innovation, and sustainability.
              </p>
            </div>
          </div>
        </section>

        {/* Mission & Vision */}
        <section className="py-20 bg-surface-light dark:bg-surface-dark border-y border-[#f0f4f3] dark:border-white/5">
          <div className="max-w-[1280px] mx-auto px-6 lg:px-10">
            <div className="grid lg:grid-cols-2 gap-12">
              <div>
                <h2 className="text-3xl font-extrabold mb-4">Our Mission</h2>
                <p className="text-gray-600 dark:text-gray-400 leading-relaxed mb-4">
                  To nurture growth and deliver excellence across our diverse portfolio of brands and
                  enterprises. We bridge industries with innovation, integrity, and a commitment to sustainable
                  development.
                </p>
                <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                  Every decision we make is guided by our core values of transparency, ethical practices, and
                  long-term value creation for our stakeholders.
                </p>
              </div>
              <div>
                <h2 className="text-3xl font-extrabold mb-4">Our Vision</h2>
                <p className="text-gray-600 dark:text-gray-400 leading-relaxed mb-4">
                  To be a globally recognized leader in diversified business sectors, known for our
                  innovation, reliability, and commitment to excellence.
                </p>
                <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                  We aspire to create a positive impact on the communities we serve while maintaining
                  the highest standards of business integrity and environmental stewardship.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Core Values */}
        <section className="py-24">
          <div className="max-w-[1280px] mx-auto px-6 lg:px-10">
            <SectionHeader
              title="Our Core Values"
              description="The principles that guide everything we do"
              centered
            />
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              {[
                { icon: '✓', title: 'Integrity', desc: 'Honest and ethical practices in all business dealings' },
                { icon: '✓', title: 'Innovation', desc: 'Forward-thinking solutions to industry challenges' },
                { icon: '✓', title: 'Excellence', desc: 'Commitment to highest standards in all we do' },
                { icon: '✓', title: 'Sustainability', desc: 'Responsible growth for future generations' },
              ].map((value, i) => (
                <div key={i} className="text-center space-y-4">
                  <div className="text-4xl text-primary font-bold">{value.icon}</div>
                  <h3 className="text-xl font-bold">{value.title}</h3>
                  <p className="text-gray-500 text-sm">{value.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Timeline */}
        <section className="py-20 bg-surface-light dark:bg-surface-dark border-y border-[#f0f4f3] dark:border-white/5">
          <div className="max-w-[1280px] mx-auto px-6 lg:px-10">
            <SectionHeader
              title="Our Journey"
              centered
            />
            <div className="space-y-8 max-w-2xl mx-auto">
              {[
                { year: '2000', title: 'Founded', desc: 'Established Impulse Group with vision for diversified growth' },
                { year: '2008', title: 'Expansion', desc: 'Launched Just Natural, focusing on organic products' },
                { year: '2015', title: 'Growth', desc: 'Established Impulse Solutions and KKS Infrastructure' },
                { year: '2024', title: 'Global Leader', desc: 'Operating across 4 continents with 50+ global partners' },
              ].map((milestone, i) => (
                <div key={i} className="flex gap-6">
                  <div className="flex flex-col items-center">
                    <div className="w-4 h-4 bg-primary rounded-full" />
                    {i < 3 && <div className="w-0.5 h-24 bg-primary/20 mt-4" />}
                  </div>
                  <div className="pb-8">
                    <p className="text-sm font-bold text-primary uppercase">{milestone.year}</p>
                    <h3 className="text-xl font-bold mt-2">{milestone.title}</h3>
                    <p className="text-gray-500 text-sm mt-1">{milestone.desc}</p>
                  </div>
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
