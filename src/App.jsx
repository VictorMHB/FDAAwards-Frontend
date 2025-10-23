import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect } from 'react';

import Header from './components/Header';
import Footer from './components/Footer';
import LoadingScreen from './components/LoadingScreen';

import Home from "./pages/Home";
import Votacao from "./pages/Votacao";
import Informacoes from "./pages/Informacoes";
import Sobre from "./pages/Sobre";


function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    
  }

  return (
    <AnimatePresence>
      {loading ? (
        <motion.div
          key="loading"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, transition: { duration: 0.8 } }}
        >
          <LoadingScreen />
        </motion.div>
      ) : (
        <motion.div
          key="app"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1, transition: { duration: 1.2 } }}
        >
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
        </motion.div>
      )}
    </AnimatePresence>
  );
}

export default App
