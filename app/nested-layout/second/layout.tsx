export default function NestedLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <main>
      <p>Layout 2</p>
      {children}
    </main>
  )
}
