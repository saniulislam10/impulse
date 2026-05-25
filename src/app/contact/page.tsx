import Header from '@/components/Header';
import Footer from '@/components/Footer';

export const metadata = {
  title: 'Contact Us | Impulse Group',
  description: 'Get in touch with Impulse Group. We&apos;d love to hear from you.',
};

export default function Contact() {
  return (
    <>
      <Header />
      <main>
        <section className="relative pt-20 pb-16 lg:py-32">
          <div className="max-w-[1280px] mx-auto px-6 lg:px-10">
            <h1 className="text-5xl lg:text-6xl font-extrabold leading-tight mb-6">
              Contact Us
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-400 leading-relaxed max-w-2xl">
              Have questions? We&apos;d love to hear from you. Send us a message and we&apos;ll respond as soon as possible.
            </p>
          </div>
        </section>

        <section className="py-24">
          <div className="max-w-[1280px] mx-auto px-6 lg:px-10">
            <div className="grid lg:grid-cols-2 gap-16">
              {/* Contact Form */}
              <form className="space-y-6">
                <div>
                  <label className="block text-sm font-semibold mb-2">Name</label>
                  <input
                    type="text"
                    placeholder="Your name"
                    className="w-full px-4 py-3 rounded-lg border border-[#dce5e3] dark:border-white/10 bg-background-light dark:bg-background-dark focus:outline-none focus:ring-2 focus:ring-primary"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold mb-2">Email</label>
                  <input
                    type="email"
                    placeholder="your@email.com"
                    className="w-full px-4 py-3 rounded-lg border border-[#dce5e3] dark:border-white/10 bg-background-light dark:bg-background-dark focus:outline-none focus:ring-2 focus:ring-primary"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold mb-2">Message</label>
                  <textarea
                    placeholder="Your message here..."
                    rows={6}
                    className="w-full px-4 py-3 rounded-lg border border-[#dce5e3] dark:border-white/10 bg-background-light dark:bg-background-dark focus:outline-none focus:ring-2 focus:ring-primary"
                  />
                </div>
                <button
                  type="submit"
                  className="w-full bg-primary hover:bg-primary/90 text-white py-3 rounded-lg font-bold transition-all"
                >
                  Send Message
                </button>
              </form>

              {/* Contact Info */}
              <div className="space-y-8">
                <div>
                  <h3 className="text-lg font-bold mb-3 flex items-center gap-2">
                    <span className="material-symbols-outlined text-primary">location_on</span>
                    Address
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400">
                    123 Business Avenue, Suite 500
                    <br />
                    Corporate Hub, Metropolis
                  </p>
                </div>

                <div>
                  <h3 className="text-lg font-bold mb-3 flex items-center gap-2">
                    <span className="material-symbols-outlined text-primary">phone</span>
                    Phone
                  </h3>
                  <a href="tel:+15550001234" className="text-gray-600 dark:text-gray-400 hover:text-primary">
                    +1 (555) 000-1234
                  </a>
                </div>

                <div>
                  <h3 className="text-lg font-bold mb-3 flex items-center gap-2">
                    <span className="material-symbols-outlined text-primary">mail</span>
                    Email
                  </h3>
                  <a href="mailto:hello@imperialgroup.com" className="text-gray-600 dark:text-gray-400 hover:text-primary">
                    hello@imperialgroup.com
                  </a>
                </div>

                <div>
                  <h3 className="text-lg font-bold mb-3 flex items-center gap-2">
                    <span className="material-symbols-outlined text-primary">schedule</span>
                    Business Hours
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400">
                    Monday - Friday: 9:00 AM - 6:00 PM
                    <br />
                    Saturday - Sunday: Closed
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
