
import { Link } from "react-router";


const ErrorHandel = () => {
  return (
    <div className="min-h-screen bg-slate-950 flex items-center justify-center px-6">
      <div className="max-w-xl w-full text-center">

        {/* Error Number */}
        <h1 className="text-[120px] sm:text-[160px] font-black leading-none 
                       bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 
                       bg-clip-text text-transparent">
          404
        </h1>

        {/* Title */}
        <h2 className="text-3xl sm:text-4xl font-bold text-white mt-4">
          Page Not Found
        </h2>

        {/* Description */}
        <p className="text-slate-400 mt-4 text-base sm:text-lg leading-relaxed">
          Sorry, the page you're looking for doesn't exist or may have been
          moved to another location.
        </p>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">

          <Link
            to="/"
            className="px-6 py-3 rounded-xl bg-white text-slate-900 
                       font-semibold hover:bg-slate-200 
                       transition duration-300"
          >
            ← Back to Home
          </Link>

          <button
            onClick={() => window.history.back()}
            className="px-6 py-3 rounded-xl border border-slate-700 
                       text-white font-semibold hover:bg-slate-800 
                       transition duration-300"
          >
            Go Back
          </button>

        </div>

        {/* Small footer */}
        <p className="text-slate-600 text-sm mt-10">
          Error Code: 404
        </p>

      </div>
    </div>
  );
};

export default ErrorHandel;