import { useState } from 'react'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="min-h-screen flex items-center justify-center bg-slate-900 p-6 relative overflow-hidden">
      {/* Decorative gradient background elements */}
      <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] rounded-full bg-primary/20 blur-[120px]"></div>
      <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] rounded-full bg-secondary/20 blur-[120px]"></div>

      <div className="glass max-w-lg w-full p-10 rounded-3xl z-10 text-center flex flex-col items-center gap-8 transform transition-all duration-500 hover:scale-[1.02]">
        <div className="space-y-4">
          <h1 className="text-5xl font-extrabold tracking-tight bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent pb-2">
            Tailwind V4 + React
          </h1>
          <p className="text-slate-400 text-lg">
            Experience the power of modern web development with blazing fast performance and stunning aesthetics.
          </p>
        </div>

        <div className="p-8 bg-slate-800/50 rounded-2xl w-full border border-slate-700/50">
          <button
            onClick={() => setCount((c) => c + 1)}
            className="group relative px-8 py-4 bg-primary hover:bg-primary/90 text-white font-bold rounded-xl transition-all duration-300 shadow-[0_0_20px_rgba(139,92,246,0.4)] hover:shadow-[0_0_30px_rgba(139,92,246,0.6)] overflow-hidden"
          >
            <span className="relative z-10 flex items-center gap-2 text-lg">
              Count: <span className="text-2xl">{count}</span>
            </span>
            <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-in-out"></div>
          </button>
          <p className="mt-6 text-sm text-slate-500">
            Click the button to test reactivity
          </p>
        </div>

        <div className="flex gap-4 text-sm font-medium">
          <a href="https://react.dev" target="_blank" rel="noreferrer" className="text-slate-400 hover:text-white transition-colors">
            React Docs
          </a>
          <span className="text-slate-600">•</span>
          <a href="https://tailwindcss.com/docs" target="_blank" rel="noreferrer" className="text-slate-400 hover:text-white transition-colors">
            Tailwind CSS
          </a>
        </div>
      </div>
    </div>
  )
}

export default App
