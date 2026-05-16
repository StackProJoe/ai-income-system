import Layout from '../../components/Layout'
import AffiliateButton from '../../components/AffiliateButton'

export default function CopyAiVsJasper() {
  return (
    <Layout
      title="Copy.ai vs Jasper 2026"
      description="Copy.ai vs Jasper in 2026: which is better for marketing teams? We compare workflows, output quality, pricing, and team features."
    >
      <div className="max-w-2xl">
        <div className="text-sm text-gray-500 mb-2">Updated May 2026 · 5 min read</div>
        <h1 className="text-3xl font-bold text-gray-900 mb-4">
          Copy.ai vs Jasper (2026): Best for Marketing Teams?
        </h1>
        <p className="text-gray-700 mb-6">
          Both start at $49/mo. Both target marketing teams. But they&apos;re built for different things: Copy.ai is a workflow automation platform; Jasper is a brand voice writing tool.
        </p>

        <h2 className="text-xl font-bold mt-6 mb-3">The Core Difference</h2>
        <p className="text-gray-700 mb-4">
          Copy.ai built automated workflows that connect content generation to your GTM motions — think multi-step sequences where AI handles research, drafting, and personalization automatically. Jasper is focused on writing quality and brand consistency, not automation.
        </p>
        <p className="text-gray-700 mb-4">
          If your team needs automation and pipeline efficiency: Copy.ai. If your team needs consistent brand voice: Jasper.
        </p>

        <div className="overflow-x-auto mb-8">
          <table className="w-full text-sm border-collapse">
            <thead>
              <tr className="bg-gray-50">
                <th className="text-left p-3 border border-gray-200">Feature</th>
                <th className="p-3 border border-gray-200">Copy.ai</th>
                <th className="p-3 border border-gray-200">Jasper</th>
              </tr>
            </thead>
            <tbody>
              {[
                ['Workflow automation', '✓ Yes (core feature)', '✗ Limited'],
                ['Brand voice', '✓ Good', '✓ Excellent'],
                ['Short-form copy quality', '✓ Excellent', '✓ Good'],
                ['Long-form quality', '✓ Good', '✓ Good'],
                ['Team collaboration', '✓ Strong', '✓ Good'],
                ['Starting price', '$49/mo', '$49/mo'],
                ['Free tier', '2,000 words/mo', '7-day trial only'],
              ].map(([feature, copyai, jasper], i) => (
                <tr key={feature} className={i % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                  <td className="p-3 border border-gray-200">{feature}</td>
                  <td className="p-3 border border-gray-200 text-center text-sm">{copyai}</td>
                  <td className="p-3 border border-gray-200 text-center text-sm">{jasper}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <h2 className="text-xl font-bold mt-6 mb-3">Verdict</h2>
        <p className="text-gray-700 mb-4"><strong>Copy.ai</strong> wins for teams that want to automate their content pipeline.</p>
        <p className="text-gray-700 mb-6"><strong>Jasper</strong> wins for teams with strict brand requirements and a need for consistent output at scale.</p>

        <div className="grid grid-cols-2 gap-4">
          <div className="border rounded-lg p-4">
            <p className="font-semibold mb-2">Copy.ai</p>
            <p className="text-sm text-gray-600 mb-3">Free tier available</p>
            <AffiliateButton href="COPYAI_AFFILIATE_URL" size="sm">Try Free →</AffiliateButton>
          </div>
          <div className="border rounded-lg p-4">
            <p className="font-semibold mb-2">Jasper</p>
            <p className="text-sm text-gray-600 mb-3">7-day free trial</p>
            <AffiliateButton href="JASPER_AFFILIATE_URL" size="sm" variant="secondary">Try Free →</AffiliateButton>
          </div>
        </div>
      </div>
    </Layout>
  )
}
