import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/Home/Home';
import MainC1 from './components/C1/MainC1';
import Section4C1 from './components/C1/Section4C1';

import MainC2 from './components/C2/MainC2';
import Coban from './components/C2/Region/Coban';
import Huehue from './components/C2/Region/Huehue';
import SanMarcos from './components/C2/Region/SanMarcos';
import Atitlan from './components/C2/Region/Atitlan';
import Acate from './components/C2/Region/Acate';
import Antigua from './components/C2/Region/Antigua';
import Fraijanes from './components/C2/Region/Fraijanes';
import Oriente from './components/C2/Region/Oriente';

import MainC3 from './components/C3/MainC3';
import MainC4 from './components/C4/MainC4';
import MainC5 from './components/C5/MainC5';
import MainC6 from './components/C6/MainC6';

import MainColab from './components/Colab/MainColab';
import SectionGC from './components/Colab/SectionGC';
import SectionAC from './components/Colab/SectionAC';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />

        {/* Rutas para las secciones de C1 */}
        <Route path="/c1" element={<MainC1 />} />
        <Route path="/c1/section4" element={<Section4C1 />} />

        <Route path="/c2" element={<MainC2 />} />
        {/* Rutas para las REGIONES de C2 */}
        <Route path="/c2/region/coban" element={<Coban />} />
        <Route path="/c2/region/huehue" element={<Huehue />} />
        <Route path="/c2/region/sanmarcos" element={<SanMarcos />} />
        <Route path="/c2/region/atitlan" element={<Atitlan />} />
        <Route path="/c2/region/acate" element={<Acate />} />
        <Route path="/c2/region/antigua" element={<Antigua />} />
        <Route path="/c2/region/fraijanes" element={<Fraijanes />} />
        <Route path="/c2/region/oriente" element={<Oriente />} />

        <Route path="/c3" element={<MainC3 />} />
        <Route path="/c4" element={<MainC4 />} /> 
        <Route path="/c5" element={<MainC5 />} />
        <Route path="/c6" element={<MainC6 />} />

        <Route path="/colab" element={<MainColab />} />
        <Route path="/colab/sgc" element={<SectionGC />} />
        <Route path="/colab/sac" element={<SectionAC />} />
      </Routes>
    </Router>
  );
}

export default App;