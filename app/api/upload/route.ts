import { NextResponse } from "next/server";
import { extractPdfText } from "@/app/lib/pdf";

export async function POST(request: Request) {
  try {
    const formData = await request.formData();

    const file = formData.get("file") as File;

    if (!file) {
      return NextResponse.json(
        { error: "No PDF uploaded." },
        { status: 400 }
      );
    }

    const text = await extractPdfText(file);

    return NextResponse.json({
      success: true,
      filename: file.name,
      textLength: text.length,
      preview: text.substring(0, 500),
    });
  } catch (error) {
    console.error(error);

    return NextResponse.json(
      { error: "Failed to process PDF." },
      { status: 500 }
    );
  }
}