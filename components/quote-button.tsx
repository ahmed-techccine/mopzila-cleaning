"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import QuotePopup from "./quote-popup"

interface QuoteButtonProps {
  children: React.ReactNode
  className?: string
  variant?: "default" | "outline" | "ghost"
}

export default function QuoteButton({ children, className, variant = "default" }: QuoteButtonProps) {
  const [isPopupOpen, setIsPopupOpen] = useState(false)

  return (
    <>
      <Button onClick={() => setIsPopupOpen(true)} className={className} variant={variant}>
        {children}
      </Button>
      <QuotePopup isOpen={isPopupOpen} onClose={() => setIsPopupOpen(false)} />
    </>
  )
}
