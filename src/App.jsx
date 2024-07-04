import './App.css';
import Header from '../components/Header/Header';
import HeaderContentSection from '../components/HeaderContentSection/HeaderContentSection';
import MenuSection from '../components/MenuSection/MenuSection';
import SaleOffSection from '../components/SaleOffSection/SaleOffSection';

function App() {

  return (
    <div className='body'>
      <Header />
      <HeaderContentSection />
      <MenuSection />
      <SaleOffSection />
    </div>
  )
}

export default App
