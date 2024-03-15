import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from './componentes/header/Header';
import Footer from './componentes/footer/Footer';
import Seccion from './componentes/seccion/Seccion';
import ListaProductos from './componentes/productos/ListaProductos';
import Menu from './componentes/menu/Menu';
import ProductoDetalle from './componentes/productos/ProductoDetalle';
import Registro from './componentes/login/Registro';
import Login from './componentes/login/Login';

function App() {
  return (
    <div className='contenedor'>
      <Router basename="/ceramica-viva">
        <Header />
        <Menu />
        <Routes>
          <Route path="/" element={<Seccion />} />
          <Route path="/productos" element={<ListaProductos />} />
          <Route path="/registro" element={<Registro />} />
          <Route path="/login" element={<Login />} />
          <Route path="/detalleProducto/:id" element={<ProductoDetalle/>} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;