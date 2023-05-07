import type { Database } from '@/database.types'
import { format } from 'date-fns'

type Note = Database['public']['Tables']['notes']['Row']

async function fetchNotes() {
  await new Promise((resolve) => setTimeout(resolve, 2000))
  const res = await fetch(`${process.env.url}/rest/v1/notes?select=*`, {
    headers: new Headers({
      apikey: process.env.apikey as string,
    }),
    // cache: 'force-cache', // SSG
    cache: 'no-store', // SSR
    // next: { revalidate: 10 }, // ISR
  })
  if (!res.ok) {
    throw new Error('Failed to fetch data in server')
  }
  const notes: Note[] = await res.json()
  return notes
}

export default async function NotesList() {
  const notes = await fetchNotes()
  return (
    <div>
      <p>Notes</p>
      <ul>
        {notes.map((note: Note) => (
          <li key={note.id}>
            <p>{note.title}</p>
            <p>
              <strong>Created at: </strong>
              {note && format(new Date(note.created_at), 'yyyy-MM-dd HH:mm:ss')}
            </p>
          </li>
        ))}
      </ul>
    </div>
  )
}
