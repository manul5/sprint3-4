import { useState } from "react";
import { Link } from "react-router-dom";
import logoHermanosJota from "../assets/logoHermanosJota.svg"
import iconoCarrito from "../assets/carritoCompra.png"
import "./Header.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";

export default function Header({mostrarBuscador}){
    const [menuOpen, setMenuOpen] = useState(false);

    return(
        <header>
            {/* Botón hamburguesa */}
            <button className="menu-toggle" onClick={() => setMenuOpen(!menuOpen)}>
                <FontAwesomeIcon icon={faBars}/>
            </button>

            {/* Logo */}
            <div className="logo">
                <img src={logoHermanosJota} alt="Hermanos Jota" />
                <span>Hermanos Jota</span>
            </div>

            {/* Opciones del menú */}
            <nav className={menuOpen ? "active" : ""}>
                <Link to="/">Inicio</Link>
                <Link to="/productos">Productos</Link>
                <Link to="/contacto">Contacto</Link>
            </nav>

            {/* Buscador */}
            {mostrarBuscador && (
                <div className="buscador" id="buscador">
                    <input type="text" placeholder="Buscar..." />
                    <button id="btn-buscar">
                        <FontAwesomeIcon icon={faMagnifyingGlass} />
                    </button>
                </div>
            )}

            {/* Carrito */}
            <div className="carrito">
                <img src={iconoCarrito} alt="Carrito" />
            </div>

        </header>
    )
}