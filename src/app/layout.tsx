import '@/styles/app.css'
import Navbar from '@/components/layout/Navbar'

export const metadata = {
  title: 'Supersales',
  description: 'Supersales Automation Editor',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        <main>{children}</main>
      </body>
    </html>
  )
}
