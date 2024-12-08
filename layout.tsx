import './globals.css'
import { Montserrat, Open_Sans } from 'next/font/google'
import type { Metadata } from 'next'
import Header from './components/Header'
import Footer from './components/Footer'

const montserrat = Montserrat({ subsets: ['cyrillic'] })
const openSans = Open_Sans({ subsets: ['cyrillic'] })

export const metadata: Metadata = {
  title: 'Диалог души | Телесная терапия',
  description: 'Профессиональная телесная терапия для гармонии тела и души. Индивидуальный подход, опытные специалисты, комфортная атмосфера.',
  keywords: 'телесная терапия, массаж, здоровье, релаксация, Диалог души',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ru">
      <body className={`${openSans.className} bg-gradient-to-br from-amber-50 to-green-50`}>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}

