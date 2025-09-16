import { useState, useEffect } from "react";
import { X } from "lucide-react";
import { cn } from "@/lib/utils";

export function Toast({ message, type = "info", onClose, duration = 5000 }) {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(false);
      setTimeout(onClose, 300);
    }, duration);

    return () => clearTimeout(timer);
  }, [duration, onClose]);

  if (!isVisible) return null;

  return (
    <div
      className={cn(
        "fixed top-4 right-4 z-50 flex items-center gap-3 rounded-lg px-4 py-3 shadow-lg transition-all duration-300",
        {
          "bg-green-50 text-green-800 border border-green-200":
            type === "success",
          "bg-red-50 text-red-800 border border-red-200": type === "error",
          "bg-blue-50 text-blue-800 border border-blue-200": type === "info",
          "bg-yellow-50 text-yellow-800 border border-yellow-200":
            type === "warning",
        }
      )}
    >
      <span className="text-sm font-medium">{message}</span>
      <button
        onClick={() => {
          setIsVisible(false);
          setTimeout(onClose, 300);
        }}
        className="text-current hover:opacity-70"
      >
        <X className="h-4 w-4" />
      </button>
    </div>
  );
}
