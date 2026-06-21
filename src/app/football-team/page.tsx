import Header from '@/components/Header';
import Footer from '@/components/Footer';
import SectionHeader from '@/components/SectionHeader';

export const metadata = {
  title: 'Football Team | Impulse Group',
  description: 'Meet our corporate football team and athletes.',
};

const players = [
  {
    name: 'Sahal',
    position: 'Central Defending Midfielder',
    number: 8,
    image: '/sahal.png'
  },
  {
    name: 'Rawnak Islam ',
    position: 'Defender',
    number: 4,
    image: '/rawnak.png'
  },
  {
    name: 'Golam Akbar Faruqee',
    position: 'Central Attacking Midfielder',
    number: 10,
    image: '/golam.jpg'
  },
  {
    name: 'RV Rimon',
    position: 'Defender',
    number: 2,
    image: 'https://static.vecteezy.com/system/resources/previews/029/107/598/non_2x/football-player-clip-art-free-vector.jpg'
  },
  {
    name: 'Tahmid Rahman',
    position: 'Goal Keeper',
    number: 1,
    image: '/tahmid.png'
  }
  // Add more players as needed
];

export default function FootballTeam() {
  return (
    <>
      <Header />
      <main>
        <section className="relative pt-20 pb-16 lg:py-32">
          <img src="/club.jpg" alt="Football Team Hero" className="absolute inset-0 w-full h-full object-cover opacity-20" />
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
                { label: 'Tournaments', value: '5+' },
                { label: 'Victories', value: '80%' },
                { label: 'Founded', value: '2022' },
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
              {players.map((player, i) => (
                <div
                  key={i}
                  className="text-center space-y-4"
                >
                  <div className="aspect-square bg-surface-light dark:bg-surface-dark rounded-xl overflow-hidden flex items-center justify-center">
                    <img src={player.image} alt={player.name} className="w-full h-full object-cover" />
                  </div>
                  <h3 className="font-bold text-lg">{player.name}</h3>
                  <p className="text-gray-600 dark:text-gray-400 text-sm">{player.position} | #{player.number}</p>
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
