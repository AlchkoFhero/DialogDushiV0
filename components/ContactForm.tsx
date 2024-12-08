'use client'

import { useState } from 'react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { toast } from "@/components/ui/use-toast"

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData(prevState => ({ ...prevState, [name]: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Here you would typically send the form data to your server
    console.log(formData)
    toast({
      title: "Форма отправлена",
      description: "Мы свяжемся с вами в ближайшее время.",
    })
    setFormData({ name: '', email: '', phone: '', message: '' })
  }

  return (
    <section className="py-20 bg-amber-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-semibold text-amber-800 text-center mb-12">Свяжитесь с нами</h2>
        <div className="max-w-md mx-auto">
          <form onSubmit={handleSubmit} className="space-y-4">
            <Input
              type="text"
              name="name"
              placeholder="Ваше имя"
              value={formData.name}
              onChange={handleChange}
              required
            />
            <Input
              type="email"
              name="email"
              placeholder="Ваш email"
              value={formData.email}
              onChange={handleChange}
              required
            />
            <Input
              type="tel"
              name="phone"
              placeholder="Ваш телефон"
              value={formData.phone}
              onChange={handleChange}
              required
            />
            <Textarea
              name="message"
              placeholder="Ваше сообщение"
              value={formData.message}
              onChange={handleChange}
              required
            />
            <Button type="submit" className="w-full bg-amber-500 text-white hover:bg-amber-600">
              Отправить
            </Button>
          </form>
        </div>
      </div>
    </section>
  )
}

export default ContactForm

