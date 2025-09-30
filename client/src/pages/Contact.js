import React, { useState } from 'react';
import './Contact.css';

const Contact = ({ onVolver }) => {
  
  const [formData, setFormData] = useState({
    nombre: '',
    email: '',
    telefono: '',
    mensaje: ''
  });
  const [enviado, setEnviado] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    console.log('Datos del formulario:', formData);
    setEnviado(true);
    
    
    setFormData({
      nombre: '',
      email: '',
      telefono: '',
      mensaje: ''
    });
  };

  return (
    <div className="contact-page">
      <div id="contacto1">
        <div id="contactanos">Contáctanos</div>
        <p id="p-contacto1">¿Tienes alguna pregunta sobre nuestros muebles? Estamos aquí para ayudarte. Contáctanos y te responderemos a la brevedad.</p>
      </div>

      <div id="seccion">
        <div id="contacto2">
          <div id="info">Información de Contacto</div>
          <p>Visítanos en nuestro taller o comunícate con nosotros. Estaremos encantados de atenderte y ayudarte a encontrar el mueble perfecto para tu hogar.</p>
          <div id="container">
            <div id="item">
              <img src="/assets/map-pin.svg" alt="ubicacion" className="iconos" />
              <div id="texto">
                <p id="texto-titulo">Dirección</p>
                <p id="info2">
                  Av. San Juan 2847 <br />
                  C1232AAB — Barrio de San Cristóbal <br />
                  Ciudad Autónoma de Buenos Aires <br />
                  Argentina
                </p>
              </div>
            </div>

            <div id="item">
              <img src="/assets/phone.svg" alt="telefono" className="iconos" />
              <div id="texto">
                <p id="texto-titulo">Teléfono</p>
                <p id="info2">+54 11 4567-8900</p>
              </div>
            </div>

            <div id="item">
              <img src="/assets/mail.svg" alt="email" className="iconos" />
              <div id="texto">
                <p id="texto-titulo">Email</p>
                <p id="info2">info@hermanosjota.com.ar</p>
              </div>
            </div>

            <div id="item">
              <img src="/assets/clock.svg" alt="reloj" className="iconos" />
              <div id="texto">
                <p id="texto-titulo">Horarios de Atención</p>
                <p id="info2">
                  Lunes a Viernes: 10:00 - 19:00 <br />
                  Sábados: 10:00 - 14:00
                </p>
              </div>
            </div>
          </div>
        </div>

        <form id="form-contacto" onSubmit={handleSubmit}>
          <div id="info">Envíanos un mensaje</div>

          {enviado && (
            <div style={{
              background: '#d4edda',
              color: '#155724',
              padding: '1rem',
              borderRadius: '8px',
              marginBottom: '1rem',
              border: '1px solid #c3e6cb'
            }}>
              ¡Mensaje enviado correctamente! Te contactaremos pronto.
            </div>
          )}

          <div className="campo">
            <label className="label-form-contacto" htmlFor="nombre">
              Nombre <em>*</em>
            </label>
            <input
              type="text"
              className="inp-form-contacto"
              id="nombre"
              name="nombre"
              value={formData.nombre}
              onChange={handleChange}
              required
              placeholder="Ingrese su nombre"
            />
          </div>

          <div className="campo">
            <label className="label-form-contacto" htmlFor="email">
              Email <em>*</em>
            </label>
            <input
              type="email"
              className="inp-form-contacto"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              placeholder="Ingrese su email"
            />
          </div>

          <div className="campo">
            <label className="label-form-contacto" htmlFor="telefono">
              Teléfono
            </label>
            <input
              type="tel"
              className="inp-form-contacto"
              id="telefono"
              name="telefono"
              value={formData.telefono}
              onChange={handleChange}
              placeholder="Ingrese su teléfono"
            />
          </div>

          <div className="campo">
            <label className="label-form-contacto" htmlFor="mensaje">
              Mensaje <em>*</em>
            </label>
            <textarea
              id="mensaje"
              className="inp-form-contacto"
              name="mensaje"
              value={formData.mensaje}
              onChange={handleChange}
              required
              rows="4"
              placeholder="¿En qué podemos ayudarte?"
            ></textarea>
          </div>

          <button id="btn-enviar" type="submit">
            Enviar
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;