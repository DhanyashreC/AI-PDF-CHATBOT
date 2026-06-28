export async function extractText(file: File) {
  const text = await file.text();

  return {
    text,
    pages: [],
  };
}