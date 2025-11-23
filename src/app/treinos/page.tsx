import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'

export default function Treinos() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 to-red-50">
      <header className="container mx-auto px-4 py-6">
        <nav className="flex justify-between items-center">
          <h1 className="text-3xl font-bold text-orange-600">AbsSnap</h1>
          <div className="space-x-4">
            <a href="/" className="text-gray-700 hover:text-orange-600">Home</a>
            <a href="/tracker" className="text-gray-700 hover:text-orange-600">Tracker</a>
            <a href="/plano" className="text-gray-700 hover:text-orange-600">Plano Alimentar</a>
          </div>
        </nav>
      </header>

      <main className="container mx-auto px-4 py-20">
        <h2 className="text-4xl font-bold text-center mb-8">Treinos Comprovados</h2>
        <p className="text-xl text-center text-gray-600 mb-12">Escolha seu objetivo e veja exercícios animados para transformar seu corpo.</p>

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
          {/* Exemplo de exercício com animação CSS */}
          <Card>
            <CardHeader>
              <CardTitle>Prancha</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="w-full h-48 bg-gray-200 rounded-lg flex items-center justify-center mb-4">
                <div className="w-16 h-16 bg-orange-500 rounded-full animate-bounce"></div>
                {/* Simulação de animação: pessoa em prancha */}
              </div>
              <p className="text-gray-600 mb-4">Fortalece o core e queima gordura abdominal.</p>
              <Button className="w-full">Ver Detalhes</Button>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Abdominais</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="w-full h-48 bg-gray-200 rounded-lg flex items-center justify-center mb-4">
                <div className="w-16 h-16 bg-orange-500 rounded-full animate-pulse"></div>
                {/* Animação simples */}
              </div>
              <p className="text-gray-600 mb-4">Define os músculos abdominais.</p>
              <Button className="w-full">Ver Detalhes</Button>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Burpees</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="w-full h-48 bg-gray-200 rounded-lg flex items-center justify-center mb-4">
                <div className="w-16 h-16 bg-orange-500 rounded-full animate-ping"></div>
                {/* Animação */}
              </div>
              <p className="text-gray-600 mb-4">Queima calorias e fortalece todo o corpo.</p>
              <Button className="w-full">Ver Detalhes</Button>
            </CardContent>
          </Card>
        </div>
      </main>
    </div>
  )
}