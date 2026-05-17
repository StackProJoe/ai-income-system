import Head from 'next/head'
import Link from 'next/link'

export default function Layout({ children, title, description }) {
  const siteTitle = title
    ? `${title} | Best AI Writing Tools 2026`
    : 'Best AI Writing Tools 2026 — Honest Reviews & Comparisons'
  const metaDesc = description || 'Honest, in-depth reviews of the best AI writing tools. Compare Writesonic, Rytr, Frase, and NeuronWriter to find the right tool for your workflow.'

  return (
    <>
      <Head>
        <title>{siteTitle}</title>
        <meta name="description" content={metaDesc} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <div className="min-h-screen bg-white">
        <nav className="border-b border-gray-200 bg-white sticky top-0 z-10">
          <div className="max-w-4xl mx-auto px-4 py-4 flex items-center justify-between">
            <Link href="/" className="font-bold text-gray-900 text-lg">
              AIToolsReviewed
            </Link>
            <div className="flex gap-6 text-sm text-gray-600">
              <Link href="/reviews/writesonic" className="hover:text-gray-900">Writesonic</Link>
              <Link href="/reviews/rytr" className="hover:text-gray-900">Rytr</Link>
              <Link href="/reviews/frase" className="hover:text-gray-900">Frase</Link>
              <Link href="/reviews/neuronwriter" className="hover:text-gray-900">NeuronWriter</Link>
            </div>
          </div>
        </nav>
        <main className="max-w-4xl mx-auto px-4 py-8">
          {children}
        </main>
        <footer className="border-t border-gray-200 mt-16">
          <div className="max-w-4xl mx-auto px-4 py-8 text-sm text-gray-500">
            <p>This site contains affiliate links. We may earn a commission when you purchase through our links, at no extra cost to you.</p>
          </div>
        </footer>
      </div>
    </>
  )
}
