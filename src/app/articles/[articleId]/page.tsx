/**
 * Dynamic Article Page with Internationalization
 * 
 * Next.js Concepts Demonstrated:
 * 
 * 1. Dynamic Route Parameters (params)
 *    - [articleId] in the folder name creates a dynamic segment
 *    - params.articleId gives access to the URL parameter
 *    - Type-safe with TypeScript interface
 * 
 * 2. Search Parameters (searchParams)
 *    - Access query string values (?lang=en)
 *    - Type-safe with TypeScript interface
 *    - Used for language selection
 * 
 * 3. Promises in Server Components
 *    - params and searchParams are Promises in App Router
 *    - Must be awaited before use
 *    - Enables streaming and partial rendering
 * 
 * 4. Metadata Generation
 *    - Dynamic metadata based on article data
 *    - SEO optimization per article
 * 
 * 5. Error Handling
 *    - notFound() for missing articles
 *    - Safe language fallback
 * 
 * @see https://nextjs.org/docs/app/api-reference/file-conventions/page#params-optional
 * @see https://nextjs.org/docs/app/api-reference/file-conventions/page#searchparams-optional
 */

import { notFound } from "next/navigation";
import { articles } from "@/lib/mockdata";
import type { Metadata } from "next";
import Link from "next/link";

// Type-safe interfaces for params and searchParams
interface ArticlePageProps {
  params: Promise<{ articleId: string }>;
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
}

// Dynamic metadata generation based on article data
export async function generateMetadata({ params }: ArticlePageProps): Promise<Metadata> {
  const { articleId } = await params;
  const article = articles.find((a) => a.id === articleId);
  return {
    title: article ? article.title : "Article Not Found",
  };
}

export default async function ArticlePage({ params, searchParams }: ArticlePageProps) {
  // Await both params and searchParams as they are Promises
  const { articleId } = await params;
  const { lang } = await searchParams;

  // Find article and handle not found case
  const article = articles.find((a) => a.id === articleId);
  if (!article) return notFound();

  // Safe language handling with fallback
  const supportedLangs = ["en", "es", "fr"];
  const safeLang = supportedLangs.includes(lang as string) ? (lang as "en" | "es" | "fr") : "en";
  const content = article.content[safeLang];

  return (
    <main className="min-h-screen bg-gray-100 py-10 px-4">
      <div className="max-w-3xl mx-auto bg-white shadow-md rounded-lg p-6">
        <h1 className="text-3xl font-bold text-gray-800 mb-2">{article.title}</h1>
        <p className="text-sm text-gray-500 mb-4">Language: <strong>{lang}</strong></p>
        <p className="text-gray-700 leading-relaxed">{content}</p>

        <div className="mt-10 flex justify-between">
          <Link
            href="/articles"
            className="px-4 py-2 bg-gray-600 text-white rounded hover:bg-gray-700 transition"
          >
            ← Back to Articles
          </Link>

          <div className="flex gap-2">
            <Link href={`/articles/${articleId}?lang=en`} className="text-blue-600 hover:underline">EN</Link>
            <Link href={`/articles/${articleId}?lang=es`} className="text-green-600 hover:underline">ES</Link>
            <Link href={`/articles/${articleId}?lang=fr`} className="text-purple-600 hover:underline">FR</Link>
          </div>
        </div>
      </div>
    </main>
  );
}
