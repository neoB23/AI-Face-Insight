import React from 'react';

function Hero() {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-pink-50">
      <h1 className="text-4xl font-bold text-pink-600 mb-4">Age & Gender Gues</h1>
      <h2 className="text-pink-800 text-lg mb-6">Live Camera Feed</h2>
      
      <div className="relative w-[640px] h-[480px]">
        <img
          src="http://127.0.0.1:5000/video"  // This points to your Flask stream
          alt="YOLOv8 Stream"
          className="rounded shadow-lg"
        />
      </div>
      
      <button className="bg-pink-500 hover:bg-pink-600 text-white font-semibold py-2 px-4 rounded shadow mt-6">
        Start Camera
      </button>
    </div>
  );
}

export default Hero;
