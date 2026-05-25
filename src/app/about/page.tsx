import Header from '@/components/Header';
import Footer from '@/components/Footer';

export const metadata = {
  title: 'About Us | Impulse Group',
  description: 'Learn about Impulse Group\'s journey, mission, and the teams behind our success.',
};

export default function About() {
  return (
    <div className="bg-white dark:bg-[#1a1a1a] font-[Manrope] text-[#121716] dark:text-gray-100 transition-colors duration-300">
      <Header />
      <main className="max-w-[1280px] mx-auto">
        {/* Breadcrumbs */}
        <div className="px-6 lg:px-10 py-6">
          <div className="flex items-center gap-2 text-sm font-medium text-gray-500 dark:text-gray-400">
            <a className="hover:text-[#1b9883]" href="#">Home</a>
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-gray-400">
              <path d="M9 6l6 6-6 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
            <span className="text-[#1b9883]">About Us</span>
          </div>
        </div>

        {/* Hero Section */}
        <section className="px-6 lg:px-10 pb-16">
          <div className="relative overflow-hidden rounded-2xl bg-[#f8fafa] dark:bg-[#242424] p-8 lg:p-16 flex flex-col lg:flex-row items-center gap-12">
            <div className="flex-1 space-y-6">
              <span className="inline-block px-3 py-1 bg-[#1b9883]/10 text-[#1b9883] text-xs font-bold uppercase tracking-widest rounded">
                Our Legacy
              </span>
              <h1 className="text-4xl lg:text-6xl font-black leading-tight tracking-tight">
                Pioneering <span className="text-[#1b9883]">Excellence</span> Across Generations
              </h1>
              <p className="text-lg text-gray-600 dark:text-gray-400 max-w-xl leading-relaxed">
                A multi-brand conglomerate dedicated to innovation, sustainability, and growth. We harmonize the organic purity of Just Natural with the precision of Impulse Solutions and the scale of KKS.
              </p>
              <div className="flex flex-wrap gap-4">
                <button className="bg-[#1b9883] text-white font-bold px-8 py-4 rounded-xl hover:scale-105 transition-transform shadow-lg shadow-[#1b9883]/20">
                  Explore Our Journey
                </button>
                <button className="bg-white dark:bg-gray-800 border-2 border-[#1b9883]/20 text-[#1b9883] font-bold px-8 py-4 rounded-xl hover:bg-[#1b9883]/5 transition-colors">
                  Our Impact
                </button>
              </div>
            </div>
            <div className="flex-1 w-full max-w-[540px]">
              <div
                className="aspect-[4/3] rounded-2xl bg-center bg-cover shadow-2xl"
                style={{
                  backgroundImage: `url('https://lh3.googleusercontent.com/aida-public/AB6AXuBO1IiNkOrfjg1yRL21n9puBv8UE7TR3NKYVLbZL55jNtZv7wsd7HZQvidiSw7gD1gXCGVneg-er6W_Y_xkzS3ojQLcAcZ0AnQnlrtT7LP_HL7s5-WLaDs1CoHRtQo2Mh878JNzJJRv8ranqYShlCz5xnE0qY1aaKeUm8GkbPDg3xp3ArRfDw2j8CM6WkTN716YEUupZi3TVb-SwC3ChdRJUUPBZZB_sweIw0AZcXdr1edfuEfkLb-8B6vMF-Vq9dkDKlzB3MljY_4')`
                }}
              ></div>
            </div>
          </div>
        </section>

        {/* Chairperson's Speech */}
        <section className="px-6 lg:px-10 py-20 bg-[#1b9883]/5 dark:bg-[#1b9883]/10 -mx-6 lg:-mx-10">
          <div className="max-w-[1100px] mx-auto flex flex-col lg:flex-row items-center gap-16">
            <div className="w-full lg:w-1/2 relative">
              <div className="absolute -top-4 -left-4 w-24 h-24 bg-[#D1BC94]/20 rounded-full blur-2xl"></div>
              <div className="relative aspect-[3/4] rounded-2xl overflow-hidden shadow-2xl border-8 border-white dark:border-gray-800">
                <img
                  alt="Professional portrait of the Chairperson"
                  className="w-full h-full object-cover"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuAalncMc-OqSTGkMdxYxZf0jjoJ_ZUpT-WJe4iuriPQPj5pv3EDOt4_t0TtQJR_adtqZ0iGuvcRNBx4_JAce5TLFf4B7g5hv-wYsrqFKb8skxkX6ECnsS4nx3KurSx778G2sXNTX5gx-NV7YGTJlgf0r4sKPmt3Gi982lqp-VNzG5820tKupgD9GQwZLOqFtpmzu5UOZZFXHa2d9ISUq5jCLB7NJZtRRYT-YZ6IXrNeJvVO3-R6Y50vs6UpmzXQOM8ZjX-9mDs7Lb0"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 bg-white dark:bg-gray-800 p-6 rounded-xl shadow-xl max-w-[240px]">
                <p className="font-bold text-lg">Neher Saha</p>
                <p className="text-[#1b9883] text-sm font-semibold">Chairperson &amp; Founder</p>
              </div>
            </div>
            <div className="w-full lg:w-1/2 space-y-8">
              <svg width="48" height="48" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg" className="text-[#D1BC94] opacity-50">
                <path d="M3 21c3 0 7-1 7-8V5c0-1.25-4.25-2.25-7-2s-7 .75-7 2v12c0 1-6 3-6 3s1 1 6 1c1 0 3-1 3-1v-4c-1 1-3 2-6 2" />
                <path d="M15 21c3 0 7-1 7-8V5c0-1.25-4.25-2.25-7-2s-7 .75-7 2v12c0 1-6 3-6 3s1 1 6 1c1 0 3-1 3-1v-4c-1 1-3 2-6 2" />
              </svg>
              <h2 className="text-3xl font-bold italic leading-snug">
                {`"Sustainability is no longer a choice; it's the core of how we build the future. At Impulse Group, we don't just scale businesses; we nurture ecosystems."`}
              </h2>
              <div className="h-1 w-20 bg-[#D1BC94]"></div>
              <div className="space-y-4 text-gray-600 dark:text-gray-300 leading-relaxed text-lg">
                <p>
                  For nearly three decades, Impulse Group has evolved from a local startup into a global powerhouse. Our philosophy is simple: innovate where it matters most.
                </p>
                <p>
                  Through {`'Just Natural'`}, we&apos;ve returned to our roots in organic wellness. Through {`'Impulse Solutions'`}, we define the cutting edge of industrial tech. And through {`'KKS'`}, we manage the logistics that connect the world.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Vertical Timeline */}
        <section className="px-6 lg:px-10 py-24">
          <div className="text-center max-w-2xl mx-auto mb-20">
            <h2 className="text-4xl font-black mb-4">Our Historic Milestones</h2>
            <p className="text-gray-500">The journey of a thousand miles that began with a single vision in 1995.</p>
          </div>
          <div className="relative max-w-4xl mx-auto">
            {/* Vertical Line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-gray-200 dark:bg-gray-800"></div>
            <div className="space-y-24">
              {[
                { year: '1995', title: 'Foundation of Impulse Group', desc: 'Started as a small consulting firm in London, focusing on sustainable industrial practices before it was a global trend.', icon: 'history_edu', color: 'bg-[#1b9883]', borderColor: 'border-l-4 border-[#1b9883]', reverse: true },
                { year: '2005', title: 'Launch of Just Natural', desc: 'Diversified into the FMCG sector with an organic-first approach, launching our flagship health brand.', icon: 'eco', color: 'bg-[#D1BC94]', borderColor: 'border-r-4 border-[#D1BC94]', reverse: false },
                { year: '2012', title: 'Expansion into Solutions', desc: 'Impulse Solutions was established to provide enterprise-level technological frameworks for global logistics.', icon: 'precision_manufacturing', color: 'bg-[#1b9883]', borderColor: 'border-l-4 border-[#1b9883]', reverse: true },
                { year: '2020', title: 'Acquisition of KKS', desc: 'Finalized the acquisition of KKS Logistics, completing our end-to-end supply chain integration.', icon: 'hub', color: 'bg-gray-900', borderColor: 'border-r-4 border-gray-900', reverse: false },
              ].map((milestone, i) => (
                <div key={i} className={`relative flex items-center justify-between ${milestone.reverse ? 'flex-row-reverse md:flex-row' : 'flex-row'}`}>
                  <div className={`w-full md:w-[45%] bg-white dark:bg-[#262626] p-8 rounded-2xl shadow-lg ${milestone.borderColor}`}>
                    <span className={`${i % 2 === 0 ? 'text-[#1b9883]' : 'text-[#D1BC94]'} font-black text-2xl`}>{milestone.year}</span>
                    <h3 className="text-xl font-bold mt-2">{milestone.title}</h3>
                    <p className="text-gray-500 mt-3 leading-relaxed">{milestone.desc}</p>
                  </div>
                  <div className={`absolute left-1/2 transform -translate-x-1/2 flex items-center justify-center size-10 rounded-full text-white border-4 border-white dark:border-[#1a1a1a] z-10 ${milestone.color}`}>
                    {milestone.icon === 'history_edu' && <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm.5-13H11v6l5.25 3.15.75-1.23-4.5-2.67z" /></svg>}
                    {milestone.icon === 'eco' && <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2c0 0-5 4.99-5 9 0 2.15.82 4.14 2.18 5.67.99 1.13 2.16 2.02 3.48 2.58-.41.59-.99 1.1-1.66 1.46-.5.26-1.04.49-1.6.68 1.57.42 3.29.64 5.08.64 6.08 0 11-4.92 11-11C22 7.01 17 2 12 2z" /></svg>}
                    {milestone.icon === 'precision_manufacturing' && <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" /></svg>}
                    {milestone.icon === 'hub' && <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm3.5-9c.83 0 1.5-.67 1.5-1.5S16.33 8 15.5 8 14 8.67 14 9.5s.67 1.5 1.5 1.5zm-7 0c.83 0 1.5-.67 1.5-1.5S9.33 8 8.5 8 7 8.67 7 9.5 7.67 11 8.5 11zm3.5 6.5c2.33 0 4.31-1.46 5.11-3.5H6.89c.8 2.04 2.78 3.5 5.11 3.5z" /></svg>}
                  </div>
                  <div className={`hidden md:block w-[45%]`}></div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Key Team Section */}
        <section className="px-6 lg:px-10 py-24 bg-[#f8fafa] dark:bg-[#242424] rounded-3xl mb-24">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
            <div className="max-w-xl">
              <h2 className="text-4xl font-black mb-4">The Minds Behind Impulse</h2>
              <p className="text-gray-500">A collective of visionaries, engineers, and strategists leading the charge across three industries.</p>
            </div>
            <button className="flex items-center gap-2 text-[#1b9883] font-bold border-b-2 border-[#1b9883]/20 hover:border-[#1b9883] pb-1 transition-all">
              View Full Directory <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" stroke="currentColor" strokeWidth="2">
                <path d="M5 12h14M12 5l7 7-7 7"/>
              </svg>
            </button>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { name: 'David Chen', role: 'CEO, Impulse Solutions', image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAvse2a4yL7TReINFxSv62fEtl9TJ6gpJv8wpX9UTM4huKnAkO7n9GynZ2COvLHVqSUplAk6O5dNmhdk7iLwl37lvtCMJyBVKQliHI2uJ1nbwBPQfxTKkUOBIXzWBXrxcnaH4dPW-owLD1fYNZsS505dc98Jx4vqFM0XbmhKYmmxUlbVD2lSt1woGrBeCIN0bN1Oprq52hutL4-3Msa0x-yKsjRuW4UX4Fk9vvGkcrwsfB-qv3Dqv5jZO1fmwtaj5NID8dg26BqmPw' },
              { name: 'Elena Wong', role: 'Chief Product Officer', image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAvse2a4yL7TReINFxSv62fEtl9TJ6gpJv8wpX9UTM4huKnAkO7n9GynZ2COvLHVqSUplAk6O5dNmhdk7iLwl37lvtCMJyBVKQliHI2uJ1nbwBPQfxTKkUOBIXzWBXrxcnaH4dPW-owLD1fYNZsS505dc98Jx4vqFM0XbmhKYmmxUlbVD2lSt1woGrBeCIN0bN1Oprq52hutL4-3Msa0x-yKsjRuW4UX4Fk9vvGkcrwsfB-qv3Dqv5jZO1fmwtaj5NID8dg26BqmPw' },
              { name: 'Marcus Johnson', role: 'VP Operations', image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAvse2a4yL7TReINFxSv62fEtl9TJ6gpJv8wpX9UTM4huKnAkO7n9GynZ2COvLHVqSUplAk6O5dNmhdk7iLwl37lvtCMJyBVKQliHI2uJ1nbwBPQfxTKkUOBIXzWBXrxcnaH4dPW-owLD1fYNZsS505dc98Jx4vqFM0XbmhKYmmxUlbVD2lSt1woGrBeCIN0bN1Oprq52hutL4-3Msa0x-yKsjRuW4UX4Fk9vvGkcrwsfB-qv3Dqv5jZO1fmwtaj5NID8dg26BqmPw' },
              { name: 'Sophia Martinez', role: 'Director of Innovation', image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAvse2a4yL7TReINFxSv62fEtl9TJ6gpJv8wpX9UTM4huKnAkO7n9GynZ2COvLHVqSUplAk6O5dNmhdk7iLwl37lvtCMJyBVKQliHI2uJ1nbwBPQfxTKkUOBIXzWBXrxcnaH4dPW-owLD1fYNZsS505dc98Jx4vqFM0XbmhKYmmxUlbVD2lSt1woGrBeCIN0bN1Oprq52hutL4-3Msa0x-yKsjRuW4UX4Fk9vvGkcrwsfB-qv3Dqv5jZO1fmwtaj5NID8dg26BqmPw' },
            ].map((member, i) => (
              <div key={i} className="group bg-white dark:bg-[#1a1a1a] p-4 rounded-2xl shadow-sm hover:shadow-xl transition-all hover:-translate-y-2">
                <div className="aspect-square overflow-hidden rounded-xl mb-6 bg-gray-100">
                  <img alt={member.name} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" src={member.image} />
                </div>
                <div className="text-center">
                  <h4 className="text-lg font-extrabold">{member.name}</h4>
                  <p className="text-sm text-[#1b9883] font-semibold uppercase tracking-wider mt-1">{member.role}</p>
                  <div className="flex justify-center gap-3 mt-4 text-gray-400">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" stroke="currentColor" strokeWidth="2" className="cursor-pointer hover:text-[#1b9883]">
                      <path d="M3 8l9 6 9-6M3 8v10a2 2 0 002 2h14a2 2 0 002-2V8"/>
                    </svg>
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" stroke="currentColor" strokeWidth="2" className="cursor-pointer hover:text-[#1b9883]">
                      <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2M12 11a4 4 0 100-8 4 4 0 000 8z"/>
                    </svg>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
