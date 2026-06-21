import Header from '@/components/Header';
import Footer from '@/components/Footer';

export const metadata = {
  title: 'Media Gallery | Impulse Group',
  description: 'Explore our visual story through gallery of events and brand moments.',
};

export default function Gallery() {
  const galleryItems = [
    { img: '/cashew-nuts.png', label: 'Cashew Nuts' },
    { img: '/red-apricot.png', label: 'Red Apricot' },
    { img: '/chia-seeds.jpeg', label: 'Chia Seeds' },
  ];

  return (
    <div className="bg-white dark:bg-[#1a1a1a] font-[Manrope] text-[#121716] dark:text-white transition-colors duration-300">
      <Header />
      <main className="max-w-[1440px] mx-auto w-full px-6 md:px-20 py-12">
        {/* Page Heading */}
        <div className="mb-12">
          <div className="max-w-3xl">
            <h1 className="text-5xl font-black leading-tight tracking-tight mb-4">Our Visual Story</h1>
            <p className="text-gray-500 dark:text-gray-400 text-lg">
              Explore the diverse ecosystem of Impulse Group through our curated collection of brand highlights, facility tours, and community impact events.
            </p>
          </div>
        </div>
        {/* Filter Chips */}
        <div className="flex gap-3 mb-10 overflow-x-auto pb-4 no-scrollbar">
          <button className="px-6 py-2 rounded-full bg-[#1b9883] text-white text-sm font-bold whitespace-nowrap">All Media</button>
          <button className="px-6 py-2 rounded-full bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 text-sm font-semibold hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors whitespace-nowrap">
            Just Natural
          </button>
          <button className="px-6 py-2 rounded-full bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 text-sm font-semibold hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors whitespace-nowrap">
            Impulse Business Solution OPC
          </button>
          <button className="px-6 py-2 rounded-full bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 text-sm font-semibold hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors whitespace-nowrap">
            KKS Sports
          </button>
          <button className="px-6 py-2 rounded-full bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 text-sm font-semibold hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors whitespace-nowrap">
            Corporate HQ
          </button>
          <button className="px-6 py-2 rounded-full bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 text-sm font-semibold hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors whitespace-nowrap">
            Community Events
          </button>
        </div>
        {/* Masonry Grid */}
        <div className="columns-1 sm:columns-2 lg:columns-4 gap-6">
          {galleryItems.map((item, i) => (
            <div key={i} className="break-inside-avoid mb-6 group relative overflow-hidden rounded-xl bg-gray-100 dark:bg-gray-800 cursor-pointer">
              <div className="relative aspect-[3/4] sm:aspect-square lg:aspect-[3/4] overflow-hidden">
                <img
                  alt={item.label}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  src={item.img}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="absolute bottom-0 left-0 right-0 p-4 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                  <p className="text-white font-bold text-sm">{item.label}</p>
                  <button className="mt-2 text-white text-xs font-bold flex items-center gap-1 hover:gap-2 transition-all">
                    View <svg width="14" height="14" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" stroke="currentColor" strokeWidth="2">
                      <path d="M5 12h14M12 5l7 7-7 7" />
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </main>
      <Footer />
    </div>
  );
}
