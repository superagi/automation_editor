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
      <body>
        <Navbar />
        <main>{children}</main>
      </body>
    </html>
  )
}
