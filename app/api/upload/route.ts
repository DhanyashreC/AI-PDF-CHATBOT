import { NextResponse } from "next/server";
import { extractText } from "@/app/lib/pdf";
import { saveDocument } from "@/app/lib/vectorStore";

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

    const result = await extractText(file);
    console.log("Extracted text length:", result.text.length);

    saveDocument(result.text);
    console.log("Document saved successfully");

    return NextResponse.json({
      success: true,
      filename: file.name,
      textLength: result.text.length,
      preview: result.text.substring(0, 500),
    });
  } catch (error) {
    console.error(error);

    return NextResponse.json(
      { error: "Failed to process PDF." },
      { status: 500 }
    );
  }
}