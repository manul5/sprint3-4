import Header from "../components/Header";
import TarjetaProducto from "../components/TarjetaProducto";
import { useState, useEffect } from "react";

export default function Products(){

    const [productos, setProductos] = useState([]);

    useEffect(() => {
        async function fetchProductos() {
            try {
                const res = await fetch("http://localhost:3000/api/productos");
                const data = await res.json();
                setProductos(data);
            } catch (err) {
                console.error("Error cargando productos:", err);
            }
        }

        fetchProductos();
    },[]);

    return(
        <section className="catalogo">
            <Header mostrarBuscador={true}/>

            <h1>Catálogo de productos</h1>
            
            <div className="grid-productos">
                {productos.map((producto) => (
                    <TarjetaProducto key={producto.id} producto={producto} />
                ))}
            </div>
        
        </section>
    )
}