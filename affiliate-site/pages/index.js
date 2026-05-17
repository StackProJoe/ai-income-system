import Layout from '../components/Layout'
import ComparisonTable from '../components/ComparisonTable'
import AffiliateButton from '../components/AffiliateButton'
import Link from 'next/link'

const TOOLS = [
  {
    name: 'Writesonic',
    score: 9.1,
    price: '$16/mo',
    bestFor: 'Long-form content + SEO',
    affiliateUrl: 'WRITESONIC_AFFILIATE_URL',
  },
  {
    name: 'Rytr',
    score: 8.4,
    price: 'Free — $29/mo',
    bestFor: 'Budget-friendly short-form copy',
    affiliateUrl: 'https://rytr.me/?via=joel-gomez',
  },
  {
    name: 'Frase',
    score: 8.2,
    price: 'From $15/mo',
    bestFor: 'SEO content briefs & research',
    affiliateUrl: 'FRASE_AFFILIATE_URL',
  },
  {
    name: 'NeuronWriter',
    score: 8.3,
    price: '$23/mo',
    bestFor: 'SEO-optimized blog content',
    affiliateUrl: 'https://app.neuronwriter.com/ar/5657f5a1766f24898fcc6628850a1966',
  },
]

export default function Home() {
  return (
    <Layout>
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">
          Best AI Writing Tools in 2026
        </h1>
        <p className="text-xl text-gray-600 max-w-2xl mx-auto">
          I tested the top AI writing tools so you don&apos;t have to waste money on the wrong one. Here&apos;s what actually works.
        </p>
      </div>

      <div className="bg-blue-50 border border-blue-200 rounded-lg p-6 mb-8">
        <p className="text-sm text-blue-800">
          <strong>Quick Verdict:</strong> For most users, <strong>Writesonic</strong> offers the best value at $16/mo with strong long-form output and built-in SEO tools. On a tight budget, <strong>Rytr&apos;s free plan</strong> covers short-form content with no credit card required.
        </p>
      </div>

      <ComparisonTable tools={TOOLS} />

      <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-6">Detailed Reviews</h2>

      <div className="grid gap-6">
        {[
          { name: 'Writesonic', href: '/reviews/writesonic', desc: 'Best overall value. Strong long-form output, built-in SEO tools, and the most competitive price on this list.', score: 9.1 },
          { name: 'Rytr', href: '/reviews/rytr', desc: 'Best budget pick. Free plan available, strong short-form copy, and the cheapest paid plan at $9/mo.', score: 8.4 },
          { name: 'NeuronWriter', href: '/reviews/neuronwriter', desc: 'Best for SEO. Built around SERP analysis — if you write for search traffic, this is the tool.', score: 8.3 },
          { name: 'Frase', href: '/reviews/frase', desc: 'Best for content briefs. SERP research built into the writing workflow for content that ranks.', score: 8.2 },
        ].map(tool => (
          <Link key={tool.name} href={tool.href} className="block border border-gray-200 rounded-lg p-5 hover:border-blue-300 transition-colors">
            <div className="flex items-start justify-between">
              <div>
                <h3 className="font-bold text-gray-900 text-lg">{tool.name}</h3>
                <p className="text-gray-600 mt-1">{tool.desc}</p>
              </div>
              <span className="text-2xl font-bold text-blue-600 ml-4">{tool.score}</span>
            </div>
          </Link>
        ))}
      </div>

      <div className="mt-12 border-t pt-8">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">Comparisons</h2>
        <div className="flex gap-4 flex-wrap">
          <Link href="/vs/writesonic-vs-rytr" className="text-blue-600 hover:underline">Writesonic vs Rytr</Link>
          <Link href="/vs/rytr-vs-frase" className="text-blue-600 hover:underline">Rytr vs Frase</Link>
        </div>
      </div>
    </Layout>
  )
}
