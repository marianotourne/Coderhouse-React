import { useState } from "react";

export const CheckoutForm = ({ onConfirm }) => {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");

  const handleConfirm = (e) => {
    e.preventDefault();
    const userData = { name, phone, email };
    onConfirm(userData);
  };

  return (
    <div className="formContainer">
      <form onSubmit={handleConfirm} className="form">
        <label className="formLabel">
          Nombre
          <input
            type="text"
            className="formInput"
            value={name}
            onChange={({ target }) => setName(target.value)}
          />
        </label>
        <label className="formLabel">
          Teléfono
          <input
            type="text"
            className="formInput"
            value={phone}
            onChange={({ target }) => setPhone(target.value)}
          />
        </label>
        <label className="formLabel">
          e-Mail
          <input
            type="text"
            className="formInput"
            value={email}
            onChange={({ target }) => setEmail(target.value)}
          />
        </label>
        <div className="formLabel">
          <button type="submit">Confirmar</button>
        </div>
      </form>
    </div>
  );
};
