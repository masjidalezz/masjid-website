import { useState, useEffect } from "react";
import { X } from "lucide-react";
import { LAUNCHGOOD_DONATE_URL } from "@/config";

const RAISED = 24000;
const GOAL = 50000;
const REMAINING = GOAL - RAISED;
const DEADLINE = "March 9";
const PROGRESS_PCT = Math.round((RAISED / GOAL) * 100);

export function RamadanMatchingDialog() {
  const [isOpen, setIsOpen] = useState(true);

  useEffect(() => {
    if (!isOpen) return;

    document.body.style.overflow = "hidden";
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setIsOpen(false);
    };
    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = "";
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 p-4"
      onClick={() => setIsOpen(false)}
    >
      <div
        className="relative w-full max-w-md rounded-2xl overflow-hidden shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={() => setIsOpen(false)}
          className="absolute top-3 right-3 z-10 bg-white/20 hover:bg-white/30 text-white rounded-full p-1.5 transition-colors"
          aria-label="Close"
        >
          <X className="h-4 w-4" />
        </button>

        {/* Header */}
        <div className="bg-primary px-6 pt-8 pb-5">
          <p className="text-amber-300 text-xs font-semibold uppercase tracking-widest mb-2">
            ⏰ Deadline: {DEADLINE}
          </p>
          <h2 className="text-white text-xl font-bold font-serif leading-snug">
            🚨 Ramadan Matching Opportunity
          </h2>
          <p className="text-white/75 text-sm mt-2 leading-relaxed">
            LaunchGood will add{" "}
            <span className="text-amber-300 font-semibold">$10,000</span> to the
            masjid if we reach ${GOAL.toLocaleString()} in online donations by{" "}
            {DEADLINE}.
          </p>
        </div>

        {/* Progress */}
        <div className="bg-primary/10 px-6 py-4">
          <div className="flex justify-between text-xs font-medium text-gray-500 mb-2">
            <span>Raised: ~${(RAISED / 1000).toFixed(0)}k</span>
            <span>Goal: ${(GOAL / 1000).toFixed(0)}k</span>
          </div>
          <div className="h-2.5 bg-gray-200 rounded-full overflow-hidden">
            <div
              className="h-full bg-amber-400 rounded-full"
              style={{ width: `${PROGRESS_PCT}%` }}
            />
          </div>
          <p className="text-xs text-gray-500 mt-1.5 text-right">
            ~${REMAINING.toLocaleString()} remaining to unlock the match
          </p>
        </div>

        {/* Body */}
        <div className="bg-white px-6 py-5 space-y-4">
          <p className="text-gray-700 text-sm leading-relaxed">
            💡 If just <strong>260 people give $100</strong> — or 130 give $200
            — the full{" "}
            <strong className="text-primary">$10,000 bonus</strong> gets
            unlocked for the House of Allah.
          </p>

          <p className="text-xs text-gray-500 italic text-center">
            Join hundreds of supporters helping unlock this Ramadan match.
          </p>

          <a
            href={LAUNCHGOOD_DONATE_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="block w-full bg-amber-400 hover:bg-amber-500 text-gray-900 font-bold text-center py-3 rounded-xl transition-colors text-sm"
          >
            Donate Now &amp; Help Unlock $10k
          </a>

          <p className="text-center text-xs text-gray-400">
            Every donation counts — even $25 or $50 helps us reach the goal.
          </p>
        </div>
      </div>
    </div>
  );
}
