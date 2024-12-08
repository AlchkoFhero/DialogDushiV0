'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Button } from "@/components/ui/button"
import { Menu } from 'lucide-react'

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="bg-amber-100/80 backdrop-blur-sm py-4 sticky top-0 z-50">
      <div className="container mx-auto px-4 flex justify-between items-center">
        <Link href="/" className="text-2xl font-semibold text-amber-800">
          <span className="text-amber-500">Диалог</span> души
        </Link>
        <nav className="hidden md:block">
          <ul className="flex space-x-6">
            <li><Link href="/" className="text-amber-800 hover:text-amber-600 transition-colors">Главная</Link></li>
            <li><Link href="/about" className="text-amber-800 hover:text-amber-600 transition-colors">О терапевте</Link></li>
            <li><Link href="/services" className="text-amber-800 hover:text-amber-600 transition-colors">Услуги</Link></li>
            <li><Link href="/gallery" className="text-amber-800 hover:text-amber-600 transition-colors">Галерея</Link></li>
            <li><Link href="/blog" className="text-amber-800 hover:text-amber-600 transition-colors">Блог</Link></li>
            <li><Link href="/contacts" className="text-amber-800 hover:text-amber-600 transition-colors">Контакты</Link></li>
          </ul>
        </nav>
        <Button variant="outline" className="hidden md:inline-flex bg-amber-200 text-amber-800 hover:bg-amber-300">
          Записаться
        </Button>
        <button 
          className="md:hidden text-amber-800"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <Menu />
        </button>
      </div>
      {isMenuOpen && (
        <div className="md:hidden bg-amber-100 py-4">
          <nav className="container mx-auto px-4">
            <ul className="space-y-2">
              <li><Link href="/" className="block text-amber-800 hover:text-amber-600 transition-colors">Главная</Link></li>
              <li><Link href="/about" className="block text-amber-800 hover:text-amber-600 transition-colors">О терапевте</Link></li>
              <li><Link href="/services" className="block text-amber-800 hover:text-amber-600 transition-colors">Услуги</Link></li>
              <li><Link href="/gallery" className="block text-amber-800 hover:text-amber-600 transition-colors">Галерея</Link></li>
              <li><Link href="/blog" className="block text-amber-800 hover:text-amber-600 transition-colors">Блог</Link></li>
              <li><Link href="/contacts" className="block text-amber-800 hover:text-amber-600 transition-colors">Контакты</Link></li>
            </ul>
            <Button variant="outline" className="mt-4 w-full bg-amber-200 text-amber-800 hover:bg-amber-300">
              Записаться
            </Button>
          </nav>
        </div>
      )}
    </header>
  )
}

export default Header

