import { ArrowRight, TrendingUp, Search, Calculator, Target, DollarSign, Globe as Globe2, CheckCircle2 } from 'lucide-react';

function App() {
  return (
    <div className="min-h-screen bg-white">
      <nav className="border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-2">
              <Globe2 className="w-8 h-8 text-blue-600" />
              <span className="text-xl font-semibold text-gray-900">GlobalPriceGap</span>
            </div>
            <button className="px-4 py-2 text-sm font-medium text-blue-600 hover:text-blue-700 transition-colors">
              Sign In
            </button>
          </div>
        </div>
      </nav>

      <section className="relative overflow-hidden bg-gradient-to-br from-blue-50 via-white to-emerald-50 pt-20 pb-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-gray-900 tracking-tight leading-tight mb-6">
              Find Amazon products cheaper in the US and sell them for more in India
            </h1>
            <p className="text-xl sm:text-2xl text-gray-600 mb-10 leading-relaxed">
              Automatically detect global price gaps across Amazon marketplaces.
            </p>
            <button className="inline-flex items-center px-8 py-4 text-lg font-semibold text-white bg-blue-600 rounded-lg hover:bg-blue-700 transition-all transform hover:scale-105 shadow-lg hover:shadow-xl">
              Join the Waitlist
              <ArrowRight className="ml-2 w-5 h-5" />
            </button>
            <p className="mt-4 text-sm text-gray-500">No credit card required • Free for early adopters</p>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gray-50 rounded-2xl p-8 shadow-sm border border-gray-200">
            <div className="aspect-video bg-gradient-to-br from-gray-100 to-gray-200 rounded-lg flex items-center justify-center">
              <div className="text-center">
                <TrendingUp className="w-16 h-16 text-gray-400 mx-auto mb-4" />
                <p className="text-gray-500 font-medium">Product Price Comparison Dashboard</p>
                <p className="text-sm text-gray-400 mt-2">Real-time data from US, India & UAE markets</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">How it works</h2>
            <p className="text-xl text-gray-600">Start finding profitable arbitrage opportunities in three simple steps</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white rounded-xl p-8 shadow-sm border border-gray-200 hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-6">
                <Search className="w-6 h-6 text-blue-600" />
              </div>
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">1. Search Products</h3>
              <p className="text-gray-600 leading-relaxed">
                Browse or search for products across Amazon US, India, and UAE marketplaces in real-time.
              </p>
            </div>

            <div className="bg-white rounded-xl p-8 shadow-sm border border-gray-200 hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 bg-emerald-100 rounded-lg flex items-center justify-center mb-6">
                <Calculator className="w-6 h-6 text-emerald-600" />
              </div>
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">2. Analyze Gaps</h3>
              <p className="text-gray-600 leading-relaxed">
                Our algorithm calculates potential profit margins, including shipping, taxes, and fees.
              </p>
            </div>

            <div className="bg-white rounded-xl p-8 shadow-sm border border-gray-200 hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 bg-violet-100 rounded-lg flex items-center justify-center mb-6">
                <Target className="w-6 h-6 text-violet-600" />
              </div>
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">3. Start Selling</h3>
              <p className="text-gray-600 leading-relaxed">
                Get actionable insights with our arbitrage score to make informed purchasing decisions.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
                Cross-marketplace comparison
              </h2>
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                Compare prices across multiple Amazon marketplaces instantly. See real-time price differences, shipping costs, and import duties all in one place.
              </p>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <CheckCircle2 className="w-6 h-6 text-emerald-500 mr-3 flex-shrink-0 mt-1" />
                  <span className="text-gray-700">Real-time price tracking across US, India, and UAE</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle2 className="w-6 h-6 text-emerald-500 mr-3 flex-shrink-0 mt-1" />
                  <span className="text-gray-700">Automatic currency conversion with live exchange rates</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle2 className="w-6 h-6 text-emerald-500 mr-3 flex-shrink-0 mt-1" />
                  <span className="text-gray-700">Historical price trends and market insights</span>
                </li>
              </ul>
            </div>
            <div className="bg-gradient-to-br from-blue-50 to-emerald-50 rounded-2xl p-8 border border-gray-200">
              <div className="bg-white rounded-lg p-6 shadow-sm space-y-4">
                <div className="flex items-center justify-between pb-4 border-b border-gray-200">
                  <span className="font-semibold text-gray-900">United States</span>
                  <span className="text-2xl font-bold text-gray-900">$49.99</span>
                </div>
                <div className="flex items-center justify-between pb-4 border-b border-gray-200">
                  <span className="font-semibold text-gray-900">India</span>
                  <span className="text-2xl font-bold text-emerald-600">₹6,499</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="font-semibold text-gray-900">UAE</span>
                  <span className="text-2xl font-bold text-emerald-600">AED 289</span>
                </div>
                <div className="mt-6 pt-6 border-t border-gray-200">
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-medium text-gray-600">Potential Profit</span>
                    <span className="text-xl font-bold text-emerald-600">+34%</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1 bg-white rounded-2xl p-8 shadow-sm border border-gray-200">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Profit Calculator</h3>
              <div className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">US Price</label>
                  <div className="flex items-center bg-gray-50 rounded-lg px-4 py-3 border border-gray-200">
                    <DollarSign className="w-5 h-5 text-gray-400 mr-2" />
                    <span className="text-lg text-gray-900">49.99</span>
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Shipping & Import Duties</label>
                  <div className="flex items-center bg-gray-50 rounded-lg px-4 py-3 border border-gray-200">
                    <DollarSign className="w-5 h-5 text-gray-400 mr-2" />
                    <span className="text-lg text-gray-900">12.50</span>
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">India Selling Price</label>
                  <div className="flex items-center bg-gray-50 rounded-lg px-4 py-3 border border-gray-200">
                    <span className="text-lg text-gray-900 ml-7">₹6,499</span>
                  </div>
                </div>
                <div className="pt-6 border-t border-gray-200">
                  <div className="flex items-center justify-between">
                    <span className="text-lg font-semibold text-gray-900">Net Profit</span>
                    <span className="text-3xl font-bold text-emerald-600">$15.23</span>
                  </div>
                  <div className="mt-2 flex items-center justify-between">
                    <span className="text-sm text-gray-600">ROI</span>
                    <span className="text-lg font-semibold text-emerald-600">24.4%</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="order-1 lg:order-2">
              <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
                Profit calculator
              </h2>
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                Calculate your potential profits instantly with our built-in calculator. Factor in all costs including shipping, import duties, Amazon fees, and currency conversion.
              </p>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <CheckCircle2 className="w-6 h-6 text-emerald-500 mr-3 flex-shrink-0 mt-1" />
                  <span className="text-gray-700">Accurate fee calculations for each marketplace</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle2 className="w-6 h-6 text-emerald-500 mr-3 flex-shrink-0 mt-1" />
                  <span className="text-gray-700">Include shipping, customs, and handling costs</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle2 className="w-6 h-6 text-emerald-500 mr-3 flex-shrink-0 mt-1" />
                  <span className="text-gray-700">Real-time ROI and profit margin insights</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
                Arbitrage score
              </h2>
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                Every product gets a unique arbitrage score based on profitability, competition, demand, and risk factors. Focus on the opportunities that matter most.
              </p>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <CheckCircle2 className="w-6 h-6 text-emerald-500 mr-3 flex-shrink-0 mt-1" />
                  <span className="text-gray-700">AI-powered scoring algorithm</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle2 className="w-6 h-6 text-emerald-500 mr-3 flex-shrink-0 mt-1" />
                  <span className="text-gray-700">Filter by score to find top opportunities</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle2 className="w-6 h-6 text-emerald-500 mr-3 flex-shrink-0 mt-1" />
                  <span className="text-gray-700">Updated daily based on market conditions</span>
                </li>
              </ul>
            </div>
            <div className="bg-gradient-to-br from-blue-50 to-emerald-50 rounded-2xl p-8 border border-gray-200">
              <div className="space-y-4">
                <div className="bg-white rounded-lg p-6 shadow-sm border-l-4 border-emerald-500">
                  <div className="flex items-center justify-between mb-2">
                    <span className="font-semibold text-gray-900">Wireless Earbuds Pro</span>
                    <span className="text-2xl font-bold text-emerald-600">95</span>
                  </div>
                  <div className="flex items-center text-sm text-gray-600">
                    <span className="px-2 py-1 bg-emerald-100 text-emerald-700 rounded font-medium">Excellent</span>
                  </div>
                </div>
                <div className="bg-white rounded-lg p-6 shadow-sm border-l-4 border-blue-500">
                  <div className="flex items-center justify-between mb-2">
                    <span className="font-semibold text-gray-900">Smart Watch Series 5</span>
                    <span className="text-2xl font-bold text-blue-600">82</span>
                  </div>
                  <div className="flex items-center text-sm text-gray-600">
                    <span className="px-2 py-1 bg-blue-100 text-blue-700 rounded font-medium">Good</span>
                  </div>
                </div>
                <div className="bg-white rounded-lg p-6 shadow-sm border-l-4 border-amber-500">
                  <div className="flex items-center justify-between mb-2">
                    <span className="font-semibold text-gray-900">Gaming Keyboard RGB</span>
                    <span className="text-2xl font-bold text-amber-600">68</span>
                  </div>
                  <div className="flex items-center text-sm text-gray-600">
                    <span className="px-2 py-1 bg-amber-100 text-amber-700 rounded font-medium">Fair</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 bg-gradient-to-br from-blue-600 to-emerald-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-6">
            Ready to find your next profitable product?
          </h2>
          <p className="text-xl text-blue-100 mb-10">
            Join thousands of sellers already using GlobalPriceGap to scale their Amazon business.
          </p>
          <button className="inline-flex items-center px-8 py-4 text-lg font-semibold text-blue-600 bg-white rounded-lg hover:bg-gray-50 transition-all transform hover:scale-105 shadow-xl">
            Join the Waitlist
            <ArrowRight className="ml-2 w-5 h-5" />
          </button>
        </div>
      </section>

      <footer className="bg-gray-50 border-t border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center space-x-2 mb-4 md:mb-0">
              <Globe2 className="w-6 h-6 text-blue-600" />
              <span className="text-lg font-semibold text-gray-900">GlobalPriceGap</span>
            </div>
            <p className="text-gray-600 text-sm">
              © 2026 GlobalPriceGap. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
