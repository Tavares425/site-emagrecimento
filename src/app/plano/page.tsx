import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import { Utensils } from 'lucide-react'

export default function Plano() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 to-red-50">
      <header className="container mx-auto px-4 py-6">
        <nav className="flex justify-between items-center">
          <h1 className="text-3xl font-bold text-orange-600">AbsSnap</h1>
          <div className="space-x-4">
            <a href="/" className="text-gray-700 hover:text-orange-600">Home</a>
            <a href="/treinos" className="text-gray-700 hover:text-orange-600">Treinos</a>
            <a href="/tracker" className="text-gray-700 hover:text-orange-600">Tracker</a>
          </div>
        </nav>
      </header>

      <main className="container mx-auto px-4 py-20">
        <h2 className="text-4xl font-bold text-center mb-8">Plano Alimentar Personalizado</h2>
        <p className="text-xl text-center text-gray-600 mb-12">Receitas e planos baseados no seu objetivo de emagrecimento.</p>

        <div className="mb-8">
          <Select>
            <SelectTrigger className="w-full max-w-md mx-auto">
              <SelectValue placeholder="Selecione seu objetivo" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="perder-barriga">Perder Barriga</SelectItem>
              <SelectItem value="definir-cintura">Definir Cintura</SelectItem>
              <SelectItem value="definir-abdomen">Definir Abdômen</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Utensils />
                Café da Manhã
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600 mb-4">Aveia com frutas e iogurte grego. ~300 calorias.</p>
              <Button className="w-full">Ver Receita</Button>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Utensils />
                Almoço
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600 mb-4">Salada de frango grelhado com vegetais. ~400 calorias.</p>
              <Button className="w-full">Ver Receita</Button>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Utensils />
                Jantar
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600 mb-4">Peixe assado com quinoa e legumes. ~450 calorias.</p>
              <Button className="w-full">Ver Receita</Button>
            </CardContent>
          </Card>
        </div>
      </main>
    </div>
  )
}