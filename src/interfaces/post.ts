import { type Author } from "./author";

export type Page = {
  slug: string;
  title: string;
  date: string;
  coverImage: string;
  author: Author;
  excerpt: string;
  ogImage: {
    url: string;
  };
  content: Components | HomePage | Menu;
  preview?: boolean;
};
