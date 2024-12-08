import Image from 'next/image'
import { Card, CardContent } from "@/components/ui/card"

const galleryItems = [
  { type: 'image', src: '/gallery1.jpg', alt: 'Сеанс телесной терапии' },
  { type: 'image', src: '/gallery2.jpg', alt: 'Массажный кабинет' },
  { type: 'image', src: '/gallery3.jpg', alt: 'Инфракрасная сауна' },
  { type: 'video', src: '/gallery-video.mp4', poster: '/video-poster.jpg' },
  { type: 'image', src: '/gallery4.jpg', alt: 'Зона отдыха' },
  { type: 'image', src: '/gallery5.jpg', alt: 'Процедура телесной терапии' },
]

const GalleryPage = () => {
  return (
    <div className="py-20 animate-fade-in">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold text-amber-800 text-center mb-12">Галерея</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {galleryItems.map((item, index) => (
            <Card key={index} className="bg-white shadow-lg hover:shadow-xl transition-shadow duration-300">
              <CardContent className="p-4">
                {item.type === 'image' ? (
                  <Image 
                    src={item.src} 
                    alt={item.alt} 
                    width={400} 
                    height={300} 
                    className="rounded-lg object-cover w-full h-64"
                  />
                ) : (
                  <video 
                    controls 
                    poster={item.poster}
                    className="rounded-lg w-full h-64 object-cover"
                  >
                    <source src={item.src} type="video/mp4" />
                    Your browser does not support the video tag.
                  </video>
                )}
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  )
}

export default GalleryPage

