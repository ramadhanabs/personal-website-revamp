import { useEffect, useState } from "react"

export default function useCoordinate(ref: any) {
  const [top, setTop] = useState(0)
  const [left, setLeft] = useState(0)

  useEffect(() => {
    setTop(ref.current.offsetTop)
    setLeft(ref.current.offsetLeft)
  }, [ref])

  if (!ref) return null
  return { top, left }
}
