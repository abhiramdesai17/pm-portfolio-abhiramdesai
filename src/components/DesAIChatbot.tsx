"use client";

import { useState, useRef, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardFooter } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { ScrollArea } from "@/components/ui/scroll-area";
import { MessageCircle, X, Send, Sparkles, Loader2 } from "lucide-react";
import { desAIChat } from "@/ai/flows/des-ai-chat-flow";
import { cn } from "@/lib/utils";

type Message = {
  role: "user" | "model";
  text: string;
};

export function DesAIChatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    { role: "model", text: "Hi! I'm DES.AI. I know everything about Abhiram's work and experience. How can I help you today?" }
  ]);
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  // Auto-scroll to bottom whenever messages or loading state changes
  useEffect(() => {
    if (scrollRef.current) {
      const scrollContainer = scrollRef.current.querySelector('[data-radix-scroll-area-viewport]');
      if (scrollContainer) {
        scrollContainer.scrollTo({
          top: scrollContainer.scrollHeight,
          behavior: "smooth"
        });
      }
    }
  }, [messages, isLoading, isOpen]);

  const handleSend = async () => {
    if (!input.trim() || isLoading) return;

    const currentInput = input;
    const userMessage: Message = { role: "user", text: currentInput };
    
    // Capture the history to pass to the AI flow
    const historyBefore = [...messages];
    
    // Update UI immediately with user's message
    setMessages((prev) => [...prev, userMessage]);
    setInput("");
    setIsLoading(true);

    try {
      // Pass full conversation history to the AI flow for multi-turn support
      const result = await desAIChat({
        messages: historyBefore,
        userInput: currentInput
      });
      
      // Append AI's response to the conversation history
      setMessages((prev) => [...prev, { role: "model", text: result.response }]);
    } catch (error) {
      console.error("Chat error:", error);
      setMessages((prev) => [...prev, { role: "model", text: "I encountered a minor glitch. Please try again or email Abhiram at abhiramdesai.99@gmail.com!" }]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="fixed bottom-6 right-6 z-[100] md:bottom-10 md:right-10">
      {isOpen ? (
        <Card className="w-[calc(100vw-3rem)] sm:w-[400px] h-[600px] max-h-[80vh] shadow-2xl flex flex-col overflow-hidden border-border/40 animate-in slide-in-from-bottom-10 duration-500 ease-out glass">
          <CardHeader className="bg-primary text-primary-foreground p-5 flex flex-row items-center justify-between space-y-0 border-b border-primary-foreground/10">
            <div className="flex items-center gap-3">
              <div className="bg-background/20 p-2 rounded-xl backdrop-blur-sm">
                <Sparkles size={20} className="text-primary-foreground" />
              </div>
              <div>
                <CardTitle className="text-xl font-headline font-bold leading-none tracking-tight">DES.AI</CardTitle>
                <div className="flex items-center gap-1.5 mt-1.5">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                  <p className="text-[10px] uppercase tracking-[0.2em] font-bold opacity-80">Online Assistant</p>
                </div>
              </div>
            </div>
            <Button 
              variant="ghost" 
              size="icon" 
              onClick={() => setIsOpen(false)} 
              className="hover:bg-primary-foreground/10 text-primary-foreground rounded-full h-10 w-10 transition-colors"
            >
              <X size={22} />
              <span className="sr-only">Close Chat</span>
            </Button>
          </CardHeader>

          <CardContent className="flex-1 p-0 bg-background/95">
            <ScrollArea className="h-full p-6" ref={scrollRef}>
              <div className="space-y-6 pb-6">
                {messages.map((m, i) => (
                  <div key={i} className={cn("flex flex-col animate-in fade-in duration-300", m.role === "user" ? "items-end" : "items-start")}>
                    <div className={cn(
                      "max-w-[85%] rounded-2xl p-4 text-[14px] leading-relaxed shadow-sm",
                      m.role === "user" 
                        ? "bg-primary text-primary-foreground rounded-tr-none" 
                        : "bg-muted/40 text-foreground border border-border/30 rounded-tl-none backdrop-blur-sm"
                    )}>
                      {m.text}
                    </div>
                    <span className="text-[9px] uppercase tracking-widest font-bold mt-2 opacity-30 px-1">
                      {m.role === "user" ? "You" : "DES.AI"}
                    </span>
                  </div>
                ))}
                {isLoading && (
                  <div className="flex flex-col items-start animate-in fade-in duration-300">
                    <div className="bg-muted/40 text-foreground border border-border/30 rounded-2xl rounded-tl-none p-4 flex items-center gap-3 backdrop-blur-sm">
                      <div className="flex gap-1">
                        <span className="w-1.5 h-1.5 bg-primary/40 rounded-full animate-bounce [animation-delay:-0.3s]" />
                        <span className="w-1.5 h-1.5 bg-primary/40 rounded-full animate-bounce [animation-delay:-0.15s]" />
                        <span className="w-1.5 h-1.5 bg-primary/40 rounded-full animate-bounce" />
                      </div>
                      <span className="text-xs font-bold tracking-wider opacity-60">Thinking...</span>
                    </div>
                  </div>
                )}
              </div>
            </ScrollArea>
          </CardContent>

          <CardFooter className="p-4 border-t border-border/20 bg-background/50 backdrop-blur-md">
            <div className="flex w-full gap-2 items-center">
              <Input
                placeholder="Ask about my work..."
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyPress={(e) => e.key === "Enter" && handleSend()}
                className="rounded-xl bg-muted/30 border-border/50 h-12 focus-visible:ring-primary focus-visible:ring-offset-0 text-sm"
              />
              <Button 
                onClick={handleSend} 
                disabled={isLoading || !input.trim()} 
                size="icon" 
                className="rounded-xl h-12 w-12 shrink-0 bg-primary hover:bg-primary/90 transition-all active:scale-95 disabled:opacity-50"
              >
                <Send size={20} />
              </Button>
            </div>
          </CardFooter>
        </Card>
      ) : (
        <Button
          onClick={() => setIsOpen(true)}
          className="h-16 w-16 md:h-20 md:w-20 rounded-2xl shadow-2xl bg-primary hover:bg-primary/90 text-primary-foreground group transition-all duration-500 hover:scale-110 active:scale-95 border-2 border-white/10"
        >
          <div className="relative">
            <MessageCircle size={32} className="group-hover:rotate-12 transition-transform duration-300" />
            <span className="absolute -top-3 -right-3 flex h-5 w-5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-5 w-5 bg-emerald-500 border-2 border-primary"></span>
            </span>
          </div>
          <span className="sr-only">Open DES.AI Chat</span>
        </Button>
      )}
    </div>
  );
}
