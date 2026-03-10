const HowItWorks = () => {
  const steps = [
    {
      number: "1",
      title: "Diagnose",
      description:
        "We analyze where your time is being wasted and identify opportunities for optimization.",
      icon: "fa-search",
    },
    {
      number: "2",
      title: "Build Systems",
      description:
        "We create workflows, automation, and processes tailored to your business needs.",
      icon: "fa-cogs",
    },
    {
      number: "3",
      title: "Delegate & Optimize",
      description:
        "We handle the admin and operations so you can focus on growth and revenue.",
      icon: "fa-rocket",
    },
  ];

  return (
    <section className="bg-gradient-to-br from-ftvoffwhite to-white dark:from-gray-900 dark:to-gray-950 py-16 mobilelg:py-20">
      <div className="max-w-7xl mx-auto mobilesm:px-8 px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="bg-ftvsecondary dark:bg-ftvsecondary-400 uppercase text-white text-center py-3 px-6 rounded-full font-semibold inline-block mb-4">
            How It Works
          </span>
          <h2 className="text-ftvblack dark:text-white font-bold mobilelg:text-4xl text-3xl mb-4">
            Simple Process, Powerful Results
          </h2>
          <p className="text-ftvgrey dark:text-gray-300 mobilelg:text-lg text-base plusjakartasans max-w-2xl mx-auto">
            Get started in three easy steps and start saving time within days
          </p>
        </div>

        {/* Steps */}
        <div className="grid md:grid-cols-3 gap-8 md:gap-12">
          {steps.map((step, index) => (
            <div key={index} className="relative">
              {/* Connector Line (desktop only) */}
              {index < steps.length - 1 && (
                <div className="hidden md:block absolute top-16 left-full w-full h-1 bg-gradient-to-r from-ftvprimary to-ftvsecondary dark:from-ftvprimary-400 dark:to-ftvsecondary-400 transform -translate-x-1/2 z-0"></div>
              )}

              {/* Step Card */}
              <div className="relative z-10 text-center">
                {/* Icon Circle */}
                <div className="inline-flex items-center justify-center w-32 h-32 rounded-full bg-gradient-to-br from-ftvprimary to-ftvprimary-400 text-white mb-6 shadow-xl">
                  <i className={`fas ${step.icon} text-5xl`}></i>
                </div>

                {/* Step Number */}
                <div className="flex items-center justify-center bg-ftvsecondary dark:bg-ftvsecondary-400 text-white font-bold text-xl w-12 h-12 rounded-full mb-4 shadow-lg mx-auto">
                  {step.number}
                </div>

                {/* Content */}
                <h3 className="text-ftvblack dark:text-white font-bold text-2xl mb-4">
                  {step.title}
                </h3>
                <p className="text-ftvgrey dark:text-gray-300 plusjakartasans text-base leading-relaxed">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
