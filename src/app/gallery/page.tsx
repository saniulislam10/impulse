import Header from '@/components/Header';
import Footer from '@/components/Footer';
import SectionHeader from '@/components/SectionHeader';

export const metadata = {
  title: 'Gallery | Impulse Group',
  description: 'View our gallery of company events and brand moments.',
};

export default function Gallery() {
  return (
    <>
      <Header />
      <main>
        <section className="relative pt-20 pb-16 lg:py-32">
          <div className="max-w-[1280px] mx-auto px-6 lg:px-10">
            <h1 className="text-5xl lg:text-6xl font-extrabold leading-tight mb-6">
              Gallery
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-400 leading-relaxed max-w-2xl">
              Explore moments from our events, operations, and brand collaborations.
            </p>
          </div>
        </section>

        <section className="py-24">
          <div className="max-w-[1280px] mx-auto px-6 lg:px-10">
            <SectionHeader
              title="Featured Gallery"
              centered
            />
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[1, 2, 3, 4, 5, 6].map((item) => (
                <div
                  key={item}
                  className="aspect-square bg-surface-light dark:bg-surface-dark rounded-xl overflow-hidden hover:shadow-lg transition-shadow"
                >
                  <div className="w-full h-full bg-gradient-to-br from-primary/20 to-primary/5 flex items-center justify-center">
                    <p className="text-gray-400">Gallery Image {item}</p>
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
