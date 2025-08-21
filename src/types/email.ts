export interface Email {
  id: string;
  threadId: string;
  snippet: string;
  subject: string;
  from: string;
  to: string;
  replyTo?: string;
  date: string;
  mailedBy?: string;
  signedBy?: string;
  labels: string[];

  // Optional: add body for preview if your backend supports it
  body?: string;
}
