'use client'
import AdBanner from "@/component/AdBanner";
import Header from "@/component/Header";
import HeroSection from "@/component/HeroSection";
import MostSearched from "@/component/MostSearched";
import NewsSection from "@/component/NewsSection";
import UsedCarsNearby from "@/component/UsedCarsNearby";
import Image from "next/image";

export default function Home() {
  return (
    <div className="bg-gray-50 min-h-screen font-sans">
    <Header />
    <main>
      <HeroSection />
      <AdBanner />
      <MostSearched />
      <UsedCarsNearby />
      <NewsSection />
    </main>
    
    {/* A simple footer */}
    <footer className="bg-gray-800 text-white py-8 mt-8">
        <div className="container mx-auto px-4 text-center">
            <p>&copy; 2025 CarDekho Clone. All rights reserved.</p>
            <p className="text-sm text-gray-400 mt-2">This is a UI clone for educational purposes.</p>
        </div>
    </footer>
  </div>
  );
}
