import React from 'react';

function Hero() {
  const STREAM_URL = 'http://127.0.0.1:5000/video'; // Your working Flask stream URL

  return (
    <div className="min-h-screen bg-gradient-to-r from-indigo-50 via-pink-50 to-indigo-50 flex items-center justify-center p-4">
      
      {/* Main Content Card: Responsive width and elevation */}
      <div className="w-full max-w-xl bg-white rounded-3xl shadow-2xl p-6 md:p-8 lg:p-10 border-t-8 border-indigo-500">
        
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-4xl md:text-5xl font-extrabold text-indigo-700 leading-tight tracking-tight">
            AI Insight <span className="text-pink-500">Analyzer</span>
          </h1>
          <h2 className="text-xl text-gray-500 mt-2 font-light">
            Real-Time Age & Gender Prediction
          </h2>
        </div>

        {/* Live Camera Feed Area (Fully Responsive) */}
        <div className="relative w-full">
          {/* Aspect Ratio Wrapper (4:3 aspect ratio for video feed) */}
          {/* This trick maintains the ratio regardless of screen width */}
          <div className="relative overflow-hidden rounded-xl shadow-xl border-4 border-pink-500" style={{ paddingBottom: '75%' /* 480/640 = 0.75 */ }}> 
            <img
              src={STREAM_URL}
              alt="YOLOv8 Live Stream"
              // Ensure the image covers the entire 4:3 container
              className="absolute top-0 left-0 w-full h-full object-cover"
            />
          </div>
        </div>
        
        {/* Action Button */}
        <button 
          className="
            w-full mt-8 py-3 rounded-xl font-bold text-lg text-white 
            bg-gradient-to-r from-indigo-600 to-pink-600 hover:from-indigo-700 hover:to-pink-700 
            shadow-lg shadow-indigo-300/50 
            transform transition duration-300 ease-in-out
            active:scale-[0.98] focus:outline-none focus:ring-4 focus:ring-indigo-300
            flex items-center justify-center gap-2
          "
        >
          <svg className="w-6 h-6 animate-pulse" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M4 6h16M4 18h16M4 6v12" />
          </svg>
          Start Camera
        </button>
        
        {/* Divider */}
        <div className="my-8 flex items-center justify-center">
          <span className="w-1/4 border-t border-indigo-200"></span>
          <span className="mx-2 text-xs text-pink-400 font-semibold bg-pink-50 px-2 py-1 rounded-full shadow">Live Stream Info</span>
          <span className="w-1/4 border-t border-indigo-200"></span>
        </div>
        {/* Footnote */}
        <div className="flex items-center justify-center gap-2 text-xs text-gray-500 text-center mt-4">
          <svg className="w-4 h-4 text-pink-400" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3" />
            <circle cx="12" cy="12" r="10" />
          </svg>
          <span>Currently streaming from:</span>
          <code className="bg-gray-100 px-2 py-1 rounded text-indigo-600 font-mono">{STREAM_URL}</code>
        </div>
      </div>
    </div>
  );
}

export default Hero;