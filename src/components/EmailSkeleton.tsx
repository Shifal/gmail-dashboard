"use client";

export default function EmailSkeleton() {
  return (
    <div
      className="p-6 bg-zinc-900/70 dark:bg-zinc-100/60 rounded-2xl shadow-lg border border-zinc-700 dark:border-zinc-300 animate-pulse"
    >
      {/* From + To */}
      <div className="flex flex-col gap-2">
        <div className="h-3 w-40 bg-gray-700 dark:bg-gray-300 rounded"></div>
        <div className="h-3 w-32 bg-gray-700 dark:bg-gray-300 rounded"></div>
      </div>

      {/* Subject */}
      <div className="h-4 w-3/4 bg-gray-600 dark:bg-gray-400 rounded mt-4"></div>

      {/* Snippet */}
      <div className="space-y-2 mt-3">
        <div className="h-3 w-full bg-gray-700 dark:bg-gray-300 rounded"></div>
        <div className="h-3 w-5/6 bg-gray-700 dark:bg-gray-300 rounded"></div>
      </div>

      {/* Date */}
      <div className="h-3 w-24 bg-gray-700 dark:bg-gray-300 rounded mt-4"></div>
    </div>
  );
}
