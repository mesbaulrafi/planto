import React from "react";

const PlantoLoader = () => {
  return (
    <div className="relative flex h-screen w-full flex-col items-center justify-center overflow-hidden bg-[radial-gradient(circle_at_50%_20%,#f4f8ef_0%,#e7efe0_55%,#dbe6d3_100%)] font-sans">
      {/* keyframes aren't expressible via default Tailwind utilities — defined once, applied below via arbitrary animate-[] classes */}
      <style>{`
        @keyframes planto-float { 0%, 100% { transform: translateY(0px); opacity: 0.25; } 50% { transform: translateY(-18px); opacity: 0.55; } }
        @keyframes planto-pulse { 0%, 100% { transform: scale(1); opacity: 0.8; } 50% { transform: scale(1.15); opacity: 1; } }
        /* grows up once per loop, holds fully grown, then snaps back instantly (no animated shrink) as the next loop starts */
        @keyframes planto-grow { 0% { stroke-dashoffset: 110; } 60% { stroke-dashoffset: 0; } 100% { stroke-dashoffset: 0; } }
        @keyframes planto-unfurl { 0%, 25% { opacity: 0; transform: scale(0.2) rotate(-10deg); } 55%, 100% { opacity: 1; transform: scale(1) rotate(0deg); } }
        @keyframes planto-blink { 0%, 20% { opacity: 0; } 50% { opacity: 1; } 100% { opacity: 0; } }
        @media (prefers-reduced-motion: reduce) {
          .planto-anim { animation: none !important; }
        }
      `}</style>

      {/* sunlight glow */}
      <div className="planto-anim absolute top-[8%] h-56 w-56 animate-[planto-pulse_2.2s_ease-in-out_infinite] rounded-full bg-[radial-gradient(circle,rgba(255,209,102,0.55)_0%,rgba(255,209,102,0)_70%)]" />

      {/* floating motes */}
      <span className="planto-anim absolute left-[22%] top-[20%] h-1.5 w-1.5 animate-[planto-float_4s_ease-in-out_infinite] rounded-full bg-[#a9c99b] opacity-30" />
      <span className="planto-anim absolute left-[72%] top-[30%] h-1 w-1 animate-[planto-float_4s_ease-in-out_infinite] rounded-full bg-[#a9c99b] opacity-30 [animation-delay:1.2s]" />
      <span className="planto-anim absolute left-[18%] top-[60%] h-[5px] w-[5px] animate-[planto-float_4s_ease-in-out_infinite] rounded-full bg-[#a9c99b] opacity-30 [animation-delay:2.1s]" />
      <span className="planto-anim absolute left-[78%] top-[68%] h-1 w-1 animate-[planto-float_4s_ease-in-out_infinite] rounded-full bg-[#a9c99b] opacity-30 [animation-delay:0.6s]" />

      <div className="relative z-[2] flex flex-col items-center">
        <div className="relative h-[190px] w-[160px]">
          <svg viewBox="0 0 160 190" width="160" height="190">
            <defs>
              <linearGradient id="clayGradient" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#d98c62" />
                <stop offset="100%" stopColor="#a6613f" />
              </linearGradient>
            </defs>

            {/* stem draws itself upward, loops */}
            <path
              className="planto-anim animate-[planto-grow_1.5s_ease-in-out_infinite] [stroke-dasharray:110] [stroke-dashoffset:110]"
              d="M80 118 C 80 96, 80 84, 80 50"
              stroke="#2d6a4f"
              strokeWidth="5"
              strokeLinecap="round"
              fill="none"
            />

            {/* leaves unfurl after the stem grows */}
            <path
              className="planto-anim origin-[78px_96px] animate-[planto-unfurl_1.5s_ease-in-out_infinite] opacity-0 [animation-delay:0.5s]"
              d="M80 96 C 62 92, 54 78, 62 66 C 74 72, 80 84, 80 96 Z"
              fill="#52b788"
            />
            <path
              className="planto-anim origin-[82px_84px] animate-[planto-unfurl_1.5s_ease-in-out_infinite] opacity-0 [animation-delay:0.65s]"
              d="M80 84 C 98 78, 104 64, 96 54 C 86 62, 80 74, 80 84 Z"
              fill="#52b788"
            />
            {/* top leaf — unfurls last, right at the growing tip */}
            <path
              className="planto-anim origin-[80px_54px] animate-[planto-unfurl_1.5s_ease-in-out_infinite] opacity-0 [animation-delay:0.78s]"
              d="M80 54 C 68 48, 64 34, 74 24 C 84 32, 88 46, 80 54 Z"
              fill="#74c69d"
            />

            {/* pot */}
            <path
              d="M40 118 L120 118 L108 174 C 108 182, 52 182, 52 174 Z"
              fill="url(#clayGradient)"
            />
            <rect x="34" y="108" width="92" height="16" rx="6" fill="#c97b52" />

            {/* soil mound */}
            <ellipse cx="80" cy="119" rx="42" ry="9" fill="#4a3428" />
          </svg>
        </div>

        <div className="mt-[22px] text-[1.65rem] font-bold tracking-wide text-[#1b4332]">
          Planto<span className="text-[#74c69d]">.</span>
        </div>

        <div className="mt-1.5 flex items-center gap-1 text-sm font-medium text-[#6b8f71]">
          Growing your space
          <span className="flex">
            <span className="planto-anim animate-[planto-blink_0.9s_infinite] opacity-0">.</span>
            <span className="planto-anim animate-[planto-blink_0.9s_infinite] opacity-0 [animation-delay:0.13s]">.</span>
            <span className="planto-anim animate-[planto-blink_0.9s_infinite] opacity-0 [animation-delay:0.26s]">.</span>
          </span>
        </div>
      </div>
    </div>
  );
};

export default PlantoLoader;