"use client";

import { useCallback, useState } from "react";
import { useDropzone } from "react-dropzone";
import axios from "axios";
import toast from "react-hot-toast";
import { UploadCloud, FileText, Loader2 } from "lucide-react";

export default function FileUpload() {
  const [loading, setLoading] = useState(false);
  const [fileName, setFileName] = useState("");

  const onDrop = useCallback(async (acceptedFiles: File[]) => {
    if (!acceptedFiles.length) return;

    const file = acceptedFiles[0];

    if (file.type !== "application/pdf") {
      toast.error("Please upload a PDF file.");
      return;
    }

    setFileName(file.name);
    setLoading(true);

    const formData = new FormData();
    formData.append("file", file);

    try {
      const response = await axios.post("/api/upload", formData);

      toast.success("PDF uploaded successfully!");

      console.log(response.data);
    } catch (error) {
      console.error(error);
      toast.error("Upload failed.");
    } finally {
      setLoading(false);
    }
  }, []);

  const { getRootProps, getInputProps, isDragActive } =
    useDropzone({
      onDrop,
      accept: {
        "application/pdf": [".pdf"],
      },
      multiple: false,
    });

  return (
    <div
      {...getRootProps()}
      className={`mt-10 w-full max-w-2xl cursor-pointer rounded-2xl border-2 border-dashed p-10 text-center transition
      ${
        isDragActive
          ? "border-blue-500 bg-blue-950/20"
          : "border-neutral-700 hover:border-blue-500"
      }`}
    >
      <input {...getInputProps()} />

      {loading ? (
        <>
          <Loader2 className="mx-auto h-14 w-14 animate-spin text-blue-500" />
          <p className="mt-4 text-lg">Uploading PDF...</p>
        </>
      ) : (
        <>
          <UploadCloud className="mx-auto h-14 w-14 text-blue-500" />

          <h2 className="mt-5 text-2xl font-semibold">
            Drag & Drop your PDF
          </h2>

          <p className="mt-2 text-gray-400">
            or click to browse
          </p>

          {fileName && (
            <div className="mt-6 flex items-center justify-center gap-2">
              <FileText className="text-green-500" />
              <span>{fileName}</span>
            </div>
          )}
        </>
      )}
    </div>
  );
}