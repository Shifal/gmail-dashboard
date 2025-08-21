"use client";
import { Email } from "@/types/email";

interface EmailListProps {
  emails: Email[];
  onSelect: (email: Email) => void;
  selectedEmailId?: string;
}

export default function EmailList({ emails, onSelect, selectedEmailId }: EmailListProps) {
  if (emails.length === 0) {
    return <p className="text-gray-500 text-center mt-4">No emails found.</p>;
  }

  return (
    <div className="flex flex-col gap-4 h-[80vh] overflow-y-auto p-2">
      {emails.map((email, idx) => (
        <div
          key={idx}
          className={`p-4 bg-zinc-900/70 rounded-2xl shadow-lg border
                      ${selectedEmailId === email.id ? "border-purple-500 shadow-purple-500/40" : "border-zinc-700"}
                      hover:border-purple-500 hover:shadow-purple-500/30
                      cursor-pointer transition-all duration-200`}
          onClick={() => onSelect(email)}
        >
          <p className="text-sm text-pink-400">
            <strong>From:</strong> {email.from}
          </p>
          <p className="text-sm text-indigo-400">
            <strong>To:</strong> {email.to}
          </p>
          <p className="text-lg font-semibold text-white mt-2">{email.subject}</p>
          <p className="text-sm text-gray-300 mt-1">{email.snippet}</p>
        </div>
      ))}
    </div>
  );
}
