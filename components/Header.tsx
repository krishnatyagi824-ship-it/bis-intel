"use client"

import React, { useState } from "react"
import { Menu, ShieldCheck } from "lucide-react"

interface HeaderProps {
  onToggleSidebar?: () => void
  currentMode?: "consumer" | "industry"
  onModeChange?: (mode: "consumer" | "industry") => void
  currentLang?: "en" | "hi"
  onLangChange?: (lang: "en" | "hi") => void
}

export function Header({
  onToggleSidebar,
  currentMode = "consumer",
  onModeChange,
  currentLang = "en",
  onLangChange,
}: HeaderProps) {
  const [mode, setMode] = useState<"consumer" | "industry">(currentMode)
  const [lang, setLang] = useState<"en" | "hi">(currentLang)

  const handleModeChange = (newMode: "consumer" | "industry") => {
    setMode(newMode)
    onModeChange?.(newMode)
  }

  const handleLangChange = (newLang: "en" | "hi") => {
    setLang(newLang)
    onLangChange?.(newLang)
  }

  return (
    <header className="sticky top-0 z-20 border-b border-border bg-card shadow-sm">
      {/* 
        TOP COLORED ACCENT BAR WITH EMBLEM
        - Thicker saffron and green lines (h-2 / h-2.5) spanning outward smoothly
        - Official State Emblem of India (Lion Capital of Ashoka) centered neatly in between
      */}
      <div className="relative flex items-center justify-center w-full bg-card">
        {/* Saffron / Orange line spanning outward to the left edge */}
        <div className="flex-1 h-2 bg-[#FF9933] sm:h-2.5" />

        {/* Center: Official State Emblem of India (Lion Capital of Ashoka) */}
        <div className="shrink-0 px-3 py-1 flex items-center justify-center bg-card z-10">
          <img
            src="/emblem-of-india.svg"
            onError={(e) => {
              // Fallback to Wikipedia CDN if local asset is not present
              e.currentTarget.src =
                "https://upload.wikimedia.org/wikipedia/commons/5/55/Emblem_of_India.svg"
            }}
            alt="State Emblem of India"
            className="h-8 w-auto object-contain sm:h-9"
          />
        </div>

        {/* India Green line spanning outward to the right edge */}
        <div className="flex-1 h-2 bg-[#138808] sm:h-2.5" />
      </div>

      {/* MAIN TOP NAVIGATION BAR */}
      <div className="flex items-center justify-between gap-3 px-3 py-2.5 sm:px-4">
        {/* Left Side: Mobile Menu Button + BIS Logo & Branding */}
        <div className="flex items-center gap-3">
          {/* Mobile hamburger menu */}
          <button
            type="button"
            onClick={onToggleSidebar}
            aria-label="Toggle navigation"
            className="inline-flex size-8 shrink-0 items-center justify-center rounded-lg text-muted-foreground hover:bg-muted hover:text-foreground md:hidden"
          >
            <Menu className="size-5" />
          </button>

          {/* Official Bureau of Indian Standards (BIS) Logo */}
          <div className="flex items-center gap-2.5">
            <img
              src="/bis-logo.svg"
              onError={(e) => {
                // Fallback to Wikipedia CDN if local asset is not present
                e.currentTarget.src =
                  "https://upload.wikimedia.org/wikipedia/commons/f/f8/Bureau_of_Indian_Standards_Logo.svg"
              }}
              alt="Bureau of Indian Standards"
              className="h-9 w-auto object-contain shrink-0 sm:h-10 drop-shadow-sm"
            />
            <div className="leading-tight">
              <div className="flex items-center gap-1.5">
                <p className="text-sm font-bold text-primary sm:text-base">
                  BIS AI Assistant
                </p>
                <span className="hidden rounded bg-primary/10 px-1.5 py-0.5 text-[0.65rem] font-semibold tracking-wider text-primary uppercase sm:inline-block">
                  Govt of India
                </span>
              </div>
              <p className="hidden text-xs text-muted-foreground sm:block">
                भारतीय मानक ब्यूरो · Bureau of Indian Standards
              </p>
            </div>
          </div>
        </div>

        {/* Right Side: Mode Switcher & Language Switcher */}
        <div className="ml-auto flex items-center gap-2 sm:gap-3">
          {/* Mode Selector */}
          <div
            role="radiogroup"
            aria-label="Mode"
            className="flex items-center rounded-full border border-border bg-muted p-0.5"
          >
            <button
              type="button"
              role="radio"
              aria-checked={mode === "consumer"}
              onClick={() => handleModeChange("consumer")}
              className={`rounded-full px-2.5 py-1 text-xs font-medium transition-all sm:px-3 ${
                mode === "consumer"
                  ? "bg-primary text-primary-foreground shadow-sm"
                  : "text-muted-foreground hover:text-foreground"
              }`}
            >
              Consumer Mode
            </button>
            <button
              type="button"
              role="radio"
              aria-checked={mode === "industry"}
              onClick={() => handleModeChange("industry")}
              className={`rounded-full px-2.5 py-1 text-xs font-medium transition-all sm:px-3 ${
                mode === "industry"
                  ? "bg-primary text-primary-foreground shadow-sm"
                  : "text-muted-foreground hover:text-foreground"
              }`}
            >
              Industry Compliance Mode
            </button>
          </div>

          {/* Language Selector */}
          <div
            role="radiogroup"
            aria-label="Language"
            className="flex items-center overflow-hidden rounded-full border border-border"
          >
            <button
              type="button"
              role="radio"
              aria-checked={lang === "en"}
              onClick={() => handleLangChange("en")}
              className={`px-2.5 py-1 text-xs font-semibold transition-colors ${
                lang === "en"
                  ? "bg-primary text-primary-foreground"
                  : "bg-card text-muted-foreground hover:text-foreground"
              }`}
            >
              EN
            </button>
            <button
              type="button"
              role="radio"
              aria-checked={lang === "hi"}
              onClick={() => handleLangChange("hi")}
              className={`px-2.5 py-1 text-xs font-semibold transition-colors ${
                lang === "hi"
                  ? "bg-primary text-primary-foreground"
                  : "bg-card text-muted-foreground hover:text-foreground"
              }`}
            >
              हिं
            </button>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header
