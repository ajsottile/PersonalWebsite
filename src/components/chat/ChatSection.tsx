"use client";

import { useState } from "react";
import { useChat } from "@ai-sdk/react";
import { motion } from "framer-motion";
import { Bot, Sparkles } from "lucide-react";
import ChatMessages from "./ChatMessages";

const STARTER_CHIPS = [
  "What tech stack do you use?",
  "Tell me about CloudHack",
  "What's your data engineering experience?",
];

export default function ChatSection() {
  const [input, setInput] = useState("");
  const { messages, sendMessage, status } = useChat();

  const isLoading = status === "streaming" || status === "submitted";

  const handleSubmit = () => {
    if (!input.trim()) return;
    sendMessage({ text: input });
    setInput("");
  };

  const handleChipClick = (chip: string) => {
    sendMessage({ text: chip });
  };

  return (
    <section id="chat" className="bg-white py-24">
      <div className="mx-auto max-w-4xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-4 flex items-center justify-center gap-3"
        >
          <div className="flex h-12 w-12 items-center justify-center rounded-full bg-coral/10">
            <Bot className="h-6 w-6 text-coral" />
          </div>
          <h2 className="text-3xl font-bold text-navy md:text-4xl">
            Ask My AI Assistant
          </h2>
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="mb-10 text-center text-near-black/60"
        >
          <Sparkles className="mr-1 inline h-4 w-4 text-coral" />
          Powered by OpenAI — ask anything about my experience, skills, or projects
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="overflow-hidden rounded-2xl border border-light-gray bg-white shadow-lg"
        >
          <div className="flex items-center gap-2 border-b border-light-gray bg-light-gray/30 px-4 py-3">
            <div className="h-3 w-3 rounded-full bg-coral/60" />
            <div className="h-3 w-3 rounded-full bg-rose/40" />
            <div className="h-3 w-3 rounded-full bg-mauve/40" />
            <span className="ml-2 text-xs font-medium text-near-black/40">
              ai-assistant — gpt-4o-mini
            </span>
          </div>

          <ChatMessages
            messages={messages}
            input={input}
            onInputChange={setInput}
            onSubmit={handleSubmit}
            isLoading={isLoading}
            starterChips={STARTER_CHIPS}
            onChipClick={handleChipClick}
          />
        </motion.div>
      </div>
    </section>
  );
}
