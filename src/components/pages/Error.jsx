

import { useNavigate } from 'react-router-dom';
import { Leaf, Home, ArrowLeft } from 'lucide-react';


const Error = () => {
  const navigate = useNavigate();
 return (
    <div className="min-h-screen bg-emerald-50/50 flex items-center justify-center p-4">
      <div className="max-w-2xl w-full text-center space-y-8 bg-white p-8 md:p-12 rounded-3xl shadow-sm border border-emerald-100">
        
        {/* Plant Animated Graphic / Badge */}
        <div className="relative w-32 h-32 mx-auto flex items-center justify-center bg-emerald-100 rounded-full text-emerald-600">
          <Leaf className="w-16 h-16 animate-bounce" />
          <span className="absolute -top-2 -right-2 bg-emerald-600 text-white text-xs font-bold px-3 py-1 rounded-full shadow-md">
            Lost in the garden
          </span>
        </div>

        {/* Text Content */}
        <div className="space-y-3">
          <h1 className="text-7xl font-extrabold text-emerald-950 tracking-tight">
            404
          </h1>
          <h2 className="text-2xl font-bold text-gray-800">
            Oops! This page has withered away.
          </h2>
          <p className="text-gray-600 max-w-md mx-auto text-sm md:text-base">
            The page you are looking for might have been pruned, renamed, or is temporarily unavailable. Let's get you back to fresh greens!
          </p>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
          <button
            onClick={() => navigate('/')}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 bg-emerald-600 hover:bg-emerald-700 text-white font-medium rounded-xl transition-all duration-200 shadow-md hover:shadow-lg cursor-pointer"
          >
            <Home className="w-4 h-4" />
            Back to Home
          </button>
          
          <button
            onClick={() => navigate(-1)}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 bg-white hover:bg-emerald-50 text-emerald-700 font-medium rounded-xl border border-emerald-200 transition-all duration-200 cursor-pointer"
          >
            <ArrowLeft className="w-4 h-4" />
            Go Back
          </button>
        </div>

      </div>
    </div>
  );
};

export default Error;
