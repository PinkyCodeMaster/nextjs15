import React from "react"

export default function Loading() {
  return (
    <div className="max-w-4xl mx-auto p-6">
      {/* Title skeleton */}
      <div className="mb-8">
        <div className="h-10 bg-gray-200 rounded-lg w-3/4 mb-4 animate-pulse"></div>
        <div className="h-4 bg-gray-200 rounded w-1/4 animate-pulse"></div>
      </div>

      {/* Featured image skeleton */}
      <div className="w-full h-64 bg-gray-200 rounded-xl mb-8 animate-pulse"></div>

      {/* Content skeleton */}
      <div className="space-y-6">
        <div className="space-y-3">
          <div className="h-4 bg-gray-200 rounded w-full animate-pulse"></div>
          <div className="h-4 bg-gray-200 rounded w-5/6 animate-pulse"></div>
          <div className="h-4 bg-gray-200 rounded w-4/6 animate-pulse"></div>
        </div>

        <div className="space-y-3">
          <div className="h-4 bg-gray-200 rounded w-full animate-pulse"></div>
          <div className="h-4 bg-gray-200 rounded w-5/6 animate-pulse"></div>
          <div className="h-4 bg-gray-200 rounded w-4/6 animate-pulse"></div>
        </div>

        {/* Tags skeleton */}
        <div className="flex gap-2 pt-4">
          <div className="h-6 bg-gray-200 rounded-full w-20 animate-pulse"></div>
          <div className="h-6 bg-gray-200 rounded-full w-24 animate-pulse"></div>
          <div className="h-6 bg-gray-200 rounded-full w-16 animate-pulse"></div>
        </div>
      </div>
    </div>
  )
}
