import { T } from "gt-next";
import { getGT } from "gt-next/server";
import { LocaleSelector } from "gt-next";
import { Num, Currency } from "gt-next";

export default async function Home() {
  const gt = await getGT();

  const plans = [
    {
      name: gt("Basic"),
      price: 29,
      period: gt("month"),
      features: [
        gt("Access to gym floor"),
        gt("Locker room access"),
        gt("2 group classes per week"),
        gt("Basic fitness assessment"),
      ],
    },
    {
      name: gt("Pro"),
      price: 59,
      period: gt("month"),
      features: [
        gt("Full gym and equipment access"),
        gt("Unlimited group classes"),
        gt("1 personal training session per month"),
        gt("Sauna and steam room"),
        gt("Nutrition consultation"),
      ],
      highlighted: true,
    },
    {
      name: gt("Elite"),
      price: 99,
      period: gt("month"),
      features: [
        gt("Everything in Pro"),
        gt("Unlimited personal training"),
        gt("Priority class booking"),
        gt("Guest passes (2 per month)"),
        gt("Recovery suite access"),
        gt("Quarterly body composition analysis"),
      ],
    },
  ];

  const schedule = [
    { time: "06:00", name: gt("Morning HIIT"), instructor: gt("Coach Sarah"), duration: gt("45 min") },
    { time: "07:30", name: gt("Power Yoga"), instructor: gt("Coach Maya"), duration: gt("60 min") },
    { time: "09:00", name: gt("Spin Cycle"), instructor: gt("Coach Alex"), duration: gt("45 min") },
    { time: "12:00", name: gt("Strength Training"), instructor: gt("Coach Marcus"), duration: gt("50 min") },
    { time: "17:30", name: gt("Boxing Fundamentals"), instructor: gt("Coach Reyes"), duration: gt("60 min") },
    { time: "19:00", name: gt("Recovery Stretch"), instructor: gt("Coach Lena"), duration: gt("30 min") },
  ];

  const stats = [
    { value: "2,400", label: gt("Active Members") },
    { value: "85", label: gt("Classes Per Week") },
    { value: "12", label: gt("Expert Trainers") },
    { value: "98%", label: gt("Member Satisfaction") },
  ];

  return (
    <div className="min-h-screen bg-neutral-950 font-sans text-neutral-200">
      {/* Header */}
      <header className="border-b border-neutral-800 bg-neutral-950">
        <div className="max-w-5xl mx-auto px-6 py-5 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <a
              href="https://generaltranslation.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm font-medium text-neutral-400 hover:text-neutral-200 transition-colors"
            >
              General Translation
            </a>
            <span className="text-neutral-700">/</span>
            <h1 className="text-sm font-semibold text-neutral-100">
              {gt("Gym Membership")}
            </h1>
          </div>
          <div className="flex items-center gap-3">
            <a
              href="https://github.com/gt-examples/gym-membership"
              target="_blank"
              rel="noopener noreferrer"
              className="text-neutral-400 hover:text-neutral-200 transition-colors"
              aria-label="View on GitHub"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
              </svg>
            </a>
            <LocaleSelector />
          </div>
        </div>
      </header>

      <main className="max-w-5xl mx-auto px-6 py-12 space-y-20">
        {/* Hero */}
        <section className="text-center max-w-2xl mx-auto">
          <T>
            <h2 className="text-3xl font-bold text-neutral-100 mb-4">
              Your fitness journey starts here
            </h2>
            <p className="text-neutral-400 text-lg leading-relaxed">
              Join a community dedicated to health, strength, and personal growth. Find the plan that fits your goals.
            </p>
          </T>
        </section>

        {/* Stats */}
        <section className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {stats.map((stat) => (
            <div
              key={stat.label}
              className="text-center p-6 rounded-lg border border-neutral-800 bg-neutral-900/50"
            >
              <div className="text-2xl font-bold text-neutral-100 mb-1">
                {stat.value}
              </div>
              <div className="text-sm text-neutral-400">{stat.label}</div>
            </div>
          ))}
        </section>

        {/* Pricing Plans */}
        <section>
          <div className="text-center mb-10">
            <T>
              <h3 className="text-2xl font-semibold text-neutral-100 mb-2">
                Membership Plans
              </h3>
              <p className="text-neutral-400">
                Choose the membership that matches your training goals
              </p>
            </T>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {plans.map((plan) => (
              <div
                key={plan.name}
                className={`rounded-lg border p-6 flex flex-col ${
                  plan.highlighted
                    ? "border-blue-500/50 bg-blue-950/20"
                    : "border-neutral-800 bg-neutral-900/50"
                }`}
              >
                <div className="mb-4">
                  <h4 className="text-lg font-semibold text-neutral-100">
                    {plan.name}
                  </h4>
                  <div className="mt-2 flex items-baseline gap-1">
                    <span className="text-3xl font-bold text-neutral-100">
                      <Currency currency="USD">{plan.price}</Currency>
                    </span>
                    <span className="text-neutral-500">/ {plan.period}</span>
                  </div>
                </div>
                <ul className="space-y-2 mb-6 flex-1">
                  {plan.features.map((feature) => (
                    <li
                      key={feature}
                      className="flex items-start gap-2 text-sm text-neutral-300"
                    >
                      <span className="text-neutral-600 mt-0.5">-</span>
                      {feature}
                    </li>
                  ))}
                </ul>
                <button
                  className={`w-full py-2.5 px-4 rounded-md text-sm font-medium transition-colors ${
                    plan.highlighted
                      ? "bg-blue-600 text-white hover:bg-blue-500"
                      : "bg-neutral-800 text-neutral-200 hover:bg-neutral-700"
                  }`}
                >
                  {gt("Get Started")}
                </button>
              </div>
            ))}
          </div>
        </section>

        {/* Class Schedule */}
        <section>
          <div className="text-center mb-10">
            <T>
              <h3 className="text-2xl font-semibold text-neutral-100 mb-2">
                Today&apos;s Class Schedule
              </h3>
              <p className="text-neutral-400">
                Drop in to any class that fits your schedule
              </p>
            </T>
          </div>
          <div className="space-y-3">
            {schedule.map((cls) => (
              <div
                key={cls.time}
                className="flex items-center justify-between p-4 rounded-lg border border-neutral-800 bg-neutral-900/50"
              >
                <div className="flex items-center gap-6">
                  <span className="text-sm font-mono text-neutral-500 w-14">
                    {cls.time}
                  </span>
                  <div>
                    <div className="text-sm font-medium text-neutral-100">
                      {cls.name}
                    </div>
                    <div className="text-xs text-neutral-500">
                      {cls.instructor}
                    </div>
                  </div>
                </div>
                <span className="text-xs text-neutral-500 bg-neutral-800 px-2.5 py-1 rounded">
                  {cls.duration}
                </span>
              </div>
            ))}
          </div>
        </section>

        {/* Disclaimer */}
        <section className="text-center">
          <T>
            <p className="text-xs text-neutral-600">
              This is an example application built with General Translation to demonstrate internationalization.
            </p>
          </T>
        </section>
      </main>
    </div>
  );
}
