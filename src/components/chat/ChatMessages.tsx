"use client";

import { useRef, useEffect } from "react";
import ReactMarkdown from "react-markdown";
import { Send } from "lucide-react";
import { cn } from "@/lib/cn";
import type { UIMessage } from "ai";

interface ChatMessagesProps {
  messages: UIMessage[];
  input: string;
  onInputChange: (value: string) => void;
  onSubmit: () => void;
  isLoading: boolean;
  compact?: boolean;
  starterChips?: string[];
  onChipClick?: (chip: string) => void;
}

export default function ChatMessages({
  messages,
  input,
  onInputChange,
  onSubmit,
  isLoading,
  compact = false,
  starterChips,
  onChipClick,
}: ChatMessagesProps) {
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages]);

  const hasMessages = messages.length > 0;

  return (
    <div className={cn("flex flex-col", compact ? "h-full" : "h-[500px]")}>
      <div
        ref={scrollRef}
        className={cn(
          "flex-1 overflow-y-auto px-4 py-4 space-y-4",
          compact ? "text-sm" : "text-base"
        )}
      >
        {!hasMessages && starterChips && (
          <div className="flex h-full flex-col items-center justify-center gap-4">
            <p className="text-sm text-near-black/50">
              Try one of these to get started:
            </p>
            <div className="flex flex-wrap justify-center gap-2">
              {starterChips.map((chip) => (
                <button
                  key={chip}
                  onClick={() => onChipClick?.(chip)}
                  className="rounded-full border border-coral/30 bg-coral/5 px-4 py-2 text-sm text-coral transition-colors hover:bg-coral hover:text-white"
                >
                  {chip}
                </button>
              ))}
            </div>
          </div>
        )}

        {messages.map((message) => (
          <div
            key={message.id}
            className={cn(
              "flex",
              message.role === "user" ? "justify-end" : "justify-start"
            )}
          >
            <div
              className={cn(
                "max-w-[80%] rounded-2xl px-4 py-3",
                message.role === "user"
                  ? "bg-coral text-white rounded-br-md"
                  : "bg-light-gray text-near-black rounded-bl-md"
              )}
            >
              {message.parts.map((part, i) => {
                if (part.type === "text") {
                  if (message.role === "assistant") {
                    return (
                      <div key={`${message.id}-${i}`} className="chat-markdown">
                        <ReactMarkdown>{part.text}</ReactMarkdown>
                      </div>
                    );
                  }
                  return (
                    <span key={`${message.id}-${i}`} className="whitespace-pre-wrap">
                      {part.text}
                    </span>
                  );
                }
                return null;
              })}
            </div>
          </div>
        ))}

        {isLoading && messages[messages.length - 1]?.role === "user" && (
          <div className="flex justify-start">
            <div className="rounded-2xl rounded-bl-md bg-light-gray px-4 py-3">
              <TypingIndicator />
            </div>
          </div>
        )}
      </div>

      <form
        onSubmit={(e) => {
          e.preventDefault();
          onSubmit();
        }}
        className="flex items-center gap-2 border-t border-light-gray px-4 py-3"
      >
        <input
          value={input}
          onChange={(e) => onInputChange(e.target.value)}
          placeholder="Ask about Anthony's experience..."
          className={cn(
            "flex-1 rounded-xl border border-light-gray bg-white px-4 py-2 text-near-black placeholder:text-near-black/40 outline-none transition-colors focus:border-coral",
            compact ? "text-sm" : "text-base"
          )}
          disabled={isLoading}
        />
        <button
          type="submit"
          disabled={!input.trim() || isLoading}
          className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-coral text-white transition-colors hover:bg-coral-dark disabled:opacity-40 disabled:cursor-not-allowed"
        >
          <Send size={18} />
        </button>
      </form>
    </div>
  );
}

function TypingIndicator() {
  return (
    <div className="flex items-center gap-1">
      {[0, 1, 2].map((i) => (
        <span
          key={i}
          className="inline-block h-2 w-2 rounded-full bg-near-black/30 animate-bounce"
          style={{ animationDelay: `${i * 150}ms` }}
        />
      ))}
    </div>
  );
}
