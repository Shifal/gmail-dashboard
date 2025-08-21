import { Email } from "@/types/email";

// export async function fetchEmails(params: { from?: string; to?: string; subject?: string }): Promise<Email[]> {
//   const queryParams = new URLSearchParams();

//   if (params.from) queryParams.append("from", params.from);
//   if (params.to) queryParams.append("to", params.to);
//   if (params.subject) queryParams.append("subject", params.subject);

//   // If nothing is passed, apply default: newer_than:1d
//   if (![params.from, params.to, params.subject].some(Boolean)) {
//     queryParams.append("default", "newer_than:1d"); 
//     // 👆 you can change "default" to whatever param your backend expects
//   }

//   const res = await fetch(`http://localhost:8080/api/emails?${queryParams.toString()}`);

//   if (!res.ok) throw new Error("Failed to fetch emails");
//   return res.json();
// }

export async function fetchEmailsByBody(body: { from?: string; to?: string; subject?: string }): Promise<Email[]> {
  const res = await fetch("http://localhost:8080/api/emails/fetch", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(body),
  });

  if (!res.ok) throw new Error("Failed to fetch emails");
  return res.json();
}
