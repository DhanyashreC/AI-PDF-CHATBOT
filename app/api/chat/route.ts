import { NextResponse } from "next/server";
import { getDocument } from "@/app/lib/vectorStore";

export async function POST(request: Request) {
  try {
    const { question } = await request.json();

    const document = getDocument();
    console.log("Stored document length:", document.length);

    if (!document) {
      return NextResponse.json(
        {
          answer: "Please upload a PDF first.",
        },
        { status: 400 }
      );
    }

    return NextResponse.json({
      answer: `You asked: "${question}"

The uploaded document contains ${document.length} characters.

The AI integration with Groq is the next step.`,
    });
  } catch (error) {
    console.error(error);

    return NextResponse.json(
      {
        answer: "Something went wrong.",
      },
      { status: 500 }
    );
  }
}