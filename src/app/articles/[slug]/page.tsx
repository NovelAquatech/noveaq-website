import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import Navbar from "../../_components/navbar/navbar";
import FooterSection from "../../_components/footer/footer";
import { getArticle, getArticleSlugs } from "@/lib/articles";

export function generateStaticParams() {
  return getArticleSlugs().map((slug) => ({ slug }));
}

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const article = getArticle(params.slug);
  if (!article) return {};
  return {
    title: `${article.title} | Novel Aquatech`,
    description: article.description,
    openGraph: { title: article.title, description: article.description, images: [new URL(article.cover, "https://novelaquatech.com").toString()], type: "article" },
  };
}

export default function ArticlePage({ params }: { params: { slug: string } }) {
  const article = getArticle(params.slug);
  if (!article) notFound();

  return (
    <main className="min-h-screen bg-white">
      <Navbar currentHref="/articles" />
      <div className="bg-gradient-to-b from-blue-50 to-white px-6 pb-12 pt-14 md:pt-20">
        <header className="mx-auto max-w-4xl">
          <Link href="/articles" className="text-sm font-semibold text-blue-700 hover:underline">← All articles</Link>
          <div className="mt-9 flex flex-wrap gap-2">
            {article.tags.map((tag) => <span key={tag} className="rounded-full bg-blue-100 px-3 py-1 text-xs font-bold uppercase tracking-wider text-blue-800">{tag}</span>)}
          </div>
          <h1 className="mt-5 text-4xl font-bold leading-tight tracking-tight text-slate-900 md:text-6xl">{article.title}</h1>
          <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-600">{article.description}</p>
        </header>
      </div>
      <article className="mx-auto max-w-4xl px-6 pb-20">
        <div className="prose prose-lg prose-slate max-w-none prose-headings:tracking-tight prose-headings:text-slate-900 prose-h2:mt-14 prose-h2:border-t prose-h2:border-slate-200 prose-h2:pt-10 prose-h3:mt-8 prose-a:text-blue-700 prose-img:mx-auto prose-img:rounded-2xl prose-img:border prose-img:border-slate-200 prose-img:bg-white prose-img:p-3 prose-img:shadow-sm prose-pre:overflow-x-auto prose-pre:bg-slate-900 overflow-x-auto">
          <ReactMarkdown remarkPlugins={[remarkGfm]}>
            {article.content.replace(/^# .+\n/, "")}
          </ReactMarkdown>
        </div>
        <div className="mt-16 border-t border-slate-200 pt-8">
          <Link href="/articles" className="font-bold text-blue-700 hover:underline">← Back to all articles</Link>
        </div>
      </article>
      <FooterSection />
    </main>
  );
}
