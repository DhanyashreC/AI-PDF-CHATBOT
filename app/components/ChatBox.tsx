"use client";

import { useState } from "react";
import axios from "axios";

export default function ChatBox() {
  const [question, setQuestion] = useState("");
  const [answer, setAnswer] = useState("");

  const askQuestion = async () => {
    if (!question.trim()) return;

    try {
      const res = await axios.post("/api/chat", {
        question,
      });

      setAnswer(res.data.answer);
    } catch (error) {
      console.error(error);
      setAnswer("Something went wrong.");
    }
  };

  return (
    <div className="mt-10 w-full max-w-3xl mx-auto">
      <h2 className="text-2xl font-bold mb-4">
        Ask Questions About Your PDF
      </h2>

      <div className="flex gap-3">
        <input
          type="text"
          value={question}
          onChange={(e) => setQuestion(e.target.value)}
          placeholder="Ask anything about your PDF..."
          className="flex-1 rounded-lg border border-gray-700 bg-black px-4 py-3 text-white"
        />

        <button
          onClick={askQuestion}
          className="rounded-lg bg-blue-600 px-6 py-3 text-white"
        >
          Ask
        </button>
      </div>

      {answer && (
        <div className="mt-6 rounded-lg border border-gray-700 p-4">
          <h3 className="font-bold mb-2">Answer</h3>
          <p>{answer}</p>
        </div>
      )}
    </div>
  );
}