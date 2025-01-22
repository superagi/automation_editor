import '@/styles/app.css'
import Navbar from '@/components/layout/navbar/Navbar'

export const metadata = {
  title: 'SuperSales',
  description: 'SuperSales Automation Editor',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="flex flex-col h-screen overflow-hidden">
        <Navbar />
        <main className="flex-1 overflow-hidden">{children}</main>
      </body>
    </html>
  )
}
