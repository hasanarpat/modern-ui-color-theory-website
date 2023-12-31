import Navbar from '@/components/navbar/Navbar'
import './_globals.scss'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'New AI',
  description: 'New Gen AI To Occupy',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className='container'><Navbar/>{children}</div></body>
    </html>
  )
}
