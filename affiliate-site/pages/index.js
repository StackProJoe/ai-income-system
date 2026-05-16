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
    name: 'Copy.ai',
    score: 8.8,
    price: '$49/mo',
    bestFor: 'Marketing copy & GTM teams',
    affiliateUrl: 'COPYAI_AFFILIATE_URL',
  },
  {
    name: 'Jasper',
    score: 8.5,
    price: '$49/mo',
    bestFor: 'Brand-consistent content at scale',
    affiliateUrl: 'JASPER_AFFILIATE_URL',
  },
  {
    name: 'NeuronWriter',
    score: 8.3,
    price: '$23/mo',
    bestFor: 'SEO-optimized blog content',
    affiliateUrl: 'NEURONWRITER_AFFILIATE_URL',
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
          <strong>Quick Verdict:</strong> For most users, <strong>Writesonic</strong> offers the best value at $16/mo with the strongest long-form output. If you need a full GTM platform, <strong>Copy.ai</strong> is the enterprise choice.
        </p>
      </div>

      <ComparisonTable tools={TOOLS} />

      <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-6">Detailed Reviews</h2>

      <div className="grid gap-6">
        {[
          { name: 'Writesonic', href: '/reviews/writesonic', desc: 'Best overall value. Strong long-form output, built-in SEO tools, and the lowest price on this list.', score: 9.1 },
          { name: 'Copy.ai', href: '/reviews/copy-ai', desc: 'The GTM platform choice. Best for marketing teams that need workflows, not just a writing assistant.', score: 8.8 },
          { name: 'Jasper', href: '/reviews/jasper', desc: 'Best for brand voice. The only tool with serious brand training features for consistent output at scale.', score: 8.5 },
          { name: 'NeuronWriter', href: '/reviews/neuronwriter', desc: 'Best for SEO. Built around SERP analysis — if you write for search traffic, this is the tool.', score: 8.3 },
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
          <Link href="/vs/writesonic-vs-jasper" className="text-blue-600 hover:underline">Writesonic vs Jasper</Link>
          <Link href="/vs/copy-ai-vs-jasper" className="text-blue-600 hover:underline">Copy.ai vs Jasper</Link>
        </div>
      </div>
    </Layout>
  )
}
