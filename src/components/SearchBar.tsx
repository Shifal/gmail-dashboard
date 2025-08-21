"use client";
import { useState } from "react";

interface SearchBarProps {
  onSearch: (filters: { from?: string; to?: string; subject?: string }) => void;
}

export default function SearchBar({ onSearch }: SearchBarProps) {
  const [from, setFrom] = useState("");
  const [to, setTo] = useState("");
  const [subject, setSubject] = useState("");

  const handleSubmit = (e?: React.FormEvent) => {
    if (e) e.preventDefault();
    onSearch({
      from: from || undefined,
      to: to || undefined,
      subject: subject || undefined,
    });
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="grid grid-cols-1 md:grid-cols-4 gap-3"
    >
      <input
        type="text"
        value={from}
        onChange={(e) => setFrom(e.target.value)}
        placeholder="From"
        className="p-3 rounded-xl border 
                   border-zinc-300 dark:border-zinc-700 
                   bg-white dark:bg-zinc-800 
                   text-black dark:text-white 
                   placeholder-gray-400 dark:placeholder-gray-500 
                   focus:ring-2 focus:ring-pink-500 outline-none"
      />
      <input
        type="text"
        value={to}
        onChange={(e) => setTo(e.target.value)}
        placeholder="To"
        className="p-3 rounded-xl border 
                   border-zinc-300 dark:border-zinc-700 
                   bg-white dark:bg-zinc-800 
                   text-black dark:text-white 
                   placeholder-gray-400 dark:placeholder-gray-500 
                   focus:ring-2 focus:ring-indigo-500 outline-none"
      />
      <input
        type="text"
        value={subject}
        onChange={(e) => setSubject(e.target.value)}
        placeholder="Subject"
        className="p-3 rounded-xl border 
                   border-zinc-300 dark:border-zinc-700 
                   bg-white dark:bg-zinc-800 
                   text-black dark:text-white 
                   placeholder-gray-400 dark:placeholder-gray-500 
                   focus:ring-2 focus:ring-purple-500 outline-none"
      />
      <button type="submit" className="button">
        <div className="button-outer">
          <div
            className="button-inner 
                       bg-gradient-to-r from-pink-600 to-purple-600 
                       hover:from-pink-500 hover:to-purple-500 
                       text-white px-6 py-3 rounded-xl font-bold 
                       shadow-md hover:shadow-lg 
                       transition-all duration-200"
          >
            <span>Search</span>
          </div>
        </div>
      </button>
    </form>
  );
}
