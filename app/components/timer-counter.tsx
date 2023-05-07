'use client'

import { useEffect, useState } from 'react'

export default function TimerCounter() {
  const [count, setCount] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => setCount((prevCount) => prevCount + 1), 500)
    return () => clearInterval(timer)
  }, [])

  return (
    <div>
      <p>{count}</p>
      <button onClick={() => setCount(0)}>reset</button>
    </div>
  )
}
