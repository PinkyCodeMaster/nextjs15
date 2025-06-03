/**
 * Private Admin Page
 * 
 * This page demonstrates Next.js private routing using the _folder convention.
 * Pages in folders starting with underscore (_) are not accessible via direct URL.
 * They can only be accessed programmatically through internal navigation.
 * 
 * @see https://nextjs.org/docs/app/building-your-application/routing/colocation#private-folders
 */

import Link from "next/link"

export default function AdminPage() {
  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <div className="max-w-4xl mx-auto">
        <div className="bg-white rounded-lg shadow-lg p-6">
          <h1 className="text-3xl font-bold text-gray-900 mb-6">Admin Dashboard</h1>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-blue-50 p-6 rounded-lg">
              <h2 className="text-xl font-semibold text-blue-900 mb-4">Content Management</h2>
              <p className="text-blue-700 mb-4">Manage site content and settings</p>
              <button className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">
                Manage Content
              </button>
            </div>

            <div className="bg-green-50 p-6 rounded-lg">
              <h2 className="text-xl font-semibold text-green-900 mb-4">Analytics</h2>
              <p className="text-green-700 mb-4">View site statistics and reports</p>
              <button className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700">
                View Analytics
              </button>
            </div>

            <div className="bg-purple-50 p-6 rounded-lg">
              <h2 className="text-xl font-semibold text-purple-900 mb-4">System Settings</h2>
              <p className="text-purple-700 mb-4">Configure system preferences</p>
              <button className="bg-purple-600 text-white px-4 py-2 rounded hover:bg-purple-700">
                Open Settings
              </button>
            </div>

            <div className="bg-orange-50 p-6 rounded-lg">
              <h2 className="text-xl font-semibold text-orange-900 mb-4">Backup & Restore</h2>
              <p className="text-orange-700 mb-4">Manage system backups</p>
              <button className="bg-orange-600 text-white px-4 py-2 rounded hover:bg-orange-700">
                Backup Now
              </button>
            </div>
          </div>

          <div className="mt-8">
            <Link 
              href="/"
              className="text-blue-600 hover:text-blue-800 font-medium"
            >
              ← Back to Home
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
} 