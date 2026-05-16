import Layout from '../../components/Layout'
import AffiliateButton from '../../components/AffiliateButton'

const CRITERIA = [
  { name: 'Output Quality (long-form)', writesonic: '9/10', jasper: '8/10', winner: 'writesonic' },
  { name: 'Output Quality (ad copy)', writesonic: '7/10', jasper: '8/10', winner: 'jasper' },
  { name: 'SEO Features', writesonic: '8/10', jasper: '6/10', winner: 'writesonic' },
  { name: 'Brand Voice', writesonic: '6/10', jasper: '9/10', winner: 'jasper' },
  { name: 'Price', writesonic: '9/10', jasper: '6/10', winner: 'writesonic' },
  { name: 'Ease of Use', writesonic: '8/10', jasper: '8/10', winner: 'tie' },
  { name: 'Free Trial', writesonic: '9/10 (10K words)', jasper: '7/10 (7 days)', winner: 'writesonic' },
]

export default function WritesonicVsJasper() {
  return (
    <Layout
      title="Writesonic vs Jasper 2026"
      description="Writesonic vs Jasper: which AI writing tool is better in 2026? We compare output quality, pricing, SEO features, and brand voice head-to-head."
    >
      <div className="max-w-2xl">
        <div className="text-sm text-gray-500 mb-2">Updated May 2026 · 5 min read</div>
        <h1 className="text-3xl font-bold text-gray-900 mb-4">
          Writesonic vs Jasper (2026): Which Is Actually Better?
        </h1>
        <p className="text-gray-700 mb-8">
          Both are solid AI writing tools. The choice comes down to one question: do you prioritize <strong>price and SEO</strong> (Writesonic) or <strong>brand consistency</strong> (Jasper)?
        </p>

        <div className="overflow-x-auto mb-8">
          <table className="w-full text-sm border-collapse">
            <thead>
              <tr className="bg-gray-50">
                <th className="text-left p-3 border border-gray-200">Criteria</th>
                <th className="p-3 border border-gray-200 text-blue-600">Writesonic</th>
                <th className="p-3 border border-gray-200">Jasper</th>
              </tr>
            </thead>
            <tbody>
              {CRITERIA.map((row, i) => (
                <tr key={row.name} className={i % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                  <td className="p-3 border border-gray-200">{row.name}</td>
                  <td className={`p-3 border border-gray-200 text-center ${row.winner === 'writesonic' ? 'font-bold text-blue-600' : ''}`}>{row.writesonic}</td>
                  <td className={`p-3 border border-gray-200 text-center ${row.winner === 'jasper' ? 'font-bold text-blue-600' : ''}`}>{row.jasper}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <h2 className="text-xl font-bold mt-8 mb-3">My Verdict</h2>
        <p className="text-gray-700 mb-4">
          <strong>Choose Writesonic if:</strong> You write long-form content, care about SEO, or are on a budget. At $16/mo vs $49/mo, Writesonic wins on value for most users.
        </p>
        <p className="text-gray-700 mb-6">
          <strong>Choose Jasper if:</strong> You have strict brand guidelines and need consistent tone across a team. The brand voice training is genuinely better.
        </p>

        <div className="grid grid-cols-2 gap-4">
          <div className="border rounded-lg p-4">
            <p className="font-semibold mb-2">Writesonic</p>
            <p className="text-sm text-gray-600 mb-3">From $16/mo · Free 10K words</p>
            <AffiliateButton href="WRITESONIC_AFFILIATE_URL" size="sm">Try Free →</AffiliateButton>
          </div>
          <div className="border rounded-lg p-4">
            <p className="font-semibold mb-2">Jasper</p>
            <p className="text-sm text-gray-600 mb-3">From $49/mo · 7-day trial</p>
            <AffiliateButton href="JASPER_AFFILIATE_URL" size="sm" variant="secondary">Try Free →</AffiliateButton>
          </div>
        </div>
      </div>
    </Layout>
  )
}
