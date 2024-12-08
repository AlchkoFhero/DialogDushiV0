import Image from 'next/image'
import { Card, CardContent } from "@/components/ui/card"

const AboutPage = () => {
  return (
    <div className="py-20 animate-fade-in">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold text-amber-800 text-center mb-12">О терапевте</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <Image
              src="/therapist.jpg"
              alt="Фото терапевта"
              width={400}
              height={400}
              className="rounded-lg shadow-lg"
            />
          </div>
          <div>
            <h2 className="text-2xl font-semibold text-amber-700 mb-4">Анна Иванова</h2>
            <p className="text-amber-600 mb-4">
              Сертифицированный телесный терапевт с 10-летним опытом работы. Специализируюсь на снятии мышечных зажимов, 
              работе с хроническими болями и эмоциональными блоками.
            </p>
            <h3 className="text-xl font-semibold text-amber-700 mb-2">Образование и сертификаты:</h3>
            <ul className="list-disc list-inside text-amber-600 mb-4">
              <li>Диплом по психологии, МГУ</li>
              <li>Сертификат по телесно-ориентированной терапии</li>
              <li>Курс по миофасциальному релизу</li>
              <li>Сертификат по технике Александера</li>
            </ul>
            <p className="text-amber-600">
              Моя философия работы заключается в индивидуальном подходе к каждому клиенту, 
              учитывая его уникальные потребности и особенности. Я верю, что тело и разум неразрывно связаны, 
              и работа с телом может привести к глубоким изменениям в жизни человека.
            </p>
          </div>
        </div>
        <div className="mt-12">
          <h2 className="text-2xl font-semibold text-amber-800 text-center mb-8">Мое рабочее пространство</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card>
              <CardContent className="p-4">
                <Image
                  src="/workspace1.jpg"
                  alt="Рабочее пространство 1"
                  width={300}
                  height={200}
                  className="rounded-lg"
                />
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-4">
                <Image
                  src="/workspace2.jpg"
                  alt="Рабочее пространство 2"
                  width={300}
                  height={200}
                  className="rounded-lg"
                />
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-4">
                <Image
                  src="/workspace3.jpg"
                  alt="Рабочее пространство 3"
                  width={300}
                  height={200}
                  className="rounded-lg"
                />
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AboutPage

