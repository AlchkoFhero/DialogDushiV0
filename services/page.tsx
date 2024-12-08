import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card"
import { CheckCircle } from 'lucide-react'

const services = [
  {
    title: "Разовое посещение",
    price: "4000 ₽",
    description: "60-минутный сеанс телесной терапии",
    benefits: [
      "Индивидуальный подход",
      "Работа с актуальными запросами",
      "Рекомендации по домашней практике"
    ]
  },
  {
    title: "Абонемент на 10 сеансов",
    price: "40000 ₽",
    description: "10 сеансов телесной терапии",
    benefits: [
      "Экономия 15% от стоимости разовых посещений",
      "Комплексная работа с телом",
      "Отслеживание прогресса",
      "Гибкий график посещений"
    ]
  },
  {
    title: "Специальное предложение",
    price: "Бесплатно",
    description: "Посещение инфракрасной сауны после массажа",
    benefits: [
      "Усиление эффекта от массажа",
      "Глубокое расслабление",
      "Детоксикация организма"
    ]
  }
]

const ServicesPage = () => {
  return (
    <div className="py-20 animate-fade-in">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold text-amber-800 text-center mb-12">Наши услуги</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card key={index} className="bg-white shadow-lg hover:shadow-xl transition-shadow duration-300">
              <CardHeader>
                <CardTitle className="text-2xl text-amber-700">{service.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-3xl font-bold text-amber-600 mb-4">{service.price}</p>
                <p className="text-amber-700 mb-4">{service.description}</p>
                <h3 className="text-lg font-semibold text-amber-700 mb-2">Преимущества:</h3>
                <ul className="space-y-2">
                  {service.benefits.map((benefit, i) => (
                    <li key={i} className="flex items-start">
                      <CheckCircle className="text-green-500 mr-2 flex-shrink-0 mt-1" size={16} />
                      <span className="text-amber-600">{benefit}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  )
}

export default ServicesPage

