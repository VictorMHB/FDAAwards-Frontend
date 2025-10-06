import { useState } from 'react';
import Header from './components/Header';

function App() {
  const [count, setCount] = useState(0)

  return (
    <div class="min-h-screen bg-background">
      <Header />
      <main class="pt-24 text-center">
        <h2 class="text-4x1 font-text mb-4 text-secondary">Bem-Vindo ao FDA Awards</h2>
        <p class="text-secondary font-text">Os Melhores Prêmios do Ano</p>
      </main>
    </div>
  )
}

export default App
