import React, { useState, type PropsWithChildren } from "react";
import type { Client } from "../../models/clients";

type Props = {
  handleSubmit: (client: Client) => void;
};

const CartModalForm = ({
  handleSubmit,
  children,
}: Props & PropsWithChildren) => {
  const [form, setForm] = useState({ name: "", email: "", address: "" });
  const [errors, setErrors] = useState<{
    name?: string;
    email?: string;
    address?: string;
  }>({});

  const validate = () => {
    const newErrors: typeof errors = {};
    if (!form.name.trim()) newErrors.name = "El nombre es requerido";
    else if (form.name.trim().length < 2)
      newErrors.name = "Mínimo 2 caracteres";
    else if (form.name.trim().length > 30)
      newErrors.name = "Máximo 30 caracteres";
    if (!form.email.trim()) newErrors.email = "El correo es requerido";
    else if (!/^\S+@\S+\.\S+$/.test(form.email.trim()))
      newErrors.email = "Correo inválido";
    if (!form.address.trim()) newErrors.address = "La dirección es requerida";
    else if (form.address.trim().length < 5)
      newErrors.address = "Mínimo 5 caracteres";
    else if (form.address.trim().length > 120)
      newErrors.address = "Máximo 120 caracteres";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const onSubmit = (e: React.FormEvent) => {
    debugger;
    e.preventDefault();
    if (validate()) {
      handleSubmit(form);
    }
  };

  return (
    <form onSubmit={onSubmit}>
      <div className="mb-2">
        <label
          className="form-label"
          style={{ color: "black", fontSize: "0.95rem" }}
        >
          Nombre
        </label>
        <input
          type="text"
          name="name"
          className="form-control form-control-sm"
          maxLength={30}
          minLength={2}
          value={form.name}
          onChange={handleChange}
          required
        />
        {errors.name && <div className="text-danger small">{errors.name}</div>}
      </div>
      <div className="mb-2">
        <label
          className="form-label"
          style={{ color: "black", fontSize: "0.95rem" }}
        >
          Correo
        </label>
        <input
          type="email"
          name="email"
          className="form-control form-control-sm"
          maxLength={40}
          value={form.email}
          onChange={handleChange}
          required
        />
        {errors.email && (
          <div className="text-danger small">{errors.email}</div>
        )}
      </div>
      <div className="mb-2">
        <label
          className="form-label"
          style={{ color: "black", fontSize: "0.95rem" }}
        >
          Dirección
        </label>
        <input
          type="text"
          name="address"
          className="form-control"
          style={{ minHeight: 40, height: 60 }}
          maxLength={120}
          value={form.address}
          onChange={handleChange}
          required
        />
        {errors.address && (
          <div className="text-danger small">{errors.address}</div>
        )}
      </div>
      {children}
    </form>
  );
};

export default CartModalForm;
