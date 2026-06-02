import { useState, useEffect, useRef } from "react";
import { GoogleGenerativeAI } from "@google/generative-ai";
import { MessageCircle, X, ArrowUp } from "lucide-react";

const genAI = new GoogleGenerativeAI(import.meta.env.VITE_GEMINI_API_KEY);
const model = genAI.getGenerativeModel({
  model: "gemini-2.5-flash",
  systemInstruction: `You are APEX, a knowledgeable and premium health
  concierge for APEXFORM — a concierge longevity and performance medicine
  clinic.

  Your personality: warm but precise, confident, like a brilliant friend
  who happens to be a doctor. Never robotic. Never generic.

  You help potential clients understand:
  - Our 6 services: Bloodwork, IV Therapy, Peptides, Hormone Optimization,
    Recovery, Longevity protocols
  - How our process works: intake → bloodwork → custom protocol
  - What results people typically experience
  - Pricing: premium concierge medicine, typically $200-500/month
    depending on protocol
  - Who we serve: executives, athletes, founders, high performers 35-60
  - How to book: direct them to click "Book Your Free Call"

  Rules:
  - Never diagnose or prescribe
  - Keep responses concise (2-4 sentences max unless they ask for detail)
  - If asked something complex and medical say "That's exactly the kind
    of thing we'd assess in your bloodwork panel"
  - Always end with a subtle nudge toward booking when appropriate
  - If asked about cost, be transparent about the premium range
    without being salesy
  - Speak as part of the APEXFORM team using "we" and "our team"
  - If asked anything completely unrelated to health or APEXFORM,
    politely steer back: "I'm best equipped to help with anything
    health and performance related — what goals are you working toward?"`,
});

interface Message {
  role: "user" | "model" | "error";
  content: string;
}

