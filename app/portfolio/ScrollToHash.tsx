"use client"

import { useEffect } from "react"

export function ScrollToHash() {
  useEffect(() => {
    const hash = window.location.hash.replace("#", "")
    if (!hash) return
    const el = document.getElementById(hash)
    if (el) {
      setTimeout(() => el.scrollIntoView({ behavior: "smooth", block: "start" }), 150)
    }
  }, [])
  return null
}
