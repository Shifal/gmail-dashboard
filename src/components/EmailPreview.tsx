// components/EmailPreview.tsx
"use client";
import { motion, AnimatePresence } from "framer-motion";
import { Email } from "@/types/email";

interface Props {
  email: Email | null;
  onClose: () => void;
}

export default function EmailPreview({ email, onClose }: Props) {
  return (
    <AnimatePresence>
      {email && (
        <motion.div
          initial={{ x: "100%" }}
          animate={{ x: 0 }}
          exit={{ x: "100%" }}
          transition={{ type: "spring", stiffness: 300, damping: 30 }}
          className="fixed top-0 right-0 w-full sm:w-[500px] h-full 
                     bg-white dark:bg-zinc-900 shadow-2xl z-50 p-6 overflow-y-auto"
        >
          {/* Close button */}
          <button
            onClick={onClose}
            className="mb-4 px-3 py-1 rounded bg-red-500 text-white"
          >
            Close
          </button>

          <h2 className="text-2xl font-bold mb-2">{email.subject}</h2>
          <p className="text-sm text-gray-500 dark:text-gray-400 mb-4">
            From: {email.from} | To: {email.to}
          </p>
          <div className="text-gray-800 dark:text-gray-200 whitespace-pre-wrap">
            {email.from}
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
