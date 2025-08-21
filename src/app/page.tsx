"use client";
import { useState } from "react";
import { Email } from "@/types/email";
import { fetchEmailsByBody } from "@/services/emailService";
import SearchBar from "@/components/SearchBar";
import EmailList from "@/components/EmailList";
import EmailDetail from "@/components/EmailDetail";
import ThemeToggle from "@/components/ThemeToggle";
import "@/components/Spinner.css";

export default function EmailsPage() {
  const [emails, setEmails] = useState<Email[]>([]);
  const [selectedEmail, setSelectedEmail] = useState<Email | null>(null);
  const [loading, setLoading] = useState(false);

  const handleSearch = async (filters: { from?: string; to?: string; subject?: string }) => {
    setLoading(true);
    try {
      const data = await fetchEmailsByBody(filters);
      setEmails(data);
      setSelectedEmail(null); // Reset selection on new search
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-black dark:bg-white transition-colors duration-300 p-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
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
              <div className="spinner"></div>
            </div>
          </div>
        ) : (
          <div className="flex h-[calc(100vh-4rem)] gap-6">
            {/* Email list */}
            <div className="w-1/3 overflow-y-auto border-r border-zinc-700 p-2">
              <EmailList
                emails={emails}
                onSelect={setSelectedEmail}
                selectedEmailId={selectedEmail?.id}
              />

            </div>

            {/* Email details */}
            <div className="w-2/3 overflow-y-auto p-4">
              <EmailDetail email={selectedEmail} />
            </div>
          </div>

        )}
      </div>
    </div>
  );
}
