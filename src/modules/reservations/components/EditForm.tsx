import type { Asiento } from "@reservations/constants/reservasTypes";

interface FormProps {
  handleSubmit: (e: React.FormEvent) => void;
  formData: Partial<Asiento>;
  setFormData: (formData: Partial<Asiento>) => void;
}
export default function EditForm({
  handleSubmit,
  formData,
  setFormData,
}: FormProps) {
  return (
    <form onSubmit={handleSubmit}>
      <h2 className="text-xl font-bold mb-4">Editar Asiento</h2>
      <div className="mb-4">
        <label
          htmlFor="numeroAsiento"
          className="block text-sm font-medium text-gray-700"
        >
          Número de Asiento
        </label>
        <input
          type="number"
          id="numeroAsiento"
          value={formData.asiento || ""}
          onChange={(e) =>
            setFormData({
              ...formData,
              asiento: parseInt(e.target.value),
            })
          }
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
          required
        />
      </div>
      <div className="mb-4">
        <label
          htmlFor="ocupado"
          className="block text-sm font-medium text-gray-700"
        >
          Estado
        </label>
        <select
          id="ocupado"
          value={formData.ocupado ? "true" : "false"}
          onChange={(e) =>
            setFormData({
              ...formData,
              ocupado: e.target.value === "true",
            })
          }
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
        >
          <option value="false">Disponible</option>
          <option value="true">Ocupado</option>
        </select>
      </div>
      {formData.ocupado && (
        <div className="mb-4">
          <label
            htmlFor="nombreReserva"
            className="block text-sm font-medium text-gray-700"
          >
            Nombre de Reserva
          </label>
          <input
            type="text"
            id="nombreReserva"
            value={formData.usuario || ""}
            onChange={(e) =>
              setFormData({ ...formData, usuario: e.target.value })
            }
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
          />
        </div>
      )}
      <div className="flex justify-end">
        <button
          type="submit"
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        >
          Guardar
        </button>
      </div>
    </form>
  );
}
