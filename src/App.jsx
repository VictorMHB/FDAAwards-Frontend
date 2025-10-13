import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Home from "./pages/Home";
import Votacao from "./pages/Votacao";
import Informacoes from "./pages/Informacoes";
import Sobre from "./pages/Sobre";

function App() {
  return (
    <Router>
      <div className="min-h-screen relative bg-background text-white overflow-hidden">
        
        <Header />

        <main className="pt-20">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/votacao" element={<Votacao />} />
            <Route path="/informacoes" element={<Informacoes />} />
            <Route path="/sobre" element={<Sobre />} />
          </Routes>
        </main>
      </div>
    </Router>
      
  )
}

export default App
