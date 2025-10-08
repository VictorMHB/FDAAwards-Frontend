import { useState } from 'react';
import Header from './components/Header';

function App() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Announcement Banners */}
      <div className="bg-secondary/20 text-white text-center py-2 text-sm font-title">
        • NOMINEES COMING MID NOVEMBER •
      </div>
      <div className="bg-gradient-to-r from-primary to-red-600 text-white text-center py-1 text-sm font-title">
        65 DAYS UNTIL LIVE SHOW
      </div>

      {/* Main Hero Section */}
      <main className="relative min-h-screen bg-background">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-20 left-10 w-32 h-32 border border-secondary/30 rotate-45"></div>
          <div className="absolute top-40 right-20 w-24 h-24 border border-secondary/30 rotate-12"></div>
          <div className="absolute bottom-40 left-1/4 w-16 h-16 border border-secondary/30 rotate-45"></div>
        </div>

        <div className="relative z-10 flex items-center justify-between min-h-screen px-8 md:px-32 py-20">
          {/* Left Side - Trophy */}
          <div className="flex-1 flex justify-center">
            <div className="w-96 h-96 relative">
              {/* Silver Trophy */}
              <div className="absolute inset-0 bg-gradient-to-br from-gray-300 to-gray-500 rounded-lg transform rotate-12 shadow-2xl">
                <div className="absolute top-8 left-8 w-8 h-8 bg-gray-300 rounded-full"></div>
                <div className="absolute top-16 left-4 w-4 h-4 bg-gray-300 rounded-full"></div>
                <div className="absolute top-24 left-12 w-6 h-6 bg-gray-300 rounded-full"></div>
                <div className="absolute bottom-8 right-8 w-12 h-12 bg-gray-300 rounded-full"></div>
                <div className="absolute bottom-16 right-4 w-6 h-6 bg-gray-300 rounded-full"></div>
              </div>
            </div>
          </div>

          {/* Right Side - Event Details */}
          <div className="flex-1 text-white">
            <div className="flex items-center gap-4 mb-8">
              <div className="w-12 h-12 bg-white rounded-sm flex items-center justify-center">
                <div className="w-8 h-8 bg-primary rounded-sm"></div>
              </div>
              <div>
                <h1 className="text-6xl font-title font-bold leading-tight">
                  THE<br />
                  <span className="text-7xl">FDA</span><br />
                  <span className="text-6xl">AWARDS</span>
                </h1>
              </div>
            </div>
            
            <div className="mb-8">
              <h2 className="text-5xl font-title font-bold mb-4">DECEMBER 11</h2>
              <p className="text-xl font-title">PEACOCK THEATER, LOS ANGELES</p>
            </div>

            <button className="bg-primary hover:bg-red-600 text-white px-8 py-4 rounded-lg font-title text-lg transition-all duration-300 transform hover:scale-105">
              ADD EVENT TO CALENDAR
            </button>
          </div>
        </div>
      </main>

      {/* News Section */}
      <section className="bg-background py-20 px-8 md:px-32">
        <div className="max-w-7xl mx-auto">
          {/* News Header */}
          <div className="flex items-center justify-between mb-12">
            <h2 className="text-6xl font-title font-bold text-background">NEWS</h2>
            <button className="bg-primary hover:bg-red-600 text-background px-6 py-3 rounded-lg font-title text-lg transition-all duration-300">
              VIEW ALL
            </button>
          </div>

          {/* News Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Card 1 - Awards Ceremony */}
            <div className="bg-background border border-secondary/20 rounded-lg overflow-hidden hover:transform hover:scale-105 transition-all duration-300">
              <div className="h-64 bg-gradient-to-br from-primary/20 to-red-600/20 flex items-center justify-center relative">
                <div className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-br from-gray-300 to-gray-500 rounded-full mx-auto mb-4 flex items-center justify-center">
                    <span className="text-2xl">🏆</span>
                  </div>
                  <h3 className="text-2xl font-title font-bold text-background mb-2">GAME OF THE YEAR</h3>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-title font-bold text-background mb-2">FDA RETURNS DECEMBER 11, 2025</h3>
                <p className="text-secondary font-text">The biggest awards ceremony of the year is coming back with more surprises and recognition for the best in the industry.</p>
              </div>
            </div>

            {/* Card 2 - Statistics */}
            <div className="bg-gradient-to-br from-primary/10 to-red-600/10 border border-secondary/20 rounded-lg p-8 hover:transform hover:scale-105 transition-all duration-300">
              <div className="text-center">
                <h3 className="text-4xl font-title font-bold text-primary mb-4">THE BIGGEST FDA IN HISTORY</h3>
                <h4 className="text-3xl font-title font-bold text-primary mb-4">154 MILLION LIVESTREAMS</h4>
                <p className="text-xl font-title text-background">FDA SHATTERS VIEWERSHIP RECORDS: 154 MILLION LIVESTREAMS</p>
              </div>
            </div>

            {/* Card 3 - Game Changer */}
            <div className="bg-background border border-secondary/20 rounded-lg overflow-hidden hover:transform hover:scale-105 transition-all duration-300">
              <div className="h-64 bg-gradient-to-br from-secondary/20 to-primary/20 flex items-center justify-center relative">
                <div className="text-center">
                  <div className="w-20 h-20 bg-gradient-to-br from-gray-300 to-gray-500 rounded-full mx-auto mb-4 flex items-center justify-center">
                    <span className="text-3xl">👤</span>
                  </div>
                  <div className="absolute top-4 right-4 bg-primary text-background px-2 py-1 rounded text-sm font-title">
                    #THEFDA
                  </div>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-title font-bold text-background mb-2">FDA GAME CHANGER: AMIR SATVAT</h3>
                <p className="text-secondary font-text">Meet the visionary behind the most innovative projects in the industry, changing the game one breakthrough at a time.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default App
