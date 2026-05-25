import Header from '@/components/Header';
import Footer from '@/components/Footer';
import SectionHeader from '@/components/SectionHeader';

export const metadata = {
  title: 'Football Team | Impulse Group',
  description: 'Meet our corporate football team and athletes.',
};

export default function FootballTeam() {
  return (
    <>
      <Header />
      <main>
        <section className="relative pt-20 pb-16 lg:py-32">
          <div className="max-w-[1280px] mx-auto px-6 lg:px-10">
            <h1 className="text-5xl lg:text-6xl font-extrabold leading-tight mb-6">
              Impulse Football Team
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-400 leading-relaxed max-w-2xl">
              Representing excellence on and off the field. Our team embodies the values of teamwork, dedication, and athletic excellence.
            </p>
          </div>
        </section>

        <section className="py-24">
          <div className="max-w-[1280px] mx-auto px-6 lg:px-10">
            <SectionHeader
              title="Team Stats"
              centered
            />
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-16">
              {[
                { label: 'Players', value: '20+' },
                { label: 'Tournaments', value: '15+' },
                { label: 'Victories', value: '80%' },
                { label: 'Founded', value: '2015' },
              ].map((stat, i) => (
                <div
                  key={i}
                  className="bg-surface-light dark:bg-surface-dark p-8 rounded-xl border border-[#dce5e3] dark:border-white/10 text-center"
                >
                  <p className="text-3xl font-black text-primary mb-2">{stat.value}</p>
                  <p className="text-gray-600 dark:text-gray-400">{stat.label}</p>
                </div>
              ))}
            </div>

            <SectionHeader
              title="Team Players"
              description="Meet the athletes representing Impulse Group"
              centered
            />
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[1, 2, 3, 4, 5, 6].map((player) => (
                <div
                  key={player}
                  className="text-center space-y-4"
                >
                  <div className="aspect-square bg-surface-light dark:bg-surface-dark rounded-xl overflow-hidden flex items-center justify-center">
                    <p className="text-gray-400">Player {player}</p>
                  </div>
                  <h3 className="font-bold text-lg">Player Name</h3>
                  <p className="text-gray-600 dark:text-gray-400 text-sm">Forward | #7</p>
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
