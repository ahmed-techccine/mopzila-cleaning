"use client"

import { useEffect } from "react"
import { usePathname } from "next/navigation"

declare global {
  interface Window {
    Estimatty?: {
      init?: () => void
    }
  }
}

export default function EstimattyInitializer() {
  const pathname = usePathname()

  useEffect(() => {
    // Every time route changes, re-init Estimatty
    if (typeof window !== "undefined" && window.Estimatty && typeof window.Estimatty.init === "function") {
      window.Estimatty.init()
    }
  }, [pathname])

  return null
}
