"use client";
import { useState } from "react";
import { Email } from "@/types/email";
import { fetchEmails } from "@/services/emailService";
import SearchBar from "@/components/SearchBar";
import EmailList from "@/components/EmailList";
import ThemeToggle from "@/components/ThemeToggle";
import "@/components/Spinner.css";


export default function EmailsPage() {
  const [emails, setEmails] = useState<Email[]>([]);
  const [loading, setLoading] = useState(false);

  const handleSearch = async (filters: { from?: string; to?: string; subject?: string }) => {
    setLoading(true);
    try {
      const data = await fetchEmails(filters);
      setEmails(data);
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-black dark:bg-white transition-colors duration-300 p-6">
      <div className="max-w-5xl mx-auto">
        {/* Header with toggle */}
        <div className="flex items-center justify-between mb-6">
          <h1 className="text-4xl font-extrabold text-white dark:text-black flex items-center gap-2">
            <span className="text-5xl">⚡</span> Gmail Dashboard
          </h1>
          <ThemeToggle />
        </div>

        {/* Search */}
        <div className="backdrop-blur-lg bg-zinc-900/60 dark:bg-zinc-100/60 rounded-2xl p-4 shadow-xl border border-zinc-700 dark:border-zinc-300 mb-6">
          <SearchBar onSearch={handleSearch} />
        </div>

        {/* Results */}
        {loading ? (
          <div className="fixed inset-0 flex items-center justify-center bg-black/80 z-50">
            <div className="scale-75">
              {/* Your custom loader */}
              <div className="spinner"></div>
            </div>
          </div>
        ) : (
          <div className="space-y-4">
            <EmailList emails={emails} />
          </div>
        )}
      </div>
    </div>
  );
}
