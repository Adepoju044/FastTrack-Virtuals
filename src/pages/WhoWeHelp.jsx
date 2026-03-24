import { Link } from "react-router-dom";
import Header from "@components/layout/Header";
import Footer from "@components/layout/Footer";
import CTAButton from "@components/ui/CTAButton";
import SEO from "@components/seo/SEO";

const audiences = [
  {
    icon: "🎓",
    title: "Coaches & Consultants",
    description:
      "You're great at what you do — but admin, scheduling, and client follow-ups are eating into your coaching hours. We handle the back-end so you can stay focused on delivering results.",
    points: [
      "Client onboarding & scheduling",
      "Email & calendar management",
      "CRM updates & follow-ups",
      "Content creation & social media",
      "Course or program support",
    ],
    gradient: "from-ftvprimary to-ftvprimary-400",
  },
  {
    icon: "🏢",
    title: "Agencies",
    description:
      "Growing agencies need reliable support to manage multiple clients without burning out their core team. We plug in seamlessly to keep projects moving and clients happy.",
    points: [
      "Project coordination & reporting",
      "Client communication support",
      "Social media & content management",
      "Graphic design & video editing",
      "Workflow documentation",
    ],
    gradient: "from-ftvsecondary to-ftvsecondary-400",
  },
  {
    icon: "🏪",
    title: "Small Businesses",
    description:
      "You don't need a full-time hire to get enterprise-level support. Our virtual assistants give small businesses the operational backbone to compete and scale.",
    points: [
      "Day-to-day administrative tasks",
      "Customer service & inbox management",
      "Marketing & communications",
      "Data entry & reporting",
      "Tech & automation support",
    ],
    gradient: "from-ftvprimary-400 to-ftvprimary-300",
  },
];

const stats = [
  { value: "20+", label: "Hours saved per week on average" },
  { value: "48hrs", label: "Average onboarding time" },
  { value: "3", label: "Countries served — US, UK & Canada" },
  { value: "100%", label: "No long-term contracts required" },
];

const WhoWeHelp = () => {
  return (
    <>
      <SEO
        title="Who We Help - FastTrack Virtuals"
        description="FastTrack Virtuals supports coaches, consultants, agencies, and small businesses across the US, UK, and Canada with expert virtual assistant services."
        url="https://fasttrackvirtual.com/who-we-help"
      />
      <Header />

      <section className="page-enter bg-gradient-to-br from-ftvprimary-100 via-ftvprimary-200 to-ftvprimary-300 dark:from-gray-800 dark:via-gray-900 dark:to-gray-950 pt-32 pb-16 text-center px-4">
        <div className="max-w-3xl mx-auto">
          <span className="bg-ftvprimary text-white text-sm font-semibold uppercase py-2 px-5 rounded-full inline-block mb-5">
            Who We Help
          </span>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-ftvblack dark:text-white mb-4">
            Built for Busy Business Owners Across the US, UK & Canada
          </h1>
          <p className="text-base sm:text-lg text-ftvblack dark:text-gray-300 plusjakartasans">
            Whether you&apos;re a solo coach or a growing agency, we have the
            right support for your stage of business.
          </p>
        </div>
      </section>

      <section className="bg-gradient-to-r from-ftvsecondary to-ftvprimary py-10 px-4">
        <div className="max-w-5xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          {stats.map((stat, i) => (
            <div key={i}>
              <p className="text-white font-extrabold text-3xl md:text-4xl">
                {stat.value}
              </p>
              <p className="text-white/80 plusjakartasans text-sm mt-1">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-ftvoffwhite dark:bg-gray-950 py-20 px-4">
        <div className="max-w-7xl mx-auto space-y-12">
          {audiences.map((audience, index) => (
            <div
              key={index}
              className={`bg-white dark:bg-gray-800 rounded-2xl shadow-md hover:shadow-xl transition-shadow overflow-hidden flex flex-col md:flex-row ${
                index % 2 !== 0 ? "md:flex-row-reverse" : ""
              }`}
            >
              <div
                className={`bg-gradient-to-br ${audience.gradient} md:w-2/5 p-10 flex flex-col justify-center items-center text-center gap-4`}
              >
                <span className="text-6xl">{audience.icon}</span>
                <h3 className="text-white font-bold text-2xl">
                  {audience.title}
                </h3>
              </div>

              <div className="md:w-3/5 p-8 md:p-10 flex flex-col justify-center gap-4">
                <p className="text-ftvgrey dark:text-gray-300 plusjakartasans">
                  {audience.description}
                </p>
                <ul className="list-disc ps-5 space-y-1">
                  {audience.points.map((point, idx) => (
                    <li
                      key={idx}
                      className="text-ftvblue dark:text-gray-300 plusjakartasans text-sm"
                    >
                      {point}
                    </li>
                  ))}
                </ul>
                <Link
                  to="/register"
                  className="inline-block mt-2 bg-ftvprimary hover:bg-ftvprimary-500 text-white font-semibold py-3 px-6 rounded-lg transition-colors w-fit uppercase text-sm"
                >
                  Get Started
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-gradient-to-r from-ftvsecondary to-ftvprimary py-16 text-center px-4">
        <h2 className="text-white font-bold text-3xl md:text-4xl mb-4">
          Sound Like You?
        </h2>
        <p className="text-white text-lg mb-8 plusjakartasans">
          Let&apos;s talk about how we can support your business — no commitment
          required.
        </p>
        <CTAButton
          size="xl"
          className="bg-white text-ftvsecondary hover:bg-ftvoffwhite"
        />
      </section>

      <Footer />
    </>
  );
};

export default WhoWeHelp;
