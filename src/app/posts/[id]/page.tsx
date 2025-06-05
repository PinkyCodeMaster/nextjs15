/**
 * Dynamic Post Page - Server-Side Rendering with Parameters
 * 
 * This page demonstrates dynamic server-side rendering with route parameters:
 * - [id] in the folder name makes this a dynamic route
 * - params.id contains the value from the URL
 * - Content is generated on each request
 * - Each post ID gets unique content
 * 
 * Example URLs:
 * - /posts/1
 * - /posts/hello-world
 * - /posts/any-value
 */
export default function PostPage({ params }: { params: { id: string } }) {
    // This will be executed on the server for each request
    const currentTime = new Date().toLocaleTimeString();
    
    // Simulate fetching post data based on ID
    const post = {
        id: params.id,
        title: `Post ${params.id}`,
        content: `This is the content for post ${params.id}`,
        timestamp: currentTime
    };

    return (
        <div className="flex flex-col items-center justify-center min-h-screen p-4">
            <div className="bg-white p-6 rounded-lg shadow-lg max-w-2xl w-full">
                <h1 className="text-3xl font-bold mb-4">{post.title}</h1>
                
                <div className="mb-4">
                    <p className="text-gray-700">{post.content}</p>
                </div>

                <div className="text-sm text-gray-500">
                    <p>Post ID: {post.id}</p>
                    <p>Generated at: {post.timestamp}</p>
                    <p className="mt-4">This content is dynamically rendered on the server for each request.</p>
                </div>
            </div>
        </div>
    );
} 