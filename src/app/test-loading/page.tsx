"use client";

import React, { useState } from 'react';
import LoadingScreen from '../../components/LoadingScreen';

export default function TestLoadingPage() {
  const [showLoading, setShowLoading] = useState(false);

  const handleShowLoading = () => {
    setShowLoading(true);
    // Auto hide after 3 seconds
    setTimeout(() => setShowLoading(false), 3000);
  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">
      <div className="text-center">
        <h1 className="text-3xl font-bold mb-4">Loading Screen Test</h1>
        <button
          onClick={handleShowLoading}
          className="bg-blue-500 text-white px-6 py-3 rounded-lg hover:bg-blue-600 transition-colors"
        >
          Show Loading Screen
        </button>
        
        {showLoading && (
          <LoadingScreen 
            onLoadingComplete={() => setShowLoading(false)} 
          />
        )}
      </div>
    </div>
  );
}
