import { Page } from "@/interfaces/post";
import fs from "fs";
import matter from "gray-matter";
import { join } from "path";
import { EmailClient } from "@azure/communication-email";

const postsDirectory = join(process.cwd(), "content");

export function getPostSlugs() {
  return fs.readdirSync(postsDirectory);
}

export function getPageBySlug(slug: string) {
  const realSlug = slug.replace(/\.json$/, "");
  const fullPath = join(postsDirectory, `${realSlug}.json`);
  const fileContents = fs.readFileSync(fullPath, "utf8");
  const { data, content } = matter(fileContents);

  return JSON.parse(content);
}

export function getMarkdownBySlug(slug: string) {
  const realSlug = slug.replace(/\.md$/, "");
  const fullPath = join(postsDirectory, `${realSlug}.md`);
  const fileContents = fs.readFileSync(fullPath, "utf8");
  const { data, content } = matter(fileContents);

  return content;
}

export function getAllPages(): Page[] {
  const slugs = getPostSlugs();
  const posts = slugs
    .map((slug) => getPageBySlug(slug))
    // sort posts by date in descending order
    .sort((post1, post2) => (post1.date > post2.date ? -1 : 1));
  return posts;
}

export function getAuthState() {
  // Simulate fetching auth state
  return {
    isLoggedIn: false,
    user: null,
  };
}

export async function submitFormLogic(formData: Record<string, string>) {
  const plainTextBody = Object.entries(formData)
    .map(([key, value]) => `${key}: ${value}`)
    .join("\n");

  const connectionString = process.env.ACS_CONNECTION_STRING ?? "";
  const emailClient = new EmailClient(connectionString);

  const message = {
    senderAddress: "DoNotReply@your-resource-id.communication.azure.com",
    content: {
      subject: "New Form Submission",
      plainText: plainTextBody,
    },
    recipients: {
      to: [{ address: "gautam@novelaquatech.com" }],
    },
  };

  const poller = await emailClient.beginSend(message);
  const response = await poller.pollUntilDone();

  return response;
}