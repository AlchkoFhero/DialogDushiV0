import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Link from 'next/link'

const blogPosts = [
  {
    title: "Основы телесной терапии",
    excerpt: "Узнайте, как телесная терапия может помочь вам достичь гармонии тела и разума.",
    date: "10.06.2023",
    slug: "osnovy-telesnoy-terapii"
  },
  {
    title: "5 упражнений для снятия стресса",
    excerpt: "Простые, но эффективные упражнения, которые помогут вам расслабиться и снять напряжение.",
    date: "15.06.2023",
    slug: "5-uprazhneniy-dlya-snyatiya-stressa"
  },
  {
    title: "Польза инфракрасной сауны",
    excerpt: "Исследуем преимущества регулярного использования инфракрасной сауны для здоровья и красоты.",
    date: "20.06.2023",
    slug: "polza-infrakrasnoy-sauny"
  }
]

const BlogPage = () => {
  return (
    <div className="py-20 animate-fade-in">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold text-amber-800 text-center mb-12">Блог</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post, index) => (
            <Card key={index} className="bg-white shadow-lg hover:shadow-xl transition-shadow duration-300">
              <CardHeader>
                <CardTitle className="text-xl text-amber-700">{post.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-amber-600 mb-4">{post.excerpt}</p>
                <p className="text-sm text-amber-500 mb-4">{post.date}</p>
                <Link href={`/blog/${post.slug}`}>
                  <Button className="bg-amber-500 text-white hover:bg-amber-600">Читать далее</Button>
                </Link>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  )
}

export default BlogPage

