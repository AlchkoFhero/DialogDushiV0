import Hero from './components/Hero'
import Services from './components/Services'
import Advantages from './components/Advantages'
import Promotions from './components/Promotions'
import Testimonials from './components/Testimonials'
import ContactForm from './components/ContactForm'

export default function Home() {
  return (
    <div className="animate-fade-in">
      <Hero />
      <Services />
      <Advantages />
      <Promotions />
      <Testimonials />
      <ContactForm />
    </div>
  )
}

