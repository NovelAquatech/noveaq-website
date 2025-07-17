import { type Author } from "./author";
import { Components } from "../types/components";
import { HomePage } from "../types/home-page";
import { Menu } from "../types/menu";

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
