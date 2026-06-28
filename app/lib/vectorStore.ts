let documentText = "";

export function saveDocument(text: string) {
  documentText = text;
}

export function getDocument() {
  return documentText;
}