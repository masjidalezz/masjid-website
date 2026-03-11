import { useState, useEffect } from "react";
import { X } from "lucide-react";
import { LAUNCHGOOD_DONATE_URL } from "@/config";

const LEADERBOARD_RANK = 8;
const BONUS_PRIZE = 25000;
const DEADLINE = "Friday, March 13 — 7 PM ET";

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
            ⏳ Deadline: {DEADLINE}
          </p>
          <h2 className="text-white text-xl font-bold font-serif leading-snug">
            🏆 Masjid Al-Ezz Is in the Top 10!
          </h2>
          <p className="text-white/90 text-sm mt-2 leading-relaxed">
            Alhamdulillah! Our community unlocked the{" "}
            <span className="text-amber-300 font-semibold">$10,000 Ramadan match</span>.
            May Allah reward every donor.
          </p>
        </div>

        {/* Rank banner */}
        <div className="bg-white px-6 py-4">
          <p className="text-sm text-gray-700 leading-relaxed">
            Now we have a new challenge. LaunchGood is awarding bonus prizes to
            the top 10 masajid raising funds this week.
          </p>
          <p className="text-sm font-bold text-primary mt-2">
            📊 We are currently #{LEADERBOARD_RANK} on LaunchGood.
          </p>
          <p className="text-sm text-gray-700 mt-1">
            If we push higher, we could secure up to{" "}
            <span className="font-semibold text-primary">
              ${BONUS_PRIZE.toLocaleString()} more
            </span>{" "}
            for the masjid.
          </p>
        </div>

        {/* Body */}
        <div className="bg-white px-6 pb-5 space-y-4">
          <p className="text-gray-700 text-sm leading-relaxed text-center">
            Help us climb higher and bring more reward to the House of Allah.
          </p>

          <a
            href={LAUNCHGOOD_DONATE_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="block w-full bg-amber-400 hover:bg-amber-500 text-gray-900 font-bold text-center py-3 rounded-xl transition-colors text-sm"
          >
            Donate Now
          </a>

          <p className="text-center text-xs text-gray-400">
            Your donation could move us up the leaderboard — every $25 or $50 helps.
          </p>
        </div>
      </div>
    </div>
  );
}
