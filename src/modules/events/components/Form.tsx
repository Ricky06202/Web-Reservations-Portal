import type { Evento } from "@events/constants/eventosTypes";
import { useEffect } from "react";

interface FormProps {
  variant: "create" | "edit";
  handleSubmit: (e: React.FormEvent) => void;
  formData: Partial<Evento>;
  setFormData: (formData: Partial<Evento>) => void;
}
export default function EditForm({
  variant,
  handleSubmit,
  formData,
  setFormData,
}: FormProps) {
  return (
    <form onSubmit={handleSubmit}>
      <h2 className="text-xl font-bold mb-4">
        {variant === "create" ? "Crear" : "Editar"} Asiento
      </h2>
      <div className="mb-4">
        <label
          htmlFor="nombre"
          className="block text-sm font-medium text-gray-700"
        >
          Nombre del Evento
        </label>
        <input
          type="text"
          id="nombre"
          value={formData.nombre || ""}
          onChange={(e) =>
            setFormData({
              ...formData,
              nombre: e.target.value,
            })
          }
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
          required
        />
      </div>
      <div className="mb-4">
        <label
          htmlFor="fecha"
          className="block text-sm font-medium text-gray-700"
        >
          fecha
        </label>
        <input
          id="fecha"
          type="date"
          value={formData.fecha || ""}
          onChange={(e) =>
            setFormData({
              ...formData,
              fecha: e.target.value,
            })
          }
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
        />
      </div>
      <div className="mb-4">
        <label
          htmlFor="nombre"
          className="block text-sm font-medium text-gray-700"
        >
          Cantidad de Asientos
        </label>
        <input
          type="number"
          id="nombre"
          value={formData.asientos || ""}
          onChange={(e) =>
            setFormData({
              ...formData,
              asientos: parseInt(e.target.value),
            })
          }
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
          required
        />
      </div>
      <div className="flex justify-end">
        <button
          type="submit"
          className={`${variant === "create" ? "bg-green-500 hover:bg-green-700" : "bg-blue-500 hover:bg-blue-700"}  text-white font-bold py-2 px-4 rounded`}
        >
          {variant === "create" ? "Crear" : "Guardar"}
        </button>
      </div>
    </form>
  );
}
