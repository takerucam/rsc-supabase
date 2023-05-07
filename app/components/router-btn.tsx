'use client'

import { useRouter } from 'next/navigation'

export default function RouterBtn({
  destination = '',
}: {
  destination?: string
}) {
  const router = useRouter()
  return (
    <button
      onClick={() => {
        router.push(`/${destination}`)
      }}
    >
      Nav to {destination ? destination : 'home'}
    </button>
  )
}
