"use client"

import { useState, useRef, useEffect } from "react"
import { useTheme } from "next-themes"
import { MessageCircle, X, Send, Minimize2, Maximize2, Bot } from "lucide-react"
import { Button } from "@/components/ui/button"
import { motion, AnimatePresence } from "framer-motion"
import ReactMarkdown from "react-markdown"

interface Message {
  id: string
  role: "user" | "assistant"
  content: string
}

export function ChatWidget() {
  const [isOpen, setIsOpen] = useState(false)
  const [isMinimized, setIsMinimized] = useState(false)
  const [messages, setMessages] = useState<Message[]>([
    {
      id: "welcome",
      role: "assistant",
      content: "Hi there! I'm Mimi 🎀, Hafsah's AI portfolio assistant.\n\nI have complete knowledge about her professional experience, technical projects, academic achievements, and availability. Whether you're a recruiter, client, or just curious—feel free to ask me anything!\n\n**Quick questions you can ask:**\n• Is she available for internship?\n• What are her strongest skills?\n• Tell me about her BUMN project experience\n• What's her GPA and current semester?",
    },
  ])
  const [input, setInput] = useState("")
  const [isLoading, setIsLoading] = useState(false)
  const messagesEndRef = useRef<HTMLDivElement>(null)
  const { theme } = useTheme()
  const isDark = theme === "dark"

  // Auto-scroll to latest message
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" })
  }, [messages])

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!input.trim() || isLoading) return

    // Add user message
    const userMessage: Message = {
      id: Date.now().toString(),
      role: "user",
      content: input,
    }
    setMessages((prev) => [...prev, userMessage])
    setInput("")
    setIsLoading(true)

    try {
      // Call the API
      const response = await fetch("/api/chat", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          messages: [...messages, userMessage],
        }),
      })

      if (!response.ok) {
        throw new Error("Failed to get response")
      }

      const text = await response.text()

      // Add assistant message
      const assistantMessage: Message = {
        id: (Date.now() + 1).toString(),
        role: "assistant",
        content: text,
      }
      setMessages((prev) => [...prev, assistantMessage])
    } catch (error) {
      console.error("Chat error:", error)
      const errorMessage: Message = {
        id: (Date.now() + 2).toString(),
        role: "assistant",
        content: "Sorry, I encountered an error. Please try again.",
      }
      setMessages((prev) => [...prev, errorMessage])
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <>
      {/* Floating Action Button */}
      <AnimatePresence>
        {!isOpen && (
          <motion.div
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0, opacity: 0 }}
            className="fixed bottom-6 right-6 z-50"
          >
            <Button
              onClick={() => setIsOpen(true)}
              size="lg"
              className="h-16 w-16 rounded-full shadow-2xl bg-primary hover:bg-primary/90 group relative overflow-hidden"
            >
              <Bot className="h-6 w-6 text-primary-foreground group-hover:scale-110 transition-transform" />
              <span className="absolute -top-1 -right-1 h-3 w-3 bg-green-500 rounded-full animate-pulse" />
            </Button>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Chat Window */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            transition={{ type: "spring", damping: 25, stiffness: 300 }}
            className={`fixed bottom-6 right-6 z-50 w-[95vw] sm:w-[400px] ${
              isMinimized ? "h-16" : "h-[600px]"
            } flex flex-col rounded-2xl shadow-2xl border transition-all duration-300 ${
              isDark
                ? "bg-[#050a0a]/95 md:bg-background/80 md:backdrop-blur-xl border-white/10"
                : "bg-[#fdfbf7]/95 md:bg-background/80 md:backdrop-blur-xl border-foreground/10"
            }`}
          >
            {/* Header */}
            <div className="flex items-center justify-between p-4 border-b border-white/10">
              <div className="flex items-center gap-3">
                <div className="relative">
                  <Bot className="h-5 w-5 text-primary" />
                  <span className="absolute -top-1 -right-1 h-2 w-2 bg-green-500 rounded-full" />
                </div>
                <div>
                  <h3 className="font-bold text-sm">Chat with Mimi</h3>
                  <p className="text-xs text-muted-foreground">Hafsah's virtual assistant 🎀</p>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <Button
                  variant="ghost"
                  size="icon"
                  className="h-8 w-8 rounded-full"
                  onClick={() => setIsMinimized(!isMinimized)}
                >
                  {isMinimized ? <Maximize2 className="h-4 w-4" /> : <Minimize2 className="h-4 w-4" />}
                </Button>
                <Button
                  variant="ghost"
                  size="icon"
                  className="h-8 w-8 rounded-full"
                  onClick={() => setIsOpen(false)}
                >
                  <X className="h-4 w-4" />
                </Button>
              </div>
            </div>

            {/* Messages Area */}
            {!isMinimized && (
              <>
                <div className="flex-1 overflow-y-auto p-4 space-y-4">
                  {messages.length === 0 && (
                    <div className="flex flex-col items-center justify-center h-full text-center space-y-3 opacity-60">
                      <MessageCircle className="h-12 w-12 text-muted-foreground" />
                      <div>
                        <p className="font-semibold">Start a Conversation</p>
                        <p className="text-xs text-muted-foreground mt-1">
                          Ask about projects, skills, or experience
                        </p>
                      </div>
                    </div>
                  )}

                  {messages.map((message) => (
                    <div
                      key={message.id}
                      className={`flex ${message.role === "user" ? "justify-end" : "justify-start"}`}
                    >
                      <div
                        className={`max-w-[85%] rounded-2xl px-4 py-2.5 text-sm ${
                          message.role === "user"
                            ? "bg-primary text-primary-foreground"
                            : isDark
                              ? "bg-white/5 border border-white/10 text-white"
                              : "bg-black/5 border border-black/10 text-black"
                        }`}
                      >
                        <ReactMarkdown
                          components={{
                            p: ({ children }) => <span>{children}</span>,
                            strong: ({ children }) => <strong className="font-bold">{children}</strong>,
                            em: ({ children }) => <em className="italic">{children}</em>,
                          }}
                        >
                          {message.content}
                        </ReactMarkdown>
                      </div>
                    </div>
                  ))}

                  {isLoading && (
                    <div className="flex justify-start">
                      <div
                        className={`max-w-[85%] rounded-2xl px-4 py-2.5 text-sm ${
                          isDark ? "bg-white/5 border border-white/10" : "bg-black/5 border border-black/10"
                        }`}
                      >
                        <div className="flex gap-1">
                          <span className="h-2 w-2 bg-current rounded-full animate-bounce" style={{ animationDelay: "0ms" }} />
                          <span className="h-2 w-2 bg-current rounded-full animate-bounce" style={{ animationDelay: "150ms" }} />
                          <span className="h-2 w-2 bg-current rounded-full animate-bounce" style={{ animationDelay: "300ms" }} />
                        </div>
                      </div>
                    </div>
                  )}

                  <div ref={messagesEndRef} />
                </div>

                {/* Input Area */}
                <form onSubmit={handleSubmit} className="p-4 border-t border-white/10">
                  <div className="flex gap-2">
                    <input
                      value={input}
                      onChange={(e) => setInput(e.target.value)}
                      placeholder="Ask anything..."
                      className={`flex-1 px-4 py-2.5 rounded-full text-sm border focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all ${
                        isDark
                          ? "bg-white/5 border-white/10 placeholder:text-white/40"
                          : "bg-black/5 border-black/10 placeholder:text-black/40"
                      }`}
                      disabled={isLoading}
                    />
                    <Button
                      type="submit"
                      size="icon"
                      className="h-10 w-10 rounded-full shrink-0"
                      disabled={isLoading || !input.trim()}
                    >
                      <Send className="h-4 w-4" />
                    </Button>
                  </div>
                </form>
              </>
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
