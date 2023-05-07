import NotesList from '@/app/components/notes-list'
import RefreshBtn from '@/app/components/refresh-btn'
import Spinner from '@/app/components/sppiner'
import TimerCounter from '@/app/components/timer-counter'
import RootLayout from '@/app/layout'
import { Suspense } from 'react'

export default function Home() {
  return (
    <RootLayout>
      <main>
        <Suspense fallback={<Spinner color="border-green-500" />}>
          {/* @ts-ignore */}
          <NotesList />
        </Suspense>
        <TimerCounter />
        <RefreshBtn />
        <div>Hello World</div>
      </main>
    </RootLayout>
  )
}
