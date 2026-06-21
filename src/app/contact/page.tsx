import Header from '@/components/Header';
import Footer from '@/components/Footer';

export const metadata = {
  title: 'Contact Us | Impulse Group',
  description: 'Connect with Impulse Group. Get in touch with our teams across different brands.',
};

export default function Contact() {
  return (
    <div className="bg-white dark:bg-[#1a1a1a] font-[Manrope] text-[#121716] dark:text-gray-100 transition-colors duration-300">
      <Header />
      <main className="max-w-[1200px] mx-auto px-4 md:px-10 lg:px-40 py-12">
        {/* Page Heading */}
        <div className="mb-12">
          <h2 className="text-[#121716] dark:text-white text-5xl font-black leading-tight tracking-tight mb-4">Connect With Us</h2>
          <p className="text-[#658680] dark:text-gray-400 text-lg max-w-2xl">
            Whether you&apos;re looking for support with <span className="text-[#1b9883] font-semibold">Just Natural</span>, seeking <span className="text-[#1b9883] font-semibold">Impulse Solutions</span> for your business, or inquiring about <span className="text-[#1b9883] font-semibold">KKS</span> logistics, our team is ready to assist.
          </p>
        </div>

        {/* Map Section */}
        <div className="relative w-full h-[400px] mb-16 rounded-xl overflow-hidden shadow-xl border border-gray-100 dark:border-gray-800">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14862.948421194456!2d90.3842240739144!3d23.750837269534074!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755b9007cc7b40b%3A0x55c20502cbb96c03!2sJust%20Natural!5e0!3m2!1sen!2sbd!4v1782030864197!5m2!1sen!2sbd"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen={true}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="absolute inset-0"
          ></iframe>
          {/* <div className="absolute top-6 left-6 z-10">
            <div className="bg-white/95 dark:bg-[#1a1a1a]/95 p-4 rounded-lg shadow-lg max-w-xs border-t-4 border-[#1b9883]">
              <div className="flex items-center gap-2 text-[#1b9883] mb-2">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 2C6.48 2 2 6.48 2 12c0 8 10 18 10 18s10-10 10-18c0-5.52-4.48-10-10-10zm0 15c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5z" />
                </svg>
                <span className="text-xs font-bold uppercase tracking-wider">Headquarters</span>
              </div>
              <p className="text-sm font-bold dark:text-white">185 Rose view plaza, Room No - 504</p>
              <p className="text-sm text-gray-500">Bir Uttam C R Dutta Road, Hatirpool, Dhaka</p>
              <button className="mt-4 text-[#1b9883] text-xs font-bold hover:underline flex items-center gap-1">
                Get Directions <svg width="14" height="14" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" stroke="currentColor" strokeWidth="2">
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </button>
            </div>
          </div> */}
          {/* Map Controls Overlay */}
          <div className="absolute bottom-6 right-6 flex flex-col gap-2">
            <button className="bg-white dark:bg-gray-800 p-2 rounded-lg shadow-md hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" stroke="currentColor" strokeWidth="2" className="dark:text-white">
                <path d="M12 5v14M5 12h14" />
              </svg>
            </button>
            <button className="bg-white dark:bg-gray-800 p-2 rounded-lg shadow-md hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" stroke="currentColor" strokeWidth="2" className="dark:text-white">
                <path d="M5 12h14" />
              </svg>
            </button>
          </div>
        </div>

        <div className="grid lg:grid-cols-5 gap-16">
          {/* Left Column: Info Panels */}
          <div className="lg:col-span-2 space-y-8">
            <div>
              <h3 className="text-2xl font-bold mb-6 flex items-center gap-2 dark:text-white">
                <span className="w-8 h-[2px] bg-[#D1BC94]"></span>
                Office Details
              </h3>
              <div className="space-y-6">
                <div className="group p-4 rounded-xl border border-gray-100 dark:border-gray-800 hover:border-[#1b9883]/30 transition-all bg-[#f8faf9]/50 dark:bg-white/5">
                  <p className="text-xs font-bold text-[#1b9883] uppercase tracking-widest mb-2">General Inquiries</p>
                  <p className="text-lg font-medium dark:text-white">+880 1643 959 399</p>
                  <p className="text-gray-500 text-sm">info@impulsegroupbd.com</p>
                </div>
                <div className="group p-4 rounded-xl border border-gray-100 dark:border-gray-800 hover:border-[#1b9883]/30 transition-all bg-[#f8faf9]/50 dark:bg-white/5">
                  <p className="text-xs font-bold text-[#1b9883] uppercase tracking-widest mb-2">Impulse Solutions (B2B)</p>
                  <p className="text-lg font-medium dark:text-white">+880 1643 959 399</p>
                  <p className="text-gray-500 text-sm">solutions@impulsegroupbd.com</p>
                </div>
                <div className="group p-4 rounded-xl border border-gray-100 dark:border-gray-800 hover:border-[#1b9883]/30 transition-all bg-[#f8faf9]/50 dark:bg-white/5">
                  <p className="text-xs font-bold text-[#1b9883] uppercase tracking-widest mb-2">Careers</p>
                  <p className="text-gray-500 text-sm mb-1">Looking to join our multi-brand family?</p>
                  <p className="text-lg font-medium dark:text-white">info@impulsegroupbd.com</p>
                </div>
              </div>
            </div>
            <div className="p-6 bg-[#1b9883]/5 dark:bg-[#1b9883]/10 rounded-2xl border border-[#1b9883]/10">
              <h4 className="font-bold text-[#1b9883] mb-2">Operating Hours</h4>
              <ul className="text-sm space-y-2 text-[#658680] dark:text-gray-400">
                <li className="flex justify-between"><span>Sat - Thur</span> <span className="font-semibold text-gray-700 dark:text-gray-200">09:00 - 18:00</span></li>
                <li className="flex justify-between"><span>Friday</span> <span className="font-semibold text-gray-700 dark:text-gray-200">Closed</span></li>
              </ul>
            </div>
          </div>

          {/* Right Column: Contact Form */}
          <div className="lg:col-span-3">
            <div className="bg-white dark:bg-gray-900 p-8 lg:p-10 rounded-2xl shadow-2xl shadow-[#1b9883]/5 border border-gray-100 dark:border-gray-800">
              <h3 className="text-2xl font-bold mb-2 dark:text-white">Send us a message</h3>
              <p className="text-gray-500 dark:text-gray-400 mb-8">Fill out the form below and our brand-specific teams will reach out within 24 hours.</p>
              <form className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="flex flex-col gap-2">
                    <label className="text-sm font-semibold dark:text-gray-300">Full Name</label>
                    <input className="w-full px-4 py-3 rounded-lg border border-gray-200 dark:border-gray-700 dark:bg-gray-800 dark:text-white focus:ring-2 focus:ring-[#1b9883]/20 focus:border-[#1b9883] outline-none transition-all" placeholder="Saniul Islam" type="text" />
                  </div>
                  <div className="flex flex-col gap-2">
                    <label className="text-sm font-semibold dark:text-gray-300">Email Address</label>
                    <input className="w-full px-4 py-3 rounded-lg border border-gray-200 dark:border-gray-700 dark:bg-gray-800 dark:text-white focus:ring-2 focus:ring-[#1b9883]/20 focus:border-[#1b9883] outline-none transition-all" placeholder="saniul@gmail.com" type="email" />
                  </div>
                </div>
                <div className="flex flex-col gap-2">
                  <label className="text-sm font-semibold dark:text-gray-300">Relevant Brand</label>
                  <div className="relative">
                    <select className="w-full px-4 py-3 rounded-lg border border-gray-200 dark:border-gray-700 dark:bg-gray-800 dark:text-white focus:ring-2 focus:ring-[#1b9883]/20 focus:border-[#1b9883] outline-none appearance-none transition-all cursor-pointer">
                      <option value="general">Impulse Group (General)</option>
                      <option value="natural">Just Natural (Consumer Goods)</option>
                      <option value="solutions">Impulse Solutions (Enterprise)</option>
                      <option value="kks">KKS (Logistics &amp; Supply)</option>
                    </select>
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" stroke="currentColor" strokeWidth="2" className="absolute right-3 top-3.5 text-gray-400 pointer-events-none">
                      <path d="M7 10l5 5 5-5" />
                    </svg>
                  </div>
                </div>
                <div className="flex flex-col gap-2">
                  <label className="text-sm font-semibold dark:text-gray-300">Your Message</label>
                  <textarea className="w-full px-4 py-3 rounded-lg border border-gray-200 dark:border-gray-700 dark:bg-gray-800 dark:text-white focus:ring-2 focus:ring-[#1b9883]/20 focus:border-[#1b9883] outline-none transition-all resize-none" placeholder="How can we help you?" rows={5}></textarea>
                </div>
                <button className="w-full bg-[#1b9883] hover:bg-[#1b9883]/90 text-white font-bold py-4 rounded-xl transition-all shadow-lg shadow-[#1b9883]/20 flex items-center justify-center gap-2 group" type="submit">
                  Send Message
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg" className="group-hover:translate-x-1 transition-transform">
                    <path d="M16.6915026,12.4744748 L3.50612381,13.2599618 C3.19218622,13.2599618 3.03521743,13.4170592 3.03521743,13.5741566 L1.15159189,20.0151496 C0.8376543,20.8006365 0.99,21.89 1.77946707,22.52 C2.41,22.99 3.50612381,23.1 4.13399899,22.8429026 L21.714504,14.0454487 C22.6563168,13.5741566 23.1272231,12.6315722 22.9702544,11.6889879 L4.13399899,1.16346272 C3.34915502,0.9 2.40734225,1.00636533 1.77946707,1.4776575 C0.994623095,2.10604706 0.837654326,3.0486314 1.15159189,3.99701575 L3.03521743,10.4380088 C3.03521743,10.5950961 3.34915502,10.7521935 3.50612381,10.7521935 L16.6915026,11.5376804 C16.6915026,11.5376804 17.1624089,11.5376804 17.1624089,12.0089725 C17.1624089,12.4744748 16.6915026,12.4744748 16.6915026,12.4744748 Z" />
                  </svg>
                </button>
              </form>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
