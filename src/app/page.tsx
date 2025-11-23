import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Camera, Target, Utensils, Zap } from 'lucide-react'

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 to-red-50">
      {/* Header */}
      <header className="container mx-auto px-4 py-6">
        <nav className="flex justify-between items-center">
          <h1 className="text-3xl font-bold text-orange-600">AbsSnap</h1>
          <div className="space-x-4">
            <Link href="/treinos" className="text-gray-700 hover:text-orange-600">Treinos</Link>
            <Link href="/tracker" className="text-gray-700 hover:text-orange-600">Tracker</Link>
            <Link href="/plano" className="text-gray-700 hover:text-orange-600">Plano Alimentar</Link>
          </div>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="container mx-auto px-4 py-20 text-center">
        <h2 className="text-5xl font-bold text-gray-900 mb-6">
          Transforme Seu Corpo com <span className="text-orange-600">AbsSnap</span>
        </h2>
        <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
          Perca barriga, defina cintura e abdômen com treinos comprovados, plano alimentar personalizado e tracker inteligente de calorias via foto do prato.
        </p>
        <div className="flex justify-center space-x-4">
          <Button size="lg" className="bg-orange-600 hover:bg-orange-700">
            Começar Agora
          </Button>
          <Button size="lg" variant="outline">
            Saiba Mais
          </Button>
        </div>
      </section>

      {/* Features */}
      <section className="container mx-auto px-4 py-20">
        <h3 className="text-3xl font-bold text-center mb-12">Por que escolher AbsSnap?</h3>
        <div className="grid md:grid-cols-3 gap-8">
          <div className="text-center p-6 bg-white rounded-lg shadow-md">
            <Target className="mx-auto mb-4 text-orange-600" size={48} />
            <h4 className="text-xl font-semibold mb-2">Treinos Comprovados</h4>
            <p className="text-gray-600">Exercícios animados para perder barriga, cintura e definir abdômen, adaptados ao seu objetivo.</p>
          </div>
          <div className="text-center p-6 bg-white rounded-lg shadow-md">
            <Camera className="mx-auto mb-4 text-orange-600" size={48} />
            <h4 className="text-xl font-semibold mb-2">Tracker Inteligente</h4>
            <p className="text-gray-600">Tire foto do seu prato e receba análise instantânea de calorias e nutrientes.</p>
          </div>
          <div className="text-center p-6 bg-white rounded-lg shadow-md">
            <Utensils className="mx-auto mb-4 text-orange-600" size={48} />
            <h4 className="text-xl font-semibold mb-2">Plano Alimentar</h4>
            <p className="text-gray-600">Receitas e planos personalizados para acelerar seu emagrecimento.</p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-orange-600 text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <Zap className="mx-auto mb-4" size={48} />
          <h3 className="text-3xl font-bold mb-4">Pronto para Mudar?</h3>
          <p className="text-xl mb-8">Junte-se a milhares que já transformaram seus corpos com AbsSnap.</p>
          <Button size="lg" variant="secondary">
            Iniciar Transformação
          </Button>
        </div>
      </section>
    </div>
  )
}