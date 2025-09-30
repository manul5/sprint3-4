
import React from 'react';
import './Carrito.css';

const Carrito = ({ carrito, onEliminarItem, onVaciarCarrito, onSeguirComprando, onVolver }) => {
  const calcularTotal = () => {
    return carrito.reduce((total, item) => total + item.precio, 0);
  };

  if (carrito.length === 0) {
    return (
      <div className="carrito-page">
        <div className="carrito-vacio">
          <h2>Carrito vacio</h2>
          <p>¡Descubre nuestros productos y encuentra el mueble perfecto!</p>
          <button className="btn-primary" onClick={onSeguirComprando}>
            Explorar Productos
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="carrito-page">
      <div className="carrito-header">
        <h2>Tu Carrito de Compras</h2>
        <button className="btn-volver" onClick={onVolver}>
          ← Volver al Inicio
        </button>
      </div>

      <div className="carrito-container">
        <div className="carrito-items">
          {carrito.map(item => (
            <div key={item.carritoId} className="carrito-item">
              <img 
                src={`/assets/${item.imagen.replace('assets/', '')}`} 
                alt={item.nombre}
                className="carrito-item-imagen"
              />
              
              <div className="carrito-item-info">
                <h3>{item.nombre}</h3>
                <p className="categoria">{item.categoria}</p>
                <p className="precio">${item.precio.toLocaleString()}</p>
              </div>

              <button 
                className="btn-eliminar"
                onClick={() => onEliminarItem(item.carritoId)}
                title="Eliminar del carrito">
                  <img src="/assets/eliminar.png" alt="Buscar" />
              </button>
            </div>
          ))}
        </div>

        <div className="carrito-resumen">
          <h3>Resumen de Compra</h3>
          <div className="resumen-detalle">
            <p>Productos: <span>{carrito.length}</span></p>
            <p className="total">Total: <span>${calcularTotal().toLocaleString()}</span></p>
          </div>
          
          <div className="carrito-acciones">
            <button className="btn-vaciar" onClick={onVaciarCarrito}>
              Vaciar Carrito
            </button>
            <button className="btn-comprar">
              Finalizar Compra
            </button>
          </div>

          <button className="btn-seguir-comprando" onClick={onSeguirComprando}>
            ← Seguir Comprando
          </button>
        </div>
      </div>
    </div>
  );
};

export default Carrito;