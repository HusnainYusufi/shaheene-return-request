export default function Home() {
  return (
    <div className="relative min-h-screen overflow-hidden bg-slate-950 text-white">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -left-32 top-20 h-96 w-96 rounded-full bg-fuchsia-500/30 blur-3xl animate-[float_12s_ease-in-out_infinite]" />
        <div className="absolute right-0 top-1/3 h-80 w-80 rounded-full bg-cyan-400/30 blur-3xl animate-[float_10s_ease-in-out_infinite]" />
        <div className="absolute bottom-0 left-1/3 h-96 w-96 rounded-full bg-blue-500/20 blur-3xl animate-[pulseGlow_8s_ease-in-out_infinite]" />
      </div>

      <header className="relative z-10 border-b border-white/10 bg-slate-950/80 backdrop-blur">
        <div className="mx-auto flex w-full max-w-6xl flex-wrap items-center justify-between gap-6 px-6 py-6">
          <div>
            <p className="text-xs uppercase tracking-[0.3em] text-slate-300">
              Shaheene Customer Return
            </p>
            <h1 className="mt-2 text-3xl font-semibold sm:text-4xl">
              Exchange Request Portal
            </h1>
            <p className="mt-2 max-w-xl text-sm text-slate-300">
              Generate a clean return flow with instant request payloads. Your
              order number will be attached to the header of the return request.
            </p>
          </div>
          <div className="w-full max-w-sm rounded-2xl border border-white/10 bg-white/5 p-4 text-xs text-slate-200 shadow-xl">
            <div className="flex items-center justify-between">
              <span className="text-[10px] uppercase tracking-[0.25em] text-slate-400">
                Request Header
              </span>
              <span className="rounded-full bg-emerald-400/10 px-2 py-1 text-[10px] text-emerald-300">
                Active
              </span>
            </div>
            <div className="mt-3 space-y-2">
              <div className="flex items-center justify-between">
                <span className="text-slate-400">Order</span>
                <span className="font-medium text-white">#SH-RET-0001</span>
              </div>
              <div className="rounded-lg bg-slate-900/70 p-3 font-mono text-[11px] leading-relaxed text-slate-100">
                {`{
  "requestType": "EXCHANGE",
  "reason": "Size too small",
  "notes": "Need a larger size"
}`}
              </div>
            </div>
          </div>
        </div>
      </header>

      <main className="relative z-10 mx-auto flex w-full max-w-6xl flex-col gap-10 px-6 py-12 lg:flex-row">
        <section className="flex-1">
          <div className="rounded-3xl border border-white/10 bg-white/5 p-8 shadow-2xl backdrop-blur">
            <div className="flex items-start justify-between gap-6">
              <div>
                <p className="text-xs uppercase tracking-[0.3em] text-cyan-200">
                  Step 1
                </p>
                <h2 className="mt-3 text-2xl font-semibold">Confirm your order</h2>
                <p className="mt-2 text-sm text-slate-300">
                  Enter the order number that appears on your delivery receipt or
                  confirmation email.
                </p>
              </div>
              <span className="hidden rounded-full border border-cyan-300/40 bg-cyan-300/10 px-3 py-1 text-xs text-cyan-100 sm:inline">
                Exchange only
              </span>
            </div>

            <form className="mt-8 space-y-6">
              <label className="block">
                <span className="text-sm font-medium text-slate-200">
                  Order number
                </span>
                <div className="mt-3 flex flex-col gap-3 sm:flex-row">
                  <input
                    className="h-12 flex-1 rounded-2xl border border-white/10 bg-slate-900/70 px-4 text-sm text-white placeholder:text-slate-500 shadow-inner focus:border-cyan-300 focus:outline-none focus:ring-2 focus:ring-cyan-300/30"
                    placeholder="e.g. SH-ORD-14229"
                    type="text"
                  />
                  <button
                    type="button"
                    className="h-12 rounded-2xl bg-gradient-to-r from-cyan-400 via-blue-500 to-indigo-500 px-6 text-sm font-semibold text-slate-950 shadow-lg transition hover:scale-[1.01] hover:shadow-cyan-400/30"
                  >
                    Attach to header
                  </button>
                </div>
              </label>

              <div className="grid gap-4 sm:grid-cols-2">
                <div className="rounded-2xl border border-white/10 bg-slate-900/60 p-4">
                  <p className="text-xs uppercase tracking-[0.2em] text-slate-400">
                    Request Type
                  </p>
                  <p className="mt-3 text-lg font-semibold text-white">
                    Exchange
                  </p>
                  <p className="mt-2 text-xs text-slate-400">
                    Replace item with a new size or variant.
                  </p>
                </div>
                <div className="rounded-2xl border border-white/10 bg-slate-900/60 p-4">
                  <p className="text-xs uppercase tracking-[0.2em] text-slate-400">
                    Reason
                  </p>
                  <p className="mt-3 text-lg font-semibold text-white">
                    Size too small
                  </p>
                  <p className="mt-2 text-xs text-slate-400">
                    Our team will locate a larger size.
                  </p>
                </div>
              </div>

              <div className="rounded-2xl border border-white/10 bg-gradient-to-br from-white/5 via-white/0 to-white/5 p-5">
                <p className="text-xs uppercase tracking-[0.25em] text-slate-400">
                  Notes
                </p>
                <p className="mt-3 text-sm text-slate-200">
                  Need a larger size. Please keep the same color if possible.
                </p>
              </div>
            </form>
          </div>
        </section>

        <aside className="w-full max-w-lg">
          <div className="rounded-3xl border border-white/10 bg-white/5 p-8 shadow-2xl backdrop-blur">
            <p className="text-xs uppercase tracking-[0.3em] text-fuchsia-200">
              Live Preview
            </p>
            <h3 className="mt-3 text-2xl font-semibold">Return experience</h3>
            <p className="mt-2 text-sm text-slate-300">
              The header carries the order number and the request payload shown
              below. Use this preview to confirm formatting before submission.
            </p>

            <div className="mt-6 space-y-4">
              {[
                {
                  label: "Header: order",
                  value: "#SH-RET-0001",
                },
                {
                  label: "Header: payload",
                  value: "application/json",
                },
              ].map((item) => (
                <div
                  key={item.label}
                  className="flex items-center justify-between rounded-2xl border border-white/10 bg-slate-900/70 px-4 py-3 text-sm"
                >
                  <span className="text-slate-400">{item.label}</span>
                  <span className="font-semibold text-white">{item.value}</span>
                </div>
              ))}
            </div>

            <div className="mt-6 rounded-2xl border border-white/10 bg-slate-900/80 p-4 text-xs text-slate-200">
              <p className="text-[10px] uppercase tracking-[0.2em] text-slate-400">
                Payload body
              </p>
              <pre className="mt-3 overflow-auto whitespace-pre-wrap font-mono text-[11px] leading-relaxed text-cyan-100">
{`{
  "requestType": "EXCHANGE",
  "reason": "Size too small",
  "notes": "Need a larger size"
}`}
              </pre>
            </div>

            <button
              type="button"
              className="mt-6 w-full rounded-2xl border border-white/10 bg-white/10 px-4 py-3 text-sm font-semibold text-white transition hover:bg-white/20"
            >
              Submit return request
            </button>
          </div>
        </aside>
      </main>
    </div>
  );
}
