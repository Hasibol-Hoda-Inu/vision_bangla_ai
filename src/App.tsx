import React from 'react';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { ComicStoriesGrid } from './components/ComicStoriesGrid';
import { GovernorAgentVault } from './components/GovernorAgentVault';
import { TruthBeamCourtroom } from './components/TruthBeamCourtroom';
import { TrafficControllerMatrix } from './components/TrafficControllerMatrix';
import { SosRescueSimulator } from './components/SosRescueSimulator';
import { AskVisionBanglaMeme } from './components/AskVisionBanglaMeme';
import { Footer } from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen bg-[#050811] text-slate-100 flex flex-col selection:bg-amber-400 selection:text-slate-950">
      <Navbar />

      <main className="flex-1">
        <HeroSection />
        <ComicStoriesGrid />
        <GovernorAgentVault />
        <TruthBeamCourtroom />
        <TrafficControllerMatrix />
        <SosRescueSimulator />
        <AskVisionBanglaMeme />
      </main>

      <Footer />
    </div>
  );
}
