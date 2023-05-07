export default function NestedLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <main>
      <p>Layout 3</p>
      {children}
    </main>
  )
}
