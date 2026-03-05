"use client";

import { useState, useRef, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardFooter } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Badge } from "@/components/ui/badge";
import { MessageCircle, X, Send, Sparkles, Loader2, User } from "lucide-react";
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

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTo({
        top: scrollRef.current.scrollHeight,
        behavior: "smooth"
      });
    }
  }, [messages, isOpen]);

  const handleSend = async () => {
    if (!input.trim() || isLoading) return;

    const userMessage: Message = { role: "user", text: input };
    setMessages((prev) => [...prev, userMessage]);
    setInput("");
    setIsLoading(true);

    try {
      const result = await desAIChat({
        messages: messages,
        userInput: input
      });
      
      setMessages((prev) => [...prev, { role: "model", text: result.response }]);
    } catch (error) {
      console.error("Chat error:", error);
      setMessages((prev) => [...prev, { role: "model", text: "I'm having a little trouble connecting right now. Please try again or reach out to Abhiram directly!" }]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="fixed bottom-8 right-8 z-[100]">
      {isOpen ? (
        <Card className="w-[380px] h-[550px] shadow-2xl flex flex-col overflow-hidden border-border/40 animate-in slide-in-from-bottom-4 duration-300">
          <CardHeader className="bg-foreground text-background p-4 flex flex-row items-center justify-between space-y-0">
            <div className="flex items-center gap-3">
              <div className="bg-accent p-2 rounded-full">
                <Sparkles size={18} className="text-accent-foreground" />
              </div>
              <div>
                <CardTitle className="text-lg font-headline font-bold leading-none tracking-tight">DES.AI</CardTitle>
                <p className="text-[10px] uppercase tracking-widest opacity-70 mt-1">Portfolio Assistant</p>
              </div>
            </div>
            <Button variant="ghost" size="icon" onClick={() => setIsOpen(false)} className="hover:bg-white/10 text-white rounded-full">
              <X size={20} />
            </Button>
          </CardHeader>

          <CardContent className="flex-1 p-0 bg-background">
            <ScrollArea className="h-full p-4" ref={scrollRef}>
              <div className="space-y-4 pb-4">
                {messages.map((m, i) => (
                  <div key={i} className={cn("flex", m.role === "user" ? "justify-end" : "justify-start")}>
                    <div className={cn(
                      "max-w-[85%] rounded-2xl p-4 text-sm leading-relaxed",
                      m.role === "user" 
                        ? "bg-accent text-accent-foreground rounded-tr-none" 
                        : "bg-muted/50 text-foreground border border-border/50 rounded-tl-none"
                    )}>
                      {m.text}
                    </div>
                  </div>
                ))}
                {isLoading && (
                  <div className="flex justify-start">
                    <div className="bg-muted/50 text-foreground border border-border/50 rounded-2xl rounded-tl-none p-4 flex items-center gap-2">
                      <Loader2 size={16} className="animate-spin text-accent" />
                      <span className="text-xs font-medium italic opacity-60">DES.AI is thinking...</span>
                    </div>
                  </div>
                )}
              </div>
            </ScrollArea>
          </CardContent>

          <CardFooter className="p-4 border-t border-border/20 bg-card">
            <div className="flex w-full gap-2">
              <Input
                placeholder="Ask me about Abhiram..."
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyPress={(e) => e.key === "Enter" && handleSend()}
                className="rounded-full bg-background border-border/50 focus-visible:ring-accent"
              />
              <Button onClick={handleSend} disabled={isLoading} size="icon" className="rounded-full shrink-0 bg-foreground hover:bg-foreground/90">
                <Send size={18} />
              </Button>
            </div>
          </CardFooter>
        </Card>
      ) : (
        <Button
          onClick={() => setIsOpen(true)}
          className="h-16 w-16 rounded-full shadow-2xl bg-foreground hover:bg-foreground/90 text-background group transition-all hover:scale-110 active:scale-95"
        >
          <div className="relative">
            <MessageCircle size={32} />
            <span className="absolute -top-1 -right-1 flex h-3 w-3">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent opacity-75"></span>
              <span className="relative inline-flex rounded-full h-3 w-3 bg-accent"></span>
            </span>
          </div>
          <span className="sr-only">Open Chatbot</span>
        </Button>
      )}
    </div>
  );
}
