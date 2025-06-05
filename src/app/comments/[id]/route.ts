import { NextResponse } from "next/server";
import { comments } from "../data";

export async function GET(request: Request, { params }: { params: Promise<{ id: string }> }) {
    const { id } = await params;
    const comment = comments.find((comment) => comment.id === parseInt(id));
    if (!comment) {
        return NextResponse.json({ error: "Comment not found" }, { status: 404 });
    }
    return NextResponse.json(comment);
}

export async function POST(request: Request, { params }: { params: Promise<{ id: string }> }) {
    const { id } = await params;
    const { comment } = await request.json();
    const newComment = {
        id: parseInt(id),
        text: comment,
    };
    comments.push(newComment);
    return NextResponse.json(newComment, {
        status: 201,
        headers: {
            "Content-Type": "application/json",
        },
    });
}

export async function PATCH(request: Request, { params }: { params: Promise<{ id: string }> }) {
    const { id } = await params;
    const body = await request.json();
    const { text } = body;
    const index = comments.findIndex((comment) => comment.id === Number(id));
    if (index === -1) {
        return NextResponse.json({ error: "Comment not found" }, { status: 404 });
    }
    comments[index].text = text;
    return NextResponse.json(comments[index]);
}

export async function DELETE(request: Request, { params }: { params: Promise<{ id: string }> }) {
    const { id } = await params;
    const index = comments.findIndex((comment) => comment.id === parseInt(id));
    if (index === -1) {
        return NextResponse.json({ error: "Comment not found" }, { status: 404 });
    }
    comments.splice(index, 1);
    return NextResponse.json({ success: true }, { status: 200 });
}
