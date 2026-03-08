import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import FAQ from './pages/FAQ';
import PoliticaPrivacidad from './pages/PoliticaPrivacidad';
import Navbar from './components/Navbar';
import WhatsAppButton from './components/WhatsAppButton';

export default function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/preguntas-frecuentes" element={<FAQ />} />
        <Route path="/politica-privacidad" element={<PoliticaPrivacidad />} />
      </Routes>
      <WhatsAppButton />
    </BrowserRouter>
  );
}
