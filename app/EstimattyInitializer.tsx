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
    const loadScript = () => {
      if (document.getElementById("estimatty-widget-script")) {
        // already in DOM
        return
      }

      const script = document.createElement("script")
      script.id = "estimatty-widget-script"
      script.async = true
      script.src = "https://w.estimatty.com/cdn/estimatty.js"
      script.dataset.i = "pq.hm4xf9pTG2TcFO2Gv6Vu"
      script.dataset.a = "pq.miRG2ACipka8AMJptVqS"
      document.body.appendChild(script)
    }

    // Load script if not loaded
    loadScript()

    // Initialize if possible
    if (window.Estimatty && typeof window.Estimatty.init === "function") {
      window.Estimatty.init()
    } else {
      // Wait for script load and try again
      const interval = setInterval(() => {
        if (window.Estimatty && typeof window.Estimatty.init === "function") {
          window.Estimatty.init()
          clearInterval(interval)
        }
      }, 500)
    }

  }, [pathname])

  return null
}
