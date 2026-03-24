import { Link } from "react-router-dom";
import Header from "@components/layout/Header";
import Footer from "@components/layout/Footer";
import CTAButton from "@components/ui/CTAButton";
import SEO from "@components/seo/SEO";

const plans = [
  {
    name: "Starter",
    description: "Perfect for solopreneurs and coaches just getting started.",
    highlight: false,
    features: [
      "Email & calendar management",
      "Basic admin support",
      "Social media scheduling",
      "Weekly progress report",
      "US, UK & Canada time zones",
      "Dedicated VA",
    ],
  },
  {
    name: "Growth",
    description: "Ideal for growing agencies and small businesses.",
    highlight: true,
    badge: "Most Popular",
    features: [
      "Everything in Starter",
      "Customer service support",
      "Workflow & systems setup",
      "Project management",
      "Financial admin & invoicing",
      "Priority response time",
    ],
  },
  {
    name: "Scale",
    description:
      "For established businesses that need full operations support.",
    highlight: false,
    features: [
      "Everything in Growth",
      "Dedicated operations manager",
      "Team coordination support",
      "Custom workflow automation",
      "Monthly strategy call",
      "Same-day response guarantee",
    ],
  },
];

const faqs = [
  {
    q: "Can I change my plan later?",
    a: "Yes, you can upgrade or downgrade at any time. Changes take effect at the start of your next billing cycle.",
  },
  {
    q: "Is there a contract or commitment?",
    a: "No long-term contracts. All plans are month-to-month and you can cancel anytime.",
  },
  {
    q: "What time zones do you cover?",
    a: "We cover US (EST/PST), UK (GMT/BST), and Canadian time zones so your VA is available when you need them.",
  },
  {
    q: "How quickly can I get started?",
    a: "Most clients are onboarded and matched with a VA within 48 hours of signing up.",
  },
];

const Pricing = () => {
  return (
    <>
      <SEO
        title="Pricing - FastTrack Virtuals"
        description="Simple, transparent pricing for virtual assistant services. No hidden fees. Serving businesses in the US, UK & Canada."
        url="https://fasttrackvirtual.com/pricing"
      />
      <Header />

      {/* Hero */}
      <section className="bg-gradient-to-br from-ftvprimary-100 via-ftvprimary-200 to-ftvprimary-300 dark:from-gray-800 dark:via-gray-900 dark:to-gray-950 pt-36 pb-16 text-center">
        <div className="max-w-3xl mx-auto px-6">
          <span className="bg-ftvprimary text-white text-sm font-semibold uppercase py-2 px-5 rounded-full inline-block mb-5">
            Pricing
          </span>
          <h1 className="text-4xl md:text-5xl font-extrabold text-ftvblack dark:text-white mb-4">
            Simple, Transparent Pricing
          </h1>
          <p className="text-lg text-ftvblack dark:text-gray-300 plusjakartasans">
            No hidden fees. No long-term contracts. Just reliable operations
            support for US, UK & Canadian businesses.
          </p>
        </div>
      </section>

      {/* Plans */}
      <section className="bg-ftvoffwhite dark:bg-gray-950 py-20 px-4">
        <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-8 items-stretch">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={`relative flex flex-col rounded-2xl p-8 shadow-lg transition-all duration-300 hover:shadow-2xl ${
                plan.highlight
                  ? "bg-gradient-to-br from-ftvsecondary to-ftvprimary text-white scale-105"
                  : "bg-white dark:bg-gray-800 text-ftvblack dark:text-white"
              }`}
            >
              {plan.badge && (
                <span className="absolute -top-4 left-1/2 -translate-x-1/2 bg-white text-ftvsecondary text-xs font-bold uppercase py-1 px-4 rounded-full shadow">
                  {plan.badge}
                </span>
              )}
              <div className="mb-6">
                <h2
                  className={`text-xl font-bold mb-1 ${plan.highlight ? "text-white" : "text-ftvblack dark:text-white"}`}
                >
                  {plan.name}
                </h2>
                <p
                  className={`text-sm plusjakartasans mb-4 ${plan.highlight ? "text-white/80" : "text-ftvgrey dark:text-gray-400"}`}
                >
                  {plan.description}
                </p>
                <div
                  className={`text-sm font-semibold uppercase tracking-wide ${plan.highlight ? "text-white/90" : "text-ftvprimary dark:text-ftvprimary-300"}`}
                >
                  Custom Pricing
                </div>
                <p
                  className={`text-xs plusjakartasans mt-1 ${plan.highlight ? "text-white/70" : "text-ftvgrey dark:text-gray-500"}`}
                >
                  Tailored to your business needs
                </p>
              </div>
              <ul className="space-y-3 flex-1 mb-8">
                {plan.features.map((f) => (
                  <li
                    key={f}
                    className="flex items-start gap-2 text-sm plusjakartasans"
                  >
                    <span
                      className={`mt-0.5 text-base ${plan.highlight ? "text-white" : "text-ftvprimary"}`}
                    >
                      ✓
                    </span>
                    {f}
                  </li>
                ))}
              </ul>
              <Link
                to="/contact"
                className={`block text-center font-bold py-3 px-6 rounded-lg uppercase transition-all duration-300 ${
                  plan.highlight
                    ? "bg-white text-ftvsecondary hover:bg-ftvoffwhite"
                    : "bg-ftvprimary text-white hover:bg-ftvprimary-500"
                }`}
              >
                Get a Quote
              </Link>
            </div>
          ))}
        </div>
        <p className="text-center text-ftvgrey dark:text-gray-400 plusjakartasans text-sm mt-10">
          Need something custom?{" "}
          <Link
            to="/contact"
            className="text-ftvprimary dark:text-ftvprimary-300 font-semibold hover:underline"
          >
            Contact us
          </Link>{" "}
          for a tailored package.
        </p>
      </section>

      {/* FAQ */}
      <section className="bg-white dark:bg-gray-900 py-20 px-4">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold text-ftvblack dark:text-white text-center mb-12">
            Common Questions
          </h2>
          <div className="space-y-6">
            {faqs.map((item) => (
              <div
                key={item.q}
                className="border-b border-ftvgrey-200 dark:border-gray-700 pb-6"
              >
                <h3 className="font-semibold text-ftvblack dark:text-white mb-2">
                  {item.q}
                </h3>
                <p className="text-ftvgrey dark:text-gray-400 plusjakartasans text-sm">
                  {item.a}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-gradient-to-r from-ftvsecondary to-ftvprimary py-16 text-center px-4">
        <h2 className="text-white font-bold text-3xl md:text-4xl mb-4">
          Ready to Reclaim Your Time?
        </h2>
        <p className="text-white text-lg mb-8 plusjakartasans">
          Book a free strategy call and we&apos;ll find the right plan for you.
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

export default Pricing;
