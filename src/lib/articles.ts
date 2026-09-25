import fs from "node:fs";
import path from "node:path";
import matter from "gray-matter";

const articlesDirectory = path.join(process.cwd(), "articles");

export type Article = {
  slug: string;
  title: string;
  description: string;
  tags: string[];
  cover: string;
  content: string;
};

export function getArticleSlugs(): string[] {
  if (!fs.existsSync(articlesDirectory)) return [];
  return fs.readdirSync(articlesDirectory, { withFileTypes: true })
    .filter((entry) => entry.isDirectory() && fs.existsSync(path.join(articlesDirectory, entry.name, "ARTICLE.md")))
    .map((entry) => entry.name)
    .sort((a, b) => b.localeCompare(a));
}

export function getArticle(slug: string): Article | null {
  // Only resolve directories discovered in the articles folder.
  if (!getArticleSlugs().includes(slug)) return null;
  const source = fs.readFileSync(path.join(articlesDirectory, slug, "ARTICLE.md"), "utf8");
  const { data, content } = matter(source);
  return {
    slug,
    title: data.title,
    description: data.description,
    tags: data.tags ?? [],
    cover: data.cover,
    content,
  };
}

export function getArticles(): Article[] {
  return getArticleSlugs().map((slug) => getArticle(slug)!);
}
