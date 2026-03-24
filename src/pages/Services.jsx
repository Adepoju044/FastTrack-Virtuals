import Header from "@components/layout/Header";
import Footer from "@components/layout/Footer";
import CTAButton from "@components/ui/CTAButton";
import SEO from "@components/seo/SEO";
import useFadeIn from "@hooks/useFadeIn";

const services = [
  {
    title: "Business Support Specialist",
    description:
      "Keep your business running smoothly with dedicated administrative support that handles the day-to-day so you can focus on growth.",
    items: [
      "Email & calendar management",
      "Administrative support",
      "Customer service & inbox handling",
      "Data entry & organization",
      "Scheduling & coordination",
    ],
    icon: "🗂️",
  },
  {
    title: "Project Management",
    description:
      "Stay on top of every project with structured workflows, clear timelines, and a dedicated VA keeping everything on track.",
    items: [
      "Workflow setup & optimization",
      "Task & deadline tracking",
      "Team coordination",
      "Systems & process documentation",
      "Project reporting",
    ],
    icon: "📋",
  },
  {
    title: "Marketing & Communications",
    description:
      "Build your brand presence and connect with your audience through consistent, high-quality marketing support.",
    items: [
      "Social media management",
      "Content creation & scheduling",
      "Email marketing campaigns",
      "Copywriting & proofreading",
      "Brand communications",
    ],
    icon: "📣",
  },
  {
    title: "Graphic / Product Design",
    description:
      "Make a strong visual impression with professional design work tailored to your brand identity and marketing needs.",
    items: [
      "Brand identity & logo design",
      "Social media graphics",
      "Marketing materials",
      "Presentation design",
      "Product visuals",
    ],
    icon: "🎨",
  },
  {
    title: "Video Editing",
    description:
      "Turn raw footage into polished, engaging content that captures attention and drives results across every platform.",
    items: [
      "Short-form content editing",
      "YouTube & podcast editing",
      "Reels & TikTok production",
      "Captions & subtitles",
      "Motion graphics",
    ],
    icon: "🎬",
  },
  {
    title: "AI & Development",
    description:
      "Leverage the latest AI tools and tech solutions to automate workflows, build smarter systems, and scale faster.",
    items: [
      "AI tools integration",
      "Workflow automation",
      "Web development support",
      "Chatbot setup & management",
      "Tech stack consulting",
    ],
    icon: "🤖",
  },
];

const Services = () => {
  const gridRef = useFadeIn();
  return (
    <>
      <SEO
        title="Our Services - FastTrack Virtuals"
        description="Explore FastTrack Virtuals' full range of virtual assistant services — from business support and project management to marketing, design, video editing, and AI development."
        url="https://fasttrackvirtual.com/services"
      />
      <Header />

      <section className="page-enter bg-gradient-to-br from-ftvprimary-100 via-ftvprimary-200 to-ftvprimary-300 dark:from-gray-800 dark:via-gray-900 dark:to-gray-950 pt-32 pb-16 text-center px-4">
        <div className="max-w-3xl mx-auto">
          <span className="bg-ftvprimary text-white text-sm font-semibold uppercase py-2 px-5 rounded-full inline-block mb-5">
            Our Services
          </span>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-ftvblack dark:text-white mb-4">
            Everything Your Business Needs to Run Smoothly
          </h1>
          <p className="text-base sm:text-lg text-ftvblack dark:text-gray-300 plusjakartasans">
            From admin to AI — we provide skilled virtual assistants across six
            core service areas.
          </p>
        </div>
      </section>

      <section className="bg-ftvoffwhite dark:bg-gray-950 py-16 px-4 sm:px-8">
        <div className="max-w-7xl mx-auto">
          <div
            ref={gridRef}
            className="fade-in grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6"
          >
            {services.map((service, index) => (
              <div
                key={index}
                className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-md hover:shadow-xl transition-shadow flex flex-col gap-4 card-hover"
              >
                <span className="text-4xl">{service.icon}</span>
                <h3 className="text-ftvprimary dark:text-ftvprimary-300 font-bold text-xl">
                  {service.title}
                </h3>
                <p className="text-ftvgrey dark:text-gray-400 plusjakartasans text-sm">
                  {service.description}
                </p>
                <ul className="list-disc ps-5 space-y-1 mt-2">
                  {service.items.map((item, idx) => (
                    <li
                      key={idx}
                      className="text-ftvblue dark:text-gray-300 plusjakartasans text-sm"
                    >
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-gradient-to-r from-ftvsecondary to-ftvprimary py-16 text-center px-4">
        <h2 className="text-white font-bold text-3xl md:text-4xl mb-4">
          Ready to Delegate and Grow?
        </h2>
        <p className="text-white text-lg mb-8 plusjakartasans">
          Let&apos;s match you with the right virtual assistant for your needs.
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

export default Services;
