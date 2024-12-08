import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card"

const services = [
  {
    title: "Разовое посещение",
    price: "4000 ₽",
    description: "60-минутный сеанс телесной терапии"
  },
  {
    title: "Абонемент",
    price: "40000 ₽",
    description: "10 сеансов телесной терапии"
  },
  {
    title: "Специальное предложение",
    price: "Бесплатно",
    description: "Посещение инфракрасной сауны после массажа"
  }
]

const Services = () => {
  return (
    <section className="py-20 bg-amber-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-semibold text-amber-800 text-center mb-12">Наши услуги</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card key={index} className="bg-white shadow-lg hover:shadow-xl transition-shadow duration-300">
              <CardHeader>
                <CardTitle className="text-amber-700">{service.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-3xl font-bold text-amber-600 mb-4">{service.price}</p>
                <p className="text-amber-700">{service.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Services

