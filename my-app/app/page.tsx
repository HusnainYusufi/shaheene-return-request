"use client";

import { useState } from "react";

const requestTypes = [
  "EXCHANGE",
  "RETURN",
  "STORE_CREDIT",
  "REPAIR",
];

export default function Home() {
  const [score, setScore] = useState(0);
  const [targetPosition, setTargetPosition] = useState({
    top: 38,
    left: 45,
  });

  const handleCatch = () => {
    setScore((prev) => prev + 1);
    setTargetPosition({
      top: 10 + Math.random() * 70,
      left: 10 + Math.random() * 70,
    });
  };

  return (
    <div className="relative min-h-screen overflow-hidden bg-slate-950 text-white">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -left-32 top-20 h-96 w-96 rounded-full bg-fuchsia-500/30 blur-3xl animate-[float_12s_ease-in-out_infinite]" />
        <div className="absolute right-0 top-1/3 h-80 w-80 rounded-full bg-cyan-400/30 blur-3xl animate-[float_10s_ease-in-out_infinite]" />
        <div className="absolute bottom-0 left-1/3 h-96 w-96 rounded-full bg-blue-500/20 blur-3xl animate-[pulseGlow_8s_ease-in-out_infinite]" />
      </div>

      <div className="absolute inset-0">
        <div className="animated-cursor" />
        <div className="animated-cursor-ring" />
      </div>

      <main className="relative z-10 mx-auto flex w-full max-w-5xl flex-col gap-10 px-6 py-14">
        <section className="rounded-[32px] border border-white/10 bg-white/5 p-8 shadow-2xl backdrop-blur">
          <div className="flex flex-wrap items-center justify-between gap-6">
            <div>
              <p className="text-xs uppercase tracking-[0.4em] text-cyan-200">
                Customer Returns
              </p>
              <h1 className="mt-3 text-4xl font-semibold">Shaheene</h1>
              <p className="mt-3 max-w-2xl text-sm text-slate-300">
                Submit a streamlined request with a single form. Keep this page
                open while your payload auto-refreshes in the background.
              </p>
            </div>
            <div className="flex items-center gap-3 rounded-full border border-white/10 bg-white/10 px-4 py-2 text-xs text-slate-100">
              <span className="h-2 w-2 animate-pulse rounded-full bg-emerald-400" />
              Live queue syncing
            </div>
          </div>

          <form className="mt-8 grid gap-6">
            <label className="grid gap-3">
              <span className="text-sm font-medium text-slate-200">
                Order number
              </span>
              <input
                className="h-12 rounded-2xl border border-white/10 bg-slate-900/70 px-4 text-sm text-white placeholder:text-slate-500 shadow-inner focus:border-cyan-300 focus:outline-none focus:ring-2 focus:ring-cyan-300/30"
                placeholder="Enter order number"
                type="text"
              />
            </label>

            <div className="grid gap-6 md:grid-cols-2">
              <label className="grid gap-3">
                <span className="text-sm font-medium text-slate-200">
                  Request type
                </span>
                <select className="h-12 rounded-2xl border border-white/10 bg-slate-900/70 px-4 text-sm text-white shadow-inner focus:border-cyan-300 focus:outline-none focus:ring-2 focus:ring-cyan-300/30">
                  {requestTypes.map((type) => (
                    <option key={type} value={type}>
                      {type}
                    </option>
                  ))}
                </select>
              </label>

              <label className="grid gap-3">
                <span className="text-sm font-medium text-slate-200">
                  Reason <span className="text-rose-300">*</span>
                </span>
                <input
                  required
                  className="h-12 rounded-2xl border border-white/10 bg-slate-900/70 px-4 text-sm text-white placeholder:text-slate-500 shadow-inner focus:border-cyan-300 focus:outline-none focus:ring-2 focus:ring-cyan-300/30"
                  placeholder="Why are you requesting this?"
                  type="text"
                />
              </label>
            </div>

            <label className="grid gap-3">
              <span className="text-sm font-medium text-slate-200">
                Notes <span className="text-xs text-slate-400">(optional)</span>
              </span>
              <textarea
                className="min-h-[120px] rounded-2xl border border-white/10 bg-slate-900/70 px-4 py-3 text-sm text-white placeholder:text-slate-500 shadow-inner focus:border-cyan-300 focus:outline-none focus:ring-2 focus:ring-cyan-300/30"
                placeholder="Add any extra context for the support team"
              />
            </label>

            <div className="grid gap-4 md:grid-cols-[1.2fr_0.8fr]">
              <div className="rounded-2xl border border-white/10 bg-slate-900/60 p-5">
                <p className="text-xs uppercase tracking-[0.2em] text-slate-400">
                  Live payload preview
                </p>
                <pre className="mt-3 overflow-auto whitespace-pre-wrap rounded-xl border border-white/10 bg-slate-950/70 p-4 text-[11px] leading-relaxed text-cyan-100">
{`{
  "requestType": "EXCHANGE",
  "reason": "Size too small",
  "notes": "Need a larger size"
}`}
                </pre>
              </div>
              <div className="flex flex-col justify-between gap-4 rounded-2xl border border-white/10 bg-gradient-to-br from-white/10 via-white/0 to-white/10 p-5">
                <div>
                  <p className="text-xs uppercase tracking-[0.2em] text-slate-400">
                    Loading state
                  </p>
                  <div className="mt-3 space-y-3">
                    <div className="skeleton h-4 w-3/4" />
                    <div className="skeleton h-4 w-full" />
                    <div className="skeleton h-4 w-2/3" />
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="loading-spinner" />
                  <div className="text-xs text-slate-300">
                    Processing order in background...
                  </div>
                </div>
              </div>
            </div>

            <button
              type="submit"
              className="h-12 rounded-2xl bg-gradient-to-r from-cyan-400 via-blue-500 to-indigo-500 text-sm font-semibold text-slate-950 shadow-lg transition hover:scale-[1.01] hover:shadow-cyan-400/30"
            >
              Submit return request
            </button>
          </form>
        </section>

        <section className="rounded-[28px] border border-white/10 bg-white/5 p-8 shadow-2xl backdrop-blur">
          <div className="flex flex-wrap items-center justify-between gap-4">
            <div>
              <p className="text-xs uppercase tracking-[0.35em] text-fuchsia-200">
                Stay & Play
              </p>
              <h2 className="mt-3 text-2xl font-semibold">Catch the comet</h2>
              <p className="mt-2 text-sm text-slate-300">
                Tap the moving comet to pass the time while we keep your request
                active.
              </p>
            </div>
            <div className="rounded-full border border-white/10 bg-white/10 px-4 py-2 text-sm text-white">
              Score: <span className="font-semibold text-cyan-200">{score}</span>
            </div>
          </div>

          <div className="relative mt-6 h-56 overflow-hidden rounded-3xl border border-white/10 bg-slate-900/70">
            <div
              className="absolute"
              style={{
                top: `${targetPosition.top}%`,
                left: `${targetPosition.left}%`,
              }}
            >
              <button
                type="button"
                onClick={handleCatch}
                className="game-target"
                aria-label="Catch the comet"
              />
            </div>
            <div className="absolute bottom-4 left-4 rounded-full border border-white/10 bg-white/10 px-3 py-1 text-xs text-slate-200">
              Click the glowing dot to score
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
