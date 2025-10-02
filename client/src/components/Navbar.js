import { useState } from "react";
import "./Navbar.css";

export default function Navbar({ 
  cantidadCarrito, 
  onMostrarHome, 
  onMostrarCatalogo, 
  onMostrarContacto,
  onBuscar,
  onMostrarCarrito,
  vistaActual 
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

    const mostrarBusqueda = vistaActual === 'catalogo';

    return(
        <header>
            <button className="menu-toggle" onClick={() => { setMenuOpen(!menuOpen); setBusquedaOpen(false); }}>
                ☰
            </button>

            <div className="logo" onClick={() => handleNavClick(onMostrarHome)}>
                <img src="/assets/logoHermanosJota.svg" alt="Hermanos Jota" />
                <span>Hermanos Jota</span>
            </div>

            {mostrarBusqueda && (
                <button className="lupita-mobile" onClick={toggleBusqueda}>
                    <img src="/assets/lupa.webp" alt="Buscar" />
                </button>
            )}

            {/* buscador mobile */}
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

            <nav className={menuOpen ? 'active' : ''}>
                <a href="#!" onClick={(e) => { e.preventDefault(); handleNavClick(onMostrarHome); }}>Inicio</a>
                <a href="#!" onClick={(e) => { e.preventDefault(); handleNavClick(onMostrarCatalogo); }}>Productos</a>
                <a href="#!" onClick={(e) => { e.preventDefault(); handleNavClick(onMostrarContacto); }}>Contacto</a>
            </nav>

            {/* solo mostrar en catalogo */}
            {mostrarBusqueda && (
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
            )}

            {/* carrito */}
            <div className="carrito" onClick={onMostrarCarrito} style={{position: 'relative', cursor: 'pointer'}}>
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