import '@/styles/_app.css'
import Navbar from '@/components/layout/navbar/Navbar'
import { AntdRegistry } from '@ant-design/nextjs-registry'
import '@ant-design/v5-patch-for-react-19'
import { AntDThemeProvider } from '@/providers/AntDThemeProvider'

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
        <AntdRegistry>
          <AntDThemeProvider>
            <Navbar />
            <main className="flex-1 overflow-hidden">{children}</main>
          </AntDThemeProvider>
        </AntdRegistry>
      </body>
    </html>
  )
}
