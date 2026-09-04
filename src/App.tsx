import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Confidentialite from './pages/Confidentialite';
import Cgu from './pages/Cgu';
import ScrollToTop from './components/ScrollToTop';

export default function App() {
  return (
    <>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/confidentialite" element={<Confidentialite />} />
        <Route path="/cgu" element={<Cgu />} />
      </Routes>
    </>
  );
}
