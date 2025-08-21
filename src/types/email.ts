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
  body?: string;
  attachmentFiles?: Record<string, string>;
}
