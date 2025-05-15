import Hero from './components/hero/Hero';
import LanguageSelector from './components/navigation/LanguageSelector';
import CardSection from './components/sections/CardSection';
import NavigationControls from './components/navigation/NavigationControls';

function App() {
  return (
    <div className="relative">
      <Hero />
      <CardSection />
      <NavigationControls />
      <LanguageSelector />
    </div>
  )
}

export default App