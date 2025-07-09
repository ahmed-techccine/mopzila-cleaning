"use client"

import type React from "react"
import { Button } from "@/components/ui/button"

interface QuoteButtonProps {
  children: React.ReactNode
  className?: string
  variant?: "default" | "outline" | "ghost"
}

export default function QuoteButton({ children, className = "", variant = "default" }: QuoteButtonProps) {
  return (
    <Button
      className={`estimatty-button ${className}`}
      variant={variant}
    >
      {children}
    </Button>
  )
}
