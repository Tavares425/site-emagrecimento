'use client'

import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Camera, Upload } from 'lucide-react'

export default function Tracker() {
  const [image, setImage] = useState<string | null>(null)
  const [result, setResult] = useState<string | null>(null)

  const handleImageUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0]
    if (file) {
      const reader = new FileReader()
      reader.onload = (e) => {
        setImage(e.target?.result as string)
        // Simulação de análise
        setTimeout(() => {
          setResult('Análise: Aproximadamente 450 calorias. Alto em proteínas, médio em carboidratos.')
        }, 2000)
      }
      reader.readAsDataURL(file)
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 to-red-50">
      <header className="container mx-auto px-4 py-6">
        <nav className="flex justify-between items-center">
          <h1 className="text-3xl font-bold text-orange-600">AbsSnap</h1>
          <div className="space-x-4">
            <a href="/" className="text-gray-700 hover:text-orange-600">Home</a>
            <a href="/treinos" className="text-gray-700 hover:text-orange-600">Treinos</a>
            <a href="/plano" className="text-gray-700 hover:text-orange-600">Plano Alimentar</a>
          </div>
        </nav>
      </header>

      <main className="container mx-auto px-4 py-20">
        <h2 className="text-4xl font-bold text-center mb-8">Tracker de Calorias</h2>
        <p className="text-xl text-center text-gray-600 mb-12">Tire uma foto do seu prato e receba análise instantânea de calorias e nutrientes.</p>

        <div className="max-w-md mx-auto">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Camera />
                Analisar Prato
              </CardTitle>
            </CardHeader>
            <CardContent>
              {!image ? (
                <div className="text-center">
                  <label htmlFor="image-upload" className="cursor-pointer">
                    <div className="w-32 h-32 mx-auto bg-gray-200 rounded-lg flex items-center justify-center mb-4">
                      <Upload size={48} className="text-gray-400" />
                    </div>
                    <Button asChild>
                      <span>Escolher Foto</span>
                    </Button>
                  </label>
                  <input
                    id="image-upload"
                    type="file"
                    accept="image/*"
                    onChange={handleImageUpload}
                    className="hidden"
                  />
                </div>
              ) : (
                <div>
                  <img src={image} alt="Prato" className="w-full h-48 object-cover rounded-lg mb-4" />
                  {result ? (
                    <p className="text-gray-700">{result}</p>
                  ) : (
                    <p className="text-gray-500">Analisando...</p>
                  )}
                  <Button onClick={() => { setImage(null); setResult(null) }} className="mt-4">
                    Nova Foto
                  </Button>
                </div>
              )}
            </CardContent>
          </Card>
        </div>
      </main>
    </div>
  )
}