import Header from "../components/Header";
import { useEffect, useState } from "react";
import TarjetaProducto from "../components/TarjetaProducto";
import "./Home.css"

export default function Home(){
    const [productos, setProductos] = useState([]);
    const [loading, setLoading] = useState(true);

    // Cargar productos desde el backend
    useEffect(() => {
        const fetchProductos = async () => {
        try {
            const res = await fetch("http://localhost:3000/api/productos");
            if (!res.ok) throw new Error("Error al cargar productos");
                const data = await res.json();
                setProductos(data);
        } catch (error) {
            console.error("Error cargando productos:", error);
        } finally {
            setLoading(false);
        }
    };
        fetchProductos();
    },[]);

    // Filtrar los destacados
    const destacados = productos.filter(p => p.destacado);

    if (loading) return <p>Cargando productos...</p>;

    return(
        <>
            <Header mostrarBuscador={false}/>

            <h1>Página de inicio</h1>
            
            <div className="carrusel-wrapper">
                <button className="carrusel-btn left">
                    <i className="fa-solid fa-chevron-left"></i>
                </button>

                <div className="carrusel">
                    {destacados.map(prod => (
                        <TarjetaProducto
                            key={prod.id}
                            producto={prod}
                            claseExtra="small"
                            mostrarEtiquetaDestacado={true}
                        />
                    ))}
                </div>

                <button className="carrusel-btn right">
                    <i className="fa-solid fa-chevron-right"></i>
                </button>
            </div>
        </>
    )
}