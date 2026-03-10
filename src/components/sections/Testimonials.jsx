const Testimonials = () => {
  const testimonials = [
    {
      quote:
        "They reduced my admin work from 15 hours a week to 5. I can finally focus on growing my business instead of drowning in tasks.",
      author: "Sarah Mitchell",
      role: "Marketing Consultant",
      location: "London, UK",
    },
    {
      quote:
        "FastTrack transformed how we operate. Their systems and automation saved us countless hours and improved our client delivery.",
      author: "Michael Chen",
      role: "Agency Owner",
      location: "Toronto, Canada",
    },
    {
      quote:
        "Best decision I made for my coaching business. They handle everything from scheduling to client onboarding seamlessly.",
      author: "Jennifer Rodriguez",
      role: "Business Coach",
      location: "Austin, USA",
    },
  ];

  const metrics = [
    { number: "20+", label: "Hours Saved Weekly" },
    { number: "15+", label: "Clients Supported" },
    { number: "3", label: "Countries Served" },
    { number: "98%", label: "Client Satisfaction" },
  ];

  return (
    <section className="bg-white dark:bg-gray-900 py-16 mobilelg:py-20">
      <div className="max-w-7xl mx-auto mobilesm:px-8 px-4">
        {/* Section Header */}
        <div className="text-center mb-12">
          <span className="bg-ftvprimary dark:bg-ftvprimary-400 uppercase text-white text-center py-3 px-6 rounded-full font-semibold inline-block mb-4">
            Trusted by Growing Businesses
          </span>
          <h2 className="text-ftvblack dark:text-white font-bold mobilelg:text-4xl text-3xl mb-4">
            Real Results from Real Clients
          </h2>
          <p className="text-ftvgrey dark:text-gray-300 mobilelg:text-lg text-base plusjakartasans max-w-2xl mx-auto">
            See how we've helped service-based businesses across the US, UK, and
            Canada reclaim their time
          </p>
        </div>

        {/* Metrics */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
          {metrics.map((metric, index) => (
            <div
              key={index}
              className="text-center p-6 bg-gradient-to-br from-ftvprimary-100 to-ftvoffwhite dark:from-gray-800 dark:to-gray-700 rounded-lg"
            >
              <div className="text-4xl md:text-5xl font-bold text-ftvprimary dark:text-ftvprimary-300 mb-2">
                {metric.number}
              </div>
              <div className="text-ftvblack dark:text-gray-200 font-medium plusjakartasans">
                {metric.label}
              </div>
            </div>
          ))}
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-ftvoffwhite dark:bg-gray-800 p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <div className="mb-6">
                <img
                  src="/quote-up.svg"
                  alt="Quote"
                  className="w-10 h-10 opacity-50 dark:opacity-30"
                />
              </div>
              <p className="text-ftvblack dark:text-gray-300 plusjakartasans text-base mb-6 italic">
                "{testimonial.quote}"
              </p>
              <div className="border-t border-ftvgrey-200 dark:border-gray-600 pt-4">
                <p className="font-bold text-ftvblack dark:text-white">
                  {testimonial.author}
                </p>
                <p className="text-ftvgrey dark:text-gray-400 text-sm plusjakartasans">
                  {testimonial.role}
                </p>
                <p className="text-ftvsecondary dark:text-ftvsecondary-300 text-sm font-medium mt-1">
                  {testimonial.location}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
