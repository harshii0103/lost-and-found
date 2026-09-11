import { Link, useNavigate } from 'react-router-dom'
import { Share2, ArrowLeft, ShoppingBag, Sparkles, ShieldCheck, Search, Flag, ImageIcon } from 'lucide-react'

function MatchResult() {
  const navigate = useNavigate()
  const score = 92
  const circumference = 2 * Math.PI * 54
  const offset = circumference - (score / 100) * circumference

  return (
    <div className="min-h-screen bg-white py-6 md:py-10 px-4 md:px-6 font-['Neue_Montreal',_sans-serif]">
      <div className="max-w-5xl mx-auto">

        {/* Header */}
        <div className="flex flex-wrap justify-between items-center gap-3 mb-8">
          <Link to="/" className="flex items-center gap-2 text-gray-500 text-sm hover:text-[#FF6D29] transition-colors">
            <ArrowLeft size={16} /> Back to Home
          </Link>
          <button
            onClick={async () => {
              const shareData = {
                title: '404 Not Lost — Match Found',
                text: "We've found a potential match for your item!",
                url: window.location.href,
              }
              if (navigator.share) {
                try {
                  await navigator.share(shareData)
                } catch (err) {
                  // user cancelled share — no action needed
                }
              } else {
                await navigator.clipboard.writeText(window.location.href)
                alert('Link copied to clipboard!')
              }
            }}
            className="flex items-center gap-2 text-[#FF6D29] border border-[#FF6D29]/40 px-4 py-2 rounded-lg text-sm hover:bg-orange-50 transition-colors"
          >
            <Share2 size={16} /> Share Result
          </button>
        </div>

        {/* Hero score section */}
        <div className="relative bg-gradient-to-br from-orange-50 to-white border border-[#FF6D29]/15 rounded-2xl px-6 md:px-10 py-10 mb-8 overflow-hidden">
          <div className="absolute -top-10 -right-10 w-48 h-48 rounded-full bg-[#FF6D29] opacity-[0.06] blur-3xl pointer-events-none"></div>

          <div className="relative flex items-center gap-2 justify-center md:justify-start mb-2">
            <Sparkles className="text-[#FF6D29]" size={18} />
            <span className="text-[#FF6D29] text-xs font-semibold uppercase tracking-wide">AI Match Found</span>
          </div>
          <h1 className="relative text-2xl md:text-3xl font-bold text-gray-900 text-center md:text-left mb-1">
            We've found a <span className="text-[#FF6D29]">potential match!</span>
          </h1>
          <p className="relative text-gray-500 text-center md:text-left mb-8 max-w-lg">
            Our AI compared your item with reported found items using image, location, category & time.
          </p>

          <div className="relative flex flex-col md:flex-row items-center gap-8 md:gap-12">
            {/* Circular progress */}
            <div className="relative w-36 h-36 shrink-0">
              <svg className="w-36 h-36 -rotate-90" viewBox="0 0 120 120">
                <circle cx="60" cy="60" r="54" fill="none" stroke="#E5E7EB" strokeWidth="10" />
                <circle
                  cx="60" cy="60" r="54" fill="none"
                  stroke="#22C55E" strokeWidth="10" strokeLinecap="round"
                  strokeDasharray={circumference}
                  strokeDashoffset={offset}
                />
              </svg>
              <div className="absolute inset-0 flex flex-col items-center justify-center">
                <span className="text-3xl font-bold text-gray-900">{score}%</span>
                <span className="text-[11px] text-green-600 font-semibold">Match Score</span>
              </div>
            </div>

            {/* Match bars */}
            <div className="flex-1 w-full bg-white rounded-xl border border-gray-100 shadow-sm p-5">
              <p className="font-bold text-green-600 mb-1">Highly Likely Match</p>
              <p className="text-gray-500 text-sm mb-4">This item matches closely with a found item.</p>
              <MatchBar label="Image Similarity" percent={95} />
              <MatchBar label="Location Proximity" percent={90} />
              <MatchBar label="Category Match" percent={100} />
              <MatchBar label="Time Similarity" percent={85} />
            </div>
          </div>

          <div className="relative mt-6 flex items-center gap-3 bg-green-50 border border-green-200 rounded-xl px-5 py-4">
            <ShieldCheck className="text-green-600 shrink-0" size={24} />
            <p className="text-sm text-green-700">
              <b>High confidence match!</b> Please review the details below and claim your item if it's yours.
            </p>
          </div>
        </div>

        {/* Comparison */}
        <div className="relative grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
          <ItemCard tag="Your Lost Item" tagColor="red" date="Reported Lost on 07/09/2025" category="Wallet" location="Library, Second Floor" datetime="07/09/2025, 12:30 PM" description="Black leather wallet with brown stripes. Contains ID cards and some cash." />

          {/* VS connector - desktop only */}
          <div className="hidden md:flex absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-10 w-12 h-12 rounded-full bg-white border-2 border-[#FF6D29]/30 items-center justify-center shadow-sm">
            <span className="text-[#FF6D29] font-bold text-xs">VS</span>
          </div>

          <ItemCard tag="Matched Found Item" tagColor="green" date="Reported Found on 07/09/2025" category="Wallet" location="Library, Second Floor" datetime="07/09/2025, 01:15 PM" description="Found this wallet near the reading area. Has cards and some cash inside." />
        </div>

        {/* Not your item banner */}
        <div className="bg-orange-50 border border-[#FF6D29]/20 rounded-xl px-6 py-4 flex flex-col md:flex-row justify-between items-start md:items-center gap-3 mb-6">
          <p className="text-gray-600 text-sm">Not your item? No problem. You can continue searching or wait for a better match.</p>
          <button
            onClick={() => alert("Thanks for the feedback! We've flagged this match for review and will keep looking for a better one.")}
            className="flex items-center gap-2 text-[#FF6D29] border border-[#FF6D29]/40 px-4 py-2 rounded-lg text-sm whitespace-nowrap hover:bg-orange-100 transition-colors"
          >
            <Flag size={14} /> Report Incorrect Match
          </button>
        </div>

        {/* Claim buttons */}
        <div className="bg-white border border-gray-100 rounded-xl shadow-sm px-6 py-5 flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
          <div>
            <p className="font-semibold text-gray-900">Ready to claim your item?</p>
            <p className="text-gray-500 text-sm">If you're sure this is your item, send a claim request to the finder.</p>
          </div>
          <div className="flex flex-col sm:flex-row gap-3 w-full md:w-auto">
            <button onClick={() => { alert('Claim request sent! The finder will be notified.'); navigate('/') }} className="bg-green-600 text-white px-5 py-3 rounded-lg font-semibold flex items-center justify-center gap-2 hover:bg-green-700 transition-colors">
              <ShoppingBag size={16} /> Claim This Item
            </button>
            <button onClick={() => navigate('/')} className="border border-gray-300 text-gray-700 px-5 py-3 rounded-lg font-semibold flex items-center justify-center gap-2 hover:bg-gray-50 transition-colors">
              <Search size={16} /> Keep Searching
            </button>
          </div>
        </div>

      </div>
    </div>
  )
}

