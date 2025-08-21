"use client";
import { Email } from "@/types/email";

interface EmailDetailProps {
  email: Email | null;
}

export default function EmailDetail({ email }: EmailDetailProps) {
  if (!email) return <p className="text-gray-500 text-center mt-10">Select an email to view details</p>;

  const renderAttachment = (name: string, base64: string) => {
    const ext = name.split(".").pop()?.toLowerCase();
    if (ext === "pdf") {
      return (
        <iframe
          key={name}
          src={`data:application/pdf;base64,${base64}`}
          width="100%"
          height="400"
          className="my-2 border rounded-lg"
          title={name}
        />
      );
    } else if (["jpg", "jpeg", "png", "gif"].includes(ext || "")) {
      return <img key={name} src={`data:image/${ext};base64,${base64}`} alt={name} className="my-2 max-w-full rounded-lg" />;
    } else {
      return (
        <a
          key={name}
          href={`data:application/octet-stream;base64,${base64}`}
          download={name}
          className="block text-blue-400 underline my-1"
        >
          {name}
        </a>
      );
    }
  };

  return (
    <div className="p-6 bg-zinc-800/80 rounded-2xl shadow-lg border border-zinc-700 mt-4">
      <h2 className="text-xl font-bold text-white">{email.subject}</h2>
      <p className="text-sm text-pink-400"><strong>From:</strong> {email.from}</p>
      <p className="text-sm text-indigo-400"><strong>To:</strong> {email.to}</p>
      <p className="text-gray-300 mt-2">{email.snippet}</p>

      {email.attachmentFiles && Object.entries(email.attachmentFiles).length > 0 && (
        <div className="mt-4">
          <h3 className="text-white font-semibold mb-2">Attachments:</h3>
          {Object.entries(email.attachmentFiles).map(([name, base64]) => renderAttachment(name, base64))}
        </div>
      )}
    </div>
  );
}
