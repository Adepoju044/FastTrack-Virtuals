import Header from "@components/layout/Header";
import Footer from "@components/layout/Footer";
import CTAButton from "@components/ui/CTAButton";
import SEO from "@components/seo/SEO";

const founders = [
  {
    name: "Emil Nabor Ekiyor",
    title: "Founder, FastTrack Virtual",
    image: "/emil.jpg",
    gradient: "from-ftvsecondary to-ftvprimary",
  },
  {
    name: "Jakayla Sullivan Ekiyor",
    title: "Co-Founder, FastTrack Virtual",
    image: "/jakayla.jpeg",
    gradient: "from-ftvprimary to-ftvprimary-400",
  },
];

const Founder = () => {
  return (
    <>
      <SEO
        title="Our Founders - FastTrack Virtuals"
        description="Meet Emil Nabor Ekiyor and Jakayla Sullivan Ekiyor, the founders of FastTrack Virtuals. Learn how they're bridging the gap between African talent and global business opportunities."
        url="https://fasttrackvirtual.com/founder"
      />
      <Header />

      <section className="page-enter bg-gradient-to-br from-ftvprimary-100 via-ftvprimary-200 to-ftvprimary-300 dark:from-gray-800 dark:via-gray-900 dark:to-gray-950 pt-32 pb-16 text-center px-4">
        <div className="max-w-3xl mx-auto">
          <span className="bg-ftvprimary text-white text-sm font-semibold uppercase py-2 px-5 rounded-full inline-block mb-5">
            Our Founders
          </span>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-ftvblack dark:text-white mb-4">
            The Vision Behind FastTrack Virtual
          </h1>
          <p className="text-base sm:text-lg text-ftvblack dark:text-gray-300 plusjakartasans">
            Talent is everywhere. Opportunity shouldn&apos;t be limited by
            geography.
          </p>
        </div>
      </section>

      <section className="bg-ftvoffwhite dark:bg-gray-950 py-16 sm:py-20 px-4 sm:px-8">
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-10 mb-16">
            {founders.map((founder) => (
              <div key={founder.name} className="flex flex-col items-center">
                <div className="w-full max-w-xs">
                  <div className="w-full rounded-2xl overflow-hidden shadow-2xl">
                    <img
                      src={founder.image}
                      alt={`${founder.name} — ${founder.title}`}
                      className="w-full h-auto object-cover object-top"
                    />
                  </div>
                  <div
                    className={`mt-4 bg-gradient-to-r ${founder.gradient} text-white px-5 py-3 rounded-xl shadow-lg text-center`}
                  >
                    <p className="font-bold text-base sm:text-lg">
                      {founder.name}
                    </p>
                    <p className="text-sm text-white/80 plusjakartasans">
                      {founder.title}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="max-w-4xl mx-auto space-y-5">
            <h2 className="text-ftvblack dark:text-white font-bold text-2xl sm:text-3xl md:text-4xl leading-snug">
              Bridging the Gap Between African Talent and Global Opportunity
            </h2>
            <p className="text-ftvgrey dark:text-gray-300 plusjakartasans text-base sm:text-lg leading-relaxed">
              Fast Track Virtual was born from a simple but powerful
              realization: talent is everywhere, but opportunity is not.
            </p>
            <p className="text-ftvgrey dark:text-gray-300 plusjakartasans leading-relaxed text-sm sm:text-base">
              Across Africa, there are thousands of skilled professionals — from
              business support specialists to designers and developers — who are
              ready to deliver world-class work, yet struggle to access global
              opportunities. At the same time, businesses in the US, UK, Canada,
              and beyond are actively searching for reliable, high-quality
              talent, often unaware of the value that exists in Africa.
            </p>
            <p className="text-ftvgrey dark:text-gray-300 plusjakartasans leading-relaxed text-sm sm:text-base">
              Emil and Jakayla saw this disconnect and decided to bridge it.
              Fast Track Virtual is their solution — a platform built to connect
              African talent directly with international clients, removing the
              usual barriers of access, trust, and visibility.
            </p>
            <p className="text-ftvgrey dark:text-gray-300 plusjakartasans leading-relaxed text-sm sm:text-base">
              It&apos;s not just about getting people jobs. It&apos;s about
              creating a system where skill is recognized globally, where
              businesses can find dependable support, and where geography no
              longer limits potential.
            </p>
            <blockquote className="border-l-4 border-ftvprimary pl-5 py-2">
              <p className="text-ftvblack dark:text-white font-medium text-base sm:text-lg italic plusjakartasans">
                &ldquo;Through Fast Track Virtual, they are building more than a
                service — they&apos;re creating a pathway for African
                professionals to earn globally, grow confidently, and compete at
                the highest level.&rdquo;
              </p>
            </blockquote>
          </div>
        </div>
      </section>

      <section className="bg-gradient-to-r from-ftvsecondary to-ftvprimary py-14 px-4 sm:px-8">
        <div className="max-w-4xl mx-auto grid grid-cols-1 sm:grid-cols-3 gap-8 text-center">
          <div>
            <p className="text-white font-extrabold text-4xl mb-2">🌍</p>
            <p className="text-white font-bold text-lg mb-1">Global Reach</p>
            <p className="text-white/80 plusjakartasans text-sm">
              Connecting talent across continents to clients in the US, UK &
              Canada
            </p>
          </div>
          <div>
            <p className="text-white font-extrabold text-4xl mb-2">🤝</p>
            <p className="text-white font-bold text-lg mb-1">Built on Trust</p>
            <p className="text-white/80 plusjakartasans text-sm">
              Removing barriers of access, visibility, and credibility for
              African professionals
            </p>
          </div>
          <div>
            <p className="text-white font-extrabold text-4xl mb-2">🚀</p>
            <p className="text-white font-bold text-lg mb-1">
              Real Opportunity
            </p>
            <p className="text-white/80 plusjakartasans text-sm">
              A pathway to earn globally, grow confidently, and compete at the
              highest level
            </p>
          </div>
        </div>
      </section>

      <section className="bg-ftvoffwhite dark:bg-gray-950 py-16 text-center px-4">
        <h2 className="text-ftvblack dark:text-white font-bold text-3xl sm:text-4xl mb-4">
          Be Part of the Movement
        </h2>
        <p className="text-ftvgrey dark:text-gray-300 text-base sm:text-lg mb-8 plusjakartasans">
          Whether you&apos;re a business looking for support or a professional
          ready to grow — FastTrack Virtual is for you.
        </p>
        <CTAButton size="xl" />
      </section>

      <Footer />
    </>
  );
};

export default Founder;
