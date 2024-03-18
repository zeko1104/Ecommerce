import './App.css';
import { Route,Routes } from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import Navbar from './components/Navbar';
import Products from './components/Products';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Login from './components/Login';
import Register from './components/Register';
import Footer from './components/Footer';
import Contacts from './components/Contacts';


function App() {
  return (
    <div className="App">
      <Navbar/>
     <Routes>
      <Route  path='/' element={<Home/>} />
      <Route  path='/about' element={<About/>} />
      <Route  path='/products' element={<Products/>} />
      <Route  path='/login' element={<Login/>} />
      <Route  path='/register' element={<Register/>} />
      <Route  path='/contact' element={<Contacts/>} />
     </Routes>
     <Footer/>
    </div>
  );
}

export default App;
