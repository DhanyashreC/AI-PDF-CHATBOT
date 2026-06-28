"use client";

import { useState } from "react";

export function useUpload() {
  const [loading, setLoading] = useState(false);

  return {
    loading,
    setLoading,
  };
}