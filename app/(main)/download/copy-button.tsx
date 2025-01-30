"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Copy, Check } from "lucide-react"

interface CopyButtonProps {
  text: string
}

export function CopyButton({ text }: CopyButtonProps) {
  const [copied, setCopied] = useState(false)

  const copy = async () => {
    await navigator.clipboard.writeText(text)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <Button variant="ghost" size="icon" onClick={copy} className="h-8 w-8 text-[#B9BBBE] hover:text-white">
      {copied ? <Check className="h-4 w-4" /> : <Copy className="h-4 w-4" />}
    </Button>
  )
}
