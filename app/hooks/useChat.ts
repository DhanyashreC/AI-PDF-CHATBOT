"use client";

import { useState } from "react";
import { Message } from "../types/message";

export function useChat() {
  const [messages, setMessages] = useState<Message[]>([]);

  return {
    messages,
    setMessages,
  };
}