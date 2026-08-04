import { useState } from "react";
import { MessageCircle, X, Send } from "lucide-react";

function ChatBot() {
  const [open, setOpen] = useState(false);

  return (
    <>
      {/* Floating Button */}

      <button
        onClick={() => setOpen(!open)}
        className="fixed bottom-8 right-8 z-50 group flex items-center gap-3 bg-[#c19b6c] hover:bg-white transition-all duration-300 text-black px-5 py-4 rounded-full shadow-2xl"
      >
        <MessageCircle size={24} />

        <span className="hidden group-hover:block font-semibold whitespace-nowrap">
          Ask Blaque
        </span>
      </button>

      {/* Chat Window */}

      {open && (
        <div className="fixed bottom-28 right-8 w-[380px] bg-[#0c0c0c] border border-neutral-800 rounded-3xl shadow-2xl overflow-hidden z-50">
          {/* Header */}

          <div className="flex justify-between items-center p-6 border-b border-neutral-800">
            <div>
              <h2 className="font-bold text-white">💬 Ask Blaque</h2>

              <p className="text-neutral-400 text-sm">Your BLAQ Concierge</p>
            </div>

            <button
              onClick={() => setOpen(false)}
              className="text-neutral-400 hover:text-white"
            >
              <X />
            </button>
          </div>

          {/* Messages */}

          <div className="p-6 space-y-4 h-[350px] overflow-y-auto">
            <div className="bg-neutral-900 rounded-2xl p-4 text-white">
              Hello 👋
              <br />
              <br />
              I'm <strong>Blaque</strong>. Ask me anything about BLAQ.
            </div>

            <button className="w-full text-left text-white border border-neutral-800 rounded-xl p-3 hover:border-[#c19b6c] hover:bg-[#c19b6c]/10 hover:text-[#c19b6c] transition-all duration-300">
              ✂ Book a Barber
            </button>

            <button className="w-full text-left text-white border border-neutral-800 rounded-xl p-3 hover:border-[#c19b6c] hover:bg-[#c19b6c]/10 hover:text-[#c19b6c] transition-all duration-300">
              💄 Find a Makeup Artist
            </button>

            <button className="w-full text-left text-white border border-neutral-800 rounded-xl p-3 hover:border-[#c19b6c] hover:bg-[#c19b6c]/10 hover:text-[#c19b6c] transition-all duration-300">
              🏢 Rent a Creative Space
            </button>

            <button className="w-full text-left text-white border border-neutral-800 rounded-xl p-3 hover:border-[#c19b6c] hover:bg-[#c19b6c]/10 hover:text-[#c19b6c] transition-all duration-300">
              🚀 Become a BLAQ Operator
            </button>
          </div>

          {/* Input */}

          <div className="border-t border-neutral-800 p-4 flex gap-3">
            <input
              placeholder="Ask Blaque..."
              className="flex-1 bg-neutral-900 rounded-xl px-4 py-3 outline-none text-white"
            />

            <button className="bg-[#c19b6c] hover:bg-white transition px-4 rounded-xl">
              <Send className="text-black" size={18} />
            </button>
          </div>
        </div>
      )}
    </>
  );
}

export default ChatBot;
