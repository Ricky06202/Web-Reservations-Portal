interface FormProps {
  handleSubmit: (e: React.FormEvent) => void;
  cantidadAsientos: number;
  setCantidadAsientos: (asientos: number) => void;
}
export default function CreateForm({
  handleSubmit,
  cantidadAsientos,
  setCantidadAsientos,
}: FormProps) {
  return (
    <form onSubmit={handleSubmit}>
      <h2 className="text-xl font-bold mb-4">Crear Asientos</h2>
      <div className="mb-4">
        <label
          htmlFor="numeroAsiento"
          className="block text-sm font-medium text-gray-700"
        >
          Cantidad de Asiento a Crear
        </label>
        <input
          type="number"
          id="numeroAsiento"
          value={cantidadAsientos}
          onChange={(e) => setCantidadAsientos(parseInt(e.target.value))}
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
          required
        />
      </div>

      <div className="flex justify-end">
        <button
          type="submit"
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        >
          Crear
        </button>
      </div>
    </form>
  );
}
