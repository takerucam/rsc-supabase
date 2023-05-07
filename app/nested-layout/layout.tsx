export default function NestedLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <main>
      <p>Layout 1</p>
      {children}
    </main>
  )
}
