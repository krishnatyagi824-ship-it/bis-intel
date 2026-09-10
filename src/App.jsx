import React, { useState, useRef, useEffect } from 'react';
import {
  Send,
  Bot,
  User,
  Search,
  ShieldCheck,
  FileText,
  Award,
  CheckCircle2,
  RefreshCw,
  ExternalLink
} from 'lucide-react';

export default function BISSarthiApp() {
  const [messages, setMessages] = useState([
    {
      id: 1,
      sender: 'bot',
      text: 'Namaste! I am BIS Saarthi, your interactive assistant for the Bureau of Indian Standards. How can I assist you with Indian Standards (IS), ISI Mark, Hallmarking, or product certification today?',
      time: 'Just now'
    }
  ]);
  const [inputMessage, setInputMessage] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const chatEndRef = useRef(null);

  // Auto-scroll to latest message
  useEffect(() => {
    chatEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages, isTyping]);

  const quickPrompts = [
    "How do I verify an ISI mark on a product?",
    "What is the process for Gold Hallmarking?",
    "Find Indian Standard (IS) for drinking water",
    "How to lodge a consumer grievance regarding sub-standard goods?"
  ];

  const handleSend = (textToSend) => {
    const text = textToSend || inputMessage;
    if (!text.trim()) return;

    const userMsg = {
      id: Date.now(),
      sender: 'user',
      text: text,
      time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    };

    setMessages((prev) => [...prev, userMsg]);
    setInputMessage('');
    setIsTyping(true);

    // Simulated intelligent assistant response
    setTimeout(() => {
      let botReply = "Thank you for reaching out. Under the Bureau of Indian Standards Act, 2016, BIS ensures conformity assessment, standardization, and quality assurance. For detailed guidelines and standard documents, you can also consult the official e-BIS portal (manakonline.in).";

      const lower = text.toLowerCase();
      if (lower.includes('isi')) {
        botReply = "To verify an ISI mark: Look for the 7 or 8-digit CML (Certification Marks License) number printed under the ISI mark on the product package. You can verify this number through the 'BIS CARE' mobile application or the 'Know Your Standards' section on the manakonline portal.";
      } else if (lower.includes('gold') || lower.includes('hallmark')) {
        botReply = "Mandatory Gold Hallmarking consists of three marks: 1. BIS Standard mark, 2. Purity in Carat and Fineness (e.g., 22K916), and 3. A 6-digit alphanumeric HUID (Hallmark Unique Identification). You can verify any HUID code using the 'Verify HUID' feature on the BIS CARE App.";
      } else if (lower.includes('water') || lower.includes('drinking')) {
        botReply = "The primary Indian Standards for water are: IS 10500:2012 for Drinking Water specifications and IS 14543 for Packaged Drinking Water (other than Packaged Natural Mineral Water). Packaged drinking water falls under mandatory BIS certification.";
      } else if (lower.includes('complaint') || lower.includes('grievance')) {
        botReply = "You can register grievances regarding misuse of ISI marks, substandard hallmarked jewelry, or uncertified mandatory products directly via the BIS CARE App (under Complaints) or by emailing complaints@bis.gov.in.";
      }

      setMessages((prev) => [
        ...prev,
        {
          id: Date.now() + 1,
          sender: 'bot',
          text: botReply,
          time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
        }
      ]);
      setIsTyping(false);
    }, 900);
  };

  return (
    <div className="min-h-screen flex flex-col bg-slate-50 text-slate-900 font-sans">
      {/* Top Header */}
      <header className="bg-white border-b border-slate-200 shadow-xs">
        <div className="max-w-6xl mx-auto px-4 py-3 sm:py-4 flex flex-col sm:flex-row items-center justify-between gap-3">
          {/* Official BIS Logo + Title */}
          <div className="flex items-center gap-3 text-center sm:text-left">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/f/f8/Bureau_of_Indian_Standards_Logo.svg"
              alt="Bureau of Indian Standards"
              className="h-10 sm:h-12 w-auto object-contain shrink-0 drop-shadow-sm"
            />
            <div>
              <div className="flex items-center gap-2 justify-center sm:justify-start">
                <h1 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-[#0F2942]">
                  BIS Saarthi
                </h1>
                <span className="hidden xs:inline-block bg-[#0F2942]/10 text-[#0F2942] text-[0.65rem] font-bold px-2 py-0.5 rounded tracking-wide uppercase">
                  Govt of India
                </span>
              </div>
              <p className="text-xs sm:text-sm font-medium text-slate-500">
                National Standards Body of India • Ministry of Consumer Affairs
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2 text-xs font-semibold text-emerald-700 bg-emerald-50 px-3 py-1.5 rounded-full border border-emerald-200">
            <ShieldCheck className="w-4 h-4" />
            Official Standards Intelligent Portal
          </div>
        </div>

        {/* Thick Saffron and Green Lines with Official State Emblem of India */}
        <div className="relative w-full flex items-center bg-white overflow-visible">
          {/* Saffron / Orange Line spanning left */}
          <div className="h-2.5 sm:h-3 flex-1 bg-[#FF9933]" />

          {/* Center Official State Emblem of India (Lion Capital of Ashoka) */}
          <div className="relative z-10 mx-2 sm:mx-4 flex items-center justify-center bg-white px-3 py-1 rounded-md shadow-xs border border-slate-200 -my-2">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/5/55/Emblem_of_India.svg"
              alt="State Emblem of India"
              className="h-8 sm:h-9 w-auto object-contain"
            />
          </div>

          {/* Green Line spanning right */}
          <div className="h-2.5 sm:h-3 flex-1 bg-[#138808]" />
        </div>
      </header>

      {/* Main Container */}
      <main className="flex-1 max-w-6xl w-full mx-auto p-4 sm:p-6 grid grid-cols-1 lg:grid-cols-4 gap-6">
        {/* Left Sidebar: Quick Services */}
        <aside className="lg:col-span-1 space-y-4">
          <div className="bg-white rounded-xl p-4 shadow-sm border border-slate-200">
            <h3 className="text-sm font-bold text-slate-700 uppercase tracking-wider mb-3 flex items-center gap-2">
              <Award className="w-4 h-4 text-[#FF9933]" /> Core Modules
            </h3>
            <ul className="space-y-2 text-sm">
              <li className="p-2.5 rounded-lg bg-slate-50 hover:bg-slate-100 transition-colors flex items-center gap-2 text-slate-700 cursor-pointer">
                <FileText className="w-4 h-4 text-blue-600" />
                Product Certification (ISI)
              </li>
              <li className="p-2.5 rounded-lg bg-slate-50 hover:bg-slate-100 transition-colors flex items-center gap-2 text-slate-700 cursor-pointer">
                <CheckCircle2 className="w-4 h-4 text-amber-600" />
                Hallmarking (Gold/Silver)
              </li>
              <li className="p-2.5 rounded-lg bg-slate-50 hover:bg-slate-100 transition-colors flex items-center gap-2 text-slate-700 cursor-pointer">
                <Search className="w-4 h-4 text-emerald-600" />
                Know Your Standards
              </li>
            </ul>
          </div>

          <div className="bg-gradient-to-br from-[#0F2942] to-[#1E3A8A] text-white rounded-xl p-4 shadow-sm">
            <h4 className="font-semibold text-sm mb-1">BIS CARE App</h4>
            <p className="text-xs text-slate-200 mb-3 leading-relaxed">
              Verify licenses, hallmarks, and file instant consumer complaints right from your device.
            </p>
            <a
              href="https://www.bis.gov.in"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center text-xs font-medium text-amber-300 hover:underline gap-1"
            >
              Visit Portal <ExternalLink className="w-3 h-3" />
            </a>
          </div>
        </aside>

        {/* Center: Chat Window */}
        <section className="lg:col-span-3 flex flex-col bg-white rounded-xl shadow-sm border border-slate-200 overflow-hidden h-[640px]">
          {/* Chat Header */}
          <div className="px-5 py-3.5 bg-slate-50 border-b border-slate-200 flex items-center justify-between">
            <div className="flex items-center gap-2.5">
              <div className="w-9 h-9 rounded-full bg-[#0F2942] flex items-center justify-center text-white shadow">
                <Bot className="w-5 h-5" />
              </div>
              <div>
                <h2 className="text-sm font-bold text-slate-800">BIS Saarthi Consultation</h2>
                <p className="text-xs text-emerald-600 flex items-center gap-1 font-medium">
                  <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" /> Live Support
                </p>
              </div>
            </div>
            <button
              onClick={() => setMessages([messages[0]])}
              className="text-slate-400 hover:text-slate-600 p-1.5 rounded-md hover:bg-slate-200/50 transition-colors"
              title="Reset conversation"
            >
              <RefreshCw className="w-4 h-4" />
            </button>
          </div>

          {/* Messages Area */}
          <div className="flex-1 overflow-y-auto p-4 sm:p-6 space-y-4">
            {messages.map((msg) => (
              <div
                key={msg.id}
                className={`flex gap-3 max-w-[85%] ${msg.sender === 'user' ? 'ml-auto flex-row-reverse' : 'mr-auto'}`}
              >
                <div className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 text-white ${msg.sender === 'user' ? 'bg-[#FF9933]' : 'bg-[#0F2942]'
                  }`}>
                  {msg.sender === 'user' ? <User className="w-4 h-4" /> : <Bot className="w-4 h-4" />}
                </div>
                <div>
                  <div className={`p-3.5 rounded-2xl text-sm leading-relaxed ${msg.sender === 'user'
                    ? 'bg-[#FF9933] text-white rounded-tr-none'
                    : 'bg-slate-100 text-slate-800 rounded-tl-none border border-slate-200/60'
                    }`}>
                    {msg.text}
                  </div>
                  <span className="text-[10px] text-slate-400 px-1 mt-1 block">
                    {msg.time}
                  </span>
                </div>
              </div>
            ))}

            {isTyping && (
              <div className="flex gap-3 max-w-[80%] items-center text-slate-400 text-xs">
                <div className="w-8 h-8 rounded-full bg-[#0F2942] flex items-center justify-center text-white">
                  <Bot className="w-4 h-4" />
                </div>
                <div className="bg-slate-100 p-3 rounded-2xl rounded-tl-none border border-slate-200">
                  <span className="inline-flex gap-1 items-center">
                    <span className="w-1.5 h-1.5 bg-slate-400 rounded-full animate-bounce [animation-delay:-0.3s]" />
                    <span className="w-1.5 h-1.5 bg-slate-400 rounded-full animate-bounce [animation-delay:-0.15s]" />
                    <span className="w-1.5 h-1.5 bg-slate-400 rounded-full animate-bounce" />
                  </span>
                </div>
              </div>
            )}
            <div ref={chatEndRef} />
          </div>

          {/* Quick Questions */}
          <div className="px-4 py-2 bg-slate-50 border-t border-slate-200 flex gap-2 overflow-x-auto">
            {quickPrompts.map((prompt, idx) => (
              <button
                key={idx}
                onClick={() => handleSend(prompt)}
                className="whitespace-nowrap text-xs bg-white border border-slate-200 hover:border-slate-400 px-3 py-1.5 rounded-full text-slate-600 transition-colors shadow-2xs"
              >
                {prompt}
              </button>
            ))}
          </div>

          {/* Input Bar */}
          <form
            onSubmit={(e) => { e.preventDefault(); handleSend(); }}
            className="p-3 sm:p-4 bg-white border-t border-slate-200 flex items-center gap-2"
          >
            <input
              type="text"
              value={inputMessage}
              onChange={(e) => setInputMessage(e.target.value)}
              placeholder="Ask BIS Saarthi about standards, certifications, ISI mark, HUID..."
              className="flex-1 px-4 py-2.5 text-sm bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#0F2942] focus:bg-white transition-all"
            />
            <button
              type="submit"
              disabled={!inputMessage.trim()}
              className="p-2.5 rounded-xl bg-[#0F2942] text-white hover:bg-[#1A3E61] disabled:opacity-40 disabled:cursor-not-allowed transition-all"
            >
              <Send className="w-5 h-5" />
            </button>
          </form>
        </section>
      </main>

      {/* Footer Disclaimer for safety & compliance */}
      <footer className="text-center py-3 text-[11px] text-slate-400 border-t border-slate-200 bg-white">
        Independent Educational Prototype · Based on official BIS standards catalogue · Not an official Government of India portal
      </footer>
    </div>
  );
}