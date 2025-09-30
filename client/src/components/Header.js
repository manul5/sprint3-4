import { useState } from "react";
import "./Header.css";

export default function Header({ 
  cantidadCarrito, 
  onMostrarHome, 
  onMostrarCatalogo, 
  onMostrarContacto,
  onBuscar
}){
    const [menuOpen, setMenuOpen] = useState(false);
    const [busquedaOpen, setBusquedaOpen] = useState(false);
    const [busqueda, setBusqueda] = useState("");

    const handleBuscar = (e) => {
        e.preventDefault();
        if (onBuscar) {
            onBuscar(busqueda);
        }
    };

    const handleNavClick = (action) => {
        setMenuOpen(false);
        setBusquedaOpen(false);
        action();
    };

    const toggleBusqueda = () => {
        setBusquedaOpen(!busquedaOpen);
        setMenuOpen(false);
    };

    return(
        <header>
            {/*Menú hamburguesa */}
            <button className="menu-toggle" onClick={() => { setMenuOpen(!menuOpen); setBusquedaOpen(false); }}>
                ☰
            </button>

            {/* Logo */}
            <div className="logo" onClick={() => handleNavClick(onMostrarHome)}>
                <img src="/assets/logoHermanosJota.svg" alt="Hermanos Jota" />
                <span>Hermanos Jota</span>
            </div>

            {/* Lupita responiva*/}
            <button className="lupita-mobile" onClick={toggleBusqueda}>
                <img src="/assets/lupa.webp" alt="Buscar" />
            </button>

            {/* Barra de búsqueda responsiva */}
            <div className={`buscador-mobile ${busquedaOpen ? 'active' : ''}`}>
                <input 
                    type="text" 
                    placeholder="Buscar productos..." 
                    value={busqueda}
                    onChange={(e) => setBusqueda(e.target.value)}
                />
                <button onClick={handleBuscar}>
                    <img src="/assets/lupa.webp" alt="Buscar" />
                </button>
            </div>

            {/* Navegación */}
            <nav className={menuOpen ? 'active' : ''}>
                <a href="#!" onClick={(e) => { e.preventDefault(); handleNavClick(onMostrarHome); }}>Inicio</a>
                <a href="#!" onClick={(e) => { e.preventDefault(); handleNavClick(onMostrarCatalogo); }}>Productos</a>
                <a href="#!" onClick={(e) => { e.preventDefault(); handleNavClick(onMostrarContacto); }}>Contacto</a>
            </nav>

            {/* Búsqueda*/}
            <div className="buscador-container">
                <input 
                    type="text" 
                    placeholder="Buscar productos..." 
                    value={busqueda}
                    onChange={(e) => setBusqueda(e.target.value)}
                    className="buscador-input"
                />
                <button onClick={handleBuscar} className="buscador-btn">
                    <img src="/assets/lupa.webp" alt="Buscar" />
                </button>
            </div>

            
            <div className="carrito">
                <img src="/assets/carritoCompra.png" alt="Carrito de compras" />
                {cantidadCarrito > 0 && (
                    <span className="contador-carrito">
                        {cantidadCarrito}
                    </span>
                )}
            </div>
        </header>
    );
}