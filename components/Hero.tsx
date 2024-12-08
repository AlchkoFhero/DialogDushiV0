import { Button } from "@/components/ui/button"
import Image from 'next/image'

const Hero = () => {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4 flex flex-col md:flex-row items-center">
        <div className="md:w-1/2 mb-8 md:mb-0">
          <h1 className="text-4xl md:text-5xl font-bold text-amber-800 mb-4">Добро пожаловать в Диалог души</h1>
          <p className="text-xl text-amber-700 mb-8">Откройте гармонию тела и души с нашей профессиональной телесной терапией</p>
          <Button className="bg-amber-500 text-white hover:bg-amber-600">Узнать больше</Button>
        </div>
        <div className="md:w-1/2">
          <Image 
            src="/hero-image.jpg" 
            alt="Телесная терапия" 
            width={600} 
            height={400} 
            className="rounded-lg shadow-lg"
          />
        </div>
      </div>
    </section>
  )
}

export default Hero

