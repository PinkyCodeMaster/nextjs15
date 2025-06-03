import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-screen bg-gray-100 flex items-center justify-center px-4">
      <div className="max-w-lg w-full bg-white rounded-lg shadow p-8 text-center">
        <h1 className="text-4xl font-bold text-gray-800 mb-4">Welcome to the Home Page</h1>
        <p className="text-gray-600 mb-6">
          This is the starting point of your app. Use the links below to explore.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/products"
            className="px-5 py-3 bg-blue-600 text-white rounded hover:bg-blue-700 transition"
          >
            View Products
          </Link>
          <Link
            href="/profile"
            className="px-5 py-3 bg-green-600 text-white rounded hover:bg-green-700 transition"
          >
            Your Profile
          </Link>
          <Link
            href="/blog"
            className="px-5 py-3 bg-purple-600 text-white rounded hover:bg-purple-700 transition"
          >
            Blog
          </Link>
          <Link
            href="/about"
            className="px-5 py-3 bg-gray-600 text-white rounded hover:bg-gray-700 transition"
          >
            About
          </Link>
        </div>
      </div>
    </main>
  );
}
