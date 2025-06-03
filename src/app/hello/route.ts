/**
 * Basic GET request handler for /hello endpoint
 * 
 * URL: /hello
 * Method: GET
 * Response: "Hello, world! from hello"
 * 
 * Example usage:
 * - Browser: Visit http://localhost:3000/hello
 * - Fetch: fetch('/hello')
 * - cURL: curl http://localhost:3000/hello
 */

export async function GET() {
    return new Response("Hello, world! from hello");
}
