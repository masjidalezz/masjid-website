import { useState, useEffect } from "react";
import { X } from "lucide-react";
import popupImage from "@/assets/eidfitr_2026.jpeg";

export function EventPopup() {
    const [isOpen, setIsOpen] = useState(true);

    const handleClose = () => {
        setIsOpen(false);
    };

    // Prevent scrolling when popup is open
    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "auto"; // Reset to default
        }
        return () => {
            document.body.style.overflow = "auto";
        };
    }, [isOpen]);

    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/70 backdrop-blur-sm p-4 animate-in fade-in duration-300">
            {/* Backdrop click to close */}
            <div className="absolute inset-0" onClick={handleClose} />

            <div
                className="relative max-w-[90vw] md:max-w-2xl w-full max-h-[90vh] bg-transparent rounded-2xl shadow-2xl flex flex-col animate-in zoom-in-95 duration-300"
            >
                <button
                    onClick={handleClose}
                    className="absolute -top-3 -right-3 md:-top-5 md:-right-5 z-10 p-2 bg-black hover:bg-black/80 text-white rounded-full transition-colors border-2 border-white shadow-lg focus:outline-none focus:ring-2 focus:ring-white/50"
                    aria-label="Close popup"
                >
                    <X className="w-5 h-5 md:w-6 md:h-6" />
                </button>
                <div className="w-full h-full overflow-hidden rounded-2xl border-4 border-white shadow-2xl flex items-center justify-center bg-black">
                    <img
                        src={popupImage}
                        alt="Eid Al-Fitr 2026 Announcement"
                        className="w-full h-full object-contain max-h-[85vh]"
                    />
                </div>
            </div>
        </div>
    );
}
