import JSConfetti from "js-confetti"
import { useEffect, useState } from "react"

export default function useConfetti() {
  const [confetti, setConfetti] = useState<JSConfetti | null>(null)

  useEffect(() => {
    if (typeof window !== "undefined") {
      const newConfetti = new JSConfetti()
      setConfetti(newConfetti)
    }
  }, [])

  return confetti
}
