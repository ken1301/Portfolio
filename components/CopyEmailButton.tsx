"use client";

import { Check, Copy } from "lucide-react";
import { useState } from "react";

export function CopyEmailButton() {
  const [copied, setCopied] = useState(false);
  const email = "doletuankiet06@gmail.com";

  async function copyEmail() {
    await navigator.clipboard.writeText(email);
    setCopied(true);
    window.setTimeout(() => setCopied(false), 1800);
  }

  return (
    <button className="copy-button" type="button" onClick={copyEmail}>
      {copied ? <Check size={13} /> : <Copy size={13} />}
      {copied ? "Copied" : "Copy email"}
    </button>
  );
}
