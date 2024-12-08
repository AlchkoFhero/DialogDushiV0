import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

const promotions = [
  {
    title: "Первый визит со скидкой 20%",
    description: "Попробуйте наши услуги с приятной скидкой для новых клиентов",
    code: "NEWCLIENT20"
  },
  {
    title: "Приведи друга - получи сеанс в подарок",
    description: "Расскажите о нас другу и получите бесплатный сеанс при его первом визите",
    code: "FRIENDGIFT"
  }
]

const Promotions = () => {
  return (
    <section className="py-20 bg-amber-100">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-semibold text-amber-800 text-center mb-12">Акции и специальные предложения</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {promotions.map((promo, index) => (
            <Card key={index} className="bg-white shadow-lg hover:shadow-xl transition-shadow duration-300">
              <CardHeader>
                <CardTitle className="text-amber-700">{promo.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-amber-600 mb-4">{promo.description}</p>
                <p className="text-amber-500 font-semibold mb-4">Код акции: {promo.code}</p>
                <Button className="bg-amber-500 text-white hover:bg-amber-600">Воспользоваться</Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Promotions

