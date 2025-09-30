// App.js
import './App.css';
import { useState, useEffect } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import ProductList from './components/ProductList';
import ProductDetail from './components/ProductDetail';
import Contact from './pages/Contact';

function App() {
  const [vistaActual, setVistaActual] = useState('home');
  const [productoSeleccionado, setProductoSeleccionado] = useState(null);
  const [carrito, setCarrito] = useState([]);
  const [productos, setProductos] = useState([]);
  const [cargando, setCargando] = useState(true);

  // Cargar productos
  useEffect(() => {
    const fetchProductos = async () => {
      try {
        const response = await fetch('http://localhost:3000/api/productos');
        const data = await response.json();
        setProductos(data);
      } catch (error) {
        console.error('Error:', error);
      } finally {
        setCargando(false);
      }
    };
    fetchProductos();
  }, []);

  // Filtrar productos
  const productosDestacados = productos.filter(p => p.destacado);
  const productosNormales = productos.filter(p => !p.destacado);

  // Funciones de navegación
  const mostrarHome = () => setVistaActual('home');
  const mostrarCatalogo = () => setVistaActual('catalogo');
  const mostrarContacto = () => setVistaActual('contacto');
  const mostrarDetalle = (producto) => {
    setProductoSeleccionado(producto);
    setVistaActual('detalle');
  };

  // AGREGAR AL CARRITO - FUNCIONAL
  const agregarAlCarrito = (producto) => {
    setCarrito([...carrito, producto]);
    alert(`¡${producto.nombre} agregado al carrito!`);
  };

  return (
    <div className="App">
      <Header
        cantidadCarrito={carrito.length}
        onMostrarHome={mostrarHome}
        onMostrarCatalogo={mostrarCatalogo}
        onMostrarContacto={mostrarContacto}
      />

      <main>
        {vistaActual === 'home' && (
          <Home
            productosDestacados={productosDestacados}
            cargando={cargando}
            onProductoClick={mostrarDetalle}
            onVerCatalogo={mostrarCatalogo}
          />
        )}

        {vistaActual === 'catalogo' && (
          <ProductList
            productos={productos}
            cargando={cargando}
            onProductoClick={mostrarDetalle}
          />
        )}

        {vistaActual === 'detalle' && productoSeleccionado && (
          <ProductDetail
            producto={productoSeleccionado}
            onVolver={mostrarCatalogo}
            onAgregarCarrito={agregarAlCarrito}
          />
        )}

        {vistaActual === 'contacto' && (
          <Contact onVolver={mostrarHome} />
        )}
      </main>

      <Footer />
    </div>
  );
}

export default App;