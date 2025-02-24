"use client";

import { useEffect, useState } from "react";

export default function KeyShortcut() {
  // Start with a fallback value "Ctrl" that matches the server render.
  const [modifier, setModifier] = useState("Ctrl");

  useEffect(() => {
    const isMac = window.navigator.userAgent.indexOf("Mac") > -1;
    setModifier(isMac ? "⌘" : "Ctrl");
  }, []);

  return <span className="text-xs">{modifier}</span>;
}