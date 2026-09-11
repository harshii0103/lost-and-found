import { Link, useLocation } from 'react-router-dom'
import { CheckCircle2, Search, Home as HomeIcon } from 'lucide-react'

function ReportSubmitted() {
  const location = useLocation()
  const type = location.state?.type // 'lost' | 'found' | undefined

  const content = {
    lost: {
      title: 'Thanks for reporting your lost item!',
      message:
        "We've noted down everything you shared. Our AI will keep comparing it against found item reports in the background — check back anytime to see if we've spotted a match.",
      nextStep: (
        <>
          <span className="font-semibold text-gray-900">Next step:</span> Head to{' '}
          <span className="text-[#FF6D29] font-semibold">Check Status</span> anytime to
          see if your lost item has been found.
        </>
      ),
    },
    found: {
      title: 'Thanks for helping reunite this item!',
      message:
        "Your report has been added to our system. We'll match it against lost item reports so the owner can be notified — check back anytime to see the status.",
      nextStep: (
        <>
          <span className="font-semibold text-gray-900">Next step:</span> Head to{' '}
          <span className="text-[#FF6D29] font-semibold">Check Status</span> anytime to
          see if the owner has been matched.
        </>
      ),
    },
    default: {
      title: 'Thanks for submitting your report!',
      message:
        "Our AI is comparing your item with existing reports in the background. You can check back anytime to see if a match has been found.",
      nextStep: (
        <>
          <span className="font-semibold text-gray-900">Next step:</span> Head to{' '}
          <span className="text-[#FF6D29] font-semibold">Check Status</span> from the
          home page anytime to see your match results.
        </>
      ),
    },
  }

  const { title, message, nextStep } = content[type] || content.default

  return (
    <div className="min-h-screen bg-white flex items-center justify-center px-4 py-12 font-['Neue_Montreal',_sans-serif]">
      <div className="max-w-md w-full text-center">

        <div className="w-20 h-20 rounded-full bg-orange-50 border border-[#FF6D29]/30 flex items-center justify-center mx-auto mb-6">
          <CheckCircle2 className="text-[#FF6D29]" size={40} />
        </div>

        <h1 className="text-2xl md:text-3xl font-bold text-gray-900 mb-3">
          {title}
        </h1>
        <p className="text-gray-500 mb-8">
          {message}
        </p>

        <div className="bg-orange-50 border border-[#FF6D29]/20 rounded-xl p-5 mb-8 text-left">
          <p className="text-sm text-gray-700">{nextStep}</p>
        </div>

        <div className="flex flex-col sm:flex-row gap-3">
          <Link
            to="/"
            className="w-full flex items-center justify-center gap-2 border border-gray-300 text-gray-700 py-3 rounded-lg font-semibold hover:bg-gray-50 transition-colors"
          >
            <HomeIcon size={18} /> Back to Home
          </Link>
          <Link
            to="/match-result"
            className="w-full flex items-center justify-center gap-2 bg-[#FF6D29] text-white py-3 rounded-lg font-semibold hover:bg-[#e85f20] transition-colors"
          >
            <Search size={18} /> Check Status
          </Link>
        </div>

      </div>
    </div>
  )
}

export default ReportSubmitted