"use client";

import { Button } from "@/components/ui/button";
import { Copy, Check } from "lucide-react";
import { useState } from "react";

import React from "react";

const CodeBlock = ({
  code,
  language = "javascript",
  id,
}: {
  code: string;
  language?: string;
  id: string;
}) => {
  const [copiedId, setCopiedId] = useState<string | null>(null);

  const copyToClipboard = (text: string, id: string) => {
    navigator.clipboard.writeText(text);
    setCopiedId(id);
    setTimeout(() => setCopiedId(null), 2000);
  };

  return (
    <div className="relative group">
      <div className="absolute top-2 right-2 flex items-center gap-2">
        <span className="text-xs text-slate-400 uppercase">{language}</span>
        <Button
          size="sm"
          variant="ghost"
          className="h-8 w-8 p-0"
          onClick={() => copyToClipboard(code, id)}>
          {copiedId === id ? (
            <Check className="w-4 h-4 text-green-500" />
          ) : (
            <Copy className="w-4 h-4 text-slate-400" />
          )}
        </Button>
      </div>
      <pre className="bg-slate-900 text-slate-100 p-4 rounded-lg overflow-x-auto">
        <code>{code}</code>
      </pre>
    </div>
  );
};

export default CodeBlock;
