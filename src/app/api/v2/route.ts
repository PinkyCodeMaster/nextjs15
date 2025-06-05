/**
 * API v2 Endpoint
 * 
 * This is the new version of the API that v1 redirects to.
 * Demonstrates proper versioning and API structure.
 */
import { NextResponse } from "next/server";

export async function GET() {
    return NextResponse.json({
        version: "2.0.0",
        message: "Welcome to API v2",
        features: ["Improved performance", "New endpoints", "Better error handling"]
    });
}

export async function POST() {
    return NextResponse.json({
        version: "2.0.0",
        message: "POST endpoint in v2",
        status: "active"
    });
} 