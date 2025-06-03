import React from "react";
import { articles } from "@/lib/mockdata";
import Image from "next/image";

export default async function BlogPage() {
    // Simulate loading
    await new Promise((resolve) => setTimeout(resolve, 1000));
    
    const [featured, ...rest] = articles;
    
    return (
        <div className="max-w-4xl mx-auto p-6">
            {/* Title section */}
            <div className="mb-8">
                <h1 className="text-4xl font-bold mb-4 text-gray-900">Latest Articles</h1>
                <p className="text-gray-800">Discover our latest insights and updates</p>
            </div>

            {/* Featured article */}
            <article className="mb-12">
                <div className="w-full h-64 bg-gray-100 rounded-xl mb-6 overflow-hidden">
                    <Image
                        src={featured.image} 
                        alt={featured.title}
                        className="w-full h-full object-cover"
                        width={1000}
                        height={1000}
                    />
                </div>
                <h2 className="text-3xl font-bold mb-3 text-gray-900">{featured.title}</h2>
                <p className="text-gray-800 mb-4">{featured.excerpt}</p>
                <div className="flex gap-2">
                    {featured.tags.map((tag) => (
                        <span 
                            key={tag} 
                            className="px-3 py-1 bg-gray-100 rounded-full text-sm text-gray-800"
                        >
                            {tag}
                        </span>
                    ))}
                </div>
            </article>

            {/* Article list */}
            <div className="space-y-8">
                {rest.map((article) => (
                    <article key={article.id} className="border-b pb-8 last:border-0">
                        <h2 className="text-2xl font-semibold mb-3 text-gray-900">{article.title}</h2>
                        <p className="text-gray-800 mb-4">{article.excerpt}</p>
                        <div className="flex gap-2">
                            {article.tags.map((tag) => (
                                <span 
                                    key={tag} 
                                    className="px-3 py-1 bg-gray-100 rounded-full text-sm text-gray-800"
                                >
                                    {tag}
                                </span>
                            ))}
                        </div>
                    </article>
                ))}
            </div>
        </div>
    );
}
