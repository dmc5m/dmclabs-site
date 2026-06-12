import Link from 'next/link'

const pillars = [
  {
    title: 'Built for everyday life',
    body: 'We make software that fits into real routines — tools for families and the small, recurring moments of daily life, designed to remove friction rather than add it.',
  },
  {
    title: 'Privacy by default',
    body: 'Our apps don’t run on advertising, tracking, or the sale of personal data. We collect only what a feature genuinely needs, and keep people in control of their own information.',
  },
  {
    title: 'Crafted with care',
    body: 'We sweat performance, accessibility, and design, because software people rely on every day deserves to be built well — not just shipped quickly.',
  },
]

export default function Home() {
  return (
    <div className="home-hero flex flex-1 flex-col">
      {/* Hero */}
      <section className="flex min-h-[72vh] flex-col items-center justify-center px-6">
        <div className="animate-fade-in-slow text-center">
          <h1 className="font-serif text-5xl tracking-tight text-cream sm:text-7xl">
            DMC Labs
          </h1>
          <div className="mx-auto mt-6 h-px w-16 bg-taupe/40" />
          <p className="mt-6 text-base tracking-widest text-cream-muted uppercase">
            ONE
          </p>
        </div>
      </section>

      {/* About */}
      <section className="border-t border-taupe/10 px-6 py-20 sm:py-28">
        <div className="animate-fade-in-up mx-auto max-w-2xl text-center">
          <h2 className="font-serif text-2xl tracking-tight text-cream sm:text-3xl">
            An independent software studio
          </h2>
          <div className="mx-auto mt-6 h-px w-16 bg-taupe/40" />
          <p className="mt-8 text-base leading-relaxed text-cream-muted">
            DMC Labs is an independent software studio based in Sarasota, Florida. We
            design and
            build consumer applications for families and for everyday life — software
            meant to be genuinely useful, quietly well-made, and respectful of the people
            who use it. We stay small by choice, so we can own each product end to end and
            care about the details that make an everyday tool worth keeping.
          </p>
        </div>
      </section>

      {/* Pillars */}
      <section className="px-6 pb-20 sm:pb-28">
        <div className="mx-auto grid max-w-4xl gap-12 sm:grid-cols-3 sm:gap-8">
          {pillars.map((pillar) => (
            <div
              key={pillar.title}
              className="animate-fade-in-up text-center sm:text-left"
            >
              <div className="mx-auto h-px w-8 bg-gold/50 sm:mx-0" />
              <h3 className="mt-5 font-serif text-lg text-cream">{pillar.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-cream-muted">
                {pillar.body}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Contact */}
      <section className="border-t border-taupe/10 px-6 py-16 text-center">
        <p className="text-sm leading-relaxed text-cream-muted">
          Questions, partnerships, or a data request?
        </p>
        <Link
          href="/contact"
          className="mt-6 inline-flex items-center gap-2 rounded-md bg-walnut/60 px-6 py-3 text-sm tracking-wide text-cream transition-colors duration-300 hover:bg-taupe/40"
        >
          Get in touch
        </Link>
      </section>
    </div>
  )
}
