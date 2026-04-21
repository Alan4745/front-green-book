import { lazy, Suspense, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { TransitionProvider } from './components/Global/PageTransition';
import PageSkeleton from './components/Global/PageSkeleton';

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => { window.scrollTo(0, 0); }, [pathname]);
  return null;
}

const Home        = lazy(() => import('./components/Home/Home'));
const MainC1      = lazy(() => import('./components/C1/MainC1'));
const Section4C1  = lazy(() => import('./components/C1/Section4C1'));

const MainC2      = lazy(() => import('./components/C2/MainC2'));
const Section1C2  = lazy(() => import('./components/C2/Section1C2'));
const Coban       = lazy(() => import('./components/C2/Region/Coban'));
const Huehue      = lazy(() => import('./components/C2/Region/Huehue'));
const SanMarcos   = lazy(() => import('./components/C2/Region/SanMarcos'));
const Atitlan     = lazy(() => import('./components/C2/Region/Atitlan'));
const Acate       = lazy(() => import('./components/C2/Region/Acate'));
const Antigua     = lazy(() => import('./components/C2/Region/Antigua'));
const Fraijanes   = lazy(() => import('./components/C2/Region/Fraijanes'));
const Oriente     = lazy(() => import('./components/C2/Region/Oriente'));

const MainC3      = lazy(() => import('./components/C3/MainC3'));
const MainC4      = lazy(() => import('./components/C4/MainC4'));
const MainC5      = lazy(() => import('./components/C5/MainC5'));
const MainC6      = lazy(() => import('./components/C6/MainC6'));

const MainColab   = lazy(() => import('./components/Colab/MainColab'));
const SectionGC   = lazy(() => import('./components/Colab/SectionGC'));
const CoverGC     = lazy(() => import('./components/Colab/GC/CoverGC'));
const SectionAC   = lazy(() => import('./components/Colab/SectionAC'));
const CoverAC     = lazy(() => import('./components/Colab/AC/CoverAC'));
const MainC7      = lazy(() => import('./components/C7/MainC7'));
const CoverColab  = lazy(() => import('./components/Colab/CoverColab'));

function App() {
  return (
    <Router>
      <TransitionProvider>
        <ScrollToTop />
        <Suspense fallback={<PageSkeleton />}>
          <Routes>
            <Route path="/" element={<Home />} />

            <Route path="/c1" element={<MainC1 />} />
            <Route path="/c1/section4" element={<Section4C1 />} />

            <Route path="/c2" element={<MainC2 />} />
            <Route path="/c2/section1" element={<Section1C2 />} />
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
            <Route path="/colab/sgc/covergc" element={<SectionGC />} />
            <Route path="/colab/sgc/" element={<MainC7 />} />
            <Route path="/colab/sac/coverac" element={<SectionAC />} />
            <Route path="/colab/sac" element={<CoverAC />} />
          </Routes>
        </Suspense>
      </TransitionProvider>
    </Router>
  );
}

export default App;
