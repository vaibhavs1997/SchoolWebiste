import Link from 'next/link'

export default function NotFound() {
  return <main className="grid min-h-screen place-items-center bg-ink p-6 text-center text-white"><div><p className="eyebrow justify-center text-white/65">404</p><h1 className="mt-5 font-display text-5xl font-bold tracking-[-0.06em]">This page has wandered off.</h1><Link href="/" className="mt-8 inline-flex rounded-full bg-lime px-6 py-4 text-sm font-bold text-ink">Return home →</Link></div></main>
}
