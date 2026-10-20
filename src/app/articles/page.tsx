import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "../_components/navbar/navbar";
import FooterSection from "../_components/footer/footer";
import { getArticles, type Article } from "@/lib/articles";

export const metadata: Metadata = {
  title: "Articles | Novel Aquatech",
  description: "Explore practical guides and insights on IoT, engineering and connected systems from Novel Aquatech.",
};

function ArticleCard({ article, featured = false }: { article: Article; featured?: boolean }) {
  return (
    <article className={`group overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm transition-all hover:-translate-y-1 hover:shadow-xl ${featured ? "lg:grid lg:grid-cols-2" : "flex flex-col"}`}>
      <Link href={`/articles/${article.slug}`} className={`block overflow-hidden bg-blue-50 ${featured ? "min-h-64" : "aspect-[16/9]"}`} aria-label={`Read ${article.title}`}>
        <img src={article.cover} alt="" className="h-full w-full object-contain p-5 transition-transform duration-300 group-hover:scale-[1.03]" />
      </Link>
      <div className={`flex flex-1 flex-col justify-center ${featured ? "p-8 md:p-12" : "p-7"}`}>
        <div className="mb-5 flex flex-wrap gap-2">
          {article.tags.map((tag) => (
            <span key={tag} className="rounded-full bg-blue-100 px-3 py-1 text-xs font-bold uppercase tracking-wider text-blue-800">{tag}</span>
          ))}
        </div>
        <h2 className={`${featured ? "text-3xl md:text-4xl" : "text-2xl"} font-bold leading-tight tracking-tight text-slate-900`}>
          <Link href={`/articles/${article.slug}`} className="hover:text-blue-700 focus-visible:outline-blue-700">{article.title}</Link>
        </h2>
        <p className="mt-4 leading-7 text-slate-600">{article.description}</p>
        <Link href={`/articles/${article.slug}`} className="mt-7 inline-flex w-fit items-center gap-2 font-bold text-blue-700 hover:text-blue-900">
          Read article <span aria-hidden="true">→</span>
        </Link>
      </div>
    </article>
  );
}

export default function ArticlesPage() {
  const articles = getArticles();
  return (
    <main className="min-h-screen bg-slate-50">
      <Navbar currentHref="/articles" />
      <section className="bg-gradient-to-br from-blue-100 via-blue-50 to-white px-6 py-20 md:px-24 md:py-28">
        <div className="container mx-auto">
          <p className="mb-4 text-sm font-bold uppercase tracking-[0.2em] text-blue-700">Insights & ideas</p>
          <h1 className="text-5xl font-bold tracking-tight text-slate-900 md:text-6xl">Articles</h1>
          <p className="mt-5 max-w-2xl text-lg leading-8 text-slate-600">Practical perspectives on connected equipment, smarter maintenance and the technology behind better decisions.</p>
        </div>
      </section>
      <section className="px-6 py-16 md:px-24 md:py-20" aria-label="Article showcase">
        <div className="container mx-auto">
          {articles.length > 0 ? (
            <>
              <p className="mb-7 text-sm font-bold uppercase tracking-widest text-slate-500">Featured read</p>
              <ArticleCard article={articles[0]} featured />
              {articles.length > 1 && (
                <div className="mt-12 grid gap-8 md:grid-cols-2 xl:grid-cols-3">
                  {articles.slice(1).map((article) => <ArticleCard key={article.slug} article={article} />)}
                </div>
              )}
            </>
          ) : <p className="text-slate-600">Articles are coming soon.</p>}
        </div>
      </section>
      <FooterSection />
    </main>
  );
}
