import { Card, CardContent } from "@/components/ui/card"
import { CheckCircle } from 'lucide-react'

const advantages = [
  "Индивидуальный подход к каждому клиенту",
  "Опытные сертифицированные специалисты",
  "Современные методики телесной терапии",
  "Комфортная и уютная атмосфера",
  "Гибкий график работы",
  "Доступные цены"
]

const Advantages = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-semibold text-amber-800 text-center mb-12">Наши преимущества</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {advantages.map((advantage, index) => (
            <Card key={index} className="bg-amber-50 shadow-md hover:shadow-lg transition-shadow duration-300">
              <CardContent className="flex items-start p-6">
                <CheckCircle className="text-green-500 mr-4 flex-shrink-0" />
                <p className="text-amber-700">{advantage}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Advantages

