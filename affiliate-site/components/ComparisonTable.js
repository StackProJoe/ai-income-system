export default function ComparisonTable({ tools }) {
  return (
    <div className="overflow-x-auto my-8">
      <table className="w-full text-sm border-collapse">
        <thead>
          <tr className="bg-gray-50">
            <th className="text-left p-3 border border-gray-200 font-semibold">Tool</th>
            <th className="text-left p-3 border border-gray-200 font-semibold">Score</th>
            <th className="text-left p-3 border border-gray-200 font-semibold">Starting Price</th>
            <th className="text-left p-3 border border-gray-200 font-semibold">Best For</th>
            <th className="p-3 border border-gray-200 font-semibold">Try It</th>
          </tr>
        </thead>
        <tbody>
          {tools.map((tool, i) => (
            <tr key={tool.name} className={i % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
              <td className="p-3 border border-gray-200 font-medium">{tool.name}</td>
              <td className="p-3 border border-gray-200">
                <span className="font-bold text-blue-600">{tool.score}/10</span>
              </td>
              <td className="p-3 border border-gray-200">{tool.price}</td>
              <td className="p-3 border border-gray-200 text-gray-600">{tool.bestFor}</td>
              <td className="p-3 border border-gray-200 text-center">
                <a
                  href={tool.affiliateUrl}
                  target="_blank"
                  rel="noopener noreferrer nofollow"
                  className="inline-block bg-blue-600 hover:bg-blue-700 text-white px-3 py-1 rounded text-xs font-semibold transition-colors"
                >
                  Try Free
                </a>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}
