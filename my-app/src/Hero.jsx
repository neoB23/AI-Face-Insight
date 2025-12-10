import React from 'react';

function Hero() {
  const STREAM_URL = 'http://127.0.0.1:5000/video'; // Your working Flask stream URL

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center p-4">
      
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
            bg-indigo-600 hover:bg-indigo-700 
            shadow-lg shadow-indigo-300/50 
            transform transition duration-300 ease-in-out
            active:scale-[0.98] focus:outline-none focus:ring-4 focus:ring-indigo-300
          "
        >
          Start Camera
        </button>
        
        {/* Footnote */}
        {/* <p className="text-xs text-gray-400 text-center mt-4">
            Currently streaming from: <code>{STREAM_URL}</code>
        </p> */}
      </div>
    </div>
  );
}

export default Hero;