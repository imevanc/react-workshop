'use client'
import { useEffect, useRef } from 'react'
import mermaid from 'mermaid'

export const ReactLifecycle = ({ chart }) => {
  const ref = useRef(null)

  useEffect(() => {
    if (ref.current) {
      mermaid.initialize({
        startOnLoad: false,
        theme: 'default',
      })

      mermaid.run({
        nodes: [ref.current],
      })
    }
  }, [chart])

  return (
    <div className="mermaid" ref={ref}>
      {chart}
    </div>
  )
}
