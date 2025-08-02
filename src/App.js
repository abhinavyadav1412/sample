
import './App.css';
import AboutUs from './components/AboutUsSection';
import Navbar from './components/Navbar'; 
import Hero from './components/Hero';
import ProductTabs from './components/ProductTabs';

function App() {
  return (
    <>
    <Navbar />
    <Hero />
    <ProductTabs/>
    <AboutUs />
    </>
  );
}

export default App;
