"use client";
import { Email } from "@/types/email";

interface EmailListProps {
  emails: Email[];
}

export default function EmailList({ emails }: EmailListProps) {
  if (emails.length === 0) {
    return <p className="text-gray-500 text-center">No emails found.</p>;
  }

  return (
    <div className="grid gap-4">
      {emails.map((email, idx) => (
        <div
          key={idx}
          className="p-6 bg-zinc-900/70 rounded-2xl shadow-lg border border-zinc-700
                     hover:border-purple-500 hover:shadow-purple-500/30 
                     hover:scale-[1.02] transition-all duration-200
                     cursor-pointer"
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
