import ContactForm from '../components/ContactForm'
import { Card, CardContent } from "@/components/ui/card"
import { MapPin, Phone, Mail, Clock } from 'lucide-react'

const ContactsPage = () => {
  return (
    <div className="py-20 animate-fade-in">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold text-amber-800 text-center mb-12">Контакты</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div>
            <Card className="bg-white shadow-lg">
              <CardContent className="p-6">
                <h2 className="text-2xl font-semibold text-amber-700 mb-6">Наши контакты</h2>
                <ul className="space-y-4">
                  <li className="flex items-start">
                    <MapPin className="text-amber-500 mr-2 flex-shrink-0 mt-1" />
                    <span className="text-amber-600">ул. Примерная, д. 123, г. Москва</span>
                  </li>
                  <li className="flex items-start">
                    <Phone className="text-amber-500 mr-2 flex-shrink-0 mt-1" />
                    <span className="text-amber-600">+7 (123) 456-7890</span>
                  </li>
                  <li className="flex items-start">
                    <Mail className="text-amber-500 mr-2 flex-shrink-0 mt-1" />
                    <span className="text-amber-600">info@dialogdushi.ru</span>
                  </li>
                  <li className="flex items-start">
                    <Clock className="text-amber-500 mr-2 flex-shrink-0 mt-1" />
                    <span className="text-amber-600">Пн-Пт: 9:00 - 20:00<br />Сб-Вс: 10:00 - 18:00</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
            <div className="mt-8">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2245.5887638669837!2d37.61844081590101!3d55.75605998055643!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x46b54a50b315e573%3A0xa886bf5a3d9b2e68!2sThe%20Moscow%20Kremlin!5e0!3m2!1sen!2sru!4v1629890657剩余的地图嵌入代码" 
                width="100%" 
                height="300" 
                style={{border:0}} 
                allowFullScreen="" 
                loading="lazy"
              ></iframe>
            </div>
          </div>
          <div>
            <ContactForm />
          </div>
        </div>
      </div>
    </div>
  )
}

export default ContactsPage

