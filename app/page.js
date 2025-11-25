'use client';

export default function Home() {
  return (
    <>
      {/* Hero */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        <div className="absolute inset-0 bg-gradient-to-r from-indigo-600/20 to-purple-800/20 blur-3xl animate-pulse"></div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Side - Text */}
          <div className="text-center lg:text-left opacity-0 translate-y-10 animate-fade-in">
            <div className="mb-8">
              <span className="text-3xl font-bold tracking-wider text-indigo-400">OC</span>
              <h1 className="text-6xl md:text-8xl font-black bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400 bg-clip-text text-transparent mt-4">
                OptiCore
              </h1>
              <p className="text-2xl md:text-4xl text-gray-300 mt-6 font-light">
                AI-Powered DevOps Growth Solutions
              </p>
            </div>

            <h2 className="text-5xl md:text-7xl font-black mt-12 leading-tight">
              Accelerate Your <span className="text-indigo-400">DevOps Growth</span><br />
              with <span className="text-purple-400">AI Precision</span>
            </h2>

            <p className="text-xl md:text-2xl text-gray-400 mt-8 max-w-2xl">
              Transform your DevOps business with intelligent lead generation, personalized video campaigns, and AI-powered automation. Access 19+ million high-quality records and scale like never before.
            </p>

            <div className="flex flex-wrap justify-center lg:justify-start gap-8 md:gap-16 mt-16 text-center">
              <div><div className="text-4xl md:text-5xl font-black text-indigo-400">19M+</div><div className="text-gray-400">Records</div></div>
              <div><div className="text-4xl md:text-5xl font-black text-purple-400">97%</div><div className="text-gray-400">Success Rate</div></div>
              <div><div className="text-4xl md:text-5xl font-black text-pink-400">40K+</div><div className="text-gray-400">Organizations</div></div>
            </div>

            <button className="mt-16 px-12 py-6 bg-gradient-to-r from-indigo-500 to-purple-600 text-white text-xl font-bold rounded-full shadow-2xl hover:scale-110 transition-all duration-300">
              Get Started Now →
            </button>
          </div>

          {/* Right Side - Code Block */}
          <div className="opacity-0 scale-90 animate-fade-in-delay">
            <div className="bg-black/40 backdrop-blur-2xl rounded-3xl p-10 border border-purple-500/30 shadow-2xl">
              <pre className="text-cyan-400 text-sm md:text-base font-mono leading-relaxed overflow-x-auto">
{`name: "Accelerated CI/CD Pipeline"

on: [push, pull_request]

jobs:
  opticore_optimize:
    runs-on: opticore-runners
    steps:
      - uses: opticore/pipeline-accelerator@v3
      - name: "AI-Powered Analytics"
        with:
          mode: "intelligent"`}
              </pre>
            </div>
          </div>
        </div>
      </section>

      <style jsx global>{`
        @keyframes fade-in { from { opacity: 0; transform: translateY(40px); } to { opacity: 1; transform: translateY(0); } }
        @keyframes fade-in-delay { from { opacity: 0; transform: scale(0.9); } to { opacity: 1; transform: scale(1); } }
        .animate-fade-in { animation: fade-in 1s ease-out forwards; }
        .animate-fade-in-delay { animation: fade-in-delay 1.2s ease-out 0.4s forwards; }
      `}</style>
    </>
  );
}
