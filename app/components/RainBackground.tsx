"use client";

import { useEffect } from "react";

export default function RainBackground() {
  useEffect(() => {
    console.log("RainBackground effect loaded");
  }, []);

  return (
    <div className="absolute inset-0 -z-10 bg-gradient-to-b from-blue-200 to-blue-400">
      {/* Dummy background */}
    </div>
  );
}
