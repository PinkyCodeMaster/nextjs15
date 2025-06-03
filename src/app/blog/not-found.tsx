import Link from "next/link";

export default function NotFound() {
    return (
        <div className="max-w-4xl mx-auto p-6">
            <div className="text-center">
                <h2 className="text-3xl font-bold text-gray-800 mb-4">
                    Article Not Found
                </h2>
                <p className="text-gray-800 mb-8">
                    The article you&apos;re looking for doesn&apos;t exist or has been moved.
                </p>
                <Link 
                    href="/blog"
                    className="inline-block bg-blue-600 text-white px-6 py-3 rounded-md hover:bg-blue-700 transition-colors"
                >
                    Return to Blog
                </Link>
            </div>
        </div>
    );
} 