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
  const [productosFiltrados, setProductosFiltrados] = useState([]);
  const [cargando, setCargando] = useState(true);
  const [terminoBusqueda, setTerminoBusqueda] = useState('');

  // cargar productos
  useEffect(() => {
    const fetchProductos = async () => {
      try {
        const response = await fetch('http://localhost:3000/api/productos');
        const data = await response.json();
        setProductos(data);
        setProductosFiltrados(data); 
      } catch (error) {
        console.error('Error:', error);
      } finally {
        setCargando(false);
      }
    };
    fetchProductos();
  }, []);

  //buscar funcional
  const handleBuscar = (termino) => {
    setTerminoBusqueda(termino);
    
    //muestra todos
    if (!termino.trim()) {
      setProductosFiltrados(productos);
      return;
    }

    const filtrados = productos.filter(producto =>
      producto.nombre.toLowerCase().includes(termino.toLowerCase()) ||
      producto.categoria.toLowerCase().includes(termino.toLowerCase()) ||
      producto.descripcion.toLowerCase().includes(termino.toLowerCase())
    );
    
    setProductosFiltrados(filtrados);
    
    if (termino.trim() && vistaActual === 'home') {
      setVistaActual('catalogo');
    }
  };

  const productosDestacados = productos.filter(p => p.destacado);

  const mostrarHome = () => {
    setVistaActual('home');
    setProductoSeleccionado(null);
    setTerminoBusqueda(''); 
    setProductosFiltrados(productos);
  };

  const mostrarCatalogo = () => {
    setVistaActual('catalogo');
    setProductoSeleccionado(null);
    setTerminoBusqueda('');
    setProductosFiltrados(productos); 
  };

  const mostrarContacto = () => {
    setVistaActual('contacto');
    setProductoSeleccionado(null);
  };

  const mostrarDetalle = (producto) => {
    setProductoSeleccionado(producto);
    setVistaActual('detalle');
  };

 //carrito
  const agregarAlCarrito = (producto) => {
    setCarrito([...carrito, producto]);
    alert(`¡${producto.nombre} agregado al carrito! 🛒`);
  };

  return (
    <div className="App">
      <Header 
        cantidadCarrito={carrito.length}
        onMostrarHome={mostrarHome}
        onMostrarCatalogo={mostrarCatalogo}
        onMostrarContacto={mostrarContacto}
        onBuscar={handleBuscar}  // ← Nueva prop
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
            productos={productosFiltrados} 
            cargando={cargando}
            onProductoClick={mostrarDetalle}
            terminoBusqueda={terminoBusqueda} 
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