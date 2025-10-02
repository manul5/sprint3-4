import { useState } from "react";
import './ContactForm.css'

export default function ContactForm() {
  const [formData, setFormData] = useState({
    nombre: "",
    email: "",
    telefono: "",
    mensaje: ""
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
    console.log("Datos del formulario:", formData);

    setEnviado(true);

    setFormData({
      nombre: "",
      email: "",
      telefono: "",
      mensaje: ""
    });
  };

  return (
    <form id="form-contacto" onSubmit={handleSubmit}>
      <div id="info">Envíanos un mensaje</div>

      {enviado && (
        <div
          style={{
            background: "#d4edda",
            color: "#155724",
            padding: "1rem",
            borderRadius: "8px",
            marginBottom: "1rem",
            border: "1px solid #c3e6cb"
          }}
        >
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
  );
};