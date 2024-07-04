import './App.css';
import Header from '../components/Header/Header';
import HeaderContentSection from '../components/HeaderContentSection/HeaderContentSection';
import MenuSection from '../components/MenuSection/MenuSection';
import SaleOffSection from '../components/SaleOffSection/SaleOffSection';
import MobileAppSection from '../components/MobileAppSection/MobileAppSection';
import Footer from '../components/Footer/Footer';

function App() {

  return (
    <div className='body'>
      <Header />
      <HeaderContentSection />
      <MenuSection />
      <SaleOffSection />
      <MobileAppSection />
      <Footer />
    </div>
  )
}

export default App