function MatchBar({ label, percent }) {
  return (
    <div className="mb-2 last:mb-0">
      <div className="flex justify-between text-xs text-gray-500 mb-1">
        <span>{label}</span>
        <span className="text-[#FF6D29] font-semibold">{percent}%</span>
      </div>
      <div className="w-full bg-gray-100 rounded-full h-2">
        <div className="bg-[#FF6D29] h-2 rounded-full transition-all" style={{ width: `${percent}%` }}></div>
      </div>
    </div>
  )
}

function ItemCard({ tag, tagColor, date, category, location, datetime, description }) {
  const bg = tagColor === "red" ? "bg-red-50" : "bg-green-50"
  const border = tagColor === "red" ? "border-red-100" : "border-green-100"
  const tagBg = tagColor === "red" ? "bg-red-100 text-red-600" : "bg-green-100 text-green-600"
  return (
    <div className={`${bg} border ${border} rounded-xl p-5`}>
      <span className={`${tagBg} text-xs font-semibold px-3 py-1 rounded-full`}>{tag}</span>
      <div className="bg-white border border-gray-100 h-40 rounded-lg my-4 flex flex-col items-center justify-center gap-2 text-gray-300">
        <ImageIcon size={28} />
        <span className="text-xs text-gray-400">Item Photo</span>
      </div>
      <p className="text-gray-400 text-xs mb-2">{date}</p>
      <p className="text-sm text-gray-700"><b>Category:</b> {category}</p>
      <p className="text-sm text-gray-700"><b>Location:</b> {location}</p>
      <p className="text-sm text-gray-700"><b>Date & Time:</b> {datetime}</p>
      <p className="text-sm text-gray-700 mt-1"><b>Description:</b> {description}</p>
    </div>
  )
}

export default MatchResult