import "./TarjetaProducto.css";

export default function TarjetaProducto({ producto, claseExtra = "" , mostrarEtiquetaDestacado = false}) {
  return (
    <article className={`card ${claseExtra}`}>

      {/* Etiqueta destacado */}
      {mostrarEtiquetaDestacado && producto.destacado && (
          <span className="tag">Destacado</span>
      )}

      <div className="card-img">
        <img src={producto.imagen} alt={producto.nombre} />
      </div>

      <div className="card-body">

        <span className="categoria">{producto.categoria}</span>
        
        <h3>{producto.nombre}</h3>
        
        {!(mostrarEtiquetaDestacado && producto.destacado) && (
            <p>{producto.descripcion}</p>
        )}
        
        <div className="card-footer">
          <p className="precio">${producto.precio.toLocaleString()}</p>
          <a href={`/producto/${producto.id}`} className="btn">
            Ver Detalles
          </a>
        </div>

      </div>

    </article>
  );
}