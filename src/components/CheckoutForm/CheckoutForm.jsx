import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./CheckoutForm.css";

export const CheckoutForm = ({ onConfirm }) => {
  const [name, setName] = useState("");
  const [lastname, setLastname] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [emailConfirm, setEmailConfirm] = useState("");
  const [error, setError] = useState("");

  const navigate = useNavigate();

  const onBack = () => {
    navigate(-1);
  };

  const handleConfirm = (e) => {
    e.preventDefault();
    if (email !== emailConfirm) {
      setError("Debe ingresar ambos mails iguales para continuar.");
      return;
    } else {
      const userData = { name, lastname, phone, email };
      onConfirm(userData);
    }
  };

  return (
    <div className="formContainer">
      <form onSubmit={handleConfirm} className="form">
        <label className="formLabel">
          Nombre
          <input
            type="text"
            className="formInput"
            placeholder="Juan"
            value={name}
            onChange={({ target }) => setName(target.value)}
            required
          />
        </label>
        <label className="formLabel">
          Apellido
          <input
            type="text"
            className="formInput"
            placeholder="Pérez"
            value={lastname}
            onChange={({ target }) => setLastname(target.value)}
            required
          />
        </label>
        <label className="formLabel">
          Teléfono
          <input
            type="number"
            className="formInput"
            placeholder="2494556677"
            value={phone}
            onChange={({ target }) => setPhone(target.value)}
            required
          />
        </label>
        <label className="formLabel">
          e-Mail
          <input
            type="email"
            className="formInput"
            placeholder="mail@mail.com"
            value={email}
            onChange={({ target }) => setEmail(target.value)}
            required
          />
        </label>
        <label className="formLabel">
          Confirmar e-Mail
          <input
            type="email"
            className="formInput"
            placeholder="mail@mail.com"
            value={emailConfirm}
            onChange={({ target }) => setEmailConfirm(target.value)}
            required
          />
        </label>
        {error && <h5 className="mailError">{error}</h5>}
        <div className="formLabel">
          <button type="submit" className="onBack" onClick={onBack}>
            Volver
          </button>
          <button type="submit" className="btnConfirm">
            Confirmar
          </button>
        </div>
      </form>
    </div>
  );
};
