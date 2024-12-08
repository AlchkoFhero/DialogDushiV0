import Link from 'next/link'
import { Facebook, Instagram, Twitter } from 'lucide-react'

const Footer = () => {
  return (
    <footer className="bg-amber-800 text-amber-100 py-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-semibold mb-4">Диалог души</h3>
            <p>Профессиональная телесная терапия для гармонии тела и души.</p>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-4">Контакты</h3>
            <p>Адрес: ул. Примерная, д. 123, г. Москва</p>
            <p>Телефон: +7 (123) 456-7890</p>
            <p>Email: info@dialogdushi.ru</p>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-4">Следите за нами</h3>
            <div className="flex space-x-4">
              <a href="#" className="hover:text-amber-300 transition-colors"><Facebook /></a>
              <a href="#" className="hover:text-amber-300 transition-colors"><Instagram /></a>
              <a href="#" className="hover:text-amber-300 transition-colors"><Twitter /></a>
            </div>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-amber-700 text-center">
          <p>&copy; 2023 Диалог души. Все права защищены.</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer

