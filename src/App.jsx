import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/Home/Home';
import MainC1 from './components/C1/MainC1';
import Section4C1 from './components/C1/Section4C1';
import MainC2 from './components/C2/MainC2';
import MainC3 from './components/C3/MainC3';
import MainC4 from './components/C4/MainC4';
import MainC5 from './components/C5/MainC5';
import MainC6 from './components/C6/MainC6';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />

        {/* Rutas para las secciones de C1 */}
        <Route path="/c1" element={<MainC1 />} />
        <Route path="/c1/section4" element={<Section4C1 />} />

        <Route path="/c2" element={<MainC2 />} />
        <Route path="/c3" element={<MainC3 />} />
        <Route path="/c4" element={<MainC4 />} /> 
        <Route path="/c5" element={<MainC5 />} />
        <Route path="/c6" element={<MainC6 />} />
      </Routes>
    </Router>
  );
}

export default App;