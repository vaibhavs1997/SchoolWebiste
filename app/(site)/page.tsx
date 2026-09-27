import Link from 'next/link'
import Image from 'next/image'
import type { Metadata } from 'next'
import { HomeHero } from '@/components/home-hero'
import { getHomeContent } from '@/sanity/lib/queries'

export const metadata: Metadata = { title: 'Home' }

const highlights = [
  ['About us', 'Discover our values, story and learning promise.', '/about-us'],
  ['Admissions', 'Start a warm, clear admission journey for your family.', '/admission'],
  ['Faculty', 'Meet the people who make learning possible.', '/faculty'],
  ['Student life', 'Explore a community built for curiosity and belonging.', '/student'],
  ['Entrance Exam', 'Prepare confidently for the next step.', '/entrance-exam'],
]

export default async function HomePage() {
  const homeContent = await getHomeContent()

  return <main>
    <HomeHero content={homeContent} />
    <section className="bg-cream py-8 sm:py-12">
      <div className="site-shell grid gap-12 lg:grid-cols-[342px_726px] lg:gap-20">
        <div>
          <p className="section-label">A message from our leadership</p>
          <h2 className="mt-8 max-w-[342px] font-display text-4xl font-bold leading-[.95] tracking-[-.07em] text-ink sm:text-5xl lg:text-[2.85rem]"><span className="whitespace-nowrap">FROM DESK OF</span><em className="mt-2 block whitespace-nowrap font-serif text-[2.25rem] font-normal leading-[.9] tracking-[-.05em] text-[#6d9d8b] sm:text-4xl lg:text-[2.25rem]">FOUNDER/DIRECTOR</em></h2>
          <div className="relative mt-12 aspect-[2/3] max-w-[37rem] overflow-hidden bg-paper"><Image src="/assets/Director.png" alt="G.D. International School Founder and Director with students" fill sizes="(min-width: 1024px) 40vw, 100vw" className="object-cover object-center" /></div>
        </div>
        <div className="max-w-4xl space-y-8 pt-1 text-lg leading-[1.75] text-ink-soft sm:text-xl">
          <p className="text-ink">GD International SCHOOL has, therefore been established for the specific purpose of providing the new generation with an institution which besides giving the best education in the field of modern science &amp; technology. It cares for all round development physical, mental &amp; spiritual and inculcates in them a deep love for high moral values and deep respect for all religions.</p>
          <p>Human nature is to be ambitious. Ambition resides in the heart of hopes. Even the nature teaches us the consequences of ambition. A flower desires to bloom and a tree bears fruits. Thus, the term &lsquo;ambition&rsquo; is itself hidden in the hopes of nature; and with the change of time and situation, the ambition of nature gets fulfilled. This is just because of its action. Therefore, we humans too, should try to transform the hopes into thoughts and thoughts into actions.</p>
          <p>As a result, the action bears the fruit of success. As noble laureate Rabindra Nath Tagore says, &ldquo;Nature is the best teacher of human being&rdquo;.</p>
          <p>Our educational model will be&ndash;all an international school with an Indian mind, and Indian heart and an Indian soul. All these inspire us to do continus our best, in preparing children for the 21st century. I warmly invite you to explore GDIS as we will re-dedicate ourselves every day, to import the very best education to young minds.</p>
          <div className="border-t border-ink/15 pt-7"><p className="font-serif text-2xl text-ink">With warm regards,</p><p className="mt-4 font-display text-xl font-bold text-ink">Mr. Sultan Singh Yadav</p><p className="mt-1 text-sm font-semibold text-ink-soft">Retrd. Principal</p></div>
        </div>
      </div>
    </section>
    <section className="bg-paper py-8 sm:py-12">
      <div className="site-shell">
        <div className="grid items-stretch gap-10 lg:grid-cols-[1.35fr_.85fr] lg:gap-20">
          <div>
            <p className="section-label">A message from our principal</p>
            <h2 className="mt-8 font-display text-4xl font-bold leading-[.94] tracking-[-.07em] text-ink sm:text-5xl">Principal <em className="font-serif font-normal text-lime">Message.</em></h2>
            <p className="mt-10 max-w-3xl font-serif text-2xl leading-tight text-ink sm:text-3xl">My mission is nation building through education and beyond.</p>
            <p className="mt-10 font-serif text-2xl text-ink-soft">And</p>
            <blockquote className="mt-6 max-w-4xl font-serif text-3xl leading-[1.12] tracking-[-.045em] text-ink sm:text-4xl">“Success comes to those who work hard and stays with those, who don’t rest on the laurels of the past.”</blockquote>
          </div>
          <div className="relative min-h-[22rem] overflow-hidden bg-cream lg:min-h-0"><Image src="/assets/Principal.png" alt="Principal of G.D. International School" fill sizes="(min-width: 1024px) 35vw, 100vw" className="object-cover object-center" /></div>
        </div>
        <div className="mt-10 grid gap-8 border-t border-ink/15 pt-8 text-lg leading-relaxed text-ink-soft md:grid-cols-2 md:gap-16">
          <div className="space-y-6">
            <p>We are a school with a difference..! We value individualism, creativity and innovation and strive to nurture them in our students.</p>
            <p><strong className="text-ink">G.D. International School</strong> takes on the role of igniting and fueling the very fire of learning in the students to produce scholars who have the mental agility, physical vigor, strong value system and IT skills.</p>
            <p>Founded in 2020, the school is offering an environment of rich tutelage, harmonious learning and various facilities to help the learners broaden their horizons. The school&apos;s objective is to provide pedagogy which will empower the learners with analytical and logical skills.</p>
            <p>The infrastructure of the school is being constantly upgraded to attain the highest standards of excellence.</p>
          </div>
          <div className="space-y-6">
            <p>Our exemplary founder Chairman persistently emphasizes on commitment, innovation and hard work.</p>
            <p>Under his able direction and leadership, we at G.D. International School are most certainly poised for an enriched future.</p>
            <p>I look forward to yet awe-inspiring forthcoming years of perpetual exaltation and success.</p>
            <p>Teamwork is always the hallmark of <strong className="text-ink">G.D. International School</strong>. I am very sure through collaborative effort we can achieve more to benefit our students who are the future leaders of tomorrow.</p>
            <div className="pt-2 text-ink">
              <p className="font-serif text-2xl">With Best Wishes and Regards</p>
              <p className="mt-4 font-display text-lg font-bold">Mr. Akash Shukla</p>
              <p className="mt-1 text-sm font-semibold text-ink-soft">BCA, MCA, M.Sc, B.Ed, LLB, Ph.D (Pursuing)</p>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section className="bg-ink-deep py-10 text-ink sm:py-14">
      <div className="site-shell grid gap-5 lg:grid-cols-[1fr_.9fr] lg:gap-5">
        <article className="min-h-[31rem] border-[6px] border-[#bda372] bg-paper p-8 sm:p-12">
          <h2 className="section-heading !mt-0 text-[#8b713e]">Notice / Events</h2>
          <div className="mt-7 flex border-b border-[#d2b97e]">
            <span className="rounded-t-[2rem] bg-[#bda372] px-9 py-4 text-lg font-medium text-white">Notice</span>
            <span className="rounded-t-[2rem] bg-[#cdb68c] px-9 py-4 text-lg font-medium text-white">Event</span>
          </div>
          <div className="relative mt-10 border-l-4 border-ink/40 pl-10">
            <span className="absolute -left-[13px] top-0 h-6 w-6 rounded-full border-[5px] border-white bg-sky-400 shadow-[0_0_0_2px_#38bdf8]" aria-hidden="true" />
            <h3 className="text-2xl font-bold text-ink">HOLIDAY</h3>
            <p className="mt-6 max-w-xl text-lg leading-relaxed text-ink-soft"><strong className="text-ink">Holiday Notice</strong> &mdash; Respected parents, this is to inform you all that school will remain closed for all students on 4th September 2026.</p>
            <p className="mt-5 text-sm font-medium text-[#9a5db4]">Updated on: 2026-09-03 12:00:00</p>
          </div>
          <Link href="/student" className="mt-8 inline-flex rounded-r-full rounded-l-md bg-[#bda372] px-8 py-4 text-lg font-medium text-white transition hover:bg-[#a88b57]">View more <span className="ml-8" aria-hidden="true">↗</span></Link>
        </article>
        <article className="overflow-hidden rounded-tr-[6rem] border-[6px] border-[#bda372] bg-paper p-8 sm:p-10">
          <div className="relative aspect-[5/4] overflow-hidden"><Image src="/assets/Director.png" alt="G.D. International School community event" fill sizes="(min-width: 1024px) 42vw, 100vw" className="object-cover object-center" /></div>
          <div className="bg-[#edf3ee] px-7 py-6 text-center">
            <h3 className="font-display text-3xl font-bold tracking-[-.05em] text-[#6f5931]">GDIS COMMUNITY</h3>
            <p className="mt-2 text-lg font-medium text-ink-soft">Learning, joy and belonging</p>
          </div>
          <div className="mt-5 flex justify-center gap-2" aria-label="Community gallery"><span className="h-2.5 w-2.5 rounded-full bg-[#bda372]" /><span className="h-2.5 w-2.5 rounded-full bg-[#d9c28f]" /><span className="h-2.5 w-2.5 rounded-full bg-[#d9c28f]" /></div>
        </article>
      </div>
    </section>
    <section className="bg-paper py-8 sm:py-12"><div className="site-shell grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:gap-24"><div><p className="section-label">Our point of view</p><h2 className="section-heading">Education that feels <em>like possibility.</em></h2></div><div className="text-lg leading-relaxed text-ink-soft"><p className="text-xl text-ink">We believe the best education prepares children not only for examinations, but for a changing world.</p><p className="mt-5">At G.D. International School, modern learning meets timeless values. Learners are encouraged to ask better questions, think independently, collaborate generously and grow into capable, compassionate citizens.</p></div></div></section>
    <section className="bg-cream py-8 sm:py-12"><div className="site-shell"><p className="section-label">Explore GDIS</p><h2 className="section-heading mb-10">Every path starts with a <em>question.</em></h2><div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">{highlights.map(([title, body, href], index) => <Link key={title} href={href} className="group min-h-58 border border-ink/15 bg-white/45 p-7 transition hover:-translate-y-1 hover:bg-white"><span className="text-xs font-extrabold tracking-[0.14em] text-ink-soft">0{index + 1}</span><h3 className="mt-12 font-display text-2xl font-bold tracking-[-0.04em]">{title}</h3><p className="mt-3 leading-relaxed text-ink-soft">{body}</p><span className="mt-5 inline-block font-bold text-olive transition group-hover:translate-x-1">Explore →</span></Link>)}</div></div></section>
  </main>
}
