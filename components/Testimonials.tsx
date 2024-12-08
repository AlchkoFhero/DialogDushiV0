import { Card, CardContent } from "@/components/ui/card"
import Image from 'next/image'
import { Star } from 'lucide-react'

const testimonials = [
  {
    name: "Анна М.",
    avatar: "/avatar1.jpg",
    rating: 5,
    text: "Телесная терапия в 'Диалоге души' помогла мне избавиться от хронических болей в спине. Я чувствую себя обновленной!",
    date: "15.05.2023"
  },
  {
    name: "Игорь С.",
    avatar: "/avatar2.jpg",
    rating: 5,
    text: "Профессионализм терапевтов и уютная атмосфера делают каждый сеанс особенным. Рекомендую всем!",
    date: "02.06.2023"
  },
  {
    name: "Елена К.",
    avatar: "/avatar3.jpg",
    rating: 4,
    text: "Благодаря сеансам в 'Диалоге души' я научилась лучше понимать свое тело и управлять стрессом.",
    date: "20.06.2023"
  }
]

const Testimonials = () => {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-semibold text-amber-800 text-center mb-12">Отзывы наших клиентов</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="bg-white shadow-lg hover:shadow-xl transition-shadow duration-300">
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <Image 
                    src={testimonial.avatar} 
                    alt={testimonial.name} 
                    width={60} 
                    height={60} 
                    className="rounded-full mr-4"
                  />
                  <div>
                    <p className="font-semibold text-amber-700">{testimonial.name}</p>
                    <div className="flex">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} className="text-yellow-400 fill-current" size={16} />
                      ))}
                    </div>
                  </div>
                </div>
                <p className="text-amber-600 mb-2">{testimonial.text}</p>
                <p className="text-sm text-amber-500">{testimonial.date}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Testimonials

