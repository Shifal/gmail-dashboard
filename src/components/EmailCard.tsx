import { Email } from "@/types/email";

export default function EmailCard({ email }: { email: Email }) {
  return (
    <div className="p-4 border rounded bg-white shadow text-black">
      <p><strong>From:</strong> {email.from}</p>
      <p><strong>To:</strong> {email.to}</p>
      <p><strong>Subject:</strong> {email.subject}</p>
      <p className="text-sm text-gray-600">{email.snippet}</p>
    </div>
  );
}
