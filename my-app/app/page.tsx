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
  const [orderNo, setOrderNo] = useState("");
  const [requestType, setRequestType] = useState(requestTypes[0]);
  const [reason, setReason] = useState("");
  const [notes, setNotes] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [successOpen, setSuccessOpen] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const handleCatch = () => {
    setScore((prev) => prev + 1);
    setTargetPosition({
      top: 10 + Math.random() * 70,
      left: 10 + Math.random() * 70,
    });
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!orderNo.trim() || !reason.trim()) {
      setErrorMessage("Please provide an order number and reason.");
      return;
    }
    setIsSubmitting(true);
    setErrorMessage("");
    try {
      const response = await fetch(
        `https://qa.api.shaheene.com/orders/${encodeURIComponent(
          orderNo.trim(),
        )}/returns`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            requestType,
            reason,
            notes,
          }),
        },
      );

      if (!response.ok) {
        throw new Error("Unable to submit the request.");
      }

      setSuccessOpen(true);
    } catch (error) {
      setErrorMessage(
        error instanceof Error
          ? error.message
          : "Something went wrong. Please try again.",
      );
    } finally {
      setIsSubmitting(false);
    }
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
                Submit a streamlined request with a single form. We will process
                it as soon as possible.
              </p>
            </div>
            <div className="flex items-center gap-3 rounded-full border border-white/10 bg-white/10 px-4 py-2 text-xs text-slate-100">
              <span className="h-2 w-2 animate-pulse rounded-full bg-emerald-400" />
              Support team on standby
            </div>
          </div>

          <form className="mt-8 grid gap-6" onSubmit={handleSubmit}>
            <label className="grid gap-3">
              <span className="text-sm font-medium text-slate-200">
                Order number
              </span>
              <input
                className="h-12 rounded-2xl border border-white/10 bg-slate-900/70 px-4 text-sm text-white placeholder:text-slate-500 shadow-inner focus:border-cyan-300 focus:outline-none focus:ring-2 focus:ring-cyan-300/30"
                placeholder="Enter order number"
                type="text"
                value={orderNo}
                onChange={(event) => setOrderNo(event.target.value)}
                required
              />
            </label>

            <div className="grid gap-6 md:grid-cols-2">
              <label className="grid gap-3">
                <span className="text-sm font-medium text-slate-200">
                  Request type
                </span>
                <select
                  className="h-12 rounded-2xl border border-white/10 bg-slate-900/70 px-4 text-sm text-white shadow-inner focus:border-cyan-300 focus:outline-none focus:ring-2 focus:ring-cyan-300/30"
                  value={requestType}
                  onChange={(event) => setRequestType(event.target.value)}
                >
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
                  value={reason}
                  onChange={(event) => setReason(event.target.value)}
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
                value={notes}
                onChange={(event) => setNotes(event.target.value)}
              />
            </label>

            {errorMessage ? (
              <div className="rounded-2xl border border-rose-400/40 bg-rose-500/10 px-4 py-3 text-sm text-rose-100">
                {errorMessage}
              </div>
            ) : null}

            <button
              type="submit"
              className="h-12 rounded-2xl bg-gradient-to-r from-cyan-400 via-blue-500 to-indigo-500 text-sm font-semibold text-slate-950 shadow-lg transition hover:scale-[1.01] hover:shadow-cyan-400/30 disabled:cursor-not-allowed disabled:opacity-70"
              disabled={isSubmitting}
            >
              {isSubmitting ? "Submitting..." : "Submit return request"}
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

      {successOpen ? (
        <div className="modal-backdrop fixed inset-0 z-50 flex items-center justify-center px-6">
          <div className="modal-card w-full max-w-md rounded-3xl border border-white/10 bg-slate-900/90 p-8 text-center shadow-2xl">
            <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-emerald-400/20 text-emerald-200">
              <span className="text-2xl">✓</span>
            </div>
            <h3 className="text-xl font-semibold text-white">
              Request received
            </h3>
            <p className="mt-3 text-sm text-slate-300">
              Request has been generated, our department will call you for
              pickup.
            </p>
            <button
              type="button"
              onClick={() => setSuccessOpen(false)}
              className="mt-6 h-11 w-full rounded-2xl bg-white/10 text-sm font-semibold text-white transition hover:bg-white/20"
            >
              Close
            </button>
          </div>
        </div>
      ) : null}
    </div>
  );
}
