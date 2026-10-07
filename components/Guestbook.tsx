"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, BriefcaseBusiness, Mail, MessageSquareText } from "lucide-react";
import { useState } from "react";

type Message = {
  author: "Visitor" | "Nahian";
  text: string;
  time: string;
  color: "blue" | "neutral";
};

const starterMessages: Message[] = [
  {
    author: "Visitor",
    text: "Hey Nahian, your work looks thoughtful.",
    time: "09:41",
    color: "blue",
  },
  {
    author: "Nahian",
    text: "Thanks! What are you building?",
    time: "09:42",
    color: "neutral",
  },
];

export default function Guestbook() {
  const [messages, setMessages] = useState<Message[]>(starterMessages);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (!message.trim()) return;

    const newMessage: Message = {
      author: "Visitor",
      text: message.trim(),
      time: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }),
      color: "blue",
    };

    const replyMessage: Message = {
      author: "Nahian",
      text: `Thanks${name ? `, ${name}` : ""}! I’d love to hear more about it.`,
      time: "now",
      color: "neutral",
    };

    setMessages((current) => [...current, newMessage, replyMessage]);
    setName("");
    setEmail("");
    setMessage("");
  };

  return (
    <section id="contact" className="scroll-mt-24 pt-12">
      <div className="space-y-6 rounded-[24px] border border-[#ececec] bg-[#fff] p-4 shadow-[0_20px_40px_rgba(17,17,17,0.015)] sm:p-5">
        <div className="flex items-center justify-between gap-3">
          <div>
            <p className="text-[10px] uppercase tracking-[0.2em] text-[#8a8a8a]">Guestbook</p>
            <p className="mt-2 text-[14px] text-[#333333]">Are you building something interesting?</p>
          </div>
          <div className="rounded-full border border-[#ececec] bg-[#fafafa] p-2 text-[#111111]">
            <MessageSquareText size={15} />
          </div>
        </div>

        <div className="space-y-3">
          {messages.map((msg, index) => (
            <motion.div
              key={`${msg.author}-${msg.text}-${index}`}
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.2 }}
              className={`flex ${msg.author === "Visitor" ? "justify-end" : "justify-start"}`}
            >
              <div
                className={`max-w-[80%] rounded-[14px] px-3 py-2 text-[12px] leading-5 ${
                  msg.color === "blue"
                    ? "bg-[#0a84ff] text-white"
                    : "border border-[#ededed] bg-[#f5f5f5] text-[#2f2f2f]"
                }`}
              >
                <div className="mb-1 flex items-center justify-between gap-3">
                  <span className="font-medium">{msg.author}</span>
                  <span className="text-[9px] opacity-80">{msg.time}</span>
                </div>
                <p>{msg.text}</p>
              </div>
            </motion.div>
          ))}
        </div>

        <form onSubmit={handleSubmit} className="space-y-3 pt-2">
          <div className="grid gap-3 sm:grid-cols-2">
            <label className="block">
              <span className="mb-1 block text-[10px] uppercase tracking-[0.16em] text-[#7b7b7b]">Name</span>
              <input
                value={name}
                onChange={(event) => setName(event.target.value)}
                className="w-full rounded-[12px] border border-[#eaeaea] bg-[#fafafa] px-3 py-2 text-[12px] text-[#111111] outline-none transition-colors focus:border-[#c9d8ff]"
                placeholder="Your name"
              />
            </label>
            <label className="block">
              <span className="mb-1 block text-[10px] uppercase tracking-[0.16em] text-[#7b7b7b]">Email</span>
              <input
                type="email"
                value={email}
                onChange={(event) => setEmail(event.target.value)}
                className="w-full rounded-[12px] border border-[#eaeaea] bg-[#fafafa] px-3 py-2 text-[12px] text-[#111111] outline-none transition-colors focus:border-[#c9d8ff]"
                placeholder="name@example.com"
              />
            </label>
          </div>

          <label className="block">
            <span className="mb-1 block text-[10px] uppercase tracking-[0.16em] text-[#7b7b7b]">Message</span>
            <textarea
              value={message}
              onChange={(event) => setMessage(event.target.value)}
              rows={4}
              className="w-full rounded-[12px] border border-[#eaeaea] bg-[#fafafa] px-3 py-2 text-[12px] text-[#111111] outline-none transition-colors focus:border-[#c9d8ff]"
              placeholder="Tell me about your project or idea."
            />
          </label>

          <button
            type="submit"
            className="inline-flex items-center gap-2 rounded-full bg-[#111111] px-4 py-2 text-[10px] uppercase tracking-[0.16em] text-white transition-colors hover:bg-[#212121]"
          >
            Send message
            <ArrowUpRight size={12} />
          </button>
        </form>

        <div className="flex flex-wrap gap-2 pt-3">
          <a href="mailto:nahiansavage9@gmail.com" className="inline-flex items-center gap-2 rounded-full border border-[#eaeaea] bg-white px-3 py-2 text-[10px] uppercase tracking-[0.16em] text-[#111111] hover:bg-[#fafafa]">
            <Mail size={12} />
            Email me
          </a>
          <a href="https://www.linkedin.com/in/nahian-rahman-chayon/" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-full border border-[#eaeaea] bg-white px-3 py-2 text-[10px] uppercase tracking-[0.16em] text-[#111111] hover:bg-[#fafafa]">
            <BriefcaseBusiness size={12} />
            Connect on LinkedIn
          </a>
          <a href="https://github.com/nahianchayon" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-full border border-[#eaeaea] bg-white px-3 py-2 text-[10px] uppercase tracking-[0.16em] text-[#111111] hover:bg-[#fafafa]">
            <MessageSquareText size={12} />
            View GitHub
          </a>
        </div>
      </div>
    </section>
  );
}
