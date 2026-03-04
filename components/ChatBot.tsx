"use client"

import { useState, useRef, useEffect } from "react"
import { X, Send, Bot } from "lucide-react"
import { findBestMatch } from "@/lib/chatbot-data"

interface Message {
  id: number
  text: string
  sender: 'user' | 'bot'
  isEmail?: boolean
}

const QUICK_REPLIES = [
  "What is KringP?",
  "I'm a Business",
  "I'm a Creator",
  "Payment Help",
]

const WELCOME = "Hi! I'm KringP Assistant 👋 How can I help you today? Ask me anything about the platform!"

export default function ChatBot() {
  const [isOpen, setIsOpen] = useState(false)
  const [messages, setMessages] = useState<Message[]>([
    { id: 0, text: WELCOME, sender: 'bot' }
  ])
  const [input, setInput] = useState("")
  const [isTyping, setIsTyping] = useState(false)
  const messagesEndRef = useRef<HTMLDivElement>(null)
  const idCounter = useRef(1)

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' })
  }, [messages, isTyping])

  const sendMessage = (text: string) => {
    if (!text.trim() || isTyping) return

    const userMsg: Message = { id: idCounter.current++, text, sender: 'user' }
    setMessages(prev => [...prev, userMsg])
    setInput("")
    setIsTyping(true)

    setTimeout(() => {
      const match = findBestMatch(text)
      let botMsg: Message

      if (match) {
        botMsg = { id: idCounter.current++, text: match.answer, sender: 'bot' }
      } else {
        botMsg = {
          id: idCounter.current++,
          text: "I couldn't find a perfect answer for that. Please email our support team and we'll help you out!",
          sender: 'bot',
          isEmail: true,
        }
      }

      setMessages(prev => [...prev, botMsg])
      setIsTyping(false)
    }, 500)
  }

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey && !isTyping) {
      e.preventDefault()
      sendMessage(input)
    }
  }

  return (
    <>
      {/* Floating Button */}
      <button
        onClick={() => setIsOpen(prev => !prev)}
        className="fixed bottom-6 right-6 z-50 w-14 h-14 rounded-full bg-gradient-orange-purple shadow-lg flex items-center justify-center hover:opacity-90 transition-all duration-200 hover:scale-110"
        aria-label="Open chat"
      >
        {isOpen
          ? <X className="w-6 h-6 text-white" />
          : <Bot className="w-6 h-6 text-white" />
        }
      </button>

      {/* Chat Window */}
      {isOpen && (
        <div className="fixed bottom-24 right-6 z-50 w-[350px] h-[480px] bg-card border border-border rounded-2xl shadow-2xl flex flex-col overflow-hidden animate-fade-in-up">

          {/* Header */}
          <div className="bg-gradient-orange-purple px-4 py-3 flex items-center gap-3">
            <div className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center">
              <Bot className="w-5 h-5 text-white" />
            </div>
            <div>
              <p className="text-white font-semibold text-sm">KringP Assistant</p>
              <p className="text-white/70 text-xs">Usually replies instantly</p>
            </div>
          </div>

          {/* Messages */}
          <div className="flex-1 overflow-y-auto p-4 space-y-3">
            {messages.map(msg => (
              <div key={msg.id} className={`flex ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}>
                <div className={`max-w-[80%] px-4 py-2.5 rounded-2xl text-sm leading-relaxed ${
                  msg.sender === 'user'
                    ? 'bg-gradient-orange-purple text-white rounded-br-sm'
                    : 'bg-muted text-foreground rounded-bl-sm'
                }`}>
                  {msg.text}
                  {msg.isEmail && (
                    <a
                      href="mailto:hello@kringp.com"
                      className="block mt-1 font-semibold text-primary underline"
                    >
                      hello@kringp.com
                    </a>
                  )}
                </div>
              </div>
            ))}

            {/* Typing Indicator */}
            {isTyping && (
              <div className="flex justify-start">
                <div className="bg-muted px-4 py-3 rounded-2xl rounded-bl-sm flex gap-1 items-center">
                  <span className="w-2 h-2 bg-muted-foreground/50 rounded-full animate-bounce [animation-delay:0ms]" />
                  <span className="w-2 h-2 bg-muted-foreground/50 rounded-full animate-bounce [animation-delay:150ms]" />
                  <span className="w-2 h-2 bg-muted-foreground/50 rounded-full animate-bounce [animation-delay:300ms]" />
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Quick Replies — visible only on first open */}
          {messages.length === 1 && (
            <div className="px-4 pb-2 flex flex-wrap gap-2">
              {QUICK_REPLIES.map(qr => (
                <button
                  key={qr}
                  onClick={() => sendMessage(qr)}
                  disabled={isTyping}
                  className="text-xs px-3 py-1.5 rounded-full border border-primary/30 text-primary hover:bg-primary/10 transition-colors disabled:opacity-40"
                >
                  {qr}
                </button>
              ))}
            </div>
          )}

          {/* Input */}
          <div className="px-4 py-3 border-t border-border flex gap-2">
            <input
              type="text"
              value={input}
              onChange={e => setInput(e.target.value)}
              onKeyDown={handleKeyDown}
              placeholder="Ask me anything..."
              className="flex-1 text-sm bg-muted rounded-xl px-4 py-2 outline-none focus:ring-2 focus:ring-primary/30 text-foreground placeholder:text-muted-foreground"
            />
            <button
              onClick={() => sendMessage(input)}
              disabled={!input.trim() || isTyping}
              className="w-9 h-9 rounded-xl bg-gradient-orange-purple flex items-center justify-center hover:opacity-90 transition-colors disabled:opacity-40"
            >
              <Send className="w-4 h-4 text-white" />
            </button>
          </div>
        </div>
      )}
    </>
  )
}