export function ChatBot({ onBookCall }: { onBookCall?: () => void }) {
  const [uiMessages, setUiMessages] = useState<Message[]>([
    {
      role: "model",
      content: "Hey — I'm APEX, your health concierge. Whether you're curious about our protocols, want to know if we're the right fit, or just have questions about longevity medicine — I'm here. What's on your mind?",
    },
  ]);
  const [apiHistory, setApiHistory] = useState<any[]>([]);
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [hasOpened, setHasOpened] = useState(false);
  const [sessionCount, setSessionCount] = useState(0);
  const [isCooldown, setIsCooldown] = useState(false);
  
  const scrollRef = useRef<HTMLDivElement>(null);

  // Daily Limit Logic
  const checkDailyLimit = () => {
    const today = new Date().toISOString().split('T')[0];
    const stored = localStorage.getItem("apex_chat_count");
    if (stored) {
      const { count, date } = JSON.parse(stored);
      if (date === today) {
        return count;
      }
    }
    return 0;
  };

  const incrementDailyLimit = () => {
    const today = new Date().toISOString().split('T')[0];
    const count = checkDailyLimit() + 1;
    localStorage.setItem("apex_chat_count", JSON.stringify({ count, date: today }));
  };

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [uiMessages, isLoading]);

  const handleSend = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim() || isLoading || isCooldown || sessionCount >= 10) return;

    // Check Daily Limit
    if (checkDailyLimit() >= 20) {
      setUiMessages((prev) => [
        ...prev,
        { role: "model", content: "You've reached today's limit for free consultations. To continue, book a call with our team directly — we'd love to connect." }
      ]);
      return;
    }

    const userMessage = input.trim();
    setInput("");
    
    // Update UI and API history with User message
    const newUserUiMsg: Message = { role: "user", content: userMessage };
    const newUserApiMsg = { role: "user", parts: [{ text: userMessage }] };
    
    setUiMessages((prev) => [...prev, newUserUiMsg]);
    // We add to apiHistory after the API call finishes to avoid race conditions or use functional update
    
    setIsLoading(true);
    setIsCooldown(true);
    setSessionCount(prev => prev + 1);

    // Cooldown
    setTimeout(() => setIsCooldown(false), 2000);

    try {
      const chat = model.startChat({ history: apiHistory.slice(-10) });
      const result = await chat.sendMessage(userMessage);
      const text = result.response.text();

      const newModelUiMsg: Message = { role: "model", content: text };
      const newModelApiMsg = { role: "model", parts: [{ text: text }] };

      setUiMessages((prev) => [...prev, newModelUiMsg]);
      setApiHistory((prev) => [...prev, newUserApiMsg, newModelApiMsg]);

      incrementDailyLimit();
    } catch (error: any) {
      const errorMessage = error.message || "I'm experiencing a slight connection issue. Could you try that again?";
      setUiMessages((prev) => [
        ...prev,
        { role: "error", content: `Error: ${errorMessage}` },
      ]);
    } finally {
      setIsLoading(false);
    }
  };

  const toggleChat = () => {
    setIsOpen(!isOpen);
    if (!hasOpened) setHasOpened(true);
  };

  return (
    <>
      {/* Floating Button */}
      <button
        onClick={toggleChat}
        className="fixed bottom-6 right-6 h-14 w-14 flex items-center justify-center rounded-full bg-[#0A0A0B] border-2 border-[#C9A84C]/40 text-[#C9A84C] hover:border-[#C9A84C] hover:shadow-[0_0_20px_rgba(201,168,76,0.3)] transition-all duration-300 z-50 cursor-pointer group"
        aria-label="Toggle AI Concierge"
      >
        {!hasOpened && !isOpen && (
          <div className="w-3 h-3 bg-red-500 rounded-full absolute top-0 right-0 border-2 border-[#0A0A0B]" />
        )}
        {isOpen ? <X className="h-6 w-6" /> : <MessageCircle className="h-6 w-6 group-hover:scale-110 transition-transform" />}
      </button>

      {/* Chat Panel */}
      {isOpen && (
        <div className="fixed bottom-24 right-6 w-96 h-[580px] bg-[#0A0A0B]/95 backdrop-blur-xl border border-[rgba(201,168,76,0.2)] rounded-2xl shadow-[0_0_60px_rgba(201,168,76,0.08)] flex flex-col overflow-hidden animate-in fade-in slide-in-from-bottom-4 duration-300 z-50">
          {/* Header */}
          <div className="p-4 border-b border-[#C9A84C]/20 flex items-center justify-between bg-[#0A0A0B]">
            <div className="flex items-center gap-3">
              <div className="w-2 h-2 rounded-full bg-[#C9A84C] animate-pulse shadow-[0_0_8px_rgba(201,168,76,0.8)]" />
              <div>
                <span className="font-bold text-[#C9A84C] tracking-widest text-sm">APEX</span>
                <span className="ml-2 text-gray-500 text-xs font-medium uppercase tracking-tighter">Health Concierge</span>
              </div>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="text-gray-500 hover:text-white transition-colors cursor-pointer"
            >
              <X className="h-5 w-5" />
            </button>
          </div>

          {/* Messages */}
          <div
            ref={scrollRef}
            className="flex-1 overflow-y-auto p-4 space-y-6 scroll-smooth"
          >
            {uiMessages.map((m, i) => {
              const isFirstBot = m.role === "model" && (i === 0 || uiMessages[i-1].role !== "model");
              const isDailyLimit = m.content.includes("reached today's limit");
              
              return (
                <div key={i} className="flex flex-col gap-1.5">
                  {isFirstBot && (
                    <span className="text-[#C9A84C] text-[9px] font-bold tracking-[0.2em] uppercase ml-1">APEX</span>
                  )}
                  <div
                    className={`${
                      m.role === "user" 
                        ? "ml-auto max-w-[85%] bg-[rgba(201,168,76,0.12)] border border-[rgba(201,168,76,0.25)] rounded-2xl rounded-tr-sm text-right" 
                        : "mr-auto max-w-[85%] bg-white/5 border border-white/10 rounded-2xl rounded-tl-sm"
                    } px-4 py-3 text-sm transition-all duration-300 animate-in fade-in zoom-in-95`}
                  >
                    <div className="text-[#F5F0E8] leading-relaxed">
                      {m.content}
                      {(isDailyLimit || (sessionCount >= 10 && i === uiMessages.length - 1)) && (
                        <div className="mt-4">
                          <button 
                            onClick={onBookCall}
                            className="w-full py-2 bg-[#C9A84C] text-[#0A0A0B] text-xs font-bold uppercase tracking-widest rounded-lg hover:bg-[#D4B96E] transition-colors"
                          >
                            Book Your Free Call
                          </button>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              );
            })}
            
            {isLoading && (
              <div className="flex flex-col gap-1.5 mr-auto">
                <span className="text-[#C9A84C] text-[9px] font-bold tracking-[0.2em] uppercase ml-1">APEX</span>
                <div className="bg-white/5 border border-white/10 rounded-2xl rounded-tl-sm px-4 py-3 flex gap-1.5">
                  <div className="w-1.5 h-1.5 bg-[#C9A84C]/60 rounded-full animate-bounce [animation-duration:0.8s]" />
                  <div className="w-1.5 h-1.5 bg-[#C9A84C]/60 rounded-full animate-bounce [animation-duration:0.8s] [animation-delay:0.15s]" />
                  <div className="w-1.5 h-1.5 bg-[#C9A84C]/60 rounded-full animate-bounce [animation-duration:0.8s] [animation-delay:0.3s]" />
                </div>
              </div>
            )}
          </div>

          {/* Input Area */}
          <div className="p-4 border-t border-white/10 bg-[#0A0A0B]/50">
            {sessionCount >= 10 ? (
              <div className="text-center py-2 space-y-3 animate-in fade-in slide-in-from-bottom-2">
                <p className="text-xs text-[#C9A84C] font-medium tracking-wide">Session complete. Ready to take the next step?</p>
                <button 
                  onClick={onBookCall}
                  className="w-full py-3 bg-[#C9A84C] text-[#0A0A0B] text-xs font-bold uppercase tracking-widest rounded-xl hover:shadow-[0_0_20px_rgba(201,168,76,0.3)] transition-all"
                >
                  Book Your Free Call
                </button>
              </div>
            ) : (
              <>
                <form onSubmit={handleSend} className="flex gap-2.5">
                  <input
                    type="text"
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    placeholder="Ask about our protocols..."
                    disabled={isLoading || isCooldown}
                    className="flex-1 bg-white/5 border border-white/10 rounded-xl px-4 py-2.5 text-sm text-[#F5F0E8] placeholder-gray-600 focus:outline-none focus:border-[#C9A84C]/40 transition-colors disabled:opacity-50"
                  />
                  <button
                    type="submit"
                    disabled={!input.trim() || isLoading || isCooldown}
                    className="bg-[#C9A84C]/10 border border-[#C9A84C]/30 rounded-xl p-2.5 hover:bg-[#C9A84C]/20 transition-all text-[#C9A84C] disabled:opacity-30 flex items-center justify-center cursor-pointer"
                  >
                    <ArrowUp className="h-5 w-5" />
                  </button>
                </form>
                
                {sessionCount >= 8 && sessionCount < 10 && (
                  <p className="text-[10px] text-center text-[#C9A84C]/60 uppercase tracking-widest mt-3 animate-pulse">
                    {10 - sessionCount} questions remaining in this session
                  </p>
                )}
              </>
            )}
          </div>
        </div>
      )}
    </>
  );
}
