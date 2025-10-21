import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Home from "./pages/Home";
import Votacao from "./pages/Votacao";
import Informacoes from "./pages/Informacoes";
import Sobre from "./pages/Sobre";
import Footer from './components/Footer';
import LoadingScreen from './components/LoadingScreen';
import { useState, useEffect } from 'react';

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return <LoadingScreen />;
  }

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

        <Footer />
      </div>
    </Router>
      
  )
}

export default App
